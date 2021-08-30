import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Kevin McK</h4>
            <ul className="list-unstyled">
              <li>P# 012-123-1234</li>
              <li>-</li>
              <li>123 street</li>
              <li>Some Town</li>
              <li>Some City</li>
            </ul>
          </div>
          <div className="col">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <Link className="FLinka" to="/">
                <li>Home</li>
              </Link>
              <Link className="FLinka" to="/about">
                <li>About</li>
              </Link>
              <Link className="FLinka" to="/portfolio">
                <li>Portfolio</li>
              </Link>
              <Link className="FLinka" to="/contact">
                <li>Contact Me</li>
              </Link>
            </ul>
          </div>
          <div className="col">
            <h4>Social Media</h4>
            <ul className="list-unstyled">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kevin McKenzie | Designed By T.C
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
