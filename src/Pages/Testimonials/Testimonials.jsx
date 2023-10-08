import CommonSection from "../../Components/CommonSection";

const Testimonials = () => {
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto mt-24">
                <div className=" text-center space-y-4">
                    <h4 className="text-4xl font-bold">What Our Clients Says</h4>
                    <p className="text-sm">Discover why our clients rave about us.Hear from those who have experienced <br /> our exceptional service.Read testimonials from satisfied clients.</p>
                </div>
                <div className="md:grid grid-cols-2 gap-5 mt-10">
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center" className=" flex gap-2 bg-slate-100 p-5 rounded">
                        <div className="">
                            <div className="avatar">
                                <div className="w-32 rounded">
                                    <img src="https://www.picng.com/upload/teacher/png_teacher_39903.png" />
                                </div>
                            </div>
                        </div>
                        <div className=" space-y-5">
                            <p> <span></span>I was thoroughly impressed with the level of professionalism and attention to detail provided by your team. The event was a tremendous success, thanks to your expert planning and execution.</p>
                            <h4 className="text-xl font-semibold">Sarah Johnson</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center" className=" flex gap-2 bg-slate-100 p-5 rounded">
                        <div className="">
                            <div className="avatar">
                                <div className="w-32 rounded">
                                    <img src="https://img.freepik.com/free-photo/artist-white_1368-3546.jpg" />
                                </div>
                            </div>
                            <img className="border rounded-md" src="" alt="" />
                        </div>
                        <div className=" space-y-5">
                            <p>TechVista Manufacturing Sustainability Expo exceeded our expectations. It was inspiring to see a company committed to environmentally friendly practices. Kudos to your team!</p>
                            <h4 className="text-xl font-semibold"> David Anderson</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center" className=" flex gap-2 bg-slate-100 p-5 rounded">
                        <div className="">
                            <div className="avatar">
                                <div className="w-32 rounded">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-oC9e3ymJ7llL4C6pCfqTpYA9X87fDmfiA&usqp=CAU" />
                                </div>
                            </div>
                            <img className="" src="" alt="" />
                        </div>
                        <div className=" space-y-5">
                            <p>I attended the TechScape Electronics Innovation Expo, and it was truly enlightening. Your team's dedication to innovation and cutting-edge technology is commendable. I look forward to future events!</p>
                            <h4 className="text-xl font-semibold"> Emily Roberts</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center" className=" flex gap-2 bg-slate-100 p-5 rounded">
                        <div className="">
                            <div className="avatar">
                                <div className="w-32 rounded">
                                    <img src="https://www.irdecogroup.org/wp-content/uploads/2023/05/Edit-NZM_9883.png" />
                                </div>
                            </div>

                        </div>
                        <div className=" space-y-5">
                            <p>NovaLink Industries went above and beyond to make us feel appreciated during the Supplier Appreciation Festival. It was a great opportunity to strengthen our partnership and discuss future collaborations.</p>
                            <h4 className="text-xl font-semibold"> Michael Chang</h4>
                        </div>
                    </div>
                </div>

            </div>
            <section>
                <CommonSection />
            </section>
        </div>

    );
};

export default Testimonials;