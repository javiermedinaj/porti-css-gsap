import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-header">
          <p>Please contact me in any way you like</p>
        </div>
        <div className="footer-row">
          <div className="footer-col">
            <p>Social</p>
            <div className="socials">
              <FaLinkedinIn href="" />
              <FaInstagram href="" />
              <FaGithub href="" />
            </div>
          </div>
          <div className="footer-col">
            <p>Contact</p>
           <div className="socials">
           <a href="mailto:example@gmail.com">
            <MdOutlineMail
            />
            </a>
            <a href="https://wa.link/qhouz7">
            <FaWhatsapp
            />
            </a>
           </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
