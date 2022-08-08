
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {BsMessenger} from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u622dyp', 'template_reiozhg', form.current, 'sjIR-Y29hsSD-7UIN')
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
          <h5 className='email__email-address' >elethusontsele@gmail.com</h5>
          <a href='mailto:elethusontsele@gmail.com'>Send a message</a>
         </article>
         <article className="contact__option">
          <BsMessenger className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5 className='email__email-address' >elethusontsele@gmail.com</h5>
          <a href='mailto:elethusontsele@gmail.com' target="_blank" >Send a message</a>
         </article>
         <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>0629211632</h5>
          <a href='https://api.whatsapp.com/send?phone=+27629211632' target="_blank" >Send a message</a>
         </article>
      </div>

      <form ref={form} onSubmit={sendEmail} >
         <input type="text" name="name" placeholder='Your fullname' required />
         <input type="email" name="email" placeholder='Your email adress' required />
         <textarea name="message" rows="7" placeholder='Enter message' required></textarea>
         <button type='submit' className='btn btn-primary' >Send message</button>

      </form>
    </div>

  </section>
  )
}

export default Contact
