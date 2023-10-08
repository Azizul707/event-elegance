import { Link } from "react-router-dom";
import CommonSection from "../../../Components/CommonSection";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {

    const { createUser } = useContext( AuthContext );
    let regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if ( !regEx.test(password) ) {
            toast.error( 'Password should have 8 characters, uppercase,lowercase and a number' )
            return
        }

        createUser( email, password )
            .then( res => {
                console.log( res.user )
                toast.success('Register Success')
            } )
            .catch( error => console.log( error ) )
        


}










    return (
        <div className="">
            <div className="flex justify-center my-10">
                <div className="p-10 shadow-lg md:w-[45vw] md:p-10 bg-slate-100">
                    <div className="mb-16"><h4 className="text-4xl font-semibold ">Register Here</h4></div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="">
                            <label htmlFor="name">Name</label><br />
                            <input className="w-full border-b-2 p-4 rounded-md " type="text" name="name" placeholder="Your Name" />
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
                            <input className="bg-white py-2 px-5 font-semibold rounded-md cursor-pointer btn" type="submit" value="Submit" />
                        </div>
                    </form>
                    <div className="mt-10">
                        <span>Already Have An Account </span>
                        <Link to='/login'><button className="text-blue-400">Login Here</button></Link>
                    </div>
                    <div className="">
                        <SocialLogin />
                    </div>

                </div>
            </div>
            <CommonSection />:
        </div>
    );
};

export default Register;