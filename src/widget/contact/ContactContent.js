import React from "react";
import "./ContactContent.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
const ContactContent = () => {
  const copyMail = () => {
    var input = document.createElement("input");
    input.setAttribute("value", "leo@tobydev.com");
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand("copy");
    document.body.removeChild(input);
    toast.success('leo@tobydev.com copied!', {duration: 3000, className: 'toast-message'});
    return result;
  };

  const redirect = (url) => {
    window.open(url, '_blank');
  }

  return (
    <>
    <Toaster />
      <h3 className="option-content-title">
        You can contact me through my social media
      </h3>
      <div className="contact-container">
        <div className="contact-box" onClick={() => redirect("https://github.com/leopacheco18")}>
          <h6>GitHub</h6>
          <FaGithub />
        </div>
        <div className="contact-box" onClick={() => redirect("https://twitter.com/toby_web3")}>
          <h6>Twitter</h6>
          <FaTwitter />
        </div>
        <div className="contact-box" onClick={() => redirect("https://www.linkedin.com/in/leonardo-enrique-pacheco-bencomo/")}>
          <h6>Linkedin</h6>
          <FaLinkedin />
        </div>
        <div className="contact-box" onClick={copyMail}>
          <h6>Mail</h6>
          <IoMdMail />
        </div>
      </div>
    </>
  );
};

export default ContactContent;
