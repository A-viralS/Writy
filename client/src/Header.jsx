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
      <Link to='/' className='font-extrabold text-4xl'>
        Writy
      </Link>
      <nav>
        {name && (
          <>
            <div className='flex'>
              <Link to='/create' className='mr-5'>
                Create a post
              </Link>
              <div>
                <button onClick={LogoutButton}>Logout</button>
              </div>
            </div>
          </>
        )}
        {!name && (
          <>
            <div className='flex items-center text-2xl gap-5 font-bold '>
              <Link
                to={'/login'}
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
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
