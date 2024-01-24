import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Header from './components/Header'
export default function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/> 
      </Routes>
    </Router>
    </>
    
  )
}
