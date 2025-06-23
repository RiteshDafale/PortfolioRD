import React, { useState } from 'react'
// import './skills.css'

function Skills() {
  const [isHoverhtml, setisHoverhtml] = useState(false);
  const [isHovercss, setisHovercss] = useState(false);
  const [isHoverjs, setisHoverjs] = useState(false);
  const [isHoverbs, setisHoverbs] = useState(false);
  const [isHovercorejava, setisHovercorejava] = useState(false);
  const [isHoverspring, setisHoverspring] = useState(false);
  const [isHoverreact, setisHoverreact] = useState(false);
  const [isHoveroracle, setisHoveroracle] = useState(false);
  const [isHoverspringMVC, setisHoverspringMVC] = useState(false);

  return (
    <div className='text-light my-5 '>
      <div className="container my-3 ">
        <h4 className='text-start'>Technologies are used</h4>
        <p className='text-start'>Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</p>
        <div className="row">
          <div className="">
            <div className="skillbtn text-start m-0  d-flex justify-content-center row " >
              <div className='d-flex  d-flex align-items-center  '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHoverhtml ? "black" : "",
                  border: isHoverhtml ? "2px solid white" : "1px solid black"
                }}
                onMouseOver={() => {
                  setisHoverhtml(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHoverhtml(false)
                }}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256" alt="someissue" style={{ width: "2vw", height: "3vh" }}></img>
                <button className='  '>HTML</button>
              </div>
              {/*  CSS BUTTON */}
              <div className='d-flex d-flex align-items-center justify-content-center p-1 mx-2 '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHovercss ? "black" : "",
                  border: isHovercss ? "2px solid white" : "1px solid black"
                }}
                onMouseOver={() => {
                  setisHovercss(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHovercss(false)
                }}>
                <img src="https://icon2.cleanpng.com/20180420/sue/avuzxc7c9.webp" alt="someissue" style={{
                  width: "2vw", height: "3vh"
                }}></img>
                <button className='ms-2'>CSS</button>
              </div>
              {/* JAVASCRIPT */}
              <div className='d-flex d-flex align-items-center p-2 mx-1 '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHoverjs ? "black" : "",
                  border: isHoverjs ? "2px solid white" : "1px solid black"
                }}
                onMouseOver={() => {
                  setisHoverjs(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHoverjs(false)
                }}>
                <img src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png" alt="someissue" style={{
                  width: "2vw", height: "3vh"
                }}></img>
                <button className=''>JavaScript</button>
              </div>
              <div className='d-flex  d-flex align-items-center p-2 mx-2 '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHoverbs ? "black" : "",
                  border: isHoverbs ? "2px solid white" : "1px solid black",
                }}
                onMouseOver={() => {
                  setisHoverbs(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHoverbs(false)
                }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="someissue" style={{
                  width: "2vw", height: "3vh"
                }}></img>
                <button className=' '>Bootstrap</button>
              </div>
              <div className='d-flex   d-flex align-items-center pe-2 mx-2 '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHovercorejava ? "black" : "",
                  border: isHovercorejava ? "2px solid white" : "1px solid black"
                }}
                onMouseOver={() => {
                  setisHovercorejava(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHovercorejava(false)
                }}>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt="someissue" style={{ width: "4vw", height: "6vh" }}></img>
                <button className='  '>Core Java</button>
              </div>
              {/*  spring BUTTON */}
              <div className='d-flex   d-flex align-items-center p-2 mx-2 '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHoverspring ? "black" : "",
                  border: isHoverspring ? "2px solid white" : "1px solid black"
                }}
                onMouseOver={() => {
                  setisHoverspring(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHoverspring(false)
                }}>
                <img src="https://cdn.worldvectorlogo.com/logos/spring-3.svg" alt="someissue" style={{
                  width: "2vw", height: "3vh"
                }}></img>
                <button className='ms-2  '>Spring</button>
              </div>
              {/* JAVASCRIPT */}
              <div className='d-flex   d-flex align-items-center p-2 mx-1 '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHoverspringMVC ? "black" : "",
                  border: isHoverspringMVC ? "2px solid white" : "1px solid black"
                }}
                onMouseOver={() => {
                  setisHoverspringMVC(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHoverspringMVC(false)
                }}>
                <img src="https://cdn.worldvectorlogo.com/logos/spring-3.svg" alt="someissue" style={{
                  width: "2vw", height: "3vh"
                }}></img>
                <button className='ms-2  '>Spring MVC</button>
              </div>
              <div className='d-flex   d-flex align-items-center p-2 mx-1 '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHoveroracle ? "black" : "",
                  border: isHoveroracle ? "2px solid white" : "1px solid black"
                }}
                onMouseOver={() => {
                  setisHoveroracle(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHoveroracle(false)
                }}>
                <img src="https://brandlogos.net/wp-content/uploads/2021/10/oracle-logo-symbol-vector.png" alt="someissue" style={{
                  width: "2vw", height: "3vh"
                }}></img>
                <button className='ms-2  '>Oracle</button>
              </div>
              <div className='d-flex   d-flex align-items-center p-2 mx-1 '
                role='button'
                style={{
                  width: "fit-content",
                  backgroundColor: isHoverreact ? "black" : "",
                  border: isHoverreact ? "2px solid white" : "1px solid black"
                }}
                onMouseOver={() => {
                  setisHoverreact(true)
                  console.log("Mouse enter");
                }}
                onMouseLeave={() => {
                  setisHoverreact(false)
                }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png" alt="someissue" style={{
                  width: "2vw", height: "3vh"
                }}></img>
                <button className='ms-2  '>React</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
