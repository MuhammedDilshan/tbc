import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { assets } from "../../Assets/assets";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up when component unmounts
    };
  }, [menu]);

  const onHandleClick = () => {
    setMenu(!menu);
  };
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
            <Link className="link" to="/cart">
              <MdOutlineShoppingBag />
            </Link>
          </div>
          <div className="menu" onClick={onHandleClick}>
            <HiMenuAlt2 />
          </div>
        </div>

        {menu && (
          <div className={`mobmenu ${menu ? "active" : ""}`}>
            <ul>
              <li>home</li>
              <li>contact</li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
