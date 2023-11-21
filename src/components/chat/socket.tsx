import React, {
  createContext,
  useContext,
} from "react";
import { Socket, io } from "socket.io-client";

type SocketContextType = {
  socket: Socket;
  messagesSocket: Socket;
};

const SocketContext = createContext<SocketContextType>({} as SocketContextType);

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const socket = io("127.0.0.1:5000", { transports: ["websocket"] });
  const messagesSocket = io("127.0.0.1:5000/message", { transports: ["websocket"] });

  return (
    <SocketContext.Provider value={{ socket, messagesSocket }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => {
  return useContext(SocketContext);
};
