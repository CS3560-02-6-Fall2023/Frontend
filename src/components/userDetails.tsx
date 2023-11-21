import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog } from "./ui/dialog";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import UpdateScheduleForm from "./updateScheduleForm";
import { UserContext } from "@/components/authenticationProvider";
import React from "react";

export function DialogDemo({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <div className="py-3">
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-2 ">
                            <Checkbox id="remember-me" />
                            <Label
                                htmlFor="remember-me"
                                className="text-sm text-muted-foreground"
                            >
                                Remember me?
                            </Label>
                        </div>
                        <Button
                            variant="link"
                            className="text-muted-foreground text-sm font-medium"
                        >
                            Forgot password?
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function UserDetails() {
    const { username } = React.useContext(UserContext);

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
                                    <AvatarImage src="" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <div className="">
                                    <p>{username}</p>
                                    <p>EMAIL@cpp.edu</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <UpdateScheduleForm>
                                <Button className="text-lg">
                                    Update Schedule
                                </Button>
                            </UpdateScheduleForm>
                            <Button className="text-lg ">
                                Change Profile Image
                            </Button>
                            <Button className="text-lg ">Log Out</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
