import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const WebLayout = () => {
  return (
    <div>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default WebLayout