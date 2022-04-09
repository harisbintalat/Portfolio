import React from "react";
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/me.jpeg'
import HeaderSocials from "./headerSocial";
import {GoLocation} from 'react-icons/go'

const Header = () => {

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Haris Bin Talat</h1>
                <h5 className="text-light">Software Engineer</h5>
                <h5 className="text-light"><GoLocation/> Pakistan</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <div className="me-img">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );

}
export default Header;