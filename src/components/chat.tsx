import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const messages = [
  { id: 1, sender: "User 1", text: "Hello there!", image: "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!", image: "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 1, sender: "User 1", text: "Hello there!" },
  { id: 2, sender: "User 2", text: "Hi! How can I help you?" },
  {
    id: 3,
    sender: "User 1",
    text: "",
  },
];

const Message = ({ user, content, image, ...props }: { user: string; content: string; image?: string }) => {
  return (
    <div className="p-2 hover:bg-slate-100" {...props}>
      <span className="text-gray-400 text-lg">{user}: </span>
      <span>{content}</span>
      {image ? <img src={image}/> : null}
    </div>
  );
};
const Chat = () => {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <div className="p-2 mb-4 border-b">
        <h1 className="text-2xl font-bold">general</h1>
      </div>
      <ScrollArea className="overflow-y-auto h-full px-5 mb-2">
        {messages.map((message) => (
          <Message key={message.id} user={message.sender} content={message.text} image={message.image}/>
        ))}
      </ScrollArea>
      <div className="flex items-center mb-8 px-10">
        <Input placeholder="Type your message..." className="text-xl p-2 flex-1 py-2 border rounded text-black" />
        <Button className="text-xl ml-2 bg-green-600 text-white p-2 rounded">Send</Button>
      </div>
    </div>
  );
};

export default Chat;
