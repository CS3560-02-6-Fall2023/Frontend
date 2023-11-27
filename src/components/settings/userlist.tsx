import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

interface User {
  id: number;
  name: string;
}
const users: User[] = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 4, name: "Person 4" },
  { id: 5, name: "User 5" },
  { id: 6, name: "User 6" },
  { id: 7, name: "User 7" },
  { id: 8, name: "User 8" },
  { id: 9, name: "User 9" },
  { id: 10, name: "Person 10" },
  { id: 11, name: "User 11" },
  { id: 12, name: "User 12" },
  { id: 13, name: "User 13" },
  { id: 14, name: "Person 14" },
  { id: 15, name: "User 15" },
  { id: 16, name: "User 16" },
  { id: 17, name: "User 17" },
  { id: 18, name: "User 18" },
  { id: 19, name: "User 19" },
  { id: 20, name: "User 20" },
  { id: 21, name: "User 21" },
  { id: 22, name: "User 22" },
  { id: 23, name: "User 23" },
  { id: 24, name: "User 24" },
  { id: 25, name: "User 25" },
  { id: 26, name: "User 26" },
  { id: 27, name: "User 27" },
  { id: 28, name: "User 28" },
  { id: 29, name: "User 29" },
  { id: 30, name: "User 30" },
  { id: 31, name: "User 31" },
  { id: 32, name: "User 32" },
  { id: 33, name: "User 33" },
];
export default function Userlist() {
  return (
    <div className="w-64 p-3">
      <h1 className="text-2xl font-bold mb-4 border-b">Students</h1>
      <ScrollArea className="h-full">
        {users.map((user) => (
          <div key={user.id} className="flex items-center space-x-2 my-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{user.name}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
