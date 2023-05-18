import { Outlet } from "react-router-dom";
import MindWareNavbar from "../shared/MindWareNavbar";

const MainLayout = () => {
    return (
        <div>
            <MindWareNavbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;