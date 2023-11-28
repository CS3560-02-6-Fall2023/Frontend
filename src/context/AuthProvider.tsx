import React from "react";

interface Channel {
    channelId: number;
    channelName: string;
    serverID: number;
}

interface ServerData {
    channels: Channel[];
    serverID: number;
    serverName: string;
    userIDs: number[];
}

interface UserType {
    username: string;
    profilePicture: string;
    email: string;
    serverIDs: number[];
    serverData?: ServerData[];
    currentServer: number;
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
    serverData: [],
    currentServer: 0,
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
        serverData: [],
        currentServer: 0,
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
