import React, { createContext, useContext, useEffect } from "react";
import { Socket, io } from "socket.io-client";

type SocketContextType = {
  socket: Socket;
  messagesSocket: Socket;
  joinRoom: (room: string) => void;
  leaveRoom: (room: string) => void;
};

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = io("127.0.0.1:5000", { transports: ["websocket"] });
  const messagesSocket = io("127.0.0.1:5000/message", {
    transports: ["websocket"],
  });

  const joinRoom = (room: string) => {
    socket.emit("join", { room: room });
  };

  const leaveRoom = (room: string) => {
    socket.emit("leave", { room: room });
  };

  useEffect(() => {
    return () => {
      // Disconnect sockets when the component unmounts
      socket.disconnect();
      messagesSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{ socket, messagesSocket, joinRoom, leaveRoom }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};
export default SocketProvider;
