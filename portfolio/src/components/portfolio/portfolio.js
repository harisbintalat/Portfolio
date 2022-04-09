import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'

const Portfolio = () => {

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Brain Injury Detection Using Image Classification</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/harisbintalat" className="btn" target="_blank">Github</a>
                        <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Hospital Management System-Angular</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/harisbintalat/Hospital-Management-System-Angular" className="btn" target="_blank">Github</a>
                        <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Restaurant Application-React</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/harisbintalat/Restaurant-App-React" className="btn" target="_blank">Github</a>
                        <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG7} alt="" />
                    </div>
                    <h3>Mcdonalds Website- HTML | CSS | Bootstrap4</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/harisbintalat/McDonalds-Prototype" className="btn" target="_blank">Github</a>
                        <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Restaurant Application-React-Redux</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/harisbintalat/Restaurant-Application-React-Redux" className="btn" target="_blank">Github</a>
                        <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>Restaurant Application-React Native</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/harisbintalat/Restaurant-Management-React-Native" className="btn" target="_blank">Github</a>
                        <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>Hospital Management System-WPF</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/harisbintalat/Hospital-Management-System-WPF" className="btn" target="_blank">Github</a>
                        <a href="#" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );

}
export default Portfolio; 