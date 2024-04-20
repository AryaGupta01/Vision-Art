import { useState } from "react";

import "./Home.css";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import Navbar from './component/Navbar';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
// import Fileinput from '../component/Fileinput';
import Carousel from '../component/Carousel';
import Card from '../component/Card';
import Cardimg1 from '../assets/GNDU/img01.jpg';
import artist1img from "../assets/home-images/Artists.jpeg";
import artist2img from "../assets/home-images/artist2.jpg";
import artist3img from "../assets/home-images/artist3.jpg";
import meuseimg from "../assets/home-images/meuseum.jpeg";
import meuse1img from "../assets/home-images/meuseum1.jpg";
import meuse2img from "../assets/home-images/artist3.jpg";
// // const Home = () => <h1>Home Page</h1>;
// const Category = () => <h1>Category Page</h1>;
// const Style = () => <h1>Style Page</h1>;
// const Artist = () => <h1>Artist Page</h1>;
// const Exhibition = () => <h1>Exhibition Page</h1>;
// const ContactUs = () => <h1>Contact Us Page</h1>;

function Home() {
 const [count, setCount] = useState(0);

 return (
  <>
  <div id="main">
  <div id="page1">
        <Menu/>
    
    
    <div id="banner2"><Carousel id="banner"/></div>
   </div>
   <div id="page2">
    <div id="feat-art">Featured Artworks</div>
    <div>
   {/* Other components in your app */}
   <div id="slide">
    <Card class="card" image={Cardimg1} imageName="Crystal Face" artistName="Claude Monet" prize="Rs 300000" />
    <Card class="card" image={artist1img} imageName="Dressed Girl" artistName="Salvador" prize="Rs 250000" />
    <Card class="card" image={artist2img} imageName="Jungle Women" artistName="Frida Kahalo" prize="Rs 200000" />
    <Card class="card" image={artist3img} imageName="Space" artistName="René Magritte" prize="Rs 150000" />
   </div>
   <div id="feat-art1">Explore The Artworks</div>
   <div id="banner1"><Carousel/></div>
   <div id="feat-art">Top Seller Artworks</div>
   <div id="slide">
    <Card class="card" image={Cardimg1} imageName="image1" artistName="ayush" prize="Rs 300" />
    <Card class="card" image={Cardimg1} imageName="image1" artistName="ayush" prize="Rs 300" />
    <Card class="card" image={Cardimg1} imageName="image1" artistName="ayush" prize="Rs 300" />
    <Card class="card" image={Cardimg1} imageName="image1" artistName="ayush" prize="Rs 300" />
   </div>
  </div>
     
    <div id="footer"><Footer /></div>
   </div>
  </div>
  </>
 );
}

export default Home;
