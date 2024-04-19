import React from 'react';
import './Painting.css';
import flowerimage from "../assets/painting-page-image/flower.jpeg";
import eyeimage from "../assets/painting-page-image/eye-painting.jpeg";
const Painting = () => {
  return (
    <div id="main">
      <div id="page1">
        <div id="title-box">
          <h1 id="title"> Painting</h1>
          <div id="paint-img">
            <img src={flowerimage} className="rounded float-end" alt="..."></img>
            <img id='eyeimg' src={eyeimage} className="rounded float-end" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painting;