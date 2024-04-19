// src/components/Navbar.jsx

import React from 'react';
// src/components/Navbar.jsx

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/category">Category</a></li>
                <li><a href="/style">Style</a></li>
                <li><a href="/artist">Artist</a></li>
                <li><a href="/exhibition">Exhibition</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
