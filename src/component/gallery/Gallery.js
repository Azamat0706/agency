import React from 'react'
import img1 from "./im1.png"
import img5 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img2 from "./img5.png"
import img6 from "./img7.png"
import "./gallery.css"
const Gallery = () => {
  return (
    <div className='gallery1'>
      <h1>Our Creative Latest Projects
      </h1>
      <div className='gallery2'>
      <div className='gap'>
          <img src={img1} alt="" />
          <h5>Business Consultant Landing Page</h5>
        </div>  <div className='gap'>
          <img src={img2} alt="" />
          <h5>Food delivery Web Design</h5>
        </div>  <div className='gap'>
          <img src={img3} alt="" />
          <h5>Messenger landing Page</h5>
        </div>  <div className='gap '>
          <img src={img4} alt="" />
          <h5>Doctor’s Consultant Landing Page</h5>
        </div>  <div className='gap '>
          <img src={img6} alt="" />
          <h5>e-Leraning Web Design</h5>
        </div>  <div className='gap'>
          <img src={img5} alt="" />
          <h5>Job Finder landing Page</h5>
        </div>
      </div>
      <button className='Btns'>View all Projects</button>
    </div>
  )
}

export default Gallery