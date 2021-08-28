import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="Footer">
      <div className="FLeft">
        <h1>Contact Info</h1>
        <p>Address</p>
        <p>Phone #</p>
      </div>
      <div className="FMid">
        <div className="FooterMenu">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact Me</a>
        </div>
        {/* <div className="FRight"></div> */}
      </div>
    </div>
  );
}

export default Footer;
