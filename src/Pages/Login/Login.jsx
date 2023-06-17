import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import loginImage from '/login-image.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const { logIn, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        // console.log(data);

        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from, { relative: true });
            }).catch(error => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Something went wrong',
                    showConfirmButton: false,
                    timer: 1500
                });

            })

    };

    // google sign up or log in 
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                const saveUser = { name: user?.displayName, email: user?.email, photoURL: user?.photoURL, role: 'student' }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Login successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            })
            .catch((error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `Something went wrong: ${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });

            });
    }

    // toggle password visibility 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block md:mt-28'>
                <img className='w-full h-96 object-cover' src={loginImage} alt="" />
            </div>

            <div className=' flex flex-col justify-center '>
                <div className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 shadow-2xl px-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-4xl text-gray-800 font-bold text-center'>Log In</h2>
                        <div className='flex flex-col black py-2'>
                            <label>Email</label>
                            <input
                                className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                                type="email"
                                {...register('email', { required: true })}
                                placeholder='Enter email address'
                            />
                            {errors.email?.type === 'required' && <p className="text-red-600 text-sm">Email field is required</p>}
                        </div>
                        <div className='flex flex-col text-gray-800 py-2'>
                            <label>Password</label>
                            <div className='relative'>
                                <input
                                    className='w-full rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', { required: true })}
                                />
                                <button
                                    type='button'
                                    className='absolute top-5 right-2'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password field is required</p>}
                        </div>

                        <button className='w-full my-5 py-2 bg-primary shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/40 text-white font-semibold rounded-lg'>Log In</button>


                    </form>
                    <p className='text-gray-800 text-center'>Don't have an account? Please
                        <Link to="/register" className='text-primary'> Register</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={() => handleGoogleLogin()} className="btn btn-black w-full btn-outline"><span className="mr-4 text-red-600"><FaGoogle /></span> Log in with Google</button>
                </div>


            </div>
        </div>
    );
};

export default Login;
