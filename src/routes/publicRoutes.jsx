import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";

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
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "all-toys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "add-toy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        )
      }

    ],
  },
]);

export default router;
