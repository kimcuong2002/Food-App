import React from "react";
import "./Settings.css";
import Button from "../../Components/Button/Button";
import AccountSettings from "./ActionsSettings/AccountSettings/AccountSettings";
import Help from "./ActionsSettings/Help/Help";
import PassWordSettings from "./ActionsSettings/PassWordSettings/PassWordSettings";
import { CgProfile } from "react-icons/cg";
import { BiHelpCircle } from "react-icons/bi";
import { Si1Password } from "react-icons/si";
import { useState } from "react";

const Settings = () => {
  const [showAction, setShowAction] = useState("Account");
  const handleShow = () => {
    if (showAction === "Account") {
      return <AccountSettings />;
    } else if (showAction === "Help") {
      return <Help />;
    } else if (showAction === "Password") {
      return <PassWordSettings />;
    }
  };
  return (
    <div className="setting-container">
      <div className="setting-actions">
        <p className="account-setting">Account Settings</p>
        <p className="setting-small-title">
          Change your avata and account settings
        </p>
        <div className="button-setting">
          <Button
            icon={<CgProfile />}
            name="Account"
            onClick={(handleShow) => {
              setShowAction("Account ");
            }}
          />
          <Button
            icon={<Si1Password />}
            name="Password"
            onClick={(handleShow) => {
              setShowAction("Password");
            }}
          />
          <Button
            icon={<BiHelpCircle />}
            name="Help?"
            onClick={(handleShow) => {
              setShowAction("Help");
            }}
          />
        </div>
      </div>
      <div className="setting-details">{handleShow()}</div>
    </div>
  );
};

export default Settings;
