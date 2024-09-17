import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { assets } from "../../Assets/assets";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <header>
        <div className="topHeader">
          <h6>THE BLACK CROW</h6>
        </div>
        <div className="bottomHeader">
          {isMobile && <MdOutlineShoppingBag />}
          <h1>
            <img src={assets.Logo} alt="" />
          </h1>

          <div className="right_section">
            <form action="">
              <input type="text" placeholder="Find your City" />
              <button>
                <IoMdSearch />
              </button>
            </form>
            <MdOutlineShoppingBag />
          </div>
          <div className="menu">
            <HiMenuAlt2 />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
