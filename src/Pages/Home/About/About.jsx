import React, { useContext } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import about from '../../../assets/images/About-2.png'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ToggleContext } from '../../../Provider/ToggleProvider';

export default function About() {
    const { isDark } = useContext(ToggleContext);
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section className=''>
            <SectionTitle heading={"ABOUT US"} subHeading={"---- Who We Are  ----"}></SectionTitle>
            <div className="hero">
                <div className="hero-content flex flex-col lg:flex-row items-center">
                    <div data-aos="fade-right" className='w-full'>
                        <img src={about} />
                    </div>
                    <div className="ml-4 lg:ml-8">
                        <h1 className={`${isDark ? "text-5xl font-bold text-indigo-100":"text-5xl font-bold"}`}>Cricket !</h1>
                   

                        <p className={`${isDark ? "text-indigo-100 hover:text-indigo-200 py-6 text-base leading-loose"
                    : "text-body-color  py-6  inline-block font-bold leading-loose"}`}>Mr. Ahmed Arif Billah, Managing Director of Masco Group and a cricket lover, dreamt of a cricket academy that could provide the country’s young talented cricketers with training facilities of global standard. With his dream, Masco Shakib Cricket Academy (MSCA) emerges. He kept with him an architect to make the dream come true. This architect is none other than Mr. M A Sabur, Chairman of Masco Group. Shakib Al Hasan, renowned all-rounder of the cricket world, has enlightened MSCA with his involvement with it.
                            MSCA is the first international-standard cricket academy in the country, which emerged responding to the importance of training needs for the country’s young talented cricketers. This academy has got equipped with many world-class facilities solely to provide the aspiring talented cricketers with quality international-standard training-solutions to help them groom as the future leaders of the cricket field to rule the cricket with their outstanding performance.</p>

                    </div>
                </div>
            </div>

        </section>
    )
}
