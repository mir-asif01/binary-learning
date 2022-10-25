import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/UserContext';
import {FaUserCircle} from 'react-icons/fa'

const Header = () => {

    const {user,setUser,logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            setUser(null)
            alert('log out Successfull')
            navigate('/')
            
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <nav className='shadow-sm'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 texl-2xl">
                                <li><Link to='courses'>Courses</Link></li>
                                <li><Link to='faq'>FAQ</Link></li>
                                <li><Link to='blog'>Blog</Link></li>
                                <li><Link to='profile'>Profile</Link></li>
                            </ul>
                        </div>
                        <button className="normal-case">
                            <Link to='/'>
                                <img src="https://seeklogo.com/images/1/01-general-lee-logo-0D0EF00BA1-seeklogo.com.png" className='h-14 w-14 rounded-lg' alt="" />
                            </Link>
                        </button>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 text-xl">
                            <li><Link to='courses'>Courses</Link></li>
                            <li><Link to='faq'>FAQ</Link></li>
                            <li><Link to='blog'>Blog</Link></li>
                            <li><Link to='profile'>Profile</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div>
                            {user ? <>
                                <img src={user?.photoURL} className='h-10 w-10 rounded-full' alt="" title={user?.displayName} />
                            </> : <>
                                <FaUserCircle className='h-10 w-10'></FaUserCircle>
                            </>} 
                        </div>
                        {
                            user?.uid ? <>
                            <Link to='/login' className='mx-2 py-2 px-4 bg-rose-600 rounded-sm text-white font-semibold'><button onClick={handleLogOut}>Logout</button></Link>
                            </> : <>
                            <Link to='/login' className='mx-2 py-2 px-4 bg-rose-600 rounded-sm text-white font-semibold'><button>Login</button></Link>
                            </>
                        }
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;