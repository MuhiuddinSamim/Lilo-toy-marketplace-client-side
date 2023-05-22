import React from 'react';
 import Img1 from '../../gallery-img/g1.jpg'
 import Img2 from '../../gallery-img/g2.webp'
 import Img4 from '../../gallery-img/g3.webp'
import Img6 from '../../gallery-img/p1.jpg'
import Img7 from '../../gallery-img/p2.jpg'
import Img8 from '../../gallery-img/g8.jpg'
import Img9 from '../../gallery-img/g9.jpg'
import Img10 from '../../gallery-img/g10.jpg'
import Img11 from '../../gallery-img/g11.jpg'
import Img13 from '../../gallery-img/g13.jpg'
import Img14 from '../../gallery-img/p3.jpg'
import Img5 from '../../gallery-img/g15.jpg'

const GalleryImg = () => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 mx-12 my-20'>
            <img src={Img4} alt="" />
            <img src={Img2} alt="" />
            <img src={Img1} alt="" />
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
            <img src={Img8} alt="" />
            <img src={Img9} alt="" />
            <img src={Img10} alt="" />
            <img src={Img11} alt="" />
            <img src={Img13} alt="" />
            <img src={Img14} alt="" />
        </div>
    );
};

export default GalleryImg;