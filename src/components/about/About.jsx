import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {MdOutlineMiscellaneousServices} from 'react-icons/md'

const About = () => {
  return (
   <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='about image' />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card' >
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>1+ Years working</small>
           </article>
           <article className='about__card' >
            <FaUsers className='about__icon' />
            <h5>Clients</h5>
            <small>50+ worldwide </small>
           </article>
           <article className='about__card' >
            <MdOutlineMiscellaneousServices className='about__icon' />
            <h5>Projects</h5>
            <small> 10+ projects completed</small>
           </article>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam fuga velit ducimus magnam voluptates ipsum. 
          Sapiente, dolore? Ut sequi ipsa aperiam consequuntur. Numquam fugiat labore est, adipisci facilis maiores expedita!
        </p>
        <a href='#contact' className='btn btn-primary' >Let's us talk more</a>
      
    </div>
      </div>
   </section>
  )
}

export default About
