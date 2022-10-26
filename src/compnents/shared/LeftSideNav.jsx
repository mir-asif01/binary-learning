import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({topics}) => {
    return (
        <div>
            <h1 className='text-2xl'>{topics.length} Courses</h1>
            <div className='my-5 flex flex-wrap justify-center items-center md:flex-col'>
                {
                    topics.map(topic => <Link to={`/topics/${topic.id}`} key={topic.id} className='text-xl my-3 mx-2 border border-gray-100 shadow-sm py-1 px-3 md:w-full'>{topic.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;