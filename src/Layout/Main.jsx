import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { ToggleContext } from '../Provider/ToggleProvider';

const Main = () => {

    const {isDark} = useContext(ToggleContext);
    return (
        <div className={` ${isDark ? "bg-gray-900" : "bg-base-100"} `}>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;