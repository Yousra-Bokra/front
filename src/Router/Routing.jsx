import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Signup/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='home' element={<Home/>}/> */}

          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing

