import { Outlet } from "react-router-dom";
import MindWareNavbar from "../shared/MindWareNavbar";
import MindWareFooter from "../shared/MindWareFooter";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div>
            <MindWareNavbar />
            <Outlet />
            <MindWareFooter />
        </div>
    );
};

export default MainLayout;