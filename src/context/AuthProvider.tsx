import React from "react";

import { UserType } from "@/types/types";

interface UserContextType extends UserType {
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

interface AuthenticatedContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  // authenticated: boolean;
  // setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

// export const UserContext = React.createContext<UserContextType>({
//   email: "EMAIL@cpp.edu",
//   profilePicture: "",
//   username: "User",
//   serverIDs: [1,3],
//   serverData: [],
//   currentServer: 0,
//   setUser: () => {},
// });
export const UserContext = React.createContext<UserContextType>(
  {} as UserContextType,
);

export const AuthenticatedContext =
  React.createContext<AuthenticatedContextType>({
    user: null,
    setUser: () => {},
  });

export function AuthenticationProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [user, setUser] = React.useState<UserType | null>(null);
  //   email: "EMAIL@cpp.edu",
  //   profilePicture: "",
  //   username: "User",
  //   serverIDs: [],
  //   serverData: [],
  //   currentServer: 0,
  // });
  return (
    <AuthenticatedContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedContext.Provider>
  );
  // const [authenticated, setAuthenticated] = React.useState(false);
}
