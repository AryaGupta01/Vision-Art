import { useState } from "react";

import "./App.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Fileinput from './component/Fileinput';
import Carousel from './component/Carousel';

const Home = () => <h1>Home Page</h1>;
const Category = () => <h1>Category Page</h1>;
const Style = () => <h1>Style Page</h1>;
const Artist = () => <h1>Artist Page</h1>;
const Exhibition = () => <h1>Exhibition Page</h1>;
const ContactUs = () => <h1>Contact Us Page</h1>;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
      
      
        <Carousel id="banner" />
      
      <Fileinput/>
      <Footer />
    </>
  );
}

export default App;
