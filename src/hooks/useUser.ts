import { useContext } from "react";
import { AuthenticatedContext } from "@/context/AuthProvider";
import { useLocalStorage } from "./useLocalStorage";
import { UserType } from "@/types/types";


export const useUser = () => {
  const { user, setUser } = useContext(AuthenticatedContext);
  const { setItem } = useLocalStorage();

  const logUserIn = (user: UserType) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const signUserOut = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, logUserIn, signUserOut };
};