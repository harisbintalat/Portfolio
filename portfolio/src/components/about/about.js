import React from "react";
import './about.css'
import ME from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {

    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Img" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>10 worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>12+ on github</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. 
                        Voluptatum ducimus voluptates voluptas?
                        </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );

}
export default About;