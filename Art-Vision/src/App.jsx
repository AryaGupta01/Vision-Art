import { useState } from "react";

import "./App.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Fileinput from './component/Fileinput';
import Carousel from './component/Carousel';
import Card from './component/Card';
import Cardimg1 from './assets/GNDU/img01.jpg';
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
    <div id="main">
    <div id="page1">
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
      
      
        <Carousel id="banner"/>
      </div>
      <div id="page2">
        <div id="feat-art">Featured Artworks</div>
        <div>
      {/* Other components in your app */}
      <Card class="card" image={Cardimg1} imageName="image1" artistName="ayush" prize="Rs 300" />
      <Card class="card" image={Cardimg1} imageName="image1" artistName="ayush" prize="Rs 300" />
      <Card class="card" image={Cardimg1} imageName="image1" artistName="ayush" prize="Rs 300" />
      <Card class="card" image={Cardimg1} imageName="image1" artistName="ayush" prize="Rs 300" />
    </div>
        <Fileinput/>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
