import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="bg-base-300">
            <nav className=" md:flex gap-10 items-center justify-between shadow-lg px-5">
                <div className="">
                    
                    <h4 className="text-5xl font-bold"><span className="text-red-800">Event</span> Elegance</h4>
                </div>
                <ul className="flex gap-5 font-semibold">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/service'>Services</NavLink></li>
                    <li><NavLink to='/testimonials'>Testimonials</NavLink></li>
                    <li><NavLink to='/contact'>Contacts</NavLink></li>
                </ul>
                <div className="flex gap-5 items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <button>Login</button>
                </div>
            </nav>

        </div>
    );
};

export default Header;