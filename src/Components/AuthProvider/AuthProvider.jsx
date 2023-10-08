import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const AuthContext = createContext( null );


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState( {} );
    const [ loading, setLoading ] = useState( true );

    // google Login
    const googleLogin = () => {
        setLoading( true );
        return signInWithPopup( auth, googleProvider )
    }

    // github login

    const githubLogin = () => {
        setLoading( true );
        return signInWithPopup( auth, githubProvider )


    }

    // create user with email and password

    const createUser = ( email, password ) => {
        setLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
    }

    // login user
    const userLogin = ( email, password ) => {
        setLoading( true );
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sing out
    const singOut = () => {
        setLoading( true );
        return signOut(auth)
    }



    // manage user

    useEffect( () => {
    const unSubscribe = onAuthStateChanged( auth, ( user ) => {
        setUser( user );
        setLoading( false );


    } );
        return () => {
            unSubscribe();
        }
        

    }, [] )








    const authInfo =
    {
        googleLogin,
        githubLogin,
        createUser,
        userLogin,
        singOut,
        user,
        loading
    }



    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;