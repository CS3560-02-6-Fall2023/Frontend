import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function userDetails() {
  return (
    <div className="border-t border-gray-700 pt-4">
      <p className="mb-2">User</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">User Settings</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 rounded-xl">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-xl text-center leading-none">User Settings</h4>
              <div className="flex items-center space-x-5 my-2">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="">
                    <p>USERNAME</p>
                    <p>EMAIL@cpp.edu</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <Button className="text-lg">Update Schedule</Button>
              <Button className="text-lg ">Change Profile Image</Button>
              <Button className="text-lg ">Log Out</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
