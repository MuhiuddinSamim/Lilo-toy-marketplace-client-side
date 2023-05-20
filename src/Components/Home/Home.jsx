import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


import img from '../../assets/pexels-markus-spiske-242200.jpg'
import img1 from '../../assets/pexels-rahul-pandit-1863235.jpg'
import img2 from '../../assets/pexels-mike-bird-132539.jpg'
import img3 from '../../assets/pexels-revac-fil.jpg'
import img4 from '../../assets/pexels-the-lazy-artist-gallery-2527931.jpg'
import img5 from '../../assets/pexels-omar-ramadan-6642328.jpg'
import img6 from '../../assets/pexels-ryutaro-tsukata-5472259.jpg'
import GalleryImg from "./GalleryImg";

const Home = () => {
    return (
        
        <div>
          <div className="md:flex mx-20">
            <div className="md:w-2/4 sm:py-20 md:py-16">
                <h3 className=" text-3xl font-bold text-yellow-500  "> Lets Grow with Lilo.</h3>
                <h2 className="text-5xl text-fuchsia-700 font-bold py-6"> Biggest Car,bus & truck Showpiece </h2>
            <p>Lilo is a toy shop that is dedicated to providing children with the best possible toy Showpiece. We have a wide variety of toy cars to choose from, including classic cars, sports cars, trucks,jeep,bus and more. We also have a variety of accessories to go along with our toys, such as garages, tracks, and playsets.</p>
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
        <div>
          <h2 className="text-5xl text-center text-fuchsia-700 font-bold py-10 ">Here is Our Collection</h2>
          <GalleryImg></GalleryImg>
        </div>
        </div>
       );
};

export default Home;