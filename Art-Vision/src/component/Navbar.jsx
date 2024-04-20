import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const subCategories = [
  { id: 1, name: 'Painting', link: '/category/painting' },
  { id: 2, name: 'Sculpture', link: '/category/sculpture' },
  { id: 3, name: 'Photography', link: '/category/photography' },
];

const Navbar = () => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const handleMouseEnter = () => setIsSubNavOpen(true);
  const handleMouseLeave = () => setIsSubNavOpen(false);

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li
          onMouseEnter={handleMouseEnter}
          
          className={isSubNavOpen ? 'category-active' : ''} // Add active class for styling
        >
          <div id="category" href="/category">Category</div>
          {isSubNavOpen && ( // Conditionally render sub-navbar
            <ul onMouseLeave={handleMouseLeave} className="sub-nav">
              {subCategories.map((category) => (
                <li key={category.id}>
                  <Link to={category.link}>{category.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><Link to="/style">Style</Link></li>
        <li><Link to="/artist">Artist</Link></li>
        <li><Link to="/exhibition">Exhibition</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav></>
  );
};

export default Navbar;