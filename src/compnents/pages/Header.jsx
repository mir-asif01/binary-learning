import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='courses'>Courses</Link>
            <Link to='login'>Login</Link>
            <Link to='faq'>FAQ</Link>
            <Link to='blog'>Blog</Link>
            <Link to='profile'>Profile</Link>
            <h1>This is header</h1>
            
        </div>
    );
};

export default Header;