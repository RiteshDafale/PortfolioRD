import React, { useState } from 'react'
import axios from 'axios';
import './Forms.css'

function Forms() {

  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const [contact, setcontact] = useState([]);


  const Contactdetails = (e) => {
    e.preventDefault();
    console.log(contact);
    //  console.log("Firstname - useState value = ",Firstname);
    //  console.log("Lastname - useState value = ",Lastname);
    //  console.log("Email - useState value = ",Email);
    //  console.log("Subject - useState value = ",Subject);
    //  console.log("Message - useState value = ",Message);

    // localhost:1303/addcontact?firstname=${Firstname}&lastname=${Lastname}&email=&{Email}&Subject=${Subject}&message=&{Message}

    axios.post(`http://localhost:1303/addcontact`,contact)
    .then((resp)=>{
        console.log("data sent successdully ...")
        console.log(resp);        
    })
    .catch((error)=>{
      console.log("error = "+error);
      

    })

  }




  return (
    <div>
      <div className="container  d-flex flex-column justify-content-center align-items-center  ">
        <div className="terminam ">
          <h3 className='text-light text-decoration-underline'>Contact Form</h3>
          <div className="subcontainer p-2  ">
            {/* <p className='text-light'>rwjhgrwhgh</p> */}
            <div className='formCont '>
              <form onSubmit={Contactdetails}>
                <div className="nameInput ">
                  <input type="text" placeholder="first name ..." id="firstname" className='text-light ps-2'
                    onChange={(e) => {
                      setFirstname(e.target.value)
                      setcontact({
                        ...contact,
                        firstname: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="nameInput">
                  <input type="text" placeholder="Last name ..."
                    className='text-light ps-2'
                    id="lastname"
                    onChange={(e) => {
                      setLastname(e.target.value)
                      setcontact({
                        ...contact,
                        lastname: e.target.value,
                      })
                    }}

                  />
                </div>
                <div className="nameInput">
                  <input type="text" placeholder="Email ..."
                    className='text-light ps-2'
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setcontact({
                        ...contact,
                        email: e.target.value,
                      })
                    }}

                  />
                </div>
                <div className="nameInput">
                  <input type="text" placeholder="Subject ..."
                    className='text-light ps-2'
                    id="Subject"
                    onChange={(e) => {
                      setSubject(e.target.value);
                      setcontact({
                        ...contact,
                        Subject: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="nameInput">
                  <textarea type="text" placeholder="Message ..."
                    className='text-light ps-2'
                    id="message"
                    onChange={(e) => {
                      setMessage(e.target.value)
                      setcontact({
                        ...contact,
                        message: e.target.value,
                      })
                    }}

                  />
                </div>
                <div className="btn">
                  <button type='submit' className=' btn btn-primary my-3' >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Forms
