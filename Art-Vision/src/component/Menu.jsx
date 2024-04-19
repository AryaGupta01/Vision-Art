// ArtistPage.js

import React from 'react';
import './menu.css';
import Navbar from '../component/Navbar';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const Menu = () => {
  return (
    <div>
          <div id="menu-bar">
     <div id="logo">
     </div>
     <div id="nav">
      <Navbar />


      {/* Add other components here as needed */}
     </div>
     <div id="sign-in">
      <SignedOut>
       <SignInButton />
      </SignedOut>
      <SignedIn>
       <UserButton />
      </SignedIn>
     </div>
    </div>
    </div>
  );
}

export default Menu;
