import React from 'react';

const Card = ({ image, imageName, artistName, prize }) => {
  return (
    <div className="card">
      <img src={image} alt={imageName} className="card-image" />
      <div className="card-content">
        <p className="card-title">{imageName}</p>
        <p className="card-artist">{artistName}</p>
        <p className="card-prize">Prize: {prize}</p>
      </div>
    </div>
  );
};

export default Card;
