import { useEffect, useState } from "react";
import Message from "./message";
import ChatArea from "./chatArea";
import socket from "./socket";
interface Message {
  id: number;
  sender: string;
  text: string;
  image?: string;
  timestamp: string;
}

const toDateTime = (date: Date): string => {
  return date.toISOString().slice(0, 19).replace("T", " ");
};

// TODO: Replace with actual fetch to backend
const fetchMessageHistory = async (): Promise<Message[]> => {
  const messages: Message[] = [
    {
      id: 1,
      sender: "User 1",
      text: "Hello there!",
      image:
        "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg",
      timestamp: toDateTime(new Date()),
    },
    {
      id: 2,
      sender: "User 1",
      text: "Hello there!",
      timestamp: toDateTime(new Date()),
    },
    {
      id: 3,
      sender: "User 2",
      text: "Hi! How can I help you?",
      timestamp: toDateTime(new Date()),
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(messages);
    }, 1000);
  });
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    fetchMessageHistory().then((message) => setMessages(message));
  }, []);

  // Initilaize socket events
  useEffect(() => {
    const onConnect = () => console.log("Connected to the server");

    const onAfterConnect = (data: string) =>
      console.log("Received data: ", data);

    const onMessageReceived = (data: string) => {
      const message = JSON.parse(data);
      console.log("Received message: ", message);
      setMessages((messages) => [...messages, message]);
    };

    socket.on("connect", onConnect);

    socket.on("after connect", onAfterConnect);

    // CLient recieves message from server
    socket.on("message_received", onMessageReceived);

    return () => {
      socket.off("connect");
      socket.off("after connect");
      socket.off("message_received");
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 h-screen">
      <h1 className="text-2xl font-bold mb-4 border-b text-green-700 p-1.5">
        general
      </h1>
      <ChatArea messages={messages} />
    </div>
  );
};

export default Chat;
