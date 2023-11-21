import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Message from "./message";
import { useSocket } from "./socket";

interface Message {
  id: number;
  sender: string;
  text: string;
  image?: string;
  timestamp: string;
}

// Utility function to convert date to ISO string
const toDateTime = (date: Date): string => {
  return date.toISOString().slice(0, 19).replace("T", " ");
};

// Initial state for the input
const initialInputState = (userID: number) => ({
  id: 0,
  sender: "User " + userID,
  text: "",
  image: null,
  timestamp: toDateTime(new Date()),
});

const ChatArea = ({
  messages,
  setMessages,
}: {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) => {
  const date = useRef(new Date());
  const userID = 10;
  const [input, setInput] = useState(() => initialInputState(userID));
  const { messagesSocket } = useSocket();

  // Initialize socket events
  useEffect(() => {
    const onConnect = () => console.log("Connected to the server");
    const onAfterConnect = (data: string) =>
      console.log("Received data: ", data);
    const onMessageReceived = (data: string) => {
      const message = JSON.parse(data);
      console.log("Received message: ", message);
      setMessages((messages) => [...messages, message]);
    };

    messagesSocket.on("connect", onConnect);
    messagesSocket.on("after connect", onAfterConnect);
    messagesSocket.on("message_received", onMessageReceived);

    // Clean up function
    return () => {
      messagesSocket.off("connect");
      messagesSocket.off("after connect");
      messagesSocket.off("message_received");
    };
  }, [messagesSocket, setMessages]);

  useEffect(() => {
    setTimeout(() => {
        // console.log(date.current)
        date.current = new Date();
        }
    , 1000);
  });

  const submitMessage = (e: React.FormEvent<HTMLElement>) => {
    console.log(new Date());
    e.preventDefault();
    if (input.text === "" && input.image === null) return;
    
    setInput({
      ...input,
      timestamp: toDateTime(date.current),
    });
    messagesSocket.emit("message", input);
    setInput(initialInputState(userID)); // Reset input state
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, text: e.target.value });
  };

  return (
    <>
      <ScrollArea className="overflow-y-auto h-full px-5 mb-2">
        {messages.map((message) => (
          <Message
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
