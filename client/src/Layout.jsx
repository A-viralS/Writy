import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <main className='p-8 sm:max-w-[600px] lg:max-w-full' >
        <Header/>
        <Outlet />
    </main>
  )
}

export default Layout