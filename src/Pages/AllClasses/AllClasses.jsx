import React, { useContext } from 'react';
import useAllClass from '../../Hooks/useAllClass';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../Hooks/useSelectedClasses';
import useApprovedClasses from '../../Hooks/useApprovedClasses';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import useInstructorRole from '../../Hooks/useInstructorRole';
import { ToggleContext } from '../../Provider/ToggleProvider';
import useEnrolledClasses from '../../Hooks/useEnrolledclasses';

const AllClasses = () => {
    const { user } = useContext(AuthContext);
    const [approvedClasses, approvedClassRefetch] = useApprovedClasses();
    const [selectedClasses, refetch] = useSelectedClasses();
    const [enrolledClasses] = useEnrolledClasses();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorRole();
    const { isDark } = useContext(ToggleContext);

    // console.log('sdf', approvedClasses)
    const navigate = useNavigate();
    const location = useLocation();

    // validate already added or not 
    const isClassSelected = (classId) => {
        return selectedClasses.some((selectedClass) => selectedClass.classId === classId);
    };

    const isClassEnrolled = (classId) => {
        return enrolledClasses.some((enrolledClass) => enrolledClass.classId === classId);
    };

    const handleSelectClass = (cls) => {
        if (!user) {
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: 'Please log in first for select a class',
                showConfirmButton: false,
                timer: 1600
            })
            navigate("/login", { state: { from: location } }, { replace: true });
            return;

        }

        const isExist = selectedClasses.find(slcls => slcls.classId === cls._id);
        if (user && !isExist) {
            let classData = cls;
            cls.classId = cls._id;
            delete classData._id;
            cls.studentEmail = user?.email;
            // console.log('sdf', classData);

            // send data to the mongodb

            const token = localStorage.getItem('access-token');
            axios.post('http://localhost:5000/classes/selected', classData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `bearer ${token}`
                },
            })
                .then((response) => {
                    const data = response.data;
                    if (data.insertedId) {
                        refetch();
                        approvedClassRefetch();
                        Swal.fire(
                            `${classData.className} Selected Successfully!`,
                            'Your class has been added!',
                            'success'
                        );
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            Swal.fire(
                `${cls.className} already added!`,
                'Select another class!',
                'error'
            );
        }
    }



    return (
        <div>
            <h2 className='text-xl md:text-3xl font-bold text-center my-8 text-success '>All Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5 w-11/12 mx-auto'>
                {
                    approvedClasses?.map((cls, index) =>
                        <div key={index} className={`card w-full md:w-96  shadow-xl ${cls?.availableSeats == 0 ? "bg-red-300" : isDark ? "bg-indigo-200" : "bg-base-100"} `}>
                            <figure><img className='w-full h-48 object-cover' src={cls?.classImage} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Class Name: {cls?.className}</h2>
                                <p>Instructor Name: {cls?.instructorName}</p>
                                <p>Available Seats: {cls?.availableSeats}</p>
                                <p className='text-success font-bold'>Price: ${cls?.price}</p>
                                <div className="card-actions justify-end">
                                   

                                    {isClassSelected(cls?._id) ? (
                                        <button disabled className='btn'>Already Selected</button>
                                    ) : isClassEnrolled(cls?._id) ? (
                                        <button disabled className='btn'>Already Enrolled</button>
                                    ) : (
                                        <button onClick={() => handleSelectClass(cls)} disabled={cls?.availableSeats == 0 || isAdmin || isInstructor} className={`btn btn-success w-full`}>Select Class</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllClasses;