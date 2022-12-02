import React from 'react';

import './header.css';
import CTA from '../CTA';
import ME from '../../assets/me.png';
import HeaderSocials from '../HeaderSocials';

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I am</h5>
      <h1>Lona Sontsele</h1>
      <h3 className='text-light'> Web developer</h3>
      <h5 className= "text__front">
        Focusing on Front-End, with Back-End experience too
      </h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={ME} alt="Lona Sontsele" />
      </div>
      <a href='#contact' className='scroll__down' >Scroll down</a>

    </div>
   </header>
  )
}

export default Header
