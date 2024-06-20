import React from 'react';
import ThreeDScene from './ThreeDScene';
import '../styles/ProductCard.css';

const ProductCard = ({ title, description, modelPath }) => {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="threed-scene">
        <ThreeDScene modelPath={modelPath} />
      </div>
    </div>
  );
};

export default ProductCard;
