import './App.css';

import {Comment, Layout, List} from 'antd';
import {useState} from 'react';
import {Message} from './Message';

import {io} from 'socket.io-client';
import {Editor} from './Editor';

export const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const socket = io('http://localhost:3001');

  socket.on('connect', () => {
    console.log(`socket id ${socket.id}: user connected`);
  });

  socket.on('connect_error', (err: any) => {
    console.error(`connect_error: ${err}`);
    console.error(err.message);
  });

  socket.on('message', (newMessage: Message) => {
    console.log('in message', newMessage);
    setMessages([...messages, newMessage]);
  });

  const handleSubmit = (value: string) => {
    console.log('in handleSubmit', value);
    setSubmitting(true);
    const message: Message = {
      sender: socket.id,
      text: value,
      time: new Date(Date.now()),
    };
    socket.emit('send-message', message);
    setSubmitting(false);
  };

  return (
    <div style={{padding: '50px'}}>
      <List
        dataSource={messages}
        header={'Messages'}
        itemLayout="horizontal"
        renderItem={item => (
          <li>
            <Comment
              author={item.sender}
              content={item.text}
              datetime={item.time}
            />
          </li>
        )}
      />
      <Editor onSubmit={handleSubmit} submitting={submitting} />
    </div>
  );
};
