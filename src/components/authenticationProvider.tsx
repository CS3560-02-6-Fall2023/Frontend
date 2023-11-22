/* eslint-disable react-refresh/only-export-components */
import React from "react";

interface UserType {
    username: string;
    profilePicture: string;
    email: string;
    serverIDs: number[];
}

interface UserContextType extends UserType {
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

interface AuthenticatedContextType {
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = React.createContext<UserContextType>({
    email: "EMAIL@cpp.edu",
    profilePicture: "",
    username: "User",
    serverIDs: [],
    setUser: () => {},
});

export const AuthenticatedContext =
    React.createContext<AuthenticatedContextType>({
        authenticated: false,
        setAuthenticated: () => {},
    });

export function AuthenticationProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const [user, setUser] = React.useState<UserType>({
        email: "EMAIL@cpp.edu",
        profilePicture: "",
        username: "User",
        serverIDs: [],
    });
    const [authenticated, setAuthenticated] = React.useState(false);

    return (
        <AuthenticatedContext.Provider
            value={{ authenticated, setAuthenticated }}
        >
            <UserContext.Provider value={{ ...user, setUser }}>
                {children}
            </UserContext.Provider>
        </AuthenticatedContext.Provider>
    );
}
