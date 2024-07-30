import React from 'react';
import "./follor.css"
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'

const Follow = () => {
  return (
    <div className='follow'>
      <h1>Testimonials</h1>
      <div className='img '>
        <div className='imgs'>
          <div className='div1'></div>
          <div className='div2'></div>
          <img className='img1' src={img2} alt="" />
          <img  className='img2'  src={img1} alt="" />
          <img  className='img3' src={img3} alt="" />
          <img className='img4'  src={img5} alt="" />
          <img  className='img5' src={img4} alt="" />
          <img  className='img6' src={img6} alt="" />
          <div className='div3'></div>
          <div className='div4'></div>
        </div>
      </div>

    </div>
  );
}

export default Follow;
