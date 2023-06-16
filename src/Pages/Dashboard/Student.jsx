import React from 'react'
import { UsepopularClass } from '../../hooks/UespopularClass';
import DashboardCard from './DashboardCard';

export default function Student() {
    const [popularClasses] = UsepopularClass();
    return (
        <div>
            <h2 className='font-bold text-center text-4xl'>Total Selected Class : {popularClasses.length} </h2>
            <div className='container mx-auto my-5'>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                    {popularClasses.map((dashboardCard) => (
                        <div key={dashboardCard._id} className="mx-4">
                            <DashboardCard dashboardCard={dashboardCard}> </DashboardCard>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
