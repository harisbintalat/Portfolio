import React, {useRef} from "react";
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import  {AiOutlinePhone} from 'react-icons/ai'
import  {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_aozzrwy', 'template_ippwt22', form.current, 'junhlTYqASKgaZv0U')
      alert("Your message has been sent. Thank you for reaching out.")
      form.current.reset();
    }

    return(
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>rajaharisbintalat@yahoo.com</h5>
                        <a href="mailto:rajaharisbintalat@yahoo.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+923065800787</h5>
                        <a href="https://api.whatsapp.com/send?phone=+923065800787" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <AiOutlinePhone className="contact__option-icon"/>
                        <h4>Phone no.</h4>
                        <h5>+923065800787</h5>
                        <a href="tel:+923065800787">Call</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your full name" required />
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );

}
export default Contact;