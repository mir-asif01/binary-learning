import React, { useContext } from 'react';
import { AuthContext } from '../Providers/UserContext';

const Register = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>This is Register</h1>
            <h1>Name : {user?.name}</h1>
            <button className='py-2 px-4 bg-rose-500 text-white font-semibold'>Google Login</button>
        </div>
    );
};

export default Register;