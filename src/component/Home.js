import React from 'react'
import Navbar from './navbar/Navbar'
import First from './First'
import Footer from './Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Amazon from './Projects/Amazon'
import Clinic from './Projects/Clinic'
import Snake from './Projects/Snake'

function Home() {
  return (
    <div>
      <Navbar />
      <First />
      <Footer />     
    </div>
  )
}

export default Home