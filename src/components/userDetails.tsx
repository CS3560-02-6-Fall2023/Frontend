import React from "react";
import { InfoIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function userDetails() {
  return (
    <div className="border-t border-gray-700 pt-4 mb-5 bottom-0">
      <p className="mb-2">User</p>

      <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">User Settings</Button>
    </div>
  );
}
