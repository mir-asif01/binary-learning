import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const checkoutTopic = useLoaderData();

    const { name, price, img } = checkoutTopic

    return (
        <div className='border border-gray-200 p-3 w-full md:w-2/4 mx-auto my-6 shadow-sm rounded-md'>
            <div className='my-7'>
                <div className='my-4 flex justify-center items-center flex-col'>
                    <h1 className='text-xl mb-3'>Get the Premium Access of this <span className='text-2xl font-semibold'>{name}</span> course.</h1>
                    <img src={img} className='w-72' alt="" />
                    <h1 className='text-2xl font-semibold'>${price}</h1>
                </div>
                <button className='bg-rose-500 py-2 px-4 text-white font-semibold rounded-md'>Buy Now</button>
            </div>
            <Link to='/courses' className='text-blue-700 underline'>Back To Course Page</Link>
        </div>
    );
};

export default Checkout;