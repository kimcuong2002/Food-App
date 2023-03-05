import React from "react";
import "./Button.css";

const Button = ({ name, onClick, className, icon, count }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon}
      <div className="name-item">{name}</div>
      {count}
    </button>
  );
};

export default Button;
