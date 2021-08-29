import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="NFBody">
      <div className="NFContent">
        <h1 className="NFh1">
          404 - The page you was looking for is in another castle
        </h1>
        <Link className="NFLink" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
