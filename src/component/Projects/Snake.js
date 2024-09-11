import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import snake from '../Photos/snake-game-video.mp4'
import Footer from '../Footer/Footer'

function Snake() {
  useEffect(() => {
   document.title="Snake Game"
  
  
  }, [])
  
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-dark text-white" >
        <div className="container">
          <div className="video d-flex flex-column justify-content-center align-items-center " >
            <h4 className='text-white mt-4 text-decoration-underline'>Snake Game</h4>
            <video src={snake} className="object-fit-contain mt-3" controls></video>
          </div>
          <hr />
          <div className="text  d-flex justify-content-center">
            <div class=" alert alert-info " role="alert">
              <h4 class="alert-heading text-start">Snake Game</h4>
              <p className='text-start'><strong>Skills</strong> : Swing and AWT</p>
              <hr />
              <div className="bottomtext d-flex flex-column">
                <p class="mb-0 text-start">During my Java programming for fun, I attempted to create a Snake game
                  using Swing and AWT. In this game, the snake is controlled by buttons for
                  moving left, right, up, and down. Additionally, whenever the snake consumes
                  an enemy, the score increases.</p>
                <hr />
                <div className="links   d-flex justify-content-between ">
                  <div className="first">
                    <a href="https://github.com/RiteshDafale/Snake-Game" className="githublink text-start mx-2 " > Github  </a>
                    <a className='text-dark text-decoration-none ' href="#"> Linkedin  </a>
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
export default Snake