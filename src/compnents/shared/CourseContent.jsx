import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';

const CourseContent = () => {
    const topic = useLoaderData();
    const {name,id,img,details,desc} = topic;
    const {loops,oop,conditions,data_types,variables} = details
    console.log(topic)
    return (
        <div className='w-full p-7 md:w-3/4 mx-auto shadow-md'>
            <div className='flex justify-between px-6 items-center'>
                <h1 className='text-2xl'>Course Details</h1>
                <button title='download this page info'><FaFileDownload className='h-7 w-7'/></button>
            </div>
            <div className='my-7 flex flex-col justify-center items-center'>
                <img src={img} className='w-64' alt="" />
                <h1 className='text-2xl'>This is {topic.name} course.</h1>
                <p className='text-justify my-3'><span className='font-bold'>Introduction : {desc}</span></p>
                <p className='text-justify my-3'><span className='font-bold'>Data-Types : </span>{data_types}</p>
                <p className='text-justify my-3'><span className='font-bold'>Variables : </span>{variables}</p>
                <p className='text-justify my-3'><span className='font-bold'>Conditions : </span>{conditions}</p>
                <p className='text-justify my-3'><span className='font-bold'>Loops : </span>{loops}</p>
                <p className='text-justify my-3'><span className='font-bold'>OOP : </span>{oop}</p>
            </div>

            <Link to='/courses' className='mt-5 bg-rose-500 py-2 px-4 text-white font-semibold'>Go To Courses Page</Link>
            <Link to={`/topics/${id}/checkout/${id}`} className='bg-blue-700 py-2 px-4 text-white font-semibold mx-2'>Get Premium Access</Link>
        </div>
    );
};

export default CourseContent;