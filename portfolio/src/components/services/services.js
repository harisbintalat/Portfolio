import React from "react";
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {

    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="services">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Prototyping</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Responsive Web Design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Mobile App Design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>User Personas and Scenario Building </p>
                        </li>
                    </ul>
                </article>

                <article className="services">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Full-Stack Web Development.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>E-commerce Applications.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Content Management Systems (CMS)</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Web Support and Maintenance.</p>
                        </li>
                    </ul>
                </article>

                <article className="services">
                    <div className="service__head">
                        <h3>Digital Marketing</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Social Media Marketing</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Google Ads</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );

}
export default Services;