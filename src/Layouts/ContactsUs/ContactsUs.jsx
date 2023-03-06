import React from "react";
import "./ContactUs.css";
import Button from "../../Components/Button/Button";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ContactsUs = ({ onSubmit }) => {
  const shipperData = require("../../Lottie/tiki-shipper.json");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    onSubmit(data);
  };
  return (
    <div className="contactus-container">
      <div className="dfstore-title">DF Store</div>
      <div className="dfstore-feedback">
        <div className="contactus-feedback">
          <div className="contactus-title">Contact Us</div>
          <div className="contactus-des">
            To request a quote or want to meet up for coffee, contact us
            directly or fill out the form and we will get back to you proptly.
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="feedback_yourname">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name..."
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-err">Name is required</span>
              )}
            </div>
            <div className="feedback_youremail">
              <label htmlFor="">Your Email</label>
              <input
                type="text"
                placeholder="Your Email..."
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <span className="text-err">Email is required</span>
              )}
            </div>
            <div className="feedback_yourmessage">
              <label htmlFor="">Your Message</label>
              <textarea
                placeholder="Your Message ..."
                id="message"
                name="message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-err">Message is required</span>
              )}
            </div>
            <Button name="Send your message" className="sendyourmessage" />
          </form>
        </div>
        <div className="contactus-animations">
          <Lottie animationData={shipperData} loop={true} autoplay={true} />
          <div className="adress">
            <CiLocationOn />
            <p>524, 2/9-stress, DaNang-City</p>
          </div>
          <div className="adress">
            <BsTelephoneInbound />
            <p>0328844771</p>
          </div>
          <div className="adress">
            <AiOutlineMail />
            <p>nguyenhoangkimcuong02@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsUs;
