import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        
        <div className="footer-col">
          <div className="footer-item">
            <a href="https://www.linkedin.com/in/javiermedinaj/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
       
          <div className="footer-item">
            <a href="https://github.com/javiermedinaj" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="footer-item">
            <a href="https://www.instagram.com/medinajavierj/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
