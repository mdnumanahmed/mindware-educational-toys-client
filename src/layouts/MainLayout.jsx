import { Outlet } from "react-router-dom";
import MindWareNavbar from "../shared/MindWareNavbar";
import MindWareFooter from "../shared/MindWareFooter";

const MainLayout = () => {
    return (
        <div>
            <MindWareNavbar />
            <Outlet />
            <MindWareFooter />
        </div>
    );
};

export default MainLayout;