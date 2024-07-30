import React from 'react'
import "./header.css"
import img1 from "./Logo.png"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
const Header = () => {
  return (
   <header>
      <nav>
       <div className='flex'>
       <img src={img1} alt="" />
       <h2>Designzcy</h2>
       </div>
            <div class="menu">
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
            </div>
            <button className='buttons'>Contact us</button>
        </nav>
   </header>
  )
}
export default Header