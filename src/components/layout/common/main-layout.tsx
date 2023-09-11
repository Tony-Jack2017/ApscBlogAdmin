import Sidebar from "../base/sidebar";
import HeaderMain from "../base/header";
import {Outlet} from "react-router-dom";
const MainLayout = () => {
    return (
        <div className="apsc-admin-main-layout">
            <div className="apsc-admin-main-layout-left">
                <Sidebar />
            </div>
            <div  className="apsc-admin-main-layout-right">
                <HeaderMain />
                <div className="apsc-admin-main-layout-content">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default MainLayout