import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../shared/LeftSideNav';

const Courses = () => {

    const topics = useLoaderData()
    return (
        <div className='p-3'>
            <h1 className='text-2xl my-5'>Welcome to our free learning platform "Binary"</h1>
            <div className='flex flex-col md:flex-row'>
                <div className='md:flex-none'>
                    <LeftSideNav topics={topics}></LeftSideNav>
                </div>
                <div className='grow'>
                    <div className='p-3 w-full md:w-3/4 my-4 mx-auto'>
                        {
                            topics.map(topic => <div key={topic.id} className="flex flex-col md:flex-row justify-evenly items-center my-4 shadow-md px-4 py-2">
                            <img src={topic.img} alt="" className='w-72' />
                            <div>
                                <h1 className='text-xl text-rose-500'>{topic.name}</h1>
                                <p className='text-justify md:px-3'>{topic.desc}</p>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courses;