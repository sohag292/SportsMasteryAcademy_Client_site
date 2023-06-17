import React, { useContext } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ToggleContext } from '../Provider/ToggleProvider';
export default function SectionTitle({ heading, subHeading }) {
  const { isDark } = useContext(ToggleContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className='text-center py-7'>
      <h3 className='text-green-500 text-4xl mb-2 font-bold '>{heading}</h3>
      <p className={`${isDark ? "text-indigo-100 hover:text-indigo-200 py-6 text-base leading-loose"
        : "text-body-color text-2xl mb-5 py-6  inline-block font-bold leading-loose"}`}>{subHeading}</p>
    </div>
  )
}
