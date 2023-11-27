import Sidebar from "@/components/messaging/sidebar";
import Userlist from "../components/settings/userlist";
import Chat from "../components/messaging/chat";
import Navbar from "../components/messaging/navbar";

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
