import React from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import ChangeProfileImageForm from "@/components/settings/ChangeProfileImageForm";
import UpdateScheduleForm from "@/components/settings/UpdateScheduleForm";
import { UserContext } from "@/context/AuthProvider";
import { useAuth } from "@/hooks/useAuth";

export default function UserDetails() {
  const { username, email, profilePicture } = React.useContext(UserContext);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="border-t border-gray-700 pt-4">
      <p className="mb-2">{username}</p>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            User Settings
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 rounded-xl">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-xl text-center leading-none">
                User Settings
              </h4>
              <div className="flex items-center space-x-5 my-2">
                <Avatar>
                  <AvatarImage src={profilePicture} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="">
                  <p>{username}</p>
                  <p>{email}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <UpdateScheduleForm>
                <Button className="text-lg">Update Schedule</Button>
              </UpdateScheduleForm>
              <ChangeProfileImageForm>
                <Button className="text-lg">Change Profile Image</Button>
              </ChangeProfileImageForm>
              <Button className="text-lg " onClick={handleLogOut}>
                Log Out
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
