// import React from "react";
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
import { Link } from "react-router-dom";

const SignUpForm = () => {
  // const handleSubmit = async(e: React.FormEvent) => {
  //   e.preventDefault();
  //   const files = imageRef?.current as HTMLInputElement | null;
  //   if (files?.files) {
  //     const file = files.files[0];
  //     const blob = file.slice(0, file.size, file.type);

  //     blob.text().then(console.log);

  //     // const reader = new FileReader();
  //     // reader.readAsDataURL(blob);

  //     // Append the blob as 'file' field
  //     const formdata = new FormData();
  //     const data = {
  //       "username": "test",
  //       "password": "test",
  //       "email": "asdasdiasdjios@a.a",
  //       "profile": await blob.text(),
  //     }
  //     formdata.append('file', files.files[0], 'test.png')
  //     // Send a POST request with the blob as the body
  //     const response = async () => await fetch('http://127.0.0.1:5000/account/', {
  //       method: 'POST',
  //       mode: 'no-cors',
  //       body: JSON.stringify(data),

  //     });
  //     response();
  //   }
  // };
  return (
    <div className="flex items-center justify-center h-screen ">
      <Card className="p-3 rounded-lg shadow-lg w-96">
        <CardHeader>
          <CardTitle className="font-bold text-center">
            Get started with (app-name)
          </CardTitle>
        </CardHeader>
        <CardContent className="py-3 mb-5">
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
          <div className="mb-4">
            <Label htmlFor="email">Cal Poly Pomona Email</Label>
            <Input type="email" id="email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" />
          </div>
        </CardContent>
        <CardFooter className="grid gap-1.5">
          <Button type="submit" className="mb-3">
            Create Account
          </Button>
          <div className="flex justify-between items-baseline">
            <p className="text-sm text-muted-foreground font-medium leading-none">
              Already using (app-name)?
            </p>
            <Button variant="link" className="font-semibold" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpForm;
