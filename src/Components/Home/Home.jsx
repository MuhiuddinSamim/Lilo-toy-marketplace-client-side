import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


import img from '../../assets/chris-hardy-H5Ffv4I5ZMI-unsplash.jpg'
import img1 from '../../assets/kid2.avif'
import img2 from '../../assets/kid3.jpg'
import img3 from '../../assets/ryan-wallace-5jtwRBB3CdI-unsplash.jpg'
import img4 from '../../assets/kelly-sikkema-Z9AU36chmQI-unsplash.jpg'
import img5 from '../../assets/ravi-palwe-YBj5U27M5hU-unsplash.jpg'
import img6 from '../../assets/baby-natur-7CA5GfekZ_0-unsplash.jpg'

const Home = () => {
    return (
        <div className="md:flex mx-20">
            <div className="md:w-2/4 sm:py-20 md:py-48">
                <h3 className=" text-5xl font-bold text-yellow-500 py-4 ">Lilo Lets Grow with Together</h3>
            <p>Building a magnificent shop is a child’s play! Lilo comes with an amazing set of remarkable options and easily customizable shop lists & singles that will help you start selling your beautiful items right now!</p>
            </div>
            <div className="md:w-2/4 m-5">
                <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        
         
      </Swiper>
            </div>

        </div>


     
     
    
    );
};

export default Home;