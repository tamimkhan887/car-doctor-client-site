import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Components/Navbar/Navbar";
import Footer from "../Pages/Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="font-primary max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;