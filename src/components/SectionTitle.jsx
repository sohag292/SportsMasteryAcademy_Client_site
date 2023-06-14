import React from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
export default function SectionTitle({heading,subHeading}) {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <div data-aos="fade-up" className='text-center py-7'>
        <h3 className='text-green-500 text-4xl mb-2 font-bold '>{heading}</h3>
        <p className='text-2xl'>{subHeading}</p>
    </div>
  )
}
