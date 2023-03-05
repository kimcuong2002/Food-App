import React from "react";
import "./ProductDetail.css";
import { ImFire } from "react-icons/im";

const ProductDetail = ({
  image,
  name,
  price,
  className,
  newproduct,
  click,
  id,
  hot = "hot",
}) => {
  return (
    <div className={`productdetail ${className}`} onClick={click} id={id}>
      {newproduct ? <div className="newproduct">{newproduct}</div> : <></>}
      <div className="background-image_product">
        <img src={image} alt="" />
      </div>
      <div className="name-productdetail">
        {hot ? <ImFire className="hot-sale" /> : <></>}
        {name}
      </div>
      <div className="price-productdetail">${price}</div>
    </div>
  );
};

export default ProductDetail;
