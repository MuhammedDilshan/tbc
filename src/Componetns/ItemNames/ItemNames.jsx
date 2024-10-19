import React from "react";
import "./ItemNames.css";
import { Link } from "react-router-dom";

const ItemNames = () => {
  return (
    <div className="itemNames">
      <ul>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/product" className="link">
          <li>Collections</li>
        </Link>
      </ul>
    </div>
  );
};

export default ItemNames;
