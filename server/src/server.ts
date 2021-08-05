import {createServer} from 'http';
import {Server, Socket} from 'socket.io';

const PORT = 3001;

interface Message {
  id: string;
  sender: Object;
  text: string;
  time: Date;
}

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket: Socket) => {
  socket.on('send-message', (message: Message) => {
    console.log('message received', message);
    io.emit('message', message);
  });
});

httpServer.listen(PORT);
console.log(`server listening on port ${PORT}`);
