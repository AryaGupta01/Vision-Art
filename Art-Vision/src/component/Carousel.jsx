import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner01 from '../assets/Banner_image/banner01.jpg'; // Adjust the path as needed
import banner02 from '../assets/Banner_image/banner02.jpg'; // Adjust the path as needed
import banner03 from '../assets/Banner_image/banner03.jpg'; // Adjust the path as needed
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
      <h2>Carousel</h2>
      <Slider {...settings}>
        <div>
          <img src={banner01} alt="Banner 1" />
        </div>
        <div>
          <img src={banner02} alt="Banner 2" />
        </div>
        <div>
          <img src={banner03} alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
