import SignInForm from "./components/auth/signInForm";
import {
  Navigate,
  useLocation,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chat from "./components/chat/chat";
import Navbar from "./components/chat/layout/navbar";
import Sidebar from "./components/chat/layout/sidebar";
import Userlist from "./components/settings/userlist";
import SignUpForm from "./components/auth/signUpForm";
import React from "react";
import {
  AuthenticatedContext,
  AuthenticationProvider,
} from "./context/authenticationProvider";

const MessageApp = () => (
  <div className="flex h-screen overflow-hidden">
    <Navbar />
    <Sidebar />
    <Chat />
    <Userlist />
  </div>
);

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { authenticated } = React.useContext(AuthenticatedContext);
  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <MessageApp />
      </RequireAuth>
    ),
  },
  {
    path: "/SignUp",
    element: <SignUpForm />,
  },
  {
    path: "/LogIn",
    element: <SignInForm />,
  },
]);

function App() {
  return (
    <AuthenticationProvider>
      <RouterProvider router={router}/>
    </AuthenticationProvider>
  );
}

export default App;
