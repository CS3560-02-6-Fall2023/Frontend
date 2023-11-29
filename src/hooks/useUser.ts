import { useContext } from "react";
import { AuthenticatedContext } from "@/context/AuthProvider";
import { UserType } from "@/types/types";


export const useUser = () => {
  const { user, setUser } = useContext(AuthenticatedContext);

  const logUserIn = (user: UserType) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const signUserOut = () => {
    setUser(null);
    localStorage.setItem("user", "");
  };

  return { user, logUserIn, signUserOut };
};