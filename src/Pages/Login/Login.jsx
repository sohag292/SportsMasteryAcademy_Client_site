import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function Login() {
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login successfull',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown',
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp',
                    },
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="card shadow-2xl bg-base-100" style={{ width: '400px', minHeight: '530px' }}>
                    <h3 className="text-center pt-8 text-4xl font-bold">Please Login !</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="px-7 py-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-600">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                name="password"
                                className="input input-bordered pr-10"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                            />
                            <span
                                className="absolute top-[50px] right-5 text-gray-500 cursor-pointer text-xl"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>

                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one uppercase, one lowercase, one special character, and one digit</p>}
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center px-7 text-xl">
                        <small>
                            New Here? <Link to="/signup" className="hover:underline underline-offset-1 hover:text-green-700">Create an account</Link>
                        </small>
                    </p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
}
