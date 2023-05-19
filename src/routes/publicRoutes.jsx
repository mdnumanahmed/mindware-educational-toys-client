import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '/add-toy',
        element: <PrivateRoute><AddToy /></PrivateRoute>
      }
    ],
  },
]);

export default router;
