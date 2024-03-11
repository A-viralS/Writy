import axios from 'axios'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function RegisterButton (e) {
    e.preventDefault()

    try {
      await axios.post('/register', {
        name: name,
        email: email,
        password: password
      })
      alert('Registration successful. Now you can log in!')
    } catch (error) {
      alert('Registration failed. Please try again ')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen mt-[-100px]'>
      <div className='w-full max-w-md px-6 py-4 bg-white shadow-md sm:rounded-lg'>
        <div className=' text-center'>
          <Link to='/'>
            <h3 className='text-4xl font-bold text-purple-600 italic'>
              ~Writy~
            </h3>
          </Link>
        </div>
        <form onSubmit={RegisterButton}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              name='name'
              className='w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              name='email'
              className='w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              name='password'
              className='w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>

          <div className=''>
            <Link
              to='/login'
              className='text-sm text-gray-600 underline hover:text-gray-900 '
            >
              Already registered?
            </Link>
            <button
              type='submit'
              className='inline-flex items-center px-4 py-2 text-xs font-semibold text-white uppercase bg-gray-900 border border-transparent rounded-md active:bg-gray-900 ml-[11.2rem]'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
