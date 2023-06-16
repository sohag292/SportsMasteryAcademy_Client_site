import React from 'react'
import { UsepopularClass } from '../../hooks/UespopularClass';
import ClassessCard from './ClassessCard';

export default function Classess() {
    const [popularClasses] = UsepopularClass();
    return (
        <div>
            <div className='container mx-auto my-5'>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {popularClasses.map((classes) => (
                        <div key={classes.id} className="mx-4">
                            <ClassessCard classes={classes}> </ClassessCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
