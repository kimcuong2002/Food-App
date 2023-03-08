import React from "react";
import "./HomePage.css";
import Product from "../../Components/Products/Product";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import OderMenu from "../../Components/OrderMenu/OderMenu";
import { useState } from "react";
import { productModel, productDetailData } from "../HomePage/data";
import { BiSearchAlt2 } from "react-icons/bi";
import Modal from "../../Components/Modal/Modal";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [addProduct, setAddproduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleAddproduct = (item) => {
    if (!item) return;
    const arr = [...addProduct];
    const index = arr.findIndex((el) => el.id === item.id);
    if (index > -1) {
      const count = (arr[index].count += 1);
      arr[index].count = count;
      arr[index].total = arr[index].price * count;
      return setAddproduct(arr);
    }
    arr.push({ ...item, count: 1, total: item.price });
    return setAddproduct(arr);
  };
  const handlePurchase = () => {
    setAddproduct([]);
  };
  const selectProduct = () => {
    productModel.filter = () => {};
  };

  return (
    <div className="homepage-container">
      <div className="home-page">
        <div className="middle-content-box">
          <div className="title-header">
            <div className="first-title">Menu Category</div>
            <div className="search-product-actions">
              <BiSearchAlt2 className="search-icon-action" />
              <input
                type="text"
                placeholder="Search for food, coffe, etc..."
                className="search-input-action"
                onChange={(e) => {
                  const value = e.target.value;
                  document.title = value ? value : "DF Store";
                  setTitle(value);
                }}
              />
            </div>
          </div>
          <div className="header-button__product-model">
            {productModel &&
              productModel.map((item, index) => {
                return (
                  <Product
                    key={index}
                    name={item.name}
                    image={item.image}
                    className="product-item"
                  />
                );
              })}
          </div>
          <div className="header-choose__product">
            <p className="header-choose__product-title">Choose Order</p>
            <div className="header-choose__product-action">
              <p className="header-choose__product-sortby">Sort By</p>
              <select className="header-choose__product-option">
                <option value="new">New</option>
                <option value="burger">Burger</option>
                <option value="pizza">Pizza</option>
              </select>
            </div>
          </div>
          <div className="middle-product__container">
            {productDetailData &&
              productDetailData.map((item, index) => {
                return (
                  <ProductDetail
                    key={index}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    newproduct={item.newproduct}
                    click={() => handleAddproduct(item)}
                  />
                );
              })}
          </div>
        </div>
        <OderMenu
          addProduct={addProduct}
          handlePurchase={handlePurchase}
          setOpenModal={setOpenModal}
          className="ordermenu"
        />
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          className="modal"
        />
      </div>
    </div>
  );
};

export default HomePage;
