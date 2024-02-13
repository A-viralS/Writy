import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='relative'>
      {/* Gradient Animation Background */}

      <div
        className='absolute top-0 left-0 w-full h-full'
        style={{
          background:
            'linear-gradient(to bottom right, #f2b36f, #FFFFFF,#1ba3f2)',
          backgroundSize: '200% 100%',
          animation: 'gradientAnimation 4s linear infinite',
          zIndex: -1
        }}
      />

      {/* Main Container */}
      <main className='p-8 sm:max-w-[600px] lg:max-w-full h-screen overflow-hidden relative'>
        {/* Header Component */}
        <Header />

        {/* Outlet for nested routes */}
        <Outlet />
      </main>

      {/* CSS Keyframes for Gradient Animation */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 100% 0;
            }
            50% {
              background-position: 0% 100%;
            }
            100% {
              background-position: 100% 0;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Layout
