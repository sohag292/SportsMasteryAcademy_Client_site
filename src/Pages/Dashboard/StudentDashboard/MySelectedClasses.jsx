import React, { useContext } from 'react';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const MySelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const [selectedClasses, refetch] = useSelectedClasses();

    const handleDeleteClass = (cls) => {
        // console.log('from validate');
        // validate
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleSwalConfirm(cls)
            }
        })

        const handleSwalConfirm = (cls) => {
            const token = localStorage.getItem('access-token');
            // console.log(cls);
            const url = `http://localhost:5000/classes/selected?id=${cls?.classId}&email=${user?.email}`
            fetch(url, {
                method: 'DELETE',
                Authorization: `Bearer ${token}`,
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('del',data)
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            `${cls?.className} has been deleted!`,
                            'success'
                        )
                    }
                })
        }
    };


    return (
        <div>
            <h1 className="text-2xl font-semibold mb-8">Manage Classes</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Available <br /> Seats</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClasses?.map((cls) => (
                        <tr key={cls?._id}>
                            <td>
                                <img className="h-10 w-10" src={cls?.classImage} alt="" />
                            </td>
                            <td>{cls?.className}</td>
                            <td>{cls?.instructorName}</td>
                            <td>{cls?.availableSeats}</td>
                            <td>{cls?.price}</td>
                            <td>
                                <button className="btn btn-ghost bg-green-500 mr-3 text-white">
                                    <Link to={`/dashboard/payment/${cls?._id}`} className="text-white">
                                        Pay
                                    </Link>
                                </button>
                                <button onClick={() => handleDeleteClass(cls)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt> </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MySelectedClasses;