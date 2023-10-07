import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header";


const MainLayouts = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-5">
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;