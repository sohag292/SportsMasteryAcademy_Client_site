import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import PopularInstructorsCard from './PopularInstructorsCard';

export default function PopularInstructors() {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        fetch('PopularInstructors.json')
            .then((res) => res.json())
            .then((data) => {
                const topInstructors = data.slice(0, 6);
                setPopularInstructors(topInstructors);
            });
    }, []);

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
