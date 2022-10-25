import React, { useContext } from 'react';
import { AuthContext } from '../Providers/UserContext';

const Profile = () => {

    const {user} = useContext(AuthContext);


    return (
        <div className='flex justify-center items-center my-7'>
            <div className='flex flex-col items-center justify-center shadow-mg rounded-md bg-slate-200 p-5'>
                <img src={user ? user?.photoURL : "" } className='w-48 rounded-full' alt="" />
                <h1 className='text-3xl '>{user ? user?.displayName : 'No User Found'}</h1>
                <button className='bg-stone-500 py-2 px-4 text-white mt-5'>Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;