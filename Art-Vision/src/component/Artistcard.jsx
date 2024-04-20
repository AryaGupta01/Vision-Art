import React from 'react';
import './artistcard.css';

const Artistcard = ({img,name,desc="Some quick example text to build on the card title and make up the bulk of the card's content."}) => {
    return (
      <>
      <div class="card" >
        <div id='image'>
        <img src={img} class="card-img-top" alt="..."/>
        </div>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{desc}</p>
          </div>
      </div>
      </>
    );
  };
  
  export default Artistcard;