import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";

const AddClassForm = ({ children }: { children: React.ReactNode }) => {
  const [courseSubject, setCourseSubject] = useState('');
  const [courseNumber, setCourseNumber] = useState('');

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    if (/^[A-Za-z]*$/.test(value)) { // allow only letters to be inputted for the course subject
      setCourseSubject(value);
    }
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) { // allow only digits to be inputted for the course number
      setCourseNumber(value);
    }
  };

  const handleAddCourse = () => {
    console.log('Adding course:', courseSubject, courseNumber);
    // clear input fields after successful course add
    setCourseSubject('');
    setCourseNumber('');
    // automatically close the form upon successful course add
    document.getElementById('close-button')?.click();
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
