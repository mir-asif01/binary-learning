import React, { useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../pages/Footer';
import Header from '../pages/Header';
import { AuthContext } from '../Providers/UserContext';


const Main = () => {
    const {toggle} = useContext(AuthContext)
    return (
        <div className={toggle ? 'bg-slate-900 text-white' : ''}>
            <Header></Header>
            <div>
                <div>
                    <Outlet>
                        
                    </Outlet>
                </div>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;