import React from "react";
import "./Modal.css";
import Button from "../Button/Button";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Modal = ({ open, onClose }) => {
  if (!open) return <></>;
  return (
    <div className="cart-container">
      <div>
        <p>Cart</p>
        <Button name="X" onClick={onClose} />
      </div>
      <div className="cart-alert">
        <HiOutlineEmojiSad className="cart-alert-icon" />
        <div className="cart-alert-title">
          You have not ordered any products yet
        </div>
      </div>
    </div>
  );
};

export default Modal;
