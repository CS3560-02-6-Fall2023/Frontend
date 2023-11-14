import React from "react";

const Chat = () => {
  const messages = [
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
    // Add more messages as needed
  ];
// TODO ACTUALLY ALIGN THE BUTTONS AND INPUT TO BOTTOm
// AND MAKE THE MESSAGES SCROLLABLE
  return (
    <div className="flex-1 p-4 flex-col">
      <div>
        <h1 className="text-2xl font-bold mb-4 border-b">general</h1>
      </div>
      <div className="flex-1">
        <div className="flex flex-col overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="mb-2">
              <span className="text-gray-400">{message.sender}:</span>{" "}
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded text-black"
          />
          <button className="ml-2 bg-green-600 text-white p-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
