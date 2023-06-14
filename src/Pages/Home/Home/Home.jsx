import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import PopularClass from '../PopularClass/PopularClass'
import PopularInstructors from '../PopularInstructors/PopularInstructors'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
    </div>
  )
}
