

const CommonSection = () => {
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" className="mt-20 relative">
            <img className="w-full" src="https://i.ibb.co/cJRn632/Colored-Shapes-1-1.png" alt="" />

            <div className="absolute top-0 right-0 left-0 bottom-0 backdrop-blur-sm">
                <h5 className="md:text-6xl font-bold text-slate-100 text-center md:mt-28 leading-relaxed">Elevate Your Event to Unforgettable <br /> Heights!</h5>
                <p className="hidden md:block md:mt-10 text-slate-100 md:ml-64">Crafting Moments That Last a Lifetime – Your Event, Our Expertise.
                    Transforming Occasions into Unforgettable Memories – Together.</p>
                <div className="md:mt-10 flex justify-center"><button className=" bg-slate-100  btn">Learn More</button></div>
            </div>

        </div>
    );
};

export default CommonSection;