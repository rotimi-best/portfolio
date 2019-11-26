import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import './SideBar.css';
import logo from '../../assets/logo-white.png';

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="Header">
        <img src={logo} alt="logo" />
        <p>Rotimi <span>Best</span></p>
      </div>
      <div className="Footer">
        <div className="Contact">
          <p className="ContactTitle">Email</p>
          <p className="ContactInfo">test@gmail.com</p>
        </div>
        <div className="Contact">
          <p className="ContactTitle">Phone</p>
          <p className="ContactInfo">0909486040</p>
        </div>
        <div className="Contact">
          <p className="ContactTitle">Find me on</p>
          <div className="ContactSocialMedia">
            <a className="linkedin" href="https://www.linkedin.com/in/best-rotimi-7487b283/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a className="facebook" href="https://www.facebook.com/rotimiibitoye.best" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a className="twitter" href="https://twitter.com/rotimi_best" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a className="github" href="https://github.com/rotimi-best" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
