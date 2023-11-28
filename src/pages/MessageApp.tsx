import Sidebar from "@/components/messaging/Sidebar";
import Userlist from "@/components/settings/Userlist";
import Chat from "@/components/messaging/Chat";
import Navbar from "@/components/messaging/Navbar";

export default function MessageApp() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
      <Chat />
      <Userlist />
    </div>
  );
}
