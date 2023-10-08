import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userLogin } = useContext( AuthContext );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin( email, password )
            .then( res => {
                toast.success( 'Login Succeed' );
                navigate(location?.state ? location.state : '/')
                
            })
            .catch( error => {
                const errorMessage = error.message;
                toast.error( errorMessage );
            })
        
    }

    return (
        <div>
            <div className="">
                <div className="flex justify-center my-10">
                    <div className=" p-10 shadow-lg md:w-[45vw] md:p-10 bg-slate-100">
                        <div className="mb-16"><h4 className="text-4xl font-semibold ">Login Here</h4></div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="">
                                <label htmlFor="email">Email</label><br />
                                <input className="w-full border-b-2 p-4 rounded-md" type="Email" name="email" placeholder="Your Email" />
                            </div>

                            <div className="">
                                <label htmlFor="password">Password</label><br />
                                <input className="w-full border-b-2 p-4 rounded-md" type="password" name="password" placeholder="Password" />
                            </div>
                            <div className="">
                                <input className="bg-white py-2 px-5 font-semibold rounded-md btn" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="mt-10">
                            <span>Do Not Have An Account </span>
                            <Link to='/register'><button className="text-blue-400">Register</button></Link>
                        </div>

                        <div className="">
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;