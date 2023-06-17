import React, { useContext } from 'react';
import useInstructors from '../../Hooks/useInstructors';
import { ToggleContext } from '../../Provider/ToggleProvider';

const Instructors = () => {
    const [instructors] = useInstructors();
    const {isDark} = useContext(ToggleContext);
    const cardBackgroundClass = isDark ? "bg-indigo-200" : "bg-base-100";
    return (
        <div>
            <h2 className='text-xl md:text-3xl font-bold text-center my-4 text-success '>All Instructors : {instructors.length}</h2>
            <div className='grid grid-cols-3 w-11/12 mx-auto mt-10'>
                {
                    instructors?.map(ins =>
                        <div className={`card card-compact my-6 w-96 bg-base-100  ${cardBackgroundClass} shadow-xl`}>
                            <figure><img className='h-72 w-full object-cover' src={ins?.photoURL} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {ins?.name}</h2>
                                <p>Email: {ins?.email}</p>
                                <div className="card-actions justify-end">
                                    <button className={`btn ${isDark ? "bg-dark-purple text-indigo-100 hover:text-dark-purple border-0 shadow-sm shadow-white" : "btn-success"}`}>See Classes</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;