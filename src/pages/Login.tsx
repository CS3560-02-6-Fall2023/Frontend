import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    const response = await fetch(
      "http://127.0.0.1:5000/account/?" + new URLSearchParams(userData)
    );

    if (response.status === 200) {
      const { imageID, userName, serverIDs } = await response.json();
      const imageRequest = await fetch(
        "http://127.0.0.1:5000/image/?" +
          new URLSearchParams({ imageID: imageID })
      );

      const { image } = await imageRequest.json();

      login({
        email: userData.email,
        profilePicture: image,
        username: userName,
        serverIDs: serverIDs,
        currentServer: 0,
      });
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <Card className="p-3 rounded-lg shadow-lg w-96">
        <CardHeader>
          <CardTitle className="font-bold text-center">
            Sign in to your account
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="py-3">
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
          </CardContent>
          <CardFooter className="grid gap-1.5">
            <Button type="submit" className="mb-3">
              Sign In
            </Button>
            <div className="flex justify-between items-baseline">
              <p className="text-sm text-muted-foreground font-medium leading-none">
                Don't have an account?
              </p>
              <Button variant="link" className="font-semibold">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
