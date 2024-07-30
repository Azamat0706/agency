import React from 'react'
import "./testimonials.css"
const Testimonials = () => {
  return (
    <div className='contact1'>
      <h1>Contact Us</h1>
      <form>
     <div className='contact2'>
     <div  className='input'>
      <h3>Full Name</h3>
      <input type="text " placeholder='Enter your full name' />
      </div>   
      <div className='input'>
      <h3>Email Address</h3>
      <input type="email" placeholder='Enter  your mail' />
      </div> 
      <div className='input'>
      <h3>Deadline</h3>
      <input type="text " placeholder='Projects deadline' />
      </div>
       <div className='input'>
      <h3>Budget</h3>
      <input type="email" placeholder='Enter  your budget' />
      </div>
     </div>
     <div className='input1'>
     <h2>WRITE US</h2>
     <input type="email" placeholder='Enter message here......' />

     </div>
    <div className='btnss'>
    <button className='btns'>Submit project</button>
    </div>
      </form>
    </div>
  )
}
export default Testimonials