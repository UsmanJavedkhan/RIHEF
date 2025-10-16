import React from 'react'
import Facebook from "../assets/images/Facebook.svg"
import Twitter from "../assets/images/X.svg"
import Linkedin from "../assets/images/linkedin.svg"
import Instagram from "../assets/images/insta.svg"
import Youtube from "../assets/images/youtube.svg"
import Email from "../assets/images/Email.svg"

function Nav() {
  return (
    <div className='bg-[rgba(238,238,238,1)] text-[rgb(119,119,119)] text-base text-center mt-10'>
        <p  className='p-3'>Rhode Island Hospitality Education Foundation</p>
        <p className='pb-3'>94 Sabra Street, Cranston, RI 02910 <span  >|</span>  Phone: 401-223-1120</p>
<div className='flex justify-center'>
    <img src={Facebook} alt="facebook" className=' h-15  '/>
    <img src={Twitter} alt="twitter" className=' h-15  '/>
    <img src={Linkedin} alt="linkedin" className=' h-15  '/>
    <img src={Instagram} alt="instagram" className=' h-15  '/>
    <img src={Youtube} alt="youtube" className=' h-15  '/>
    <img src={Email} alt="email" className=' h-15  '/>
</div>
<p className='text-base '>Privacy Policy<span className='m-1'>|</span > Legal <span  className='m-1'>|</span> Sitemap</p>
    </div>
    
  )
}

export default Nav