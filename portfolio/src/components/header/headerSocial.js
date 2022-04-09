import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {

return(
    <div className="header__socials">
    <a  href="https://www.linkedin.com/in/haris-bin-talat-0142741a6/" target="_blank"><BsLinkedin size={30}/></a>
    <a  href="https://github.com/harisbintalat" target="_blank"><BsGithub size={30}/></a>
    
</div>
);

}
export default HeaderSocials