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
    <div>
      <div className='   '>
        <div className='flex justify-center items-center gap-5'>
          <div className=''>
            <a href='/'>
              <h3 className='text-4xl font-bold text-purple-600 italic '>
                ~Writy~
              </h3>
            </a>
          </div>
          <div className='w-full px-6 py-4 mt-20 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg'>
            <form>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 undefined'
                >
                  Name
                </label>
                <div className='flex flex-col items-start'>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type='text'
                    name='name'
                    className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  />
                </div>
              </div>
              <div className='mt-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 undefined'
                >
                  Email
                </label>
                <div className='flex flex-col items-start'>
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    name='email'
                    className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  />
                </div>
              </div>
              <div className='mt-4'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 undefined'
                >
                  Password
                </label>
                <div className='flex flex-col items-start'>
                  <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    name='password'
                    className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  />
                </div>
              </div>

              <div className='flex items-center justify-end mt-4'>
                <Link
                  to='/login'
                  className='text-sm text-gray-600 underline hover:text-gray-900'
                  href='#'
                >
                  Already registered?
                </Link>
                <button
                  type='submit'
                  onClick={RegisterButton}
                  className='inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false'
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
