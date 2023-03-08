import React from "react";
import "./Help.css";
import Button from "../../../../Components/Button/Button";

const Help = () => {
  return (
    <div className="account-settings">
      <div className="account-actions-setting">
        <p className="general-infor">Change Password</p>
        <p className="general-infor-title">
          You can change your Password in here. This will help you keep your
          account sate
        </p>
        <form>
          <div className="help-box__message">
            <label htmlFor="">What are you not satisfied with?</label>
            <textarea placeholder="Enter your message..."> </textarea>
          </div>
          <div className="help-box__message">
            <label htmlFor="">What are you not satisfied with?</label>
            <textarea placeholder="Enter your message..."> </textarea>
          </div>
          <div className="help-box__message">
            <label htmlFor="">What are you not satisfied with?</label>
            <textarea placeholder="Enter your message..."> </textarea>
          </div>
          <Button name="Save" className="btn-save" />
        </form>
      </div>
      <div className="map-local">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.6072630875624!2d108.22181105115547!3d16.033947288848236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ef1676b8cf%3A0x7a6d71b71670b841!2zNTI0IMSQLiAyIFRow6FuZyA5LCBIb8OgIEPGsOG7nW5nIE5hbSwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1678288119588!5m2!1svi!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
        <p>Can you meet us directly at 524 2/9 street</p>
        <p>Or</p>
        <p>You can call us with hotline: 0328844771</p>
      </div>
    </div>
  );
};

export default Help;
