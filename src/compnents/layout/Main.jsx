import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../pages/Header';
import LeftSideNav from '../shared/LeftSideNav';
import Home from '../pages/Home';

const Main = () => {
    const topics = useLoaderData()
    return (
        <div>
            <Header className='top-0'></Header>
            <div className='flex flex-col md:flex-row'>
                <div className='md:flex-none'>
                    {/* <LeftSideNav topics={topics}></LeftSideNav> */}
                </div>
                <div className='md:grow'>
                    <Outlet>
                        
                    </Outlet>
                </div>
            </div>

        </div>
    );
};

export default Main;