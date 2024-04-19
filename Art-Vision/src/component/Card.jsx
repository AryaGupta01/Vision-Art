import React from 'react';
import './Card.css';
const Card = ({ image, imageName, artistName, prize }) => {
  return (
    <div className="card">
      <img src={image} alt={imageName} className="card-image" />
      <div className="card-content">
        <p className="card-title">{imageName}</p>
        <div className="card-details">
          <p className="card-artist">Artist : {artistName}</p>
          <p className="card-prize">Price: {prize}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;