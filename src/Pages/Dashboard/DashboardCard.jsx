import React from 'react'

export default function DashboardCard({dashboardCard}) {
    const { _id, instructor, title, image, price, numStudents } = dashboardCard;
  return (
    <div>
         <div className="card card-compact w-96 bg-base-100 shadow-xl my-3 pb-3 mx-auto">
                <img src={image} className="h-40 object-cover mb-4 rounded-t-lg" />
                <p className="text-xl leading-3 text-cyan-500 font-bold  p-4">Instructor name: {instructor}</p>
                <p className="text-xl   pl-4">Name: {title}</p>
                <p className="text-xl   pl-4">availableSeats: {numStudents}</p>
                <p className="text-xl   pl-4">price: {price}</p>
                <div className="flex justify-between  my-3 mx-4">
                    <div><button  className="btn btn-primary ">PAY</button></div>
                    <div><button  className="btn btn-primary ">Delete</button></div>
                </div>

            </div>
    </div>
  )
}
