import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Services/Service";
import Contact from "../Pages/Services/Contact/Contact";
import Testimonials from "../Pages/Testimonials/Testimonials";

const createRoutes = createBrowserRouter( [ {
            
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/service',
            element: <Service></Service>,
            loader:()=> fetch('/services.json')
        },
        {
            path: '/testimonials',
            element:<Testimonials></Testimonials>
        },
        {
            path: '/contact',
            element:<Contact></Contact>
        }
    ]



}])
    

export default createRoutes;