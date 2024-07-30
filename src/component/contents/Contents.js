import React from 'react'
import photo2 from "./vector2.png"
import photo1 from "./img1.png"
import photo3 from "./vector3.png"

import "./contents.css"

const Contents = () => {
  return (
    <div className='contents'>
      <h1>What Service We’re Offering
      </h1>
     <div className="contents01">
     <div className='contents1'>
        <h3>Website design</h3>
        <p>Need something changed or is there</p>
        <p>something not quite working  the</p>
        <p>  best service </p>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      <div className='contents2'>
        <h3>Web development</h3>
        <p>Need something changed or is there</p>
        <p>something not quite working  the</p>
        <p>  best service </p>
        <i className="fa-solid fa-arrow-right"></i>

      </div>
      <div className='contents3'>
        <h3> Web application</h3>
        <p>Need something changed or is there</p>
        <p>something not quite working  the</p>
        <p>  best service </p>
        <i className="fa-solid fa-arrow-right"></i>

      </div>
     </div>
        <div className='hed1'>
          <img src={photo2} alt="" />
        </div>
        <div className='hed2'>
          <img src={photo1} alt="" />
        </div>
        <div className='hed3'>
          <img className='blac' src={photo3} alt="" />
        </div>
       </div>
  )
}
export default Contents