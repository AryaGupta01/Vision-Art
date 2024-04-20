// ArtistPage.js

import React from 'react';
import './Exhibition.css';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import img1 from '../assets/Banner_image/banner01.png';
import img2 from '../assets/Banner_image/banner02.png';
import img3 from '../assets/Banner_image/banner03.png';
import art1 from '../assets/exhibition-images/art1.jpg';
import art2 from '../assets/exhibition-images/art2.jpeg';
import art3 from '../assets/exhibition-images/art2.jpg';
import art4 from '../assets/exhibition-images/art3.jpg';
import art5 from '../assets/exhibition-images/art4.jpg';
import art6 from '../assets/exhibition-images/art5.jpg';
import art7 from '../assets/exhibition-images/art6.jpeg';
import art8 from '../assets/exhibition-images/art2.jpeg';
// import art9 from '../assets/exhibition-images/art8.jpg';

const Exhibition = () => {
  return (
    <div>
      <Menu />
      <div class="grid">
        <img src={img1} class="rounded" alt="..." />
        <img src={img2} class="rounded" alt="..." />
        <img src={img3} class="rounded" alt="..." />
      </div>
      <div class="grid">
        <img src={art1} class="rounded" alt="..." />
        <img src={art2} class="rounded" alt="..." />
        <img src={art3} class="rounded" alt="..." />
      </div>
      <div class="grid">
        <img src={art4} class="rounded" alt="..." />
        <img src={art5} class="rounded" alt="..." />
        <img src={art6} class="rounded" alt="..." />
      </div>
      <div class="grid">
        <img src={art8} class="rounded" alt="..." />
        <img src={img2} class="rounded" alt="..." />
        <img src={img3} class="rounded" alt="..." />
      </div>
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default Exhibition;
