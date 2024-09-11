import React, { useEffect, memo, useState } from 'react'
import mypic from '../component/Photos/Myphoto.jpg'
import EyeClinicHomePage from '../component/Photos/Cinic-Home-page.jpg'
import '../component/First.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import baseurl from './api/baseurl';

function First() {
    useEffect(() => {
        toast.info("Welcome to Ritesh Dafale's Portfolio! Explore my work and projects.")
        document.title="Ritesh Portfolio"
    }, [])

    const [contact, setcontact] = useState([]);
    const [name, setname] = useState("");

    const formHandling = (e) => {
        e.preventDefault();
        console.log(contact)
        sentDetails(contact);
    }

    const sentDetails = (data) => {
        // axios.post(`${baseurl}/addcontact`, data).then(   // not working 404 error
        axios.post("http://localhost:1303/addcontact", data).then(   // dout in data
            (Response) => {
                toast.success(`Thank you, ${name} ! We\'ll  be in touch soon`, {
                    position: "top-center",
                    autoClose:2500,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "light",
                    className: "toast-message",
                   
                });

            },
            (error) => {                toast.error('some issue with data', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "light",                 
                });
            }
        )
    }
    const navigate = useNavigate();
    return (
        <div className=''>
            <div className="  container-fluid text-center bg-dark w-100  " id="intro">
                <div className=" firstSession w-100">
                    <div className="  row  firstrow ">
                        <div className=" border  border-dark col  mt-5  image d-flex  justify-content-center w-25  photocol">
                            <div className='  innerPhotoImage ' >
                                <img src={mypic} alt='Some problem' className='photo mt-3 rounded-circle'></img>
                            </div>
                        </div>
                        <div className="col mt-5   position-relative w-75 contentcol  ">
                            <h3 className='text-white mt-5 pt-5 me-5 pe-5  selfnameH'>Ritesh Dafale    </h3>
                            <p className='text-white me-5 text-start intro'>I'm an MCA graduate from 2024, passionate about programming and eager to start my career as a Java Developer or Frontend Developer, with strong skills in Java 8, Spring Boot, Spring MVC, and React.</p>
                        </div>
                    </div>
                </div>
                <div className=" container skills " id="education">
                    <div className="row education   mt-5 ">
                        <h3 className='text-white text-decoration-underline'>Education</h3>
                        <div className="col-lg-6 mt-3 text-white text-start maincontent">
                            <div className="Leftline" >
                                <h5 className='mt-3 '>Master of Computer Application</h5>
                                <p>2022 - 2024</p>
                                <p className='lead fst-italic clgpara '>Prof. Ram Meghe Institute of Technology & Research, Amravati.</p>
                                <p>I completed my Master of Computer Applications (MCA) in 2024 . My coursework emphasized advanced programming, software development, and project management, providing a strong foundation for my career in IT.</p>
                            </div>
                            <script>
                                var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
                                offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
                                scrollDuration = 700;
                            </script>
                        </div>
                        <div className="col-lg-6 mt-3  text-white text-start" >
                            <div className="Leftline">
                                <h5 className='mt-3 '>Bachelor of Computer Application</h5>
                                <p>2019 - 2022</p>
                                <p className='lead fst-italic clgpara'>Shri Shivaji Science College , Nagpur</p>
                                <p>Completed my Bachelor of Computer Applications (BCA) from 2019 to 2022, where I developed a strong foundation in programming, software development, and database management.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row skills  text-white  mt-5 ">
                            <h3 className='text-decoration-underline'>Skills</h3>
                            <div className="col-lg-6  ">
                                <div className="progress-bar-container mt-4  ">
                                    <div className="progressContent">
                                        <h2 className=' text-start barFont'>HTML</h2>
                                    </div>
                                    <div className="progress-bar w-auto">
                                        <span className="percentage html progressheight d-flex align-items-center flex-row-reverse pe-1  ">
                                            <div className='persentFont'>80%</div>
                                        </span>
                                    </div>
                                </div>
                                <div className="progress-bar-container  ">
                                    <h2 className=' text-start barFont'>CSS</h2>
                                    <div className="progress-bar w-auto">
                                        <span className="percentage css progressheight d-flex align-items-center flex-row-reverse pe-1 ">
                                            <div className='persentFont'>80%</div>
                                        </span>
                                    </div>
                                </div>
                                <div className="progress-bar-container barFont ">
                                    <h2 className=' text-start'>Javascript</h2>
                                    <div className="progress-bar w-auto">
                                        <span className="percentage js progressheight d-flex align-items-center flex-row-reverse pe-1 ">
                                            <div className='persentFont'>67%</div>
                                        </span>
                                    </div>
                                </div>
                                <div className="progress-bar-container  ">
                                    <h2 className=' text-start barFont'>Bootstrap</h2>
                                    <div className="progress-bar w-auto">
                                        <span className="percentage bootstrap progressheight d-flex align-items-center flex-row-reverse pe-1 ">
                                            <div className='persentFont'>70%</div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  ">
                                <div className="progress-bar-container mt-4  ">
                                    <h2 className=' text-start barFont'>Core Java</h2>
                                    <div className="progress-bar w-auto">
                                        <span className="percentage corejava progressheight d-flex align-items-center flex-row-reverse pe-1 ">
                                            <div className='persentFont'>90%</div>
                                        </span>
                                    </div>
                                </div>
                                <div className="progress-bar-container  ">
                                    <h2 className=' text-start barFont'>Spring MVC</h2>
                                    <div className="progress-bar w-auto">
                                        <span className="percentage mvc progressheight d-flex align-items-center flex-row-reverse pe-1 ">
                                            <div className='persentFont'>70%</div>
                                        </span>
                                    </div>
                                </div>
                                <div className="progress-bar-container barFont ">
                                    <h2 className=' text-start'>Spring Boot</h2>
                                    <div className="progress-bar w-auto">
                                        <span className="percentage boot progressheight d-flex align-items-center flex-row-reverse pe-1 ">
                                            <div className='persentFont'>60%</div>
                                        </span>
                                    </div>
                                </div>
                                <div className="progress-bar-container  ">
                                    <h2 className=' text-start barFont'>Oracle</h2>
                                    <div className="progress-bar w-auto">
                                        <span className="percentage oracle progressheight d-flex align-items-center flex-row-reverse pe-1 ">
                                            <div className='persentFont'>79%</div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  project mt-5" id="projects">
                    <div className="row rowdiv  ">
                        <h3 className='text-white mt-4 mainhead text-decoration-underline ' >Projects</h3>
                        <div className="col-lg-3    text-white   clinicMargin mt-3" >
                            <div className="innerContent bg-secondary">
                                <h5 className='mt-3 text-decoration-underline  '>Clinic Management System</h5>
                                <div className="skills d-flex mt-4 ">
                                    <p className=' bg-primary borderRadius  '>Java</p>
                                    <p className=' bg-primary borderRadius ms-3'>Swing</p>
                                </div>
                                <p className=' para '>The Clinic Management Project is a patient management system initially developed using Java and MySQL Workbench. It efficiently stores patient data in a database</p>

                                < button
                                    className='btn btn-dark rounded-3 clinicbtn '
                                    onClick={() => navigate("/clinic")}>Explore More
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3   text-white     amazon mt-3 ">
                            <div className="innerContent bg-secondary">
                                <h5 className='mt-3 pt-2 text-decoration-underline pb-2  '>Amazon Clone</h5>
                                <div className="skills d-flex mt-4 ">
                                    <p className=' bg-primary borderRadius '>HTML</p>
                                    <p className=' bg-primary borderRadius mx-3'>CSS</p>
                                    <p className=' bg-primary borderRadius'>JS</p>

                                </div>
                                <p className='para'>While learning HTML, CSS, and JavaScript, I am recreating Amazon’s e-commerce platform. This practice project allows me to apply and enhance my web development skills.</p>
                                <button className='btn btn-dark rounded-3 mb-2 Amazonbtn' onClick={() => navigate("/amazon")}> Explore More</button>
                            </div>
                        </div>
                        <div className="col-lg-3    text-white  snake mt-3 ">
                            <div className="innerContent bg-secondary ">
                                <h5 className='mt-3 text-decoration-underline  '>Snake Game</h5>
                                <div className="skills d-flex mt-4 ">
                                    <p className=' bg-primary borderRadius'>Java</p>
                                    <p className=' bg-primary borderRadius ms-3 '>Swing</p>
                                </div>
                                <div className='snakePara'>
                                    <p className=' para  '>During my Java programming for fun , I attempted to create a Snake game using Swing and AWT, snake is controlled by left, right, and up buttons, with key event handling </p>
                                    <button className='btn btn-dark rounded-3  clinicbtn' onClick={() => navigate("/snake")}> Explore More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container border border-white mt-5 bg-white" id="contact">
                    <div className="contactText border-bottom border-primary ">
                        <h3 className='mt-3'>Contact form</h3>
                        <p>Get in touch with us! We'd love to hear from you.</p>
                    </div>
                    {/* CONTACT FORM CODING  */}
                    <div className=" container border w-50 mt-3 bg-dark contactForm text-white mb-3" >
                        <form className="row g-3 " onSubmit={formHandling}>
                            <div className="col-md-6">
                                {/* <label for="inputEmail4" className="form-label">Email</label> */}
                                <input type="text" required placeholder='First Name' className="form-control mt-4" id="firstname"
                                    onChange={(e) => {
                                        setname(e.target.value);
                                        setcontact({
                                            ...contact,
                                            firstname: e.target.value
                                        })


                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                {/* <label for="inputPassword4" className="form-label">Password</label> */}
                                <input type="text" required placeholder='Last Name' className="form-control mt-4" id="lastname"
                                    onChange={(e) => {
                                        setcontact({
                                            ...contact,
                                            lastname: e.target.value
                                        })
                                    }}
                                />
                            </div>
                            <div className="col-12">
                                {/* <label for="inputAddress" className="form-label">Address</label> */}
                                <input type="text" required className="form-control mt-3" id="email" placeholder="Email Address"
                                    onChange={(e) => {
                                        setcontact({
                                            ...contact,
                                            email: e.target.value
                                        })
                                    }}
                                />
                            </div>
                            <div className="col-12">
                                {/* <label for="inputAddress" className="form-label">Address</label> */}
                                <input type="text" required className="form-control mt-3" id="inputAddress" placeholder="Subject"
                                    onChange={(e) => {
                                        setcontact({
                                            ...contact,
                                            subject: e.target.value
                                        })
                                    }}
                                />
                            </div>
                            <div className="col-12">
                                {/* <label for="inputAddress" className="form-label">Address</label> */}
                                <textarea required className="form-control mt-3" placeholder="Message ..." id="message"
                                    onChange={(e) => {

                                        setcontact({
                                            ...contact,
                                            message: e.target.value
                                        })
                                    }}
                                ></textarea>
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center ">
                                <button type="submit" className="btn btn-primary mb-2 mb-3 " >Sign in</button>
                                <button type="reset" className="btn btn-primary mb-2 mb-3 mx-2 " >clear</button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="row secondSession " id="about">
                    <h2 className='text-white mt-5 text-decoration-underline text-decoration-red aboutHead  text-center'>About me</h2>
                    <div className="col intro align-middle w-25  ">
                        <div className="contentAbout text-white mt-5  text-start ms-5   ">
                            <p className='font-monospace.'>Name : Ritesh Dafale</p>
                            <p className=''>Contact no. : 7057746698</p>
                            <p className=''>Email : ritesh.dafale13@gmail.com</p>
                            <p className=''>Website :https://riteshdafale.github.io/PortfolioRD/</p>
                            <p className=''>City : Nagpur , Maharashtra</p>
                        </div>
                    </div>
                    <div className="col text-white  introContent">
                        <div className="rightContent mt-5  w-100 text-start">
                            <h4 className='text-start object-fit-sm-contain  '>Hello There!</h4>
                            <p className='me-5 aboutintro'>My name is Ritesh Dafale, recently completed my MCA in 2024. I have a deep passion for programming, which drives my eagerness to start my career as a Java Developer or Frontend Developer. My academic journey has provided me with a strong foundation in Computer Science, where I’ve developed a solid understanding of key principles and technologies. I’m eager to apply my technical expertise in a professional environment, where I can continue learning and growing as a developer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(First)
