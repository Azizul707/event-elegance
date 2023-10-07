/* eslint-disable react/prop-types */


const ShowServiceDetails = ( { service } ) => {
    const { title, image, description, price, working_process, how_we_manage_work, our_responsibilities } = service || {};
    return (
        <div>
            <div className="md:flex gap-10">
                <div className="">
                    <div className=""><h4 className="text-4xl font-bold bg-slate-100  p-4 rounded-t-md text-center">{ title }</h4></div>
                    <img src={ image } alt="" />
                    <div className=""><h4 className="text-4xl font-bold bg-slate-100  p-4 rounded-t-md text-center"> <button className="bg-white py-3 px-6 rounded-md text-blue-500">Book Now</button> </h4></div>

                </div>
                <div className="flex-1">
                    <div className="shadow-lg py-14 px-5 bg-slate-100 rounded-t-md">
                        <div className="">
                            <p className="text-xl font-semibold p-2 ">price: <span className="text-2xl font-semibold">{ price }</span>$</p>
                        </div><hr />
                        <div className="">
                            <p className="text-xl  p-2">Working Process: <span className="text-lg">{ working_process }</span></p>
                        </div><hr />
                        <div className="">
                            <p className="text-xl  p-2 ">How we manage work: <span className="text-lg ">{ how_we_manage_work }</span></p>
                        </div><hr />
                        <div className="">
                            <p className="text-xl  p-2">Our responsibilities: <span className="text-lg">{ our_responsibilities }</span></p>
                        </div><hr />
                        <div className="">
                            <p className="text-xl  p-2">Working: <span className="text-lg">{ description }</span></p>
                        </div><hr />


                    </div>
                </div>
            </div>
            {/* section two */ }
            <section className="mt-32">
                <div className=""><h5 className="text-4xl font-bold">We Handle It All</h5></div>

                <div className="mt-5 md:grid grid-cols-3 gap-5">
                    <div className="w-96 space-y-4 shadow-md p-4 hover:bg-slate-100 rounded-md">
                        <p className="text-red-500">01.</p>
                        <h4 className="text-xl font-semibold">Commencing the Conversation: Your Initial Inquiry
                        </h4>
                        <p className="text-sm">
                            We appreciate your first step in reaching out to us. At evant elegance, we are eager to assist you in every way possible. Your initial inquiry marks the beginning of a collaborative journey where we wll work closely to bring your vision to life. Whether it is an event, project, or any inquiry, we are here to provide answers, solutions, and support. Lets get started together!</p>
                    </div>
                    <div className="w-96 space-y-4 shadow-md p-4 hover:bg-slate-100 rounded-md">
                        <p className="text-red-500">02.</p>
                        <h4 className="text-xl font-semibold">Quote
                        </h4>
                        <p className="text-sm">
                            We appreciate your first step in reaching out to us. At evant elegance, we are eager to assist you in every way possible. Your initial inquiry marks the beginning of a collaborative journey where we wll work closely to bring your vision to life. Whether it is an event, project, or any inquiry, we are here to provide answers, solutions, and support. Lets get started together!</p>
                    </div>
                    <div className="w-96 space-y-4 shadow-md p-4 hover:bg-slate-100 rounded-md">
                        <p className="text-red-500">03.</p>
                        <h4 className="text-xl font-semibold">Production
                        </h4>
                        <p className="text-sm">
                            We appreciate your first step in reaching out to us. At evant elegance, we are eager to assist you in every way possible. Your initial inquiry marks the beginning of a collaborative journey where we wll work closely to bring your vision to life. Whether it is an event, project, or any inquiry, we are here to provide answers, solutions, and support. Lets get started together!</p>
                    </div>
                    <div className="w-96 space-y-4 shadow-md p-4 hover:bg-slate-100 rounded-md">
                        <p className="text-red-500">04.</p>
                        <h4 className="text-xl font-semibold">Deliver
                        </h4>
                        <p className="text-sm">
                            We appreciate your first step in reaching out to us. At evant elegance, we are eager to assist you in every way possible. Your initial inquiry marks the beginning of a collaborative journey where we wll work closely to bring your vision to life. Whether it is an event, project, or any inquiry, we are here to provide answers, solutions, and support. Lets get started together!</p>
                    </div>
                    <div className="w-96 space-y-4 shadow-md p-4 hover:bg-slate-100 rounded-md">
                        <p className="text-red-500">05.</p>
                        <h4 className="text-xl font-semibold">Walktrough
                        </h4>
                        <p className="text-sm">
                            We appreciate your first step in reaching out to us. At evant elegance, we are eager to assist you in every way possible. Your initial inquiry marks the beginning of a collaborative journey where we wll work closely to bring your vision to life. Whether it is an event, project, or any inquiry, we are here to provide answers, solutions, and support. Lets get started together!</p>
                    </div>
                    <div className="w-96 space-y-4 shadow-md p-4 hover:bg-slate-100 rounded-md">
                        <p className="text-red-500">06.</p>
                        <h4 className="text-xl font-semibold">Pre-Production
                        </h4>
                        <p className="text-sm">
                            We appreciate your first step in reaching out to us. At evant elegance, we are eager to assist you in every way possible. Your initial inquiry marks the beginning of a collaborative journey where we wll work closely to bring your vision to life. Whether it is an event, project, or any inquiry, we are here to provide answers, solutions, and support. Lets get started together!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShowServiceDetails;