import React from "react";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <header>
        <div className="topHeader">
          <h6>THE BLACK CROW</h6>
        </div>
        <div className="bottomHeader">
          <h1>
            <img
              src="https://deadthreads.shop/cdn/shop/files/DEAD_THREADS_v1.png?v=1695046784&width=400"
              alt=""
            />
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
