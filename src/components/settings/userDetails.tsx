import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import UpdateScheduleForm from "./updateScheduleForm";
import { UserContext } from "@/context/authenticationProvider";
import React from "react";
import ChangeProfileImageForm from "./changeProfileImageForm";


export default function UserDetails() {
    const { username, email, profilePicture } = React.useContext(UserContext);

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
                                <Button className="text-lg">
                                    Update Schedule
                                </Button>
                            </UpdateScheduleForm>
                            <ChangeProfileImageForm>
                                <Button className="text-lg">
                                    Change Profile Image
                                </Button>
                            </ChangeProfileImageForm>
                            <Button className="text-lg ">Log Out</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
