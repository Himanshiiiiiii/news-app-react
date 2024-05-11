import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        NEWS App made by -{" "}
        <a href="http://linkedin.com/in/himanshi-gupta-3a1402246" target="__blank">
          Himanshi Gupta
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/roadsidecoder/" target="__blank">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/himanshi-gupta-3a1402246/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
       
      </div>
    </div>
  );
};

export default Footer;