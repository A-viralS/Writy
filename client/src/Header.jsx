import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import IndexPage from './Pages/IndexPage'
import axios from 'axios'
import { UserContext } from './UserContext'

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('/profile').then(({ data }) => {
      setUserInfo(data)
      console.log(data.name)
    })
  }, [])

  function LogoutButton () {
    axios.get('/logout')
    setUserInfo(null)
    navigate('/')
  }
  const name = userInfo?.name
  return (
    <header className='flex justify-between mb-20 border-b-4 h-20'>
      <Link to='/' className='font-extrabold text-4xl text-white'>
        Writy
      </Link>

      <nav>
        {name && (
          <>
            <div className='flex'>
              <Link
                to='/create'
                className='mr-5 text-white border-2 bg-[#17252A]  rounded-md p-2 shadow-xl transition-all hover:scale-110'
              >
                Create a post
              </Link>
              <div>
                <button
                  onClick={LogoutButton}
                  className='mr-5 text-white border-2 bg-[#17252A] rounded-md p-2 shadow-xl transition-all hover:scale-110'
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
        {!name && (
          <>
            <div className='flex items-center text-2xl gap-5 font-bold '>
              <Link
                to={'/login'}
                className='mr-5 text-white border-2 bg-[#17252A]  rounded-md p-2 shadow-xl transition-all hover:scale-110'
              >
                Login
                <svg
                  className='h-9 text-white'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <path
                      stroke='#3AAFA9'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1'
                    ></path>{' '}
                  </g>
                </svg>
              </Link>

              <Link
                to='/register '
                className='flex mr-5 text-white border-2 bg-[#17252A]  rounded-md p-2 shadow-xl transition-all hover:scale-110'
              >
                Register
                <img
                  src='./public/register.png'
                  className='h-9 text-white '
                  alt=''
                />
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
