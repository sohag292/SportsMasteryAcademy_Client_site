import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import PopularInstructorsCard from './PopularInstructorsCard';
import { UsePopularInstructor } from '../../../hooks/UsePopularInstructor';

export default function PopularInstructors() {
const [popularInstructors] = UsePopularInstructor()

    return (
        <div className='container mx-auto my-5'>
            <SectionTitle heading={"POPULAR INSTRUCTORS"} subHeading={"---- Most Enrolled Classes Instructors ----"}></SectionTitle>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {popularInstructors.map((instructorsItem) => (
                    <div key={instructorsItem.id} className="mx-4">
                        <PopularInstructorsCard instructorsItem={instructorsItem} />
                    </div>
                ))}
            </div>
        </div>
    );
}
