import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToyRoute from "../pages/MyToys/UpdateToyRoute";
import NotFound from "../pages/NotFound/NotFound";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
        loader: () => fetch("https://mindware-server.vercel.app/toys"),
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
      },
      {
        path: "toy-update/:id",
        element: (
          <PrivateRoute>
            <UpdateToyRoute />
          </PrivateRoute>
        )
      },
      {
        path:'/toy/:id',
        element:<PrivateRoute><ToyDetails/></PrivateRoute>,
        loader:({params}) => fetch(`https://mindware-server.vercel.app/toy/${params.id}`)
      },

    ],
  },
]);

export default router;
