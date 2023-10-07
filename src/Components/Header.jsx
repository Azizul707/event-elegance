import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="">
            <nav className=" md:flex gap-10 items-center justify-between shadow-lg px-5">
                <div className="">
                    <img className="h-32" src="https://i.ibb.co/1n9Drsg/Add-a-heading-1.png" alt="" />
                </div>
                <ul className="flex gap-5">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/service'>Services</NavLink></li>
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