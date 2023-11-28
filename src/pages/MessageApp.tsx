import Chat from "@/components/messaging/Chat";
import Navbar from "@/components/messaging/Navbar";
import Sidebar from "@/components/messaging/Sidebar";
import Userlist from "@/components/settings/Userlist";
import SocketProvider from "@/context/SocketProvider";

export default function MessageApp() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SocketProvider>
        <Navbar />
        <Sidebar />
        <Chat />
        <Userlist />
      </SocketProvider>
    </div>
  );
}
