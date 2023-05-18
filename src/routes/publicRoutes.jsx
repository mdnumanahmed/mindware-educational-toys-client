import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <div>Home Page</div>
            }
        ]
    }
])

export default router;