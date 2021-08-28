import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../Images/K_Logo1.png";
import MenuIcon from "@material-ui/icons/MenuRounded";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <div className="NavBg">
        <div className="LeftSide">
          <div className="Logo">
            <a href="/home">
              <img src={Logo} alt="" />
            </a>
          </div>
        </div>
        <div className="RightSide">
          <div className="Links" id={showLinks ? "hidden" : ""}>
            <a href="/">About</a>
            <a href="/">Portfolio</a>
            <a href="/">Contact Me</a>
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
