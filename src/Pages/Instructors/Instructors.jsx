import React from 'react'
import { UsePopularInstructor } from '../../hooks/UsePopularInstructor'
import InstructorsCard from './InstructorsCard'

export default function Instructors() {
    const [popularInstructors] = UsePopularInstructor()
    console.log(popularInstructors);
    return (
        <div>
            <div className='container mx-auto my-5'>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {popularInstructors.map((instructors) => (
                        <div key={instructors.id} className="mx-4">
                            <InstructorsCard instructors={instructors} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
