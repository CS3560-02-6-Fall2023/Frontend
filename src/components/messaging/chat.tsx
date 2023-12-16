import ChatArea from "@/components/messaging/ChatArea";

// how the each chat looks
export default function Chat() {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <h1 className="text-2xl font-bold mb-4 border-b text-green-700 p-1.5">
        general
      </h1>
      <ChatArea />
    </div>
  );
}
