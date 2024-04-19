import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 // Adjust the path as needed
import banner01 from '../assets/Banner_image/banner01.jpg';
import banner02 from '../assets/Banner_image/banner02.jpg'; // Adjust the path as needed
import banner03 from '../assets/Banner_image/banner03.jpg'; // Adjust the path as needed
import b1 from '../assets/Banner_image/banner011.png'; // Adjust the path as needed
import b2 from '../assets/Banner_image/banner02.png'; // Adjust the path as needed
import b3 from '../assets/Banner_image/banner03.png'; // Adjust the path as needed

import './carousel.css';
const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div>
      
      <Slider id="slide" {...settings}>
        <div>
          <img src={b1} alt="Banner 1" />
        </div>
        <div>
          <img src={b2} alt="Banner 2" />
        </div>
        <div>
          <img src={b3} alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
