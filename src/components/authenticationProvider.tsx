/* eslint-disable react-refresh/only-export-components */
import React from "react";

interface UserType {
    userID: string;
    username: string;
}

interface UserContextType extends UserType {
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

interface AuthenticatedContextType {
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = React.createContext<UserContextType>({
    userID: "",
    username: "User",
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
        userID: "",
        username: "User",
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
