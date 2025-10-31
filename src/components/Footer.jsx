import React from 'react'
import Facebook from "../assets/images/Facebook.svg"
import Twitter from "../assets/images/X.svg"
import Linkedin from "../assets/images/linkedin.svg"
import Instagram from "../assets/images/insta.svg"
import Youtube from "../assets/images/youtube.svg"
import Email from "../assets/images/Email.svg"

function Nav() {
  return (
    <div className='bg-[rgba(238,238,238,1)] text-[rgb(119,119,119)] text-base text-center pb-5  '>
        <p  className='p-3'>Rhode Island Hospitality Education Foundation</p>
        <p className='pb-3'>94 Sabra Street, Cranston, RI 02910 <span  >|</span>  Phone: 401-223-1120</p>
<div className='flex justify-center  flex-wrap'>
    <img src={Facebook} alt="facebook" />
    <img src={Twitter} alt="twitter" />
    <img src={Linkedin} alt="linkedin" />
    <img src={Instagram} alt="instagram" />
    <img src={Youtube} alt="youtube" />
    <img src={Email} alt="email" />
</div>
<p className='text-base '>Privacy Policy<span className='m-1'>|</span > Legal <span  className='m-1'>|</span> Sitemap</p>
    </div>
    
  )
}

export default Nav