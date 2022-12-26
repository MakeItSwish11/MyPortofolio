import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa"
import {BsInstagram, BsTwitter} from "react-icons/bs"


function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Syafiq Ammar Izzudin</a>

      <ul className='flinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><FaFacebookF/></a>
        <a href=""><BsTwitter/></a>
        <a href=""><BsInstagram/></a>
      </div>

    </footer>
  )
}

export default Footer