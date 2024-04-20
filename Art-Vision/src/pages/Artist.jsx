// ArtistPage.js
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import React from 'react';
import './Artist.css';
import Artistcard from '../component/Artistcard';
import img from '../assets/Artist_images/A1.jpg';
import img2 from '../assets/Artist_images/art1.jpg';
import img3 from '../assets/Artist_images/A3.jpg';
import img4 from '../assets/Artist_images/art2.jpg';
import img5 from '../assets/Artist_images/A5.jpg';
import img6 from '../assets/Artist_images/A6.jpg';
import img7 from '../assets/Artist_images/A7.jpg';
import img8 from '../assets/Artist_images/A8.jpg';
import img9 from '../assets/Artist_images/art3.jpg';
import img10 from '../assets/Artist_images/art4.jpg';
import img11 from '../assets/Artist_images/A11.jpg';
import img12 from '../assets/Artist_images/A12.jpg';

const Artist = () => {
  return (
    <div id='main'>
      <Menu />
      <div className="cards">
        <Artistcard img={img} name={"ANJU DODIYA"} desc={'Born in 1964 in Mumbai, India, Anju Dodiya received her fine arts degree from the Sir J.J. School of Art, Mumbai.'} />
        <Artistcard img={img2} name={"SUJITH S.N."} desc={'Born in 1979 in Baroda, Gujarat, India, Sujith completed an MFA from the Sarojini Naidu School of Fine Arts.'} />
        <Artistcard img={img3} name={"ANITA DUBE"} desc={'Born in 1958, Anita Dube completed her BA (History) from Delhi University (1979) and her MVA (Art Criticism) from the Faculty of Fine Arts.'} />
        <Artistcard id="tyeb" img={img4} name={"BIRAAJ DODIYA"} desc={'Born in 1993, Biraaj Dodiya received her MFA from New York University in 2018, and a BFA from the School of the Art Institute of Chicago in 2015.'} />
      </div>
      <div className="cards">
        <Artistcard img={img5} name={"NALINI MALANI"} desc={'Born in Karachi (undivided India) in 1946, Nalini Malani received a classical academic training in painting at the Sir J.J. School of Art, Mumbai.'} />
        <Artistcard img={img6} name={"S.H. RAZA"} desc={'Born in Madhya Pradesh in 1922, SH Raza attended the Nagpur School of Art, Nagpur, (1939–43).'} />
        <Artistcard img={img7} name={"RANBIR KALEKA"} desc={'Born in 1953, multi-media artist Ranbir Kaleka studied at the College of Art, Chandigarh, and the Royal College of Art, London.'} />
        <Artistcard img={img8} name={"GAURI GILL"} desc={'Born in 1970 in Chandigarh, India, Gauri Gill is a Delhi based photographer. She has exhibited within India and internationally.'} />
      </div>
      <div className="cards">
        <Artistcard img={img9} name={"GANESH PYNE"} desc={'Born in 1937 in Kolkata, Ganesh Pyne studied at the Government College of Art and Craft, Kolkata. The foremost exponent of the Bengal School of Art.'} />
        <Artistcard img={img10} name={"FAIZA BUTT"} desc={'Born in 1973 in Lahore, Pakistan, Faiza Butt trained at the National College of Arts in Lahore and later obtained a master’s degree with distinction at the Slade School of Art in London.'} />
        <Artistcard img={img11} name={"PRANATI PANDA"} desc={'Born in 1974 in Bhubaneshwar, Pranati Panda completed a BFA at the B.K. College of Arts and Crafts and an MFA at the Delhi College of Art.'} />
        <Artistcard img={img12} name={"PRANEET SOI"} desc={'Born in 1971 in Kolkata, Praneet Soi completed a bachelor’s and master’s of fine arts in painting at the Faculty of Fine Arts.'} />
      </div>
      <div id="footer"><Footer /></div>
    </div>

  );
}

export default Artist;
