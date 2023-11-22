import SignInForm from "./components/signInForm";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Chat from "./components/chat/chat";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Userlist from "./components/userlist";
import SignUpForm from "./components/signUpForm";
import React from "react";
import {
    AuthenticatedContext,
    AuthenticationProvider,
} from "./components/authenticationProvider";

const MessageApp = () => (
    <div className="flex h-screen overflow-hidden">
        <Navbar />
        <Sidebar />
        <Chat />
        <Userlist />
    </div>
);

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    // const location = useLocation();
    // const { authenticated } = React.useContext(AuthenticatedContext);

    // if (!authenticated) {
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    return children;
};

function App() {
    return (
        <AuthenticationProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <MessageApp />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<SignInForm />} />
                <Route path="/signup" element={<SignUpForm />} />
            </Routes>
        </AuthenticationProvider>
    );
}

export default App;
