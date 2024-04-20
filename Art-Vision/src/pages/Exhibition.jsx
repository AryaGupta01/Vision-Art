// ArtistPage.js

import React from 'react';
import './Exhibition.css';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import img1 from '../assets/Banner_image/banner01.png';
import img2 from '../assets/Banner_image/banner02.png';
import img3 from '../assets/Banner_image/banner03.png';

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
        <img src={img1} class="rounded" alt="..." />
        <img src={img2} class="rounded" alt="..." />
        <img src={img3} class="rounded" alt="..." />
      </div>
      <div class="grid">
        <img src={img1} class="rounded" alt="..." />
        <img src={img2} class="rounded" alt="..." />
        <img src={img3} class="rounded" alt="..." />
      </div>
      <div class="grid">
        <img src={img1} class="rounded" alt="..." />
        <img src={img2} class="rounded" alt="..." />
        <img src={img3} class="rounded" alt="..." />
      </div>
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default Exhibition;
