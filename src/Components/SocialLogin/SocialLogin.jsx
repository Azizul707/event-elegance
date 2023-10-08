import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
    const { googleLogin,githubLogin } = useContext( AuthContext );

    const handleLogin = ( media ) => {
        media()
            .then( res => {

                toast.success( 'Successfully Login!' )
                navigate( '/' );
            } )
            .catch( error => {
                toast.error( 'Some Error Occurred' );
            })
    }





    return (
        <div className="flex justify-center gap-4 mt-10">
            <div className="">
                <button onClick={()=>handleLogin(googleLogin)} className="btn bg-white"><FaGoogle></FaGoogle> SingUp With Google</button>
            </div>
            <div className="">
                <button onClick={()=> handleLogin(githubLogin)}  className="btn bg-white"><FaGithub></FaGithub> SingUp With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;