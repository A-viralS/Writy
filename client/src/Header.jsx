import React from 'react'
import { Link } from 'react-router-dom'
import IndexPage from './Pages/IndexPage'

const Header = () => {
  return (
    <header className='flex justify-between mb-20 border-b-4 h-20'>
      <Link to='/' className='font-extrabold text-4xl'>
        MyBlog
      </Link>
      <nav>
        <div className='flex items-center text-2xl gap-5 font-bold '>
          <Link
            to='/login'
            className='shadow-neon rounded-md p-2 transition-all hover:scale-110'
          >
            Login
          </Link>
          <Link
            to='/register '
            className='transform transition-all p-2 rounded-md hover:scale-125 shadow-light'
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
