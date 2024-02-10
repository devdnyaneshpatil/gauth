import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
  return (
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/home' Component={Home}/>
        <Route path='/signup' Component={Signup}/>
      </Routes>
  )
}

export default App
