import React from "react";
import {
  Navigate,
  useLocation,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  AuthenticatedContext,
  AuthenticationProvider,
} from "./context/authenticationProvider";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MessageApp from "./pages/MessageApp";

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
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <AuthenticationProvider>
      <RouterProvider router={router} />
    </AuthenticationProvider>
  );
}

export default App;
