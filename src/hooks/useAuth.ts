import { useEffect } from "react";

import { useUser } from "@/hooks/useUser";
import { UserType } from "@/types/types";

export const useAuth = () => {
  const { user, logUserIn, signUserOut } = useUser();

  useEffect(() => {
    const user = localStorage.getItem("user");
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
