import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useInstructorRole from "../Hooks/useInstructorRole";
import Swal from "sweetalert2";


const InstructorRoute
    = ({ children }) => {
        const { user, loading } = useContext(AuthContext);
        const [isInstructor, isInstructorLoading] = useInstructorRole();
        const location = useLocation();

        if (loading || isInstructorLoading) {
            return <progress className="progress w-56"></progress>
        }

        if (user && isInstructor) {
            return children;
        }

        // if validation failed 

        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Please Logged in as Instructor',
            showConfirmButton: false,
            timer: 1500
        })
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    };

export default InstructorRoute
    ;