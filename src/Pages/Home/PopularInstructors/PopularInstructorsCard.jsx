import React from 'react'

export default function PopularInstructorsCard({ instructorsItem }) {
    const {photo, name } = instructorsItem;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-3 mx-auto">
                    <img src={photo} className="h-40 object-cover mb-4 rounded-t-lg" />
                <h3 className="text-xl font-bold mb-2 p-4">{name}</h3>
            </div>
        </div>
    )
}
