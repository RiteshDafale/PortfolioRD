"use client"
import React, { useEffect } from 'react'
import './navbar.css';
import { HashLink } from 'react-router-hash-link';
import { animate, stagger } from 'animejs';
import useDownload from 'react-use-downloader';


function Navbar() {
  useEffect(() => {
  }, [])

  const { isInProgress, error, download, percentage, elapsed } = useDownload();
  const filePath = "/pdf/RiteshResume.pdf";
  const fileName = "RiteshResume.pdf";

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white logo" href="#">RD</a>
        <button className="navbar-toggler btnColor border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navul ">
            <li className="nav-item  ">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <HashLink to="/PortfolioRD" className=" nav-link active" aria-current="page">Home</HashLink>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link" href="#">About</a> */}
              <HashLink to="#education" className="  nav-link active" aria-current="page">Education</HashLink>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link" href="#">Projects</a> */}
              <HashLink to="#projects" className="nav-link active" aria-current="page">Projects</HashLink>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link" href="#">Contact us</a> */}
              <HashLink to="#contact" className="nav-link active" aria-current="page">Contact</HashLink>
            </li>
            <li className="nav-item ">
              {/* <a className="nav-link" href="#">Contact us</a> */}
              <HashLink to="#about" className="nav-link active" aria-current="page">About</HashLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0 navul">
            <li className="nav-item">
              <HashLink to="#" className="nav-link active"
                onClick={() => {
                 download(filePath, fileName);
                }}
                aria-current="page">Download</HashLink>
            </li>
            {error && <p className='text-light'>possible error {JSON.stringify(error)}</p>}
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
