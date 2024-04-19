// src/components/Navbar.jsx

import React from 'react';
import './footer.css';
// src/components/Footer.jsx

const Footer = () => {
  return (
    <div id="footer-style">
      <div class="card-text-center">
        <div class="card-header">
          Makers Of This Website
        </div>
        <div class="card-body">
          <h5 class="maker-name">Aayush Bhadula</h5>
          <h5>|</h5>
          <h5 class="maker-name">Archit Aggarwal</h5>
          <h5>|</h5>
          <h5 class="maker-name">Arya Gupta</h5>
          <h5>|</h5>
          <h5 class="maker-name">Aditya Tyagi</h5>
        </div>
        <div class="card-footer-text-body-secondary">
          @2024 Copyright By Innovate | Powered by Hackathon
        </div>
      </div>
    </div>
  );
};

export default Footer;
