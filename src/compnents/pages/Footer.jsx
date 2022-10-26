import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {


    return (
        <div className='bg-slate-700 text-white py-2 px-7 '>
            <div className='flex flex-col md:flex-row justify-evenly'>
                <div className='text-center md:text-left my-3'>
                    <h1 className='text-xl'>About Us</h1>
                    <div className='text-gray-400 text-sm'>
                        <p>What Services We Provide?</p>
                        <p>About Our Employees</p>
                        <p>ABC St,House No-1022,Floor-3rd</p>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
                <div className='text-center my-3'>
                    <h1 className='text-xl'>Social Networks</h1>
                    <div className='text-gray-400 flex md:flex-col items-center justify-center flex-wrap'>
                        <p className='flex items-center cursor-pointer mx-3 my-2 md:my-0'><FaFacebook className='mx-1 text-blue-500'></FaFacebook>Facebook</p>
                        <p className='flex items-center cursor-pointer mx-3 my-2 md:my-0'><FaInstagram className='mx-1 text-blue-500'></FaInstagram>Instagram</p>
                        <p className='flex items-center cursor-pointer mx-3 my-2 md:my-0'><FaTwitter className='mx-1 text-blue-500'></FaTwitter>Twitter</p>
                        <p className='flex items-center cursor-pointer mx-3 my-2 md:my-0'><FaLinkedin className='mx-1 text-blue-500'></FaLinkedin>Linkedin</p>

                    </div>
                </div>
            </div>
            <h1 className='text-sm text-center italic'>Developed By Asif</h1>
        </div>
    );
};

export default Footer;