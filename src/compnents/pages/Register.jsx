import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../Providers/UserContext';
import { Link } from 'react-router-dom';

const Register = () => {
    const { registerWithGoogle, setUser ,registerNewUser , updateUserProfile } = useContext(AuthContext)

    const handleGoogleRegister = () => {
        registerWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
                console.log('login')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value
        const password = form.password.value
        console.log(fullName,photoURL,email,password)

        registerNewUser(email,password)
        .then(result=>{
            const user = result.user;
            updateUserProfile(fullName,photoURL)
            .then(()=>{
                alert('profile updated')
            })
            setUser(user)
        })
        .catch((err)=>{
            console.log(err)
        })

        form.reset();
    }

    return (
        <div>
            <h1 className='text-4xl text-rose-500'>Please Register</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body w-80">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name='fullName' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">E-mail</span>
                                    </label>
                                    <input type="email" name='email' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <p>Already have an account ?? <Link to='/login' className='text-blue-500 underline text-xs'>Login</Link></p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <hr />
                            <h1>Or, Register With</h1>
                            <div className='flex justify-evenly items-center'>
                                <button onClick={handleGoogleRegister} className='text-black font-semibold'><FaGoogle className='h-7 w-7'></FaGoogle></button>
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

export default Register;