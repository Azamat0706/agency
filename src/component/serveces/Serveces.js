import React from 'react'
import "./Serveces.css"
import isa from './img3.png'
import iis from './img2.png'
import iss from './img1.png'

const Serveces = () => {
  return (
    <div className='footers1'>
        <h1>We Provide the Best Web services</h1>
      <div className='footers2'>
        <div>
        <img src={isa} alt="" />
        <h1>5200+</h1>
        <p>Projects completed
        </p>
        </div>
        <hr />
        <div>
        <img src={iss} alt="" />
        <h1>500+</h1>
        <p>Active clients</p>
        </div>
        <hr />
        
        <div>
        <img src={iis} alt="" />
        <h1>4500+</h1>
        <p>Happy clients</p>
        </div>

      </div>
      
    </div>
  )
}
export default Serveces