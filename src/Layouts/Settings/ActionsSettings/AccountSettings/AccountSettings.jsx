import React, { useEffect, useState } from "react";
import "./AccountSettings.css";
import avatar from "./../../../../Assets/avatar.jpeg";
import burger from "../../../../Assets/burger.png";
import { RxAvatar } from "react-icons/rx";
import FormInput from "../../../../Components/FormInput/FormInput";
import Button from "../../../../Components/Button/Button";
import Lottie from "lottie-react";

const AccountSettings = () => {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  const workwithcomputer = require("../../../../Lottie/workwithcomputer.json");

  return (
    <div className="account-settings">
      <div className="account-actions-setting">
        <p className="general-infor">General Infor</p>
        <p className="general-infor-title">
          You can change your infor in here...
        </p>
        <div className="change-avatar">
          <div className="avatar-choose">
            {avatar ? (
              <img src={avatar.preview} alt="" className="avatar-preview" />
            ) : (
              <img src={burger} alt="" className="avatar-preview" />
            )}
          </div>
          <div className="btn-avatar-choose">
            <label htmlFor="file-upload" className="custom-file-upload">
              Choose File
            </label>
            <input id="file-upload" type="file" onChange={handleChangeAvatar} />
          </div>
        </div>
        <form>
          <FormInput
            label="First Name"
            id="firstname"
            placeholder="First Name"
          />
          <FormInput label="Last Name" id="lastname" placeholder="Last Name" />
          <FormInput label="Your Email" id="email" placeholder="Your Email" />
          <FormInput
            label="Your Adress"
            id="adress"
            placeholder="Your Adress"
          />
          <FormInput
            label="Number Phone"
            id="numberphone"
            placeholder="Number Phone"
          />
          <Button name="Save" className="btn-save" />
        </form>
      </div>
      <Lottie
        animationData={workwithcomputer}
        loop={true}
        autoplay={true}
        className="workwithlatop-animation"
      />
    </div>
  );
};

export default AccountSettings;
