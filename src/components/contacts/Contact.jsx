import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {BsMessenger} from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0fl4ozy', 'template_qhlb384', form.current, '9wmEcSIhlzhZYgrqL')
    .then((result) => {
        console.log(result.text);
        console.log("Thank you for getting in touch. I will get back to you asap")
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

  return (
  <section id='contact' >
    <h5>Get in touch</h5>
    <h2>Contact me</h2>

    <div className="container contact__container">

      <div className="contact__options">

        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>elethusontsele@gmail.com</h5>
          <a href='mailto:elethusontsele@gmail.com'>Send a message</a>
         </article>

         <article className="contact__option">
          <BsMessenger className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>elethusontsele@gmail.com</h5>
          <a href='mailto:elethusontsele@gmail.com' target="_blank" >Send a message</a>
         </article>

         <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>0629211632</h5>
          <a href='https://api.whatsapp.com/send?phone=+27629211632' target="_blank" >Send a message</a>
         </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Please enter your name" required/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder="Please enter your email address" required />
      <label>Message</label>
      <textarea name="message" placeholder="Please enter message" required />
      <input className='send__button' type="submit" value="Send message" />
    </form>
    </div>
</section>
  )
};

export default Contact;
