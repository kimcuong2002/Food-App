import React from "react";
import "./Settings.css";
import Button from "../../Components/Button/Button";
import { CgProfile } from "react-icons/cg";
import { BiHelpCircle } from "react-icons/bi";
import { Si1Password } from "react-icons/si";

const Settings = () => {
  return (
    <div className="setting-container">
      <div className="setting-actions">
        <p className="account-setting">Account Settings</p>
        <p className="setting-small-title">
          Change your avata and account settings
        </p>
        <div className="button-setting">
          <Button icon={<CgProfile />} name="Account" />
          <Button icon={<Si1Password />} name="Password" />
          <Button icon={<BiHelpCircle />} name="Help?" />
        </div>
      </div>
      <div className="setitng-details"></div>
    </div>
  );
};

export default Settings;
