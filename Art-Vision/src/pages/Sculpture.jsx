import React from 'react';
import './Sculpture.css';
import img1 from "../assets/painting-page-image/flower.jpeg";
import img2 from "../assets/painting-page-image/eye-painting.jpeg";
import img3 from "../assets/painting-page-image/krishna.jpeg";
import oil1img from "../assets/painting-page-image/oilpastel1.jpg";
import oil2img from "../assets/painting-page-image/oilpastel2.jpg";
import oil3img from "../assets/painting-page-image/oilpastel3.jpg";
import oil4img from "../assets/painting-page-image/oilpastel4.jpg";
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
            <img id='flowerimg' src={img1} className="rounded float-end" alt="..."></img>
            <img id='eyeimg' src={img2} className="rounded float-end" alt="..."></img>
            <img id='krishnaimg' src={img3} className="rounded float-end" alt="..."></img>
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
            <img src={oil1img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Forest Shed</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card">
            <img src={oil2img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 id='sunflower' class="card-title">Pasteled Flower</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card">
            <img src={oil3img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Waves</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div class="card">
            <img src={oil4img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">A FLower Bug</h5>
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