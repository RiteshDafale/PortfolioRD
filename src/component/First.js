import react, { useEffect, memo, useState, useRef } from 'react'
import mypic from '../component/Photos/Myphoto.jpg'
import '../component/First.css'
import { useNavigate, useNavigation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { animate, stagger, createDraggable, utils } from 'animejs';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Forms from './Forms/Forms';

function First() {
    const paragraphRef = useRef(null);
    useEffect(() => {
        toast.info("Welcome to Ritesh Dafale's Portfolio! Explore my work and projects.")
        document.title = "Ritesh Portfolio"

        const container = document.querySelector('.grid');
        const draggableElement = document.querySelector('.Photo');

        if (container && draggableElement) {
            createDraggable('.Photo', {
                // container: '.grid',
                // containerFriction: 0,
            });
        }


        const margin = 100; // Optional margin from the edges

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const xMin = -windowWidth / 1 + margin;
        const xMax = windowWidth / 1 - margin;

        const yMin = -windowHeight / 1 + margin;
        const yMax = windowHeight / 1 - margin;

        createDraggable('.Photo', {
            modifier: utils.wrap(xMin, xMax), // Global to both x and y
            x: { modifier: utils.wrap(yMin, yMax) }, // Specific to x 
        });
        animate('.square', {
            boxShadow: [
                {
                    to: stagger([1, .25], {
                        modifier: v => `0 0 ${v * 60}px ${v * 5}px currentColor`,
                        from: 'center'
                    })
                },
                {
                    to: stagger([1, .25], {
                        modifier: v => `0 0 ${v * 20}px ${v * 3}px currentColor`,
                        from: 'center'
                    })
                },
            ],
            delay: stagger(100, { from: 'center' }),
            loop: false
        });
     
    }, [])

    const [contact, setcontact] = useState([]);
    const [name, setname] = useState("");


    const formHandling = (e) => {
        e.preventDefault();
        console.log(contact)
        sentDetails(contact);
         toast.success(`Thank you, ${name} ! We\'ll  be in touch soon`, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "light",
                    className: "toast-message",

                });
    }

    const sentDetails = (data) => {
        // axios.post(`${baseurl}/addcontact`, data).then(   // not working 404 error
        axios.post("http://localhost:1303/addcontact", data).then(   // dout in data
            (Response) => {
                toast.success(`Thank you, ${name} ! We\'ll  be in touch soon`, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "light",
                    className: "toast-message",

                });
            },
            (error) => {
                toast.error('Data issue. Please try again.', {
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

        const letters = 'Animate Me'.split('');
    }
    const navigate = useNavigate();
    return (
        <div className=''>
            <div className="  container-fluid text-center bg-dark w-100  " id="intro">
                <h5 className="text-danger ">Under Maintainence , Developer is reconstruct the website </h5>
                <div className=" firstSession w-100">
                    <div className="  row  firstrow ">
                        <div className=" col  mt-5  image d-flex  justify-content-center w-25  photocol">
                            <div className='  innerPhotoImage ' >
                                <img src={mypic} alt='Some problem' className='Photo draggable photo mt-3 rounded-circle'></img>
                            </div>
                        </div>

                        <div className="col mt-5 d-flex flex-column justify-content-center align-items-center    position-relative w-75 contentcol  ">
                            <h3 className='text-white mt-3 '> Ritesh Dafale  </h3>
                            <p className='textAnimation text-white  text-start intro  p-3'>I'm an MCA graduate from 2024, passionate about programming and eager to start my career as a Java Developer or Frontend Developer, with strong skills in Java 8, Spring Boot, Spring MVC, and React.</p>

                        </div>
                    </div>
                </div>          

                <div className=" container skills " id="education">
                    <div className="row education   mt-5 ">
                        <h3 className='text-white text-decoration-underline p-3 square'>Education</h3>
                        <div className="col-lg-6 mt-3 text-white text-start maincontent">
                            <div className="Leftline" >
                                <h5 className='mt-3   '>Master of Computer Application</h5>
                                <p className=' '>2022 - 2024</p>
                                <p className='  '>Prof. Ram Meghe Institute of Technology & Research, Amravati.</p>
                                <p>I completed my Master of Computer Applications (MCA) in 2024 . My coursework emphasized advanced programming, software development, and project management, providing a strong foundation for my career in IT.</p>
                            </div>

                        </div>

                        <div className="col-lg-6 mt-3  text-white text-start" >
                            <div className="Leftline">
                                <h5 className='mt-3 '>Bachelor of Computer Application</h5>
                                <p className=''>2019 - 2022</p>
                                <p className=''>Shri Shivaji Science College , Nagpur</p>
                                <p>Completed my Bachelor of Computer Applications (BCA) from 2019 to 2022, where I developed a strong foundation in programming, software development, and database management.</p>
                            </div>
                        </div>
                    </div>

                   <Skills />
                    <Forms/>
                   <Project/>
         
                </div>
                <div className="  project mt-5" id="projects">
                    <div className="container-fluid row rowdiv  ">
                        <h3 className=' text-white mt-4 mainhead text-decoration-underline p-3 square                       
                        ' >Projects</h3>
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
