import { useContext } from "react";

import { AuthenticatedContext } from "@/context/AuthProvider";
import { UserType } from "@/types/types";

interface LoggedInUserType extends UserType {}

export const useUser = () => {
  const { user, setUser } = useContext(AuthenticatedContext);

  const logUserIn = (user: LoggedInUserType) => {
    setUser({ ...user, serverIDs: [1] });
    localStorage.setItem("user", JSON.stringify(user));
  };

  const signUserOut = () => {
    setUser(null);
    localStorage.setItem("user", "");
  };

  return { user, logUserIn, signUserOut };
};
