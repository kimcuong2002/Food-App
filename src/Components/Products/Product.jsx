import React from "react";
import "./Product.css";

const Product = ({ image, name, className, onCick }) => {
  return (
    <div className={`product-container-model ${className}`}>
      <div className="image-product-modal">{image}</div>
      <p className="name-product-model">{name}</p>
    </div>
  );
};

export default Product;
