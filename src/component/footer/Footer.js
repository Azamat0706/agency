import React from 'react'
import img1 from './Logo.png'
import "./footer.css"
const Footer = () => {
  return (
    <div>
    <div className='sectonss'>
      <div className='secton'>
       <div className='fexx'> <img src={img1} alt="" /> <h4>Designzcy</h4></div>
        <span>Metairie, 3689 Bassel Street, LA, Louisiana</span>
        <span>Contact us: 225-788-5489</span>
        <div className="iconssss">
        <i className="fa-brands fa-square-instagram"></i>
<i className="fa-brands fa-facebook"></i>
<i className="fa-brands fa-square-twitter"></i>
<i className="fa-brands fa-square-youtube"></i>
        </div>
      </div>
      <div className='secton'>
        <h4>Category</h4>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Reviews</a>
        <a href="#">Article</a>
      </div>
      <div className='secton'>
        <h4>About</h4>
        <a href="#">Partners</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
        <a href="#">Community</a>
        <a href="#">Support</a>
      </div>
      <div className='secton'>
        <h4>
        Subscribe newsletter
        </h4>
        <span>Sign up for tips, new offers, and exclusive promos.</span>
        <form >
          <input type="text" placeholder='Enter your email' />
          <button>Subcribe</button>
        </form>
      </div>

    </div>
    <hr />
 <div className='fix'>
 <span>© 2021 Designzcy - All rights reserved.</span>
    <div>
      <a href="#">Privacy</a>
      <a href="#">Security</a>
      <a href="#">Terms</a>
    </div>
 </div>
    </div>
  )
}
export default Footer;
 