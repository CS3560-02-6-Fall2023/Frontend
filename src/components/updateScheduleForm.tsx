// Component for updating the user's schedule.
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import AddClassForm from "./addClassForm";

const UpdateScheduleForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="mb-4">
          <Label htmlFor="update-schedule" className="block text-lg font-bold mb-2">
            Update Your Schedule
          </Label>
          <div className="mb-4">
            <Label htmlFor="email">You currently have no courses.</Label>
          </div>
          <div className="mb-4">
            <AddClassForm >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Add Course</Button>
            </AddClassForm>
          </div>
          <div className="flex justify-between space-x-2">
            <DialogClose asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2">
                Cancel
              </Button>
            </DialogClose>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2">
              Save and Exit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateScheduleForm;
