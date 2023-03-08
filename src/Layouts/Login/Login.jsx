import React from "react";
import "./Login.css";
import bannerlogin1 from "../../Assets/bannerlogin1.jpg";
import logo from "../../Assets/logo.png";
import Button from "../../Components/Button/Button";
import { AiFillLock, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <img src={bannerlogin1} alt="" className="bannerlogin" />
      <div className="login-form">
        <img src={logo} alt="" className="login-form-logo" />
        <p className="login-signin_name">Sign In</p>
        <form action="login" className="login-form-actions">
          <input
            type="text"
            placeholder="Email adsress"
            name="email"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          <div className="remember-forgotpassword">
            <div className="remember">
              <input type="checkbox" className="remember-checkbox" />
              <p className="remember-title">Remember me</p>
            </div>
            <p className="forgotpassword">Forgot for password?</p>
          </div>
          <Button
            icon={<AiFillLock />}
            name="Sign in"
            className="sign-in-btn"
          />
        </form>
        <p className="doyouhaveanaccount">Do you have an account</p>
        <Link to="/register">
          <div className="signup">
            <p className="sign-up-action">Sign Up</p>
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
