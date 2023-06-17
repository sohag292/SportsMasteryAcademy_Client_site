import React, { useContext, useState } from 'react';
import { FaArrowCircleRight, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructorRole from '../../../Hooks/useInstructorRole';


const DashboardNav = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorRole();


    const navItems = (
        <>
            {/* for student routes  */}
            {!isAdmin && !isInstructor &&
                <>
                    <li>
                        <NavLink
                            to="mySelectedClasses"
                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            My Selected Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="myEnrolledClasses"
                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            My Enrolled Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="myPaymentHistory"
                            className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                        >
                            Payment History
                        </NavLink>
                    </li>
                </>
            }

            {/* for instructor routes */}
            {isInstructor && <>
                <li>
                    <NavLink
                        to="addAClass"
                        className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                    >
                        Add A Class
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="myClasses"
                        className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                    >
                        My Classes
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="feedback"
                        className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                    >
                        Feedback
                    </NavLink>
                </li>
            </>

            }

            {/* for admin routes  */}

            {isAdmin && <>
                <li>
                    <NavLink
                        to="manageUsers"
                        className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                    >
                        Manage Users
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="manageClasses"
                        className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                    >
                        Manage Classes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="paymentHistory"
                        className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                    >
                        PaymentHistory
                    </NavLink>
                </li>
              
            </>
            }

<div className="divider"></div> 
            {/* for logged in students, instructor and admin  */}
              <li>
                    <NavLink
                        to="/"
                        className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                    >
                       Go to  Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/allClasses"
                        className="text-white hover:bg-indigo-400 w-full rounded-lg px-4 py-2 mb-2 inline-block text-base leading-loose"
                    >
                     Classes
                    </NavLink>
                </li>
            
        </>
    );
    return (
        <div
            className="w-72 bg-dark-purple h-full p-5  pt-8 relative"
        >
            <div className="items-center">
                <h1
                    className={`text-white origin-left font-medium text-xl `}
                >
                    Hi, {user?.displayName}
                </h1>
                <ul className='mt-10'>
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default DashboardNav;