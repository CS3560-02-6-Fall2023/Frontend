import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import React from "react";
import { UserContext } from "./authenticationProvider";
interface Channel {
    channelId: number;
    channelName: string;
    serverID: number;
}

interface ServerData {
    channels: Channel[];
    serverID: number;
    serverName: string;
    userIDs: number[];
}

export default function Navbar() {
    // state to keep track of the active button index
    const [activeIndex, setActiveIndex] = useState(0);
    const [serverData, setServerData] = useState<ServerData[]>([]);
    const { serverIDs, setUser } = React.useContext(UserContext);

    useEffect(() => {
        async function fetchData() {
            const requestBody = {
                serverID: serverIDs.toString(),
            };

            const serverRequest = await fetch(
                "http://127.0.0.1:5000/classserver/?" +
                    new URLSearchParams(requestBody)
            );
            const response = await serverRequest.json();
            setServerData(response);
            setUser((prevState) => ({
                ...prevState,
                serverData: response,
            }));
        }
        fetchData();
    }, [serverIDs]);

    // console.log(await serverRequest.json());

    return (
        <ScrollArea
            hidden
            className="w-max h-screen mx-2 overflow-none overflow-y-auto"
        >
            <div className="flex flex-col mx-1 py-2">
                {Array.from(serverData, (elm, idx) => (
                    <Button
                        variant="avatar"
                        // apply the border based on the activeIndex
                        className={`p-0 h-24 w-24 my-1 ${
                            activeIndex === idx
                                ? "border-4 border-yellow-500"
                                : "hover:border-4 hover:border-yellow-500"
                        }`}
                        key={idx}
                        onClick={() => {
                            setActiveIndex(idx);
                            setUser((prevState) => ({
                                ...prevState,
                                currentServer: idx,
                            }));
                        }} // set activeIndex to the current button index on click
                    >
                        <Avatar className="h-full w-full">
                            <AvatarImage className="object-cover h-full pointer-events-none" />
                            <AvatarFallback className="w-full h-full bg-inherit font-semibold text-2xl text-muted">
                            {elm.serverName}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                ))}
            </div>
        </ScrollArea>
    );
}
