import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";


const MainLayouts = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-5">
            <Header/>
            <Outlet></Outlet>
            <Footer />
            <Toaster/>
        </div>
    );
};

export default MainLayouts;