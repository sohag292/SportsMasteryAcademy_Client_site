import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import Home from '../Pages/Home/Home/Home'
import Navbar from '../Pages/Shared/Navbar/Navbar'

export default function Main() {
  const location = useLocation()
  const noNavandFooter = location.pathname.includes('login');
  return (
    <div>
      {noNavandFooter ||  <Navbar></Navbar>}
        <Outlet></Outlet>
      {noNavandFooter ||  <Footer></Footer>}
    </div>
  )
}
