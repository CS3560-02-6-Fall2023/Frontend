import { useEffect } from "react";

import { UserType } from "@/types/types";

import { useLocalStorage } from "./useLocalStorage";
import { useUser } from "./useUser";

export const useAuth = () => {
  const { user, logUserIn, signUserOut } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      logUserIn(JSON.parse(user));
    }
  }, []);

  const login = (user: UserType) => {
    logUserIn(user);
  };

  const logout = () => {
    signUserOut();
  };

  return { user, login, logout };
};
