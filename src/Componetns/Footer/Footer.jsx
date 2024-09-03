import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="top">
          <p>
            LOOK ALIVE. Brand new designs coming soon, plus many more! Want to
            get notified when the new designs drop?
          </p>

          <button className="notify">Contact</button>
          <ul className="social">
            <li>
              <FaInstagram />
            </li>
            <li>
              <RiTwitterXLine />
            </li>
            <li>
              <AiOutlineYoutube />
            </li>
          </ul>
        </div>
        <div className="bottom">
          <p>© 2024,THE BLACK CROW</p>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
