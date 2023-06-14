import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
export default function Login() {

    // const [disable, setDisable] = useState(true);
    // const {signIn} = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation()
    // const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // signIn(email,password)
        // .then(result =>{
        //   const user = result.user;
        //   console.log(user);
        //   Swal.fire({
        //     title: 'User Login successfull',
        //     showClass: {
        //       popup: 'animate__animated animate__fadeInDown'
        //     },
        //     hideClass: {
        //       popup: 'animate__animated animate__fadeOutUp'
        //     }
        //   })
        //   navigate(from, {replace:true});
        // })
    }



    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">

                <div className="card shadow-2xl bg-base-100" style={{ width: '400px', height: '530px' }}>
                    <h3 className='text-center pt-8 text-4xl font-bold'>Please Login ! </h3>
                    <form onSubmit={handleLogin} className="px-7 py-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center px-7 text-xl '><small>New Here? <Link to="/signup" className='hover:underline underline-offset-1 hover:text-green-700'>Create an account</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>

    );
}
