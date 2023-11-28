import { useEffect, useState } from "react";
import Message from "./Message";
import SocketProvider from "../../context/SocketProvider";
import ChatArea from "./ChatArea";

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchMessageHistory = async (): Promise<Message[]> => {
    const messages: Message[] = [
        {
            id: 1,
            sender: "User 1",
            text: "Hello there!",
            image: "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg",
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
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(messages);
        }, 1000);
    });
};

const Chat = () => {
    const [, setMessages] = useState<Message[]>([]);
    useEffect(() => {
        setMessages([]);
    }, []);
    return (
        <SocketProvider>
            <div className="flex flex-col flex-1 h-screen">
                <h1 className="text-2xl font-bold mb-4 border-b text-green-700 p-1.5">
                    general
                </h1>
                <ChatArea />
            </div>
        </SocketProvider>
    );
};

export default Chat;
