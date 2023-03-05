import React from "react";
import "./App.css";
import HomePage from "../src/Layouts/HomePage/HomePage.jsx";
import ContactsUs from "../src/Layouts/ContactsUs/ContactsUs.jsx";
import Settings from "./Layouts/Settings/Settings.jsx";
import Login from "./Layouts/Login/Login";
import logo from "./Assets/logo.png";
import Button from "./Components/Button/Button.jsx";
import { Routes, Route, Link } from "react-router-dom";
import { AiOutlineContacts, AiOutlineSetting } from "react-icons/ai";
import { BiStoreAlt, BiLogIn } from "react-icons/bi";

const navbarItem = [
  {
    icon: <BiStoreAlt />,
    name: "Home",
    path: "/",
  },
  {
    icon: <AiOutlineContacts />,
    name: "Contact Us",
    path: "/contactus",
  },
  {
    icon: <AiOutlineSetting />,
    name: "Setting",
    path: "settings",
  },
  {
    icon: <BiLogIn />,
    name: "Login",
    path: "login",
  },
];

const App = () => {
  return (
    <div className="app">
      <div className="nav-bar">
        <Link to="/">
          <img src={logo} alt="" className="logo-button" />
        </Link>
        <div className="nav-item__box">
          {navbarItem &&
            navbarItem.map((item, index) => {
              return (
                <Link to={item.path} className="link">
                  <Button
                    key={index}
                    icon={item.icon}
                    name={item.name}
                    className="nav-bar__button"
                  />
                </Link>
              );
            })}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactsUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
