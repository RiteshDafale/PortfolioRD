import React from 'react'
import mypic from '../component/Photos/Myphoto.jpg'
import EyeClinicHomePage from '../component/Photos/Cinic-Home-page.jpg'
import '../component/First.css'
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom';
export default function First() {
    return (

        <div className=''>
            <div className="container-fluid text-center bg-dark w-100  ">
                <div className="firstSession w-100">
                    <div class="row  firstrow ">
                        <div class="col   mt-5  image d-flex  align-items-center w-25  photocol">
                            <div className='  innerPhotoImage '>
                                <img src={mypic} alt='Some problem' className='photo mt-3 rounded-circle'></img>
                            </div>
                        </div>
                        <div class="col mt-5   position-relative w-75 contentcol  ">

                            <h3 className='text-white mt-5 pt-5 me-5 pe-5  selfnameH'>Ritesh Dafale    </h3>
                            <p className='text-white me-5 text-start'>I'm an MCA graduate from 2024, passionate about programming <br />and eager to start my career as a Java Developer or Frontend Developer,<br /> with strong skills in Java 8, Spring Boot, Spring MVC, and React.</p>

                        </div>
                    </div>
                    <div className="row secondSession ">
                        <h2 className='text-white mt-5 text-decoration-underline text-decoration-red'>About me</h2>
                        <div className="col intro align-middle w-25  ">
                            <div className="contentAbout text-white mt-5  text-start ms-5   ">
                                <p className='font-monospace.'>Name : Ritesh Dafale</p>
                                <p className=''>Contact no. : 7057746698</p>
                                <p className=''>Email : ritesh.dafale13@gmail.com</p>
                                <p className=''>Website : www.ritesh.com</p>
                                <p className=''>City : Nagpur , Maharashtra</p>
                            </div>
                        </div>
                        <div className="col text-white  introContent">
                            <div className="rightContent mt-5  w-100 text-start">
                                <h4 className='text-start object-fit-sm-contain '>Hello There!</h4>
                                <p className='me-5'>My name is Ritesh Dafale, recently completed my MCA in 2024. I have a deep passion for programming, which drives my eagerness to start my career as a Java Developer or Frontend Developer. My academic journey has provided me with a strong foundation in Computer Science, where I’ve developed a solid understanding of key principles and technologies. I’m eager to apply my technical expertise in a professional environment, where I can continue learning and growing as a developer.</p>
                                <div className="icons d-flex flex-row ">
                                    <p role="button" onClick={() => {
                                        window.location.href = "https://www.linkedin.com/in/riteshdafale/"
                                    }}><abbr title='linkedin'><i class="fa-brands fa-linkedin iconSize" ></i></abbr></p>

                                    <p role="button" className='mx-3' onClick={() => { window.location.href = "https://www.instagram.com/" }} ><i class="fa-brands fa-instagram iconSize"></i></p>
                                    <p role="button" onClick={() => { window.location.href = "https://riteshdafale-portfolio.netlify.app/" }} ><i class="fa-solid fa-globe iconSize"></i></p>
                                    <p role="button" className='mx-3' onClick={() => {
                                        window.location.href = "https://github.com/RiteshDafale/RiteshPortfolio.github.io"
                                    }}><i class="fa-brands fa-github iconSize"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* About section complete  */}
                    <div className="container  project ">
                        <div className="row bg-secondary ">
                            <h3 className='text-white mt-4' >Projects</h3> 
                            {/* <div className="colums d-flex "> */}
                            <div className="col-lg-3 col-sm-1 col-md-2 border text-white mt- ms-5 proj1 project p-2 shadow">
                                <h5 className='mt-3 text-decoration-underline  '>Clinic Management System</h5>
                                <div className="skills d-flex mt-4 ">
                                <p className='rounded-pill bg-primary w-25 ms-5 '>Java</p>
                                <p className='rounded-pill bg-primary w-25 mx-3'>Swing</p>
                                </div>
                                <p className='text-center para '>The Clinic Management Project is a patient management system initially developed using Java and MySQL Workbench. It efficiently stores patient data in a database</p>
                                <button className='btn btn-primary rounded-3'> Explore More</button>
                                
                            </div>
                            <div className="col-lg-3 col-sm-1 col-md-2 text-white border proj1 mx-5 project">
                            <h5 className='mt-3 pt-2 text-decoration-underline  '>AMAZON-CLONE</h5>
                                <div className="skills d-flex mt-4 ">
                                <p className=' bg-primary w-25 ms-4 roundedskills '>HTML</p>
                                <p className=' bg-primary w-25 ms-3 roundedskills'>CSS</p>
                                <p className=' bg-primary w-25 mx-3 roundedskills'>JS</p>
                                </div>
                                <p className='text-center '>While learning HTML, CSS, and JavaScript, I am recreating Amazon’s e-commerce platform. This practice project allows me to apply and enhance my web development skills.</p>
                                <button className='btn btn-primary rounded-3'> Explore More</button>
                            </div>
                            <div className="col-lg-3 col-sm-1 col-md-2 text-white border  proj1 project ">
                            <h5 className='mt-3 pt-2 text-decoration-underline  '>Snake Game</h5>
                                <div className="skills d-flex mt-4 ">
                                <p className='rounded-pill bg-primary w-25 ms-5  '>Swing</p>
                                <p className='rounded-pill bg-primary w-25 mx-3'>AWT</p>
                                </div>
                                <p className='text-center'>During my Java programming , I attempted to create a Snake game using Swing and AWT.Where snake control by button left, right,up. </p>
                                <button className='btn btn-primary rounded-3 mb-4'> Explore More</button>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}
