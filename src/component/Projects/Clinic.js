import React from 'react'
import Navbar from '../navbar/Navbar'
import video from '../Photos/Clinic/clinic_managemen-video.mp4'
import '../Projects/clinic.css'
import '/CodeMate_Internship/HTML-CSS//Responsive/Portfolio/ritesh_portfolio/src/App.css'
// D:\CodeMate_Internship\HTML-CSS\Responsive\Portfolio\ritesh_portfolio\src\App.css

function Clinic() {
  return (
    <div className="app">
      <Navbar />
      <div className="container-fluid bg-dark text-white" >
        <div className="container">
          <div className="video d-flex flex-column justify-content-center align-items-center " >
            <h4 className='text-white mt-4 text-decoration-underline'>Clinic Management System</h4>
            <video src={video} className="object-fit-contain mt-3" controls></video>
          </div>
          <hr />
          <div className="text  d-flex justify-content-center">
            <div class="w-75 alert alert-info " role="alert">
              <h4 class="alert-heading text-start">Clinic Management System</h4>
              <p className='text-start'><strong>Skills</strong> : Swing , AWT and Mysql Workbench</p>
              <hr />
              <div className="bottomtext d-flex flex-column">
                <p class="mb-0 text-start">In the course of my academic journey, I embarked on my inaugural project
                  a Clinic Management System. This undertaking is based on Swing and AWT,
                  with MySQL Workbench overseeing the database management component.
                  Through this venture, I refined my skills in Java programming and database
                  management, accruing valuable experience in crafting practical applcations for
                  real-world scenarios.</p>
                  <hr/>
                  <div className="links border  d-flex ">
                <a href="https://github.com/RiteshDafale/Clinic-Management-Project" className="githublink text-start mx-2 " > Github  </a>
                <a href=" https://lnkd.in/gXana8eQ " className="githublink text-start"> Linkedin  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clinic