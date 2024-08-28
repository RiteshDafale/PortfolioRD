"use client"
import React from 'react'
import './navbar.css';
import { HashLink } from 'react-router-hash-link';

function Navbar() {

  
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white logo" href="#">RD</a>
      <button class="navbar-toggler btnColor border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navul">
          <li class="nav-item">
            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
            <HashLink to="/PortfolioRD" class="nav-link active" aria-current="page">Home</HashLink>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="#">About</a> */}
            <HashLink to="#education" class="nav-link active" aria-current="page">Education</HashLink>

          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="#">Projects</a> */}
            <HashLink to="#projects" class="nav-link active" aria-current="page">Projects</HashLink>

          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="#">Contact us</a> */}
            <HashLink to="#contact" class="nav-link active" aria-current="page">Contact</HashLink>

          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="#">Contact us</a> */}
            <HashLink to="#about" class="nav-link active" aria-current="page">About</HashLink>

          </li>

        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
