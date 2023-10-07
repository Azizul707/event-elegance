import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowServiceDetails from "./ShowServiceDetails";
import CommonSection from "../../Components/CommonSection";


const ServiceDetails = () => {
    const { id } = useParams();
    const {services} = useLoaderData();
    const [ service, setService ] = useState( {} );
    
    
    useEffect( () => {

        const selectService = services?.find( service => service.id === id );
        setService( selectService );
    }, [ id, services ] );
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto mt-24">
            {
            <ShowServiceDetails service={service}></ShowServiceDetails>
            }
            </div>
            <CommonSection/>
        </div>
    );
};

export default ServiceDetails;