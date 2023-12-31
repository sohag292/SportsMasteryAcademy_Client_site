import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
// import { AuthContext } from '../../../../providers/AuthProvider';
// import { useLocation, useNavigate } from 'react-router-dom';

export default function SocialLogin() {
    // const { googleSignIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        // googleSignIn()
        //     .then(result => {
        //         const loggedInUser = result.user;
        //         console.log(loggedInUser);
        //         const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        //         fetch('https://sports-mastery-academy-server-site.vercel.app/users', {
        //             method: 'POST',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(saveUser)
        //         })
        //             .then(res => res.json())
        //             .then(() => {
        //                 navigate(from, { replace: true });
        //             })
        //     })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className="w-full text-center my-4 mb-6">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    )
}
