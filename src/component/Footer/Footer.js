import React from 'react'
import './footer.css';

function Footer() {
const font = {
  fontSize : "0.85rem",
}
  return (
    <div className="container-fluid p-3 text-white" style={{backgroundColor:"black"}}>
      <div className="row">
        <div className="col-lg-3  d-flex justify-content-center align-items-center">
          <div className="content ">
            <h4 className='mt-2 footer_intro' >Ritesh Dafale</h4>
            <p className='text-center myself ' style={{fontSize:"0.85rem"}}>I'm Ritesh Dafale, a web developer skilled in HTML, CSS, JavaScript, and frameworks like React and Bootstrap. Please reach out if you have any freelancing opportunities.</p>
          </div>
        </div>
        <div className="col-lg-3  ">
          <h4 className='mt-2'>Important links</h4>
          {/* <hr class="border border-primary border-2 opacity-75" /> */}
          <div className="links  mt-4  " style={font}>
            <p><a href="/PortfolioRD" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</a></p>
            <p><a href="#education" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Education</a></p>
            <p><a href="#projects" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Projects</a></p>
            <p><a href="#contact" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact us</a></p>
          </div>
        </div>
        <div className="col-lg-3  ">
          <h4 className='mt-2 '>Contacts Details</h4>
          {/* <hr class="border border-primary border-2 opacity-75" /> */}

          <div className="email mt-4" style={font}>
            <p className='m-0'>Email at </p>
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-white" href="#">
              ritesh.dafale13@gmail
            </a>
          </div>
          <div className="phone mt-3">
            <p className='m-0 '>Contact  at </p>
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-white" href="#">
              7057746698
            </a>
          </div>
        </div>
        <div className="col-lg-3 mt-5 ">
          <h5 className='mt-2'>Social Media Handle</h5>
          {/* <hr class="border border-primary border-2 opacity-75" /> */}
          <div className="sociallinks  ">
           <p className='fs-6'>You can connect on Social Media Plateform </p>
           <div className='d-flex justify-content-center'>
           <p role="button" onClick={() => {
                                    window.location.href = "https://www.linkedin.com/in/riteshdafale/"
                                }}><i class="fa-brands fa-linkedin iconSize" ></i></p>

                                <p role="button" className='mx-3' onClick={() => { window.location.href = "https://www.instagram.com/theriteshdafale/" }} ><i class="fa-brands fa-instagram iconSize"></i></p>

                                <p role="button" onClick={() => { window.location.href = "https://riteshdafale.github.io/PortfolioRD/" }} ><i class="fa-solid fa-globe iconSize"></i></p>
                                <p role="button" className='mx-3' onClick={() => {
                                    window.location.href = "https://github.com/RiteshDafale/"
                                }}><i class="fa-brands fa-github iconSize"></i></p>
                                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer