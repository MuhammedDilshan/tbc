import React from "react";
import "./DetailProduct.css";
import { Link } from "react-router-dom";

const DetailProduct = ({ item }) => {
  return (
    <div className="product_details">
      <div className="image_sec">
        <img src={item?.image} alt={item?.image_name} />
      </div>
      <div className="product_details_full">
        <h6>{item?.image_name}</h6>
        <p>Sale price Rs. {item?.rupees}</p>
        <form action="">
          <label htmlFor="">Color</label>
          <select name="" id="">
            <option value="">white</option>
            <option value="">black</option>
          </select>
          <label htmlFor="">Size</label>
          <select name="" id="">
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </form>
        <label htmlFor="">Quantity</label>
        <div className="quantity">
          <p className="count">-</p>
          <p className="count">1</p>
          <p className="count">+</p>
        </div>
        <Link>
          <button className="cart">Add to cart</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailProduct;
