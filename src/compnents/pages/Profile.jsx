import React, { useContext } from 'react';
import { AuthContext } from '../Providers/UserContext';
import { Link, useNavigate } from 'react-router-dom';
const Profile = () => {

    const { user,setUser, logOut} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null)
                alert('log out Successfull')
                navigate('/')

            })
            .catch(error => {
                alert(error)
            })
    }


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
            <Link to='/login' className='mx-2 py-2 px-4 bg-rose-600 rounded-sm text-white font-semibold'><button onClick={handleLogOut}>Log Out</button></Link>
        </div>
    );
};

export default Profile;