import { useContext, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import UserDetails from "@/components/settings/UserDetails";
import { UserContext } from "@/context/AuthProvider";

const channels = [
  { id: 1, name: "#general" },
  { id: 2, name: "#homework" },
  { id: 3, name: "#project" },
  { id: 4, name: "#quiz" },
];
interface Channel {
  channelId: number;
  channelName: string;
  serverID: number;
}

export default function SideBar() {
  const { serverData, currentServer } = useContext(UserContext);
  const [channels, setChannels] = useState<Channel[]>([
    {
      channelId: 0,
      channelName: "",
      serverID: 0,
    },
  ]);
  useEffect(() => {
    if (serverData) {
      setChannels(serverData[currentServer].channels);
    }
  }, [serverData, currentServer]);

  return (
    <>
      <div className="h-screen w-64 p-3 border flex flex-col">
        <h1 className="text-2xl font-bold mb-4 border-b">CS3560.02</h1>
        <ScrollArea className="overflow-y-auto h-full w-5">
          <div className="flex flex-col items-start">
            {channels.map((channel) => (
              <Button
                key={channel.channelId}
                variant="link"
                className="text-xl mb-2 text-gray-500 hover:text-green-600 hover:underline px-2 py-1 rounded"
              >
                #{channel.channelName}
              </Button>
            ))}
          </div>
        </ScrollArea>
        <UserDetails />
      </div>
    </>
  );
}
