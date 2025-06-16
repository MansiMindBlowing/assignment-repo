import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
// import Navbar from './components/Navbar'
import Body from './components/Body'


function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
      
}

export default App
