// useChat.ts
import { useEffect, useRef, useState } from "react";

import { useSocket } from "@/context/SocketProvider";

// Initial state for the input
const initialInputState = (userID: number) => ({
  id: 1,
  sender: "Bob",
  channelID: 1,
  serverID: 1,
  text: "",
  image: null,
  timestamp: toDateTime(new Date()),
});

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

export const useChat = () => {
  const { messagesSocket } = useSocket();
  const [messages, setMessages] = useState<Message[]>([]);
  const date = useRef(new Date());
  const userID = 10;
  const [input, setInput] = useState(() => initialInputState(userID));

  useEffect(() => {
    const onConnect = () => console.log("Connected to the server");
    const onAfterConnect = (data: string) =>
      console.log("Received data: ", data);
    const onMessageReceived = (data: string) => {
      const message = JSON.parse(data);
      console.log("Received message: ", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    messagesSocket.on("connect", onConnect);
    messagesSocket.on("after connect", onAfterConnect);
    messagesSocket.on("message_received", onMessageReceived);

    return () => {
      messagesSocket.off("connect");
      messagesSocket.off("after connect");
      messagesSocket.off("message_received");
    };
  }, [messagesSocket]);

  useEffect(() => {
    setTimeout(() => {
      date.current = new Date();
    }, 1000);
  });

  const submitMessage = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (input.text === "" && input.image === null) return;
    setInput({
      ...input,
      text: input.text,
      timestamp: toDateTime(date.current),
    });
    console.log(input);
    messagesSocket.emit("message", input);
    setInput(initialInputState(userID)); // Reset input state
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, text: e.target.value });
  };

  return { messages, setMessages, input, handleInput, submitMessage };
};
