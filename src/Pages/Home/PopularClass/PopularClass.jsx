import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ClassCard from './ClassCard';
import { UsepopularClass } from '../../../hooks/UespopularClass';

export default function PopularClass() {
    
    const [popularClasses] =  UsepopularClass();

    return (
        <div className="container mx-auto">
            <SectionTitle heading={"POPULAR CLASSES"} subHeading={"---- Most Enrolled Classes ----"} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {popularClasses.map((classItem) => (
                    
                    <div key={classItem.id} className="mx-4">
                      <ClassCard classItem={classItem} />
                    </div>
                 
                ))}
            </div>
        </div>
    );
}
