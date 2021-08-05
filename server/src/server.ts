import {createServer} from 'http';
import {Server, Socket} from 'socket.io';

const PORT = 3001;

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket: Socket) => {
  console.log(`socket id ${socket.id}: user connected`);

  socket.on('send-message', (message: any) => {
    console.log('message received', message);
    io.emit('message', message);
  });
});

httpServer.listen(PORT);
console.log(`server listening on port ${PORT}`);
