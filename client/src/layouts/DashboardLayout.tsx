import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/header";
import SideBar from "../components/sidebar";

const DashboardLayout = () => {


    return (
        <>
            <SideBar /> <Header />
            <div className="ml-16 md:ml-[202px] pt-[84px]">
                <div className="flex-1 h-full bg-white">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
