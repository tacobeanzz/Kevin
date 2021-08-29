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
              <li>Phone</li>
              <li>address 1</li>
              <li>address 2</li>
              <li>address 3</li>
            </ul>
          </div>
          <div className="col">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <li>Portfolio</li>
              <li>Contact Me</li>
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
