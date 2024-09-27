/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { FaGithub,FaLinkedinIn, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'; 
import '../assets/scss/Global.scss'

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className='Copyright'>
        &copy; {new Date().getFullYear()} Junaid Nayeem . All Rights Reserved.
      </div>
      <div className='SocialLinks'>
        <a href="https://github.com/JunaidNayeem" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/junaid-nayeem-51041a16a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="mailto:youremail@example.com">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100012677851314" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
