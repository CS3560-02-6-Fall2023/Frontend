import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { io } from "socket.io-client";
import Message from "./message";

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

const socket = io("127.0.0.1:5000", { transports: ["websocket"] });

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    fetchMessageHistory().then((message) => setMessages(message));
  }, []);

  // Initilaize socket events
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("after connect", (data) => {
      console.log("Received data: ", data);
    });

    socket.on("message_received", (data) => {
      const message = JSON.parse(data);
      console.log("Received message: ", message);
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off("connect");
      socket.off("after connect");
      socket.off("message_received");
    };
  }, []);

  const userID = 10;
  const [input, setInput] = useState({
    id: 0,
    sender: "User " + userID,
    text: "",
    image: null,
    timestamp: toDateTime(new Date()),
  });
  // console.log(toDateTime(new Date()));
  const submitMessage = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (input.text === "" && input.image === null) return;
    console.log("date: ", Date.now());
    setInput({ ...input, id: 0 + Math.random(), timestamp: toDateTime(new Date()), });
    // console.log(input);
    socket.emit("message", input);
    setInput({ ...input, text: "", image: null });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, text: e.target.value });
  };

  return (
    <div className="flex flex-col flex-1 h-screen">
      <h1 className="text-2xl font-bold mb-4 border-b text-green-700 p-1.5">
        general
      </h1>
      <ScrollArea className="overflow-y-auto h-full px-5 mb-2">
        {messages.map((message) => (
          <Message
            key={message.id}
            user={message.sender}
            timestamp={message.timestamp}
            content={message.text}
            image={message.image}
          />
        ))}
      </ScrollArea>
      <form className="flex items-center mb-8 px-10" onSubmit={submitMessage}>
        <Input
          placeholder="Type your message..."
          className="text-xl p-2 flex-1 py-2 border rounded text-black"
          value={input.text}
          onChange={handleInput}
        />
        <Button className="text-xl ml-2 bg-green-600 text-white p-2 rounded">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Chat;
