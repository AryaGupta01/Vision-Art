// src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/category">Category</a></li>
        <li><a href="/style">Style</a></li>
        <li><a href="/artist">Artist</a></li>
        <li><a href="/exhibition">Exhibition</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
