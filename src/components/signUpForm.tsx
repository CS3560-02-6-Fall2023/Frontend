import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUpForm = () => {
    const [image, setImage] = React.useState("");
    const handleImageChange = (event: { target: { files: never[]; }; }) => {
        const file = event.target.files[0];

        const fReader = new FileReader();
        fReader.onload = function () {
            const encodedImg = fReader.result as string;
            setImage(encodedImg);
        };

        fReader.readAsDataURL(file);
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    };
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <form onSubmit={handleSubmit}>
                <Card className="p-3 rounded-lg shadow-lg w-96">
                    <CardHeader>
                        <CardTitle className="font-bold text-center">
                            Get started with ChatCPP
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="py-3 mb-5 space-y-2">
                        <div className="mb-4 flex space-x-2">
                            <div>
                                <Label htmlFor="first-name">First Name</Label>
                                <Input type="text" id="first-name" />
                            </div>
                            <div>
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input type="text" id="last-name" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email">Cal Poly Pomona Email</Label>
                            <Input type="email" id="email" />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" />
                        </div>
                        <div>
                            <Label htmlFor="profile-picture">
                                Profile Picture
                            </Label>
                            <Input
                                type="file"
                                id="profile-picture"
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                            />
                            <img src={image} />
                        </div>
                    </CardContent>
                    <CardFooter className="grid gap-1.5">
                        <Button type="submit" className="mb-3">
                            Create Account
                        </Button>
                        <div className="flex justify-between items-baseline">
                            <p className="text-sm text-muted-foreground font-medium leading-none">
                                Already using ChatCPP?
                            </p>
                            <Button variant="link" className="font-semibold">
                                Sign In
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default SignUpForm;

