import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/UserContext';

const Login = () => {
    const {setUser,registerWithGoogle,loginWithEmailPassword} = useContext(AuthContext)

    const handleSignInWithGoogle=()=>{
        registerWithGoogle()
        .then((result)=>{
            const user = result.user;
            setUser(user)
            alert('log in successfull')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleLoginWithEmailPass = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailPassword(email,password)
        .then((result)=>{
            const user= result.user;
            setUser(user)
            alert('login succesfull')
        })
        .catch((err)=>{
            alert(err)
        })

        form.reset();
    }

    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-semibold text-rose-500'>Please Login</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLoginWithEmailPass}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p>Don't have an account ?? <Link to='/register' className='text-blue-500 underline text-xs'>Register</Link></p>
                            </form>
                            <hr />
                            <h1>Or, Login With</h1>
                            <div className='flex justify-evenly items-center'>
                                <button onClick={handleSignInWithGoogle} className='text-black font-semibold'><FaGoogle className='h-7 w-7'></FaGoogle></button>
                                <h1>Or</h1>
                                <button className='text-black font-semibold'><FaGithub className='h-7 w-7'></FaGithub></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;