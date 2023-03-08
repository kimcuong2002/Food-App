import React from "react";
import "./Modal.css";
import Button from "../Button/Button";
import burger from "../../Assets/burger.png";
import Lottie from "lottie-react";

const Modal = ({ open, onClose, className }) => {
  if (!open) return <></>;
  const carthaveproduct = require("../../Lottie/carthaveproduct.json");
  return (
    <div className={`modal-container ${className} `}>
      <div className="xnxx">
        <div className="vlxx">
          <p>Cart</p>
          <Button name="X" onClick={onClose} />
        </div>
        {/* <div className="cart-noproducts__order">
        <div>You have not ordered any products yet</div>
      </div> */}
        <div className="cart-products__order">
          <Lottie
            animationData={carthaveproduct}
            loop={true}
            autoplay={true}
            className="carthaveproduct"
          />
          <div className="prodduct-ordered">
            <img src={burger} alt="" className="product-ordered_image" />
            <div className="name-price__product-ordered">
              <p>Burger</p>
              <p>15</p>
            </div>
            <Button name="-" />
            <p className="total-product-ordered">1</p>
            <Button name="+" />
            <Button name="X" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
