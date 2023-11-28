import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Message from "@/components/messaging/Message";
import { useChat } from "@/components/messaging/useChat";
import { useSocket } from "@/context/SocketProvider";

interface Message {
    id: number;
    sender: string;
    text: string;
    image?: string;
    timestamp: string;
}

const ChatArea = () => {
    const { joinRoom, leaveRoom } = useSocket();
    const { messages, setMessages, input, handleInput, submitMessage } =
        useChat();

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://127.0.0.1:5000/message?channelID=1`)
                .then(res => res.json())
                .then(messages => {
                    const formattedMessages = messages.map(
                        (item: {
                            messageID: number;
                            userID: number;
                            userName: string;
                            message: string;
                            timeSent: string;
                        }) => {
                            const displayMessage: Message = {
                                id: item.messageID,
                                sender: item.userName,
                                text: item.message,
                                timestamp: item.timeSent,
                            };
                            return displayMessage;
                        }
                    );
                    console.log(formattedMessages);
                    setMessages(formattedMessages);
                });
        }, 1000);
    }, [setMessages]);

    const room = "test";
    useEffect(() => {
        // Join the room when the component mounts
        joinRoom(room);
        // Leave the room when the component unmounts
        return () => {
            leaveRoom(room);
        };
    }, [joinRoom, leaveRoom, room]);

    return (
        <>
            <ScrollArea className="overflow-y-auto h-full px-5 mb-2">
                {messages.map(message => (
                    <Message
                        key={message.id}
                        user={message.sender}
                        timestamp={message.timestamp}
                        content={message.text}
                        image={message.image}
                    />
                ))}
            </ScrollArea>
            <form
                className="flex items-center mb-8 px-10"
                onSubmit={submitMessage}
            >
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
