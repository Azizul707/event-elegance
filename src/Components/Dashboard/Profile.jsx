import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext( AuthContext );
    return (
        <div className='shadow-md w-1/2 h-[70vh] mx-auto my-10 p-10 rounded-md'>
            
            <div className="flex gap-5">
                <div className="w-96">
                    <img className='w-full' src={user?.photoURL} alt="" />
                </div>
                <div className="flex-1 space-y-6">
                    <span><p className='text-2xl font-bold'>Information</p></span>
                    <p className='text-xl font-semibold'>Email</p>
                    <p>{ user.email }</p>
                    <hr />
                    <p className='text-xl font-bold'>Name</p>
                    <p className='text-xl font-semibold'>{ user?.displayName}</p><hr />
                </div>
            </div>
        </div>
    );
};

export default Profile;