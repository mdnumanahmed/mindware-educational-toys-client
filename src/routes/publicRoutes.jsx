import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/Login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>Home Page</div>,
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ],
  },
]);

export default router;
