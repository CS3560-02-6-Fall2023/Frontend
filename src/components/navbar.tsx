import { useState } from 'react';
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Navbar() {
  // state to keep track of the active button index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ScrollArea className="w-max h-screen mx-2 overflow-none overflow-y-auto">
      <div className="flex flex-col mx-1 py-2">
        {Array.from({ length: 15 }, (_, idx) => (
          <Button
            variant="avatar"
            // apply the border based on the activeIndex
            className={`p-0 h-24 w-24 my-1 ${activeIndex === idx ? 'border-4 border-yellow-500' : 'hover:border-4 hover:border-yellow-500'}`}
            key={idx}
            onClick={() => setActiveIndex(idx)} // set activeIndex to the current button index on click
          >
            <Avatar className="h-full w-full">
              <AvatarImage className="object-cover h-full pointer-events-none" src={idx === 0 ? "" : "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"} />
              <AvatarFallback className="w-full h-full bg-inherit font-semibold text-2xl text-muted">{idx === 0 ? "First" : "Server"}</AvatarFallback>
            </Avatar>
          </Button>
        ))}
      </div>
      <ScrollBar/>
    </ScrollArea>
  );
}
