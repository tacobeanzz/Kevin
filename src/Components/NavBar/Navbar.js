import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

import Logo from "../../Images/K_LogoWhite.png";
import MenuIcon from "@material-ui/icons/MenuRounded";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <div className="NavBg">
        <div className="LeftSide">
          <div className="Logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="RightSide">
          <div className="Links" id={showLinks ? "hidden" : ""}>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact Me</Link>
          </div>
          <div className="Burger">
            <MenuIcon
              fontSize="large"
              onClick={() => setShowLinks(!showLinks)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
