import React from 'react'
import Navbar from '../navbar/Navbar'
import amazon from '../Photos/Amazon-video.mp4'
import '../Projects/clinic.css'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'


function Amazon() {
  useEffect(() => {
    document.title="Amazon Clone"  
  }, [])
  
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-dark text-white" >
        <div className="container">
          <div className="video d-flex flex-column justify-content-center align-items-center " >
            <h4 className='text-white mt-4 text-decoration-underline'>Amazon Clone</h4>
            <video src={amazon} className="object-fit-contain mt-3" controls></video>
          </div>
          <hr />
          <div className="text  d-flex justify-content-center">
            <div class=" alert alert-info " role="alert">
              <h4 class="alert-heading text-start">Amazon Clone</h4>
              <p className='text-start'><strong>Skills</strong> : HTML , CSS and Javascript</p>
              <hr />
              <div className="bottomtext d-flex flex-column">
                <p class="mb-0 text-start">In the process of mastering HTML, CSS, and JavaScript, I crafted an Amazon clone.
                  This hands-on project served as a valuable exercise, providing practical experience in
                  frontend development and allowing me to hone my skills in building interactive and
                  visually appealing web interfaces.</p>
                <hr />
                <div className="links   d-flex justify-content-between ">
                  <div className="first">
                    <a href="https://github.com/RiteshDafale/Amazon-Clone" className="githublink text-start mx-2 " > Github  </a>
                    <a href="https://www.linkedin.com/posts/riteshdafale_computerscience-webdevelopment-amazonclone-activity-7097160853229043713-nXHR?utm_source=share&utm_medium=member_desktop " className="githublink text-start"> Linkedin  </a>
                  </div>
                  <div className="last">
                    <a href="/PortfolioRD" className="githublink "> <i class="fa-solid fa-arrow-left-long"></i>  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Amazon
