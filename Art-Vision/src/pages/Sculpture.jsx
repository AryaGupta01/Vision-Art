import React from 'react';
import './Sculpture.css';
import sculp1 from "../assets/sculpting-images/sculp1.jpeg";
import sculp2 from "../assets/sculpting-images/sculp2.jpg";
import sculp3 from "../assets/sculpting-images/sculp3.jpg";
import card1 from "../assets/sculpting-images/card1.jpeg";
import card2 from "../assets/sculpting-images/card2.jpg";
import card3 from "../assets/sculpting-images/card3.jpeg";
import card4 from "../assets/sculpting-images/card4.jpg";
import Menu from '../component/Menu';
import Footer from '../component/Footer';

const Sculpture = () => {
  return (
    <div id="main">
      <Menu/>
      <div id="page1">
        <div id="title-box">
          <h1 id="title"> Sculpture</h1>
          <div id="paint-img">
            <img id='flowerimg' src={sculp1} className="rounded float-end" alt="..."></img>
            <img id='eyeimg' src={sculp2} className="rounded float-end" alt="..."></img>
            <img id='krishnaimg' src={sculp3} className="rounded float-end" alt="..."></img>
          </div>
        </div>
        <div id='oilpastel' class='marquee-container'>
          <div class='oil-text'>Plastic Painting</div>
          <div class='oil-text'>Plastic Painting</div>
          <div class='oil-text'>Plastic Painting</div>
          <div class='oil-text'>Plastic Painting</div>
          <div class='oil-text'>Plastic Painting</div>
        </div>

        <div id='painting-container'>
          <div class="card">
            <img src={card1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 id="sand-head" class="card-title">Calm Head</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card">
            <img src={card2} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 id='sunflower' class="card-title">Stone Age Head</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card">
            <img src={card3} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 id="stone-head" class="card-title">Women Stone Head</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card">
            <img src={card4} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 id="cobelstone-head" class="card-title">Zeus Statue</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
      </div>
      <div id="footer"><Footer /></div>
    </div>
  );
};

export default Sculpture;