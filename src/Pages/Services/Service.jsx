import { useLoaderData } from "react-router-dom";
import ServiceShow from "./ServiceShow";
import CommonSection from "../../Components/CommonSection";


const Service = () => {

    const { services } = useLoaderData( [] ) || [];
    console.log( services );




    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto mt-24">
            <div className="text-center">
                <h4 className="text-5xl font-bold">Corporate Event Management</h4>
                <p className="max-w-max text-center pt-10 ml-10">we specialize in delivering top-notch corporate event management services tailored to your unique needs. With a meticulous approach to planning, precise execution, <br /> and a passion for creating memorable experiences,  we ensure your corporate gatherings leave a lasting impression</p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-5">
                {
                    services?.map( ( service, idx ) => <ServiceShow key={ idx } service={ service }></ServiceShow> )
                }

            </div>
            </div>
            <section>
                <CommonSection></CommonSection>
            </section>
        </div>
        
    );
};

export default Service;