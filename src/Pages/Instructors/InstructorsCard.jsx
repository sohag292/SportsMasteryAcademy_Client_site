import React from 'react'

export default function InstructorsCard({instructors}) {
    const { photo, name,email } = instructors;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-3 mx-auto">
                <img src={photo} className="h-40 object-cover mb-4 rounded-t-lg" />
                <h3 className="text-xl leading-3 text-cyan-500 font-bold  p-4">Name: {name}</h3>
                <h2 className="text-xl  mb-2 p-4">Email: {email}</h2>
            </div>
        </div>
    )
}
