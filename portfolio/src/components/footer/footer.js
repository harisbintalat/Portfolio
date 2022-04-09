import React from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {

    return(
        <footer>
          <a href="" className="footer__logo">HARIS BIN TALAT SHOAIB</a>
          <ul className="permalinks">
              <li><a href="#"/>Home</li>
              <li><a href="#about"/>About</li>
              <li><a href="#experience"/>Experience</li>
              <li><a href="#services"/>Services</li>
              <li><a href="#portfolio"/>Portfolio</li>
              <li><a href="#contact"/>Contact</li>
          </ul>

          <div className="footer__socails">
              <a href="https://facebook.com/haris.bintalat"><FaFacebookF/></a>
              <a href="https://instagram.com/iamharisraja"><FiInstagram/></a>
              <a href="https://twitter.com/iamharisraja" ><IoLogoTwitter/></a>
          </div>
          <div className="footer__copyright">
              <small>© Haris Bin Talat. All rights reserved.</small>
          </div>
        </footer>
    );

}
export default Footer;