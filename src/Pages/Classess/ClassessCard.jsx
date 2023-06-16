import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider';
import {useNavigate, useLocation} from 'react-router-dom'
import Swal from 'sweetalert2';
import useClasses from '../../hooks/UseClasses';
export default function ClassessCard({ classes }) {
  const { _id, instructor, title, image, price, numStudents } = classes;
    const{user} = useContext(AuthContext)
    const [,refetch] = useClasses()
    const location = useLocation()
    const navigate = useNavigate()
    const handleAddToCart = classes => {
        console.log(classes);
      
        if (user && user.email) {
         
          const classesItem = { classesId: _id, instructor, image, price, numStudents, email: user.email };
          fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(classesItem)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                refetch()
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Classes added to the cart.',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            });
        } else {
          Swal.fire({
            title: 'Please log in',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then(result => {
            if (result.isConfirmed) {
              navigate('/login', { state: { from: location } });
            }
          });
        }
      };
      
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-3 pb-3 mx-auto">
                <img src={image} className="h-40 object-cover mb-4 rounded-t-lg" />
                <p className="text-xl leading-3 text-cyan-500 font-bold  p-4">Instructor name: {instructor}</p>
                <p className="text-xl   pl-4">Name: {title}</p>
                <p className="text-xl   pl-4">availableSeats: {numStudents}</p>
                <p className="text-xl   pl-4">price: {price}</p>
                <div className="d-flex justify-content-center my-3 mx-4">
                    <button onClick={()=>handleAddToCart(classes)} className="btn btn-primary w-full">Selected</button>
                </div>

            </div>
        </div>
    )
}
