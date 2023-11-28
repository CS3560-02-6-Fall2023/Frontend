import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { UserContext } from "@/context/AuthProvider";

const ChangeProfileImageForm = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { username, email, setUser } = useContext(UserContext);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    const fReader = new FileReader();
    fReader.onload = () => {
      const encodedImg = fReader.result as string;
      setImage(encodedImg);
    };

    fReader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage("");
  };

  const updateProfileImage = async () => {
    // Prepare the updated user data
    const updatedUserData = {
      username, // keep the existing username
      email, // keep the existing email
      profilePicture: image, // update with the new image
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/account/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });

      if (response.ok) {
        console.log("Image updated successfully");
        setUser(updatedUserData);
        navigate("/");
      } else {
        console.error("Failed to update image", response.status);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="mb-4">
          <Label
            htmlFor="profile-picture"
            className="block text-lg font-bold mb-2"
          >
            Change Profile Image
          </Label>
          {image && (
            <div className="mb-4">
              <img src={image} alt="Profile" className="mb-4" />
              <Button
                onClick={clearImage}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Clear Image
              </Button>
            </div>
          )}
          <input
            type="file"
            id="profile-picture"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            className="mb-4"
          />
          <div className="flex justify-between space-x-2 mt-4">
            <DialogClose asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={updateProfileImage}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2"
              >
                Save and Exit
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeProfileImageForm;
