import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center m-7'>
            <h1 className='text-4xl'><span className='text-red-800'>Error!</span>404 page not found</h1>
            <Link to='/' className='text-rose-500 underline my-7'>Explore Courses</Link>
        </div>
    );
};

export default Error;