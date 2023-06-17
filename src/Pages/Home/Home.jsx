import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import TopInstructors from './TopInstructors/TopInstructors';
import { ToggleContext } from '../../Provider/ToggleProvider';
import SectionTitle from '../../components/SectionTitle';
import About from './About/About';

const Home = () => {
    const { isDark } = useContext(ToggleContext);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <SectionTitle className={`text-center text-xl md:text-4xl font-bold ${isDark ? "text-indigo-100" : "text-primary"} mt-20`} heading={"POPULAR CLASSES"} subHeading={"---- Most Enrolled Classes ----"} />
            <div className='h-full md:w-9/12 mx-auto my-10'>
                <TopClasses></TopClasses>
            </div>
            <div className='h-full md:w-10/12 mx-auto my-16'>
            <SectionTitle className={`text-center text-xl md:text-4xl font-bold ${isDark ? "text-indigo-100" : "text-primary"} mt-20`} heading={"POPULAR INSTRUCTORS"} subHeading={"---- Most Enrolled Instructor ----"} />
                <TopInstructors></TopInstructors>
            </div>
           
        
        </div>
    );
};

export default Home;