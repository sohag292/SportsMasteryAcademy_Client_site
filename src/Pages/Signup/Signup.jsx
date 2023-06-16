import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
export default function SignUp() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        console.log("user is updated");
                        reset()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'User create successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center my-8">
                <div className="card shadow-2xl bg-base-100" style={{ width: '450px', minHeight: '760px' }}>
                    <h3 className='text-center pt-8 text-4xl font-bold'> Please Sinup   </h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Enter your name" name='name' className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" {...register("PhotoURL", { required: true })} placeholder="Photo Url" name='PhotoURL' className="input input-bordered" />
                            {errors.PhotoURL && <span className='text-red-600'>This PhotoURL is required</span>}
                        </div>
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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            }
                            )} placeholder="password" name='password' className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less 20 characters </p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one upperCase one lower case and one special characters </p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("Confirm", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            }
                            )} placeholder="Confirm password" name='Confirm' className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Confirm password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less 20 characters </p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one upperCase one lower case and one special characters </p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center px-7 text-xl'><small> Here? <Link to="/login" className='hover:underline underline-offset-1 hover:text-green-700'>Login an account</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>

    )
}
