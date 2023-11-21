import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Message from "./message";
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

const ChatArea = ({ messages }: { messages: Message[] }) => {
  const date = useRef(new Date());
  const userID = 10;
  const [input, setInput] = useState({
    id: 0,
    sender: "User " + userID,
    text: "",
    image: null,
    timestamp: toDateTime(new Date()),
  });

  const submitMessage = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (input.text === "" && input.image === null) return;

    setInput({
      ...input,
      timestamp: toDateTime((date.current = new Date())),
    });

    socket.emit("message", input);

    setInput({ ...input, text: "", image: null });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, text: e.target.value });
  };
  return (
    <>
      <ScrollArea className="overflow-y-auto h-full px-5 mb-2">
        {messages.map((message) => (
          <Message
            // key={message.id}
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
    </>
  );
};

export default ChatArea;
