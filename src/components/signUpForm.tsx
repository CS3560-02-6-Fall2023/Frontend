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

const SignUpForm = () => {
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
            <Button variant="link" className="font-semibold">
              Sign In
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpForm;
