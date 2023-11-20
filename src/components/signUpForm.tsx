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

interface SignUpElements extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    password: HTMLInputElement;
    email: HTMLInputElement;
    profilePicture: HTMLInputElement;
}

interface SignUpForm extends HTMLFormElement {
    readonly elements: SignUpElements;
}

const SignUpForm = () => {
    const [image, setImage] = React.useState("");
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const file = event.target.files[0];

        const fReader = new FileReader();
        fReader.onload = function () {
            const encodedImg = fReader.result as string;
            setImage(encodedImg);
        };

        fReader.readAsDataURL(file);
    };
    const handleSubmit = async (event: React.FormEvent<SignUpForm>) => {
        event.preventDefault();
        // const userData = {
        //     username: event.currentTarget.username.value,
        //     password: event.currentTarget.password.value,
        //     email: event.currentTarget.email.value,
        //     profilePicture: image,
        // };
        const userData = {
            username: "Bob",
            password: "123456",
            email: "Bob@gmail.com",
            profilePicture: image,
        };

        const response = await fetch("http://127.0.0.1:5000/account/", {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(userData),
        });
        const data = await response;


        console.log(data);
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
                        <div>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username"/>
                        </div>
                        <div>
                            <Label htmlFor="email">Cal Poly Pomona Email</Label>
                            <Input type="email" id="email"/>
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password"/>
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
