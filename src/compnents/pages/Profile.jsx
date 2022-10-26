import React, { useContext } from 'react';
import { AuthContext } from '../Providers/UserContext';

const Profile = () => {

    const { user } = useContext(AuthContext);


    return (
        <div className='p-3'>
            <div className='flex justify-center items-center my-7'>
                <div className='flex flex-col items-center justify-center shadow-lg rounded-md border-slate-300 p-5'>
                    <img src={user ? user?.photoURL : ""} className='w-48 rounded-full' alt="" />
                    <h1 className='text-3xl '>{user ? user?.displayName : 'No User Found'}</h1>
                    <h1 className='text-xl '>{user ? user?.email : 'No User Found'}</h1>
                    <button className='bg-slate-700 py-2 px-4 text-white mt-5 rounded-tl-md rounded-br-md'>Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;