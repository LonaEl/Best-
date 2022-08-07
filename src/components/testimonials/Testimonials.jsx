import React from 'react';
import './testimonials.css';
import AV1 from '../../assets/avatar1.jpg';
import AV2 from '../../assets/avatar2.jpg';
import AV3 from '../../assets/avatar3.jpg';
import AV4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
  avatar: AV1,
  name: 'Lona S',
  review: 'Great work, nice working relationship'
},
{
  avatar: AV2,
  name: 'Sontsele Lona',
  review: "Tempore atque ducimus sunt dolor suscipit provident amet error"
},
{
  avatar: AV3,
  name: 'Elethu Faku',
  review:  " Sit amet consectetur adipisicing elit. Ullam placeat fugiat nesciunt et accusamus nostrum."
   
},
{
  avatar: AV4,
  name: 'Emily Jones',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing'
  
},
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
    
      >

        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="client image" /> </div>
                <h5 className='clients__review' >{name}</h5>
                <small className="client__review">
                  {review}
                </small>
           </SwiperSlide>
            )
          } )
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
