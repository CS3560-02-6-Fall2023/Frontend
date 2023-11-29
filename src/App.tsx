import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";

import { AuthenticationProvider } from "@/context/AuthProvider";
import Login from "@/pages/Login";
import MessageApp from "@/pages/MessageApp";
import Signup from "@/pages/Signup";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  console.log(user);
  if (user) {
    console.log(user);
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
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
