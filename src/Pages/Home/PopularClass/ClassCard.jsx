import React from 'react';

const ClassCard = ({ classItem }) => {
    const { title, description, numStudents, image } = classItem;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 my-2">
            <div className="flex justify-center">
                <img src={image} alt={title} className="h-40 object-cover mb-4 rounded-lg" />
            </div>


            <h3 className="text-xl font-bold mb-2">{title}</h3>

            <div className="mt-4 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <span className="text-gray-700">{numStudents} Students</span>
            </div>
        </div>
    );
};

export default ClassCard;
