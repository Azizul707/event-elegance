import { Link } from "react-router-dom";
import CommonSection from "../../../Components/CommonSection";


const Register = () => {
    return (
        <div className="">
            <div className="flex justify-center my-10">
            <div className="shadow-lg w-[45vw] md:p-10 bg-slate-100">
                <div className="mb-16"><h4 className="text-4xl font-semibold ">Register Here</h4></div>
                <form className="space-y-6">
                    <div className="">
                    <label htmlFor="name">Name</label><br />
                    <input className="w-full border-b-2 p-4 rounded-md shadow-md" type="text" name="name" placeholder="Your Name" />
                    </div>
                    
                    <div className="">
                    <label htmlFor="email">Email</label><br />
                    <input className="w-full border-b-2 p-4 rounded-md" type="Email" name="email" placeholder="Your Email" />
                    </div>
                    
                    <div className="">
                    <label htmlFor="url">Photo URL</label><br />
                    <input className="w-full border-b-2 p-4 rounded-md" type="text" name="url" placeholder="Your Photo URL" />
                    </div>
                    
                    <div className="">
                    <label htmlFor="password">Password</label><br />
                    <input className="w-full border-b-2 p-4 rounded-md" type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="">
                        <input className="bg-white py-2 px-5 font-semibold rounded-md" type="button" value="Submit" />
                    </div>
                </form>
                <div className="mt-10">
                    <span>AlReady Have An Account </span>
                <Link to='/login'><button className="text-blue-400">Login Here</button></Link>
                </div>
                
            </div>
            </div>
            <CommonSection/>:
        </div>
    );
};

export default Register;