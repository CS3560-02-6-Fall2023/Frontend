import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddClassForm = ({ children }: { children: React.ReactNode }) => {
  const [courseSubject, setCourseSubject] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [courseSection, setCourseSection] = useState("");

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    if (/^[A-Za-z]*$/.test(value)) {
      // allow only letters to be inputted for the course subject with regex
      setCourseSubject(value);
    }
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      // allow only digits to be inputted for the course number with regex
      setCourseNumber(value);
    }
  };

  const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      // allow only digits to be inputted for the course number with regex
      setCourseSection(value);
    }
  };

  const handleAddCourse = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    console.log("Adding course:", courseSubject, courseNumber, courseSection);
    // clear input fields after successful course add
    setCourseSubject("");
    setCourseNumber("");
    setCourseSection("");

    // automatically close the form upon successful course add
    document.getElementById("close-button")?.click();

    // fetch the backend for the inputted course
    const courseName = courseSubject + courseNumber + "." + courseSection;
    console.log("Course name: " + courseName);
    const addedCourseData = {
      courseName: courseName,
    };

    const response = await fetch(
      // seeing if the course number and section exists
      "http://127.0.0.1:5000/course/?" + new URLSearchParams(addedCourseData),
    );

    if (response.ok) {
      //if a course number and section exists, return the serverID
      console.log("Fetch successful");
    } else {
      //if not create a new server and return the serverID
      console.log("Fetch NOT successful");
    }

    //
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="py-3">
          <Label htmlFor="subject" className="block text-lg font-bold mb-2">
            Course Subject (ex. CS)
          </Label>
          <Input
            type="text"
            id="subject"
            value={courseSubject}
            onChange={handleSubjectChange}
            maxLength={2}
            required
          />

          <Label htmlFor="number" className="block text-lg font-bold mb-2">
            Course Number (ex. 3560)
          </Label>
          <Input
            type="text"
            id="number"
            value={courseNumber}
            onChange={handleNumberChange}
            maxLength={4}
            required
          />

          <Label htmlFor="number" className="block text-lg font-bold mb-2">
            Section Number (if applicable)
          </Label>
          <Input
            type="text"
            id="section"
            value={courseSection}
            onChange={handleSectionChange}
            maxLength={1}
            required
          />

          <div className="py-6 flex justify-between">
            <DialogClose asChild>
              <Button
                id="close-button" // Added an ID for the close button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-2/5"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-2/5"
              onClick={handleAddCourse}
            >
              Add Course
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddClassForm;
