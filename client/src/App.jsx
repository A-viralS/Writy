import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Post'
import Header from './Header'

import { Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import Layout from './Layout'
import IndexPage from './Pages/IndexPage'
import RegisterPage from './Pages/RegisterPage'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true
function App () {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />}></Route>
        <Route path='/posts' element={<Post />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App
