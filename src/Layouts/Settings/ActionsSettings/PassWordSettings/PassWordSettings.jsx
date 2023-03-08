import React from "react";
import "./PassWordSettings.css";
import FormInput from "../../../../Components/FormInput/FormInput";
import Button from "../../../../Components/Button/Button";
import Lottie from "lottie-react";

const PassWordSettings = () => {
  const passwordanimation = require("../../../../Lottie/passwordanimation.json");

  return (
    <div className="account-settings">
      <div className="account-actions-setting">
        <p className="general-infor">Change Password</p>
        <p className="general-infor-title">
          You can change your Password in here. This will help you keep your
          account sate
        </p>
        <form>
          <FormInput label="Password" id="password" placeholder="Password" />
          <FormInput
            label="New Password"
            id="newpassword"
            placeholder="New Password"
          />
          <FormInput
            label="Confirm Password"
            id="confirmpassword"
            placeholder="Confirm Password"
          />

          <Button name="Save" className="btn-save" />
        </form>
      </div>
      <Lottie
        animationData={passwordanimation}
        loop={true}
        autoplay={true}
        className="workwithlatop-animation"
      />
    </div>
  );
};

export default PassWordSettings;
