import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Services/Service";
import Register from "../Pages/Services/Contact/Register";
import Testimonials from "../Pages/Testimonials/Testimonials";
import Login from "../Pages/Services/Contact/Login";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import ErrorPage from "../Components/ErrorPage";
import PrivateRoute from "./PrivateRoute";

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
            loader: () => fetch( '/services.json' )
        },
        {
            path: '/testimonials',
            element:<Testimonials></Testimonials>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/service-details/:id',
            element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
            loader: () => fetch( '/services.json' ),
        },
        {
            path: '*',
            element:<ErrorPage/>
        }
    ]



}])
    

export default createRoutes;