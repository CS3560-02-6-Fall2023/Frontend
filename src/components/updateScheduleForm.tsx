import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import AddClassForm from "./addClassForm";

const UpdateScheduleForm = ({ children }: { children: React.ReactNode }) => {
  const [courses, setCourses] = useState(['CS 3560', 'CS 3010', 'CS 3110']);

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="mb-4">
          <Label htmlFor="update-schedule" className="block text-lg font-bold mb-2">
            Update Your Schedule
          </Label>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <Label>{course}</Label>
                <Button onClick={() => removeCourse(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Remove
                </Button>
              </div>
            ))
          ) : (
            <Label>You currently have no courses.</Label>
          )}
          <div className="mb-4">
            <AddClassForm>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Add Course</Button>
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