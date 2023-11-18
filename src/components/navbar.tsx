import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <ScrollArea className="w-max h-screen mx-2 overflow-none hide-scrollbar overflow-y-auto">
      <div className="flex flex-col mx-1 py-2">
        <Button variant="avatar" className="p-0 h-24 w-24 border-4 border-yellow-500 my-1">
          <Avatar className="h-full w-full">
            <AvatarImage className="object-cover h-fullpointer-events-none" src="" />
            <AvatarFallback className="w-full h-full bg-inherit font-semibold text-2xl text-muted">First</AvatarFallback>
          </Avatar>
        </Button>
        {Array.from({ length: 15 }, (_, idx) => (
          <Button variant="avatar" className="p-0 h-24 w-24 hover:border-4 hover:border-yellow-500 my-1" key={idx}>
            <Avatar className="h-full w-full">
              <AvatarImage className="object-cover h-full pointer-events-none" src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" />
              <AvatarFallback className="w-full h-full bg-inherit font-semibold text-2xl text-muted">Server</AvatarFallback>
            </Avatar>
          </Button>
        ))}
      </div>
      <ScrollBar hidden="false"/>
    </ScrollArea>
  );
}
