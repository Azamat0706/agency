import React from 'react'
import './home.css'
import img2 from "./img.png"
 const  Home = () => {
  return (
    <div className='home1'>
     <div className='home01'>
     <div className='home2'>
        <h1>Smart Web</h1> 
        <h1>Design Agency</h1>

        <p>We will provide best web design and business devlopment
        service clients expectation and satisfaction guarantee.</p>
        <button className='Btn'>Free consultation</button>
      </div>
      <div className='home3'>
        <img src={img2} alt="" />
      </div>
     </div>
    </div>
  )
}
export default Home
