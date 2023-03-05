import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
import Button from "../Button/Button";
import "./OrderMenu.css";
import Modal from "../Modal/Modal";

const OderMenu = ({ addProduct, handlePurchase, setOpenModal }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let result = 0;
    for (const product of addProduct) {
      if (product) {
        result += product.total;
      }
    }
    setTotal(result);
  }, [addProduct]);

  return (
    <div className="ordermenu-container">
      <div className="ordermenu_title">
        <p className="ordermenu-sub__title">Order Menu</p>
        <Button
          icon={<FaRegEdit />}
          className="ordermenu-icon-edit"
          onClick={() => setOpenModal(true)}
        />
      </div>
      {addProduct.length === 0 && (
        <div className="ordermenu-inf">
          <p>You have not ordered any products yet</p>
          <FaRegSmileWink className="smile-icon" />
        </div>
      )}
      {addProduct.map((product, index) => {
        return (
          <div className="ordermenu-haveproduct" key={index}>
            <div className="ordermenu-haveproduct-image__background">
              <img
                src={product.image}
                alt=""
                className="ordermenu-haveproduct-image"
              />
            </div>
            <div className="ordermenu-haveproduct-des">
              <div className="ordermenu-haveproduct-name">{product.name}</div>
              <div className="ordermenu-haveproduct-price">
                ${product.total}
              </div>
            </div>
            <div className="ordermenu-haveproduct-count">x{product.count}</div>
          </div>
        );
      })}
      <div className="ordermenu-line"></div>
      <div className="ordermenu-total">
        <p>Sub Total:</p>
        <p>$ {total}</p>
      </div>
      <Button
        name="Purchase"
        className="purchase-button"
        onClick={handlePurchase}
      />
    </div>
  );
};

export default OderMenu;
