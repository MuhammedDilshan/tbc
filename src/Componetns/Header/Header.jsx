import React from "react";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { assets } from "../../Assets/assets";

const Header = () => {
  return (
    <div>
      <header>
        <div className="topHeader">
          <h6>THE BLACK CROW</h6>
        </div>
        <div className="bottomHeader">
          <h1>
            <img src={assets.Logo} alt="" />
          </h1>
          <form action="">
            <input type="text" placeholder="Find your City" />
            <button>
              <IoMdSearch />
            </button>
          </form>
          <div className="menu">
            <HiMenuAlt2 />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
