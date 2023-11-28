import React, { useContext, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import AddClassForm from "@/components/settings/AddClassForm";
import { UserContext } from "@/context/AuthProvider";

interface ServerData {
  serverID: number;
  serverName: string;
  userIDs: number[];
}

const UpdateScheduleForm = ({ children }: { children: React.ReactNode }) => {
  const { serverData, setUser } = useContext(UserContext);
  const [courses, setCourses] = useState([""]);

  useEffect(() => {
    if (serverData) {
      setCourses([]);
      // Clears default state

      serverData.forEach((server: ServerData) => {
        setCourses((prev) => [...prev, server.serverName]);
      });
    }
  }, [serverData]);

  const removeCourse = async (index: number) => {
    if (!serverData) return;
    const course = { serverID: serverData[index].serverID.toString() };

    setCourses(courses.filter((_, i) => i !== index));
    await fetch(
      "http://127.0.0.1:5000/classserver/?" + new URLSearchParams(course),
      { method: "DELETE" },
    );
    serverData?.splice(index, 1);
    setUser((prev) => ({ ...prev, serverData: serverData }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="mb-4">
          <Label
            htmlFor="update-schedule"
            className="block text-lg font-bold mb-2"
          >
            Update Your Schedule
          </Label>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <Label>{course}</Label>
                <Button
                  onClick={() => removeCourse(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Remove
                </Button>
              </div>
            ))
          ) : (
            <Label>You currently have no courses.</Label>
          )}
          <div className="mb-4">
            <AddClassForm>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Add Course
              </Button>
            </AddClassForm>
          </div>
          <div className="flex justify-between space-x-2">
            <DialogClose asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
                Close
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateScheduleForm;
