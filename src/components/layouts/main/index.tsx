import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../navbar/indext'

export default function MainLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    
    </>
  )
}
