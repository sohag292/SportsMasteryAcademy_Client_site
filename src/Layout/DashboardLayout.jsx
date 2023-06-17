import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Pages/Shared/Navbar/DashboardNav';

const Dashboard = () => {


    return (
        <div className="flex relative">
            <div className='h-screen sticky top-0 bg-fuchsia-500'>

                <DashboardNav></DashboardNav>
            </div>
            <div className="h-full flex-1 p-7">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;


