import './App.css';

import {Avatar, Comment, List} from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {useState} from 'react';
import {io} from 'socket.io-client';
import {v4 as uuidv4} from 'uuid';

import {Editor} from './components/Editor';
import {
  AnonymousProfile,
  DemoUser1,
  DemoUser2,
  UserProfile,
} from './data/profiles';
import {Message} from './interfaces/Message';

// add relativeTime plugin to support "from now" and "ago" datetime formatting
dayjs.extend(relativeTime);

// use environment variable to load a demo user
const loadCurrentUser = () => {
  const profileEnv = process.env.REACT_APP_PROFILE;
  let currentProfile: UserProfile;
  if (profileEnv === '1') {
    currentProfile = DemoUser1;
  } else if (profileEnv === '2') {
    currentProfile = DemoUser2;
  } else {
    currentProfile = AnonymousProfile;
  }
  return currentProfile;
};

export const App = () => {
  // useState hooks
  const [messages, setMessages] = useState<Message[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const currentProfile = loadCurrentUser();

  // initialize Socket.IO
  const socket = io('http://localhost:3001');

  socket.on('connect_error', (err: Error) => {
    console.error(`connect_error: ${err.message}`);
  });
  socket.on('message', (newMessage: Message) => {
    setMessages([...messages, newMessage]);
  });

  // handle UI updates
  const handleHide = (item: Message) => {
    setMessages(messages.filter(msg => msg.id !== item.id));
  };

  const handleSubmit = (value: string) => {
    setSubmitting(true);
    const message: Message = {
      id: uuidv4(),
      sender: currentProfile ? currentProfile : AnonymousProfile,
      text: value,
      time: new Date(Date.now()),
    };
    socket.emit('send-message', message);
    setSubmitting(false);
  };

  const commentActions = (item: Message) => [
    <span key="message-hide" onClick={() => handleHide(item)}>
      Hide
    </span>,
  ];

  // render app
  return (
    <div style={{padding: '50px'}}>
      <List
        dataSource={messages}
        header={'Messages'}
        itemLayout="horizontal"
        renderItem={item => (
          <li>
            <Comment
              author={item.sender.username}
              avatar={
                item.sender.avatar ? (
                  <Avatar
                    src={item.sender.avatar.src}
                    alt={item.sender.avatar.alt}
                  />
                ) : (
                  <Avatar>{item.sender.username[0].toUpperCase()}</Avatar>
                )
              }
              content={item.text}
              datetime={dayjs(item.time).fromNow()}
              actions={commentActions(item)}
            />
          </li>
        )}
      />
      <Editor onSubmit={handleSubmit} submitting={submitting} />
    </div>
  );
};
