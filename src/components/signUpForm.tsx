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
import { Link, useNavigate } from "react-router-dom";
import {
    UserContext,
    AuthenticatedContext,
} from "@/components/authenticationProvider";

const SignUpForm = () => {
    const [image, setImage] = React.useState("");
    const { setUser } = React.useContext(UserContext);
    const { setAuthenticated } = React.useContext(AuthenticatedContext);
    const navigate = useNavigate();
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
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userData = {
            username: event.currentTarget.username.value,
            password: event.currentTarget.password.value,
            email: event.currentTarget.email.value,
            profilePicture: image,
        };

        const response = await fetch("http://127.0.0.1:5000/account/", {
            method: "POST",
            body: JSON.stringify(userData),
        });

        if (response.status === 200) {
            setUser({
                email: userData.email,
                profilePicture: userData.profilePicture,
                username: userData.username,
                serverIDs: [],
            });

            setAuthenticated(true);
            navigate("/");
        }
    };

    const clearImage = () => {
        setImage("");
    }

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
                            <Input type="text" id="username" required />
                        </div>
                        <div>
                            <Label htmlFor="email">Cal Poly Pomona Email</Label>
                            <Input type="email" id="email" required />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" required />
                        </div>
                        <div>
                            <Label htmlFor="profile-picture">
                                Profile Picture
                            </Label>

                            <br />
                            {image !== "" ? (
                                <Button variant="ghost" onClick={clearImage}>Clear image</Button>
                            ) : undefined}

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
                                <Link to="/login">Sign In</Link>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default SignUpForm;
