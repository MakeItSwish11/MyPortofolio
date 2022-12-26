import React from 'react';
import './contact.css';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:syafiqammar17@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:syafiqammar17@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+6285782401874</h5>
            <a href="mailto:syafiqammar17@gmail.com">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Your Full Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
