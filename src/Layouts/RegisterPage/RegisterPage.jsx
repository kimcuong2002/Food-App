import React from "react";
import "./RegisterPage.css";
import fastfood from "../../Assets/fastfood.jpg";
import logo from "../../Assets/logo.png";
import Button from "../../Components/Button/Button";
import { AiOutlineArrowRight, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-container">
      <img src={fastfood} alt="" className="bannerlogin" />
      <div className="login-form">
        <img src={logo} alt="" className="login-form-logo" />
        <p className="login-signin_name">Sign In</p>
        <form action="login" className="login-form-actions">
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            id="fullname"
          />

          <input
            type="text"
            placeholder="Email adsress"
            name="email"
            id="email"
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone number"
            id="phonenumber"
          />
          <input type="text" placeholder="Adress" name="adress" id="adress" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          <Button
            icon={<AiFillLock />}
            name="Sign up"
            className="sign-in-btn"
          />
        </form>
        <p className="doyouhaveanaccount">Do you have an account</p>
        <Link to="/login">
          <div className="signup">
            <p className="sign-up-action">Login now</p>
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Register;
