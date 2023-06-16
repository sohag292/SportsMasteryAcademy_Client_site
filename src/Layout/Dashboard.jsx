import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { FaPlusSquare, FaHome, FaUnlockAlt, FaWallet } from "react-icons/fa";
export default function Dashboard() {
    return (
        <div className="drawer lg:drawer-open drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center mt-12">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  bg-[#428a8a] ">
                    {/* Sidebar content here */}
                    <li className='font-bold text-xl'><NavLink to="/dashboard/students"><FaPlusSquare />Selected class</NavLink></li>
                    <li className='font-bold text-xl'><NavLink to="/dashboard/enrolled"><FaUnlockAlt></FaUnlockAlt>Enrolled Class</NavLink></li>
                    <li className='font-bold text-xl'><NavLink to="/dashboard/payment"><FaWallet />Payment History</NavLink></li>
                    <div className="divider"></div>
                    <li className='font-bold text-xl'><NavLink to="/"><FaHome />Home</NavLink></li>
                </ul>

            </div>
        </div>

    )
}

