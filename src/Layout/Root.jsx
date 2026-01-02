import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="font-primary max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;