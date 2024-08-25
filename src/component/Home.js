import React from 'react'
import Navbar from './navbar/Navbar'
import First from './First'
import Footer from './Footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* <BrowserRouter> */}
    <Navbar/>
    <First/>
    <Footer/>
    {/* </BrowserRouter> */}
    </div>
  )
}

export default Home