import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <div>
            {/* Child pages will be rendered here */}
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
}
