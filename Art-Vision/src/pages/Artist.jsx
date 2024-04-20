// ArtistPage.js
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import React from 'react';
import './Artist.css';
import Artistcard from '../component/Artistcard';
import img from '../assets/Artist_images/A1.jpg';
import img2 from '../assets/Artist_images/A2.jpg';
import img3 from '../assets/Artist_images/A3.jpg';
import img4 from '../assets/Artist_images/A4.jpg';
import img5 from '../assets/Artist_images/A5.jpg';
import img6 from '../assets/Artist_images/A6.jpg';
import img7 from '../assets/Artist_images/A7.jpg';
import img8 from '../assets/Artist_images/A8.jpg';
import img9 from '../assets/Artist_images/A9.jpg';
import img10 from '../assets/Artist_images/A10.jpg';
import img11 from '../assets/Artist_images/A11.jpg';
import img12 from '../assets/Artist_images/A12.jpg';

const Artist = () => {
  return (
    <div>
      <Menu />
      <div className="cards">
      <Artistcard img={img} name={"ANJU DODIYA"} desc={'Born in 1964 in Mumbai, India, Anju Dodiya received her fine arts degree from the Sir J.J. School of Art, Mumbai.'} />
      <Artistcard img={img2} name={"M.F. HUSAIN"} desc={'Born in 1915 in Pandharpur, Maharashtra, Maqbool Fida Husain was brought up by his grandfather after the early death of his mother.'} />
      <Artistcard img={img3} name={"ANITA DUBE"} desc={'Born in 1958, Anita Dube completed her BA (History) from Delhi University (1979) and her MVA (Art Criticism) from the Faculty of Fine Arts.'} />
      <Artistcard img={img4} name={"TYEB MEHTA"} desc={'Born in 1925 in Gujarat, Tyeb Mehta graduated from the Sir J.J. School of Art Mumbai in 1952, after a brief career as a film editor.'} />
      </div>
      <div className="cards">
      <Artistcard img={img5} name={"NALINI MALANI"} desc={'Born in Karachi (undivided India) in 1946, Nalini Malani received a classical academic training in painting at the Sir J.J. School of Art, Mumbai.'} />
      <Artistcard img={img6} name={"S.H. RAZA"} desc={'Born in Madhya Pradesh in 1922, SH Raza attended the Nagpur School of Art, Nagpur, (1939–43).'} />
      <Artistcard img={img7} name={"RANBIR KALEKA"} desc={'Born in 1953, multi-media artist Ranbir Kaleka studied at the College of Art, Chandigarh, and the Royal College of Art, London.'} />
      <Artistcard img={img8} name={"GAURI GILL"} desc={'Born in 1970 in Chandigarh, India, Gauri Gill is a Delhi based photographer. She has exhibited within India and internationally.'} />
      </div>
      <div className="cards">
      <Artistcard img={img9} name={"ARPITA SINGH"} desc={'Born in 1937 in Kolkata, Arpita Singh graduated with a diploma in fine arts from Delhi Polytechnic.'} />
      <Artistcard img={img10} name={"GIGI SCARIA"} desc={'Gigi Scaria was born in Kothanalloor, a village in southern Kerala, India, in 1973. In 1995, after completing a bachelor’s of fine arts degree at the College of Fine Arts.'} />
      <Artistcard img={img11} name={"PRANATI PANDA"} desc={'Born in 1974 in Bhubaneshwar, Pranati Panda completed a BFA at the B.K. College of Arts and Crafts and an MFA at the Delhi College of Art.'} />
      <Artistcard img={img12} name={"PRANEET SOI"} desc={'Born in 1971 in Kolkata, Praneet Soi completed a bachelor’s and master’s of fine arts in painting at the Faculty of Fine Arts.'} />
      </div>
      <div id="footer"><Footer /></div>
    </div>
    
  );
}

export default Artist;
