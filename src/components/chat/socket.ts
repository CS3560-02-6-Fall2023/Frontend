import { io } from "socket.io-client";

const socket = io("127.0.0.1:5000", { transports: ["websocket"] });
export default socket;