import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";



const Header = () => {
    const { user, singOut } = useContext( AuthContext );
    console.log(user);
    
    const handleSingOut = () => {
        singOut()
            .then()
            .catch()
        
        
    }


    return (
        <div className="bg-slate-100 sticky top-0 z-40">
            <nav className=" md:flex gap-10 items-center justify-between shadow-lg p-5">
                <div className="">

                    <h4 className="md:text-5xl font-bold"><span className="text-red-800">Event</span> Elegance</h4>
                </div>
                <ul className="flex gap-5 font-semibold">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/service'>Services</NavLink></li>
                    <li><NavLink to='/testimonials'>Testimonials</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                </ul>

                {/* login section */ }

                <div className="flex gap-5 items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <div className="">
                        {
                            user?<button onClick={handleSingOut}>Logout</button> :<Link to='/login'><button>Login</button></Link>
                        }

                    </div>
                    
                </div>
            </nav>

        </div>
    );
};

export default Header;