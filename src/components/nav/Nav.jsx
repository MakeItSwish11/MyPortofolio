import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserAlt, FaBookReader } from 'react-icons/fa';
import { BiBookReader } from 'react-icons/bi';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { BsHeadphones } from 'react-icons/bs';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <FaUserAlt />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBookReader />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <MdOutlineMedicalServices />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BsHeadphones />
        </a>
      </nav>
    </div>
  );
}

export default Nav;
