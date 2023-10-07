import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="">
            <div className="flex justify-center my-10">
            <div className="shadow-lg w-[45vw] md:p-10 bg-slate-100">
                <div className="mb-16"><h4 className="text-4xl font-semibold ">Login Here</h4></div>
                <form className="space-y-6">
                   
                    
                    <div className="">
                    <label htmlFor="email">Email</label><br />
                    <input className="w-full border-b-2 p-4 rounded-md" type="Email" name="email" placeholder="Your Email" />
                    </div>
                    
                  
                    
                    <div className="">
                    <label htmlFor="password">Password</label><br />
                    <input className="w-full border-b-2 p-4 rounded-md" type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="">
                        <input className="bg-white py-2 px-5 font-semibold rounded-md btn" type="button" value="Login" />
                    </div>
                </form>
                <div className="mt-10">
                    <span>Do Not Have An Account </span>
                <Link to='/register'><button className="text-blue-400">Register</button></Link>
                </div>
                
            </div>
            </div>
            </div>
            </div>
    );
};

export default Login;