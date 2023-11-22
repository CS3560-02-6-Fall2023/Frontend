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
    const { serverIDs } = React.useContext(UserContext);

    useEffect(() => {
        async function fetchData() {
            const requestBody = {
                serverID: serverIDs.toString(),
            };

            const serverRequest = await fetch(
                "http://127.0.0.1:5000/classserver/?" +
                    new URLSearchParams(requestBody)
            );
            console.log(await serverRequest.json())
        }
        fetchData();
    }, []);

    // console.log(await serverRequest.json());

    return (
        <ScrollArea
            hidden
            className="w-max h-screen mx-2 overflow-none overflow-y-auto"
        >
            <div className="flex flex-col mx-1 py-2">
                {Array.from({ length: 15 }, (_, idx) => (
                    <Button
                        variant="avatar"
                        // apply the border based on the activeIndex
                        className={`p-0 h-24 w-24 my-1 ${
                            activeIndex === idx
                                ? "border-4 border-yellow-500"
                                : "hover:border-4 hover:border-yellow-500"
                        }`}
                        key={idx}
                        onClick={() => setActiveIndex(idx)} // set activeIndex to the current button index on click
                    >
                        <Avatar className="h-full w-full">
                            <AvatarImage className="object-cover h-full pointer-events-none" />
                            <AvatarFallback className="w-full h-full bg-inherit font-semibold text-2xl text-muted">
                                {idx === 0 ? "First" : "Server"}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                ))}
            </div>
        </ScrollArea>
    );
}
