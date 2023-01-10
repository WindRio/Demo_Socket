import { io } from "socket.io-client";
const socket = io("http://192.168.1.20:3001", {
  autoConnect: false,
});

export default socket;
