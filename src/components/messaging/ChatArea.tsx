import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import Message from "@/components/messaging/Message";
import { useSocket } from "@/context/SocketProvider";
// import useFetch from "@/hooks/useFetch";
import { MessageType } from "@/types/types";

interface inputProps extends Omit<MessageType, "messageID"> {
  channelID: number;
  serverID: number;
}

const ChatArea = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { messagesSocket, joinRoom, leaveRoom } = useSocket();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://127.0.0.1:5000/message?channelID=1`)
        .then((res) => res.json())
        .then((messages: MessageType[]) => {
          console.log(messages);
          setMessages(messages);
        });
    }, 1000);
  }, []);

  const room = "test";
  useEffect(() => {
    // Join the room when the component mounts
    joinRoom(room);
    // Leave the room when the component unmounts
    return () => {
      leaveRoom(room);
    };
  }, [joinRoom, leaveRoom, room]);

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

  const submitMessage = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (input.message === "" && input.image === null) return;
    console.log(input);
    messagesSocket.emit("message", input);
    setInput({ ...input, message: "", timeSent: "0" });
  };

  const [input, setInput] = useState<inputProps>({
    userID: 1,
    userName: "Bob",
    channelID: 1,
    serverID: 1,
    message: "",
    timeSent: "0",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, message: e.target.value });
  };
  return (
    <>
      <ScrollArea className="overflow-y-auto h-full px-5 mb-2">
        {messages.map((message) => (
          <Message
            key={message.messageID}
            userName={message.userName}
            timeSent={message.timeSent}
            message={message.message}
            image={message.image}
          />
        ))}
      </ScrollArea>
      <form className="flex items-center mb-8 px-10" onSubmit={submitMessage}>
        <Input
          placeholder="Type your message..."
          className="text-xl p-2 flex-1 py-2 border rounded text-black"
          value={input.message}
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
