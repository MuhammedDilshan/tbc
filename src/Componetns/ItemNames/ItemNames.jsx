import React from "react";
import "./ItemNames.css";
import { Link } from "react-router-dom";

const ItemNames = () => {
  return (
    <div className="itemNames">
      <ul>
        <li>Home</li>
        <Link to="/product" className="link">
          <li>Collections</li>
        </Link>
        <li>Brand Ambassador</li>
      </ul>
    </div>
  );
};

export default ItemNames;
