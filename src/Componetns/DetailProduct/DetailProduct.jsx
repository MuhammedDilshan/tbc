import React from "react";
import "./DetailProduct.css";

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
          </select>
          <label htmlFor="">Size</label>
          <select name="" id="">
            <option value="">s</option>
          </select>
        </form>
        <label htmlFor="">Quantity</label>
        <div className="quantity">
          <p className="count">-</p>
          <p className="count">1</p>
          <p className="count">+</p>
        </div>
        <button className="cart">Add to cart</button>
      </div>
    </div>
  );
};

export default DetailProduct;
