import React from "react";
import "./DetailProduct.css";

const DetailProduct = () => {
  return (
    <div className="product_details">
      <div className="image_sec">
        <img
          src="https://deadthreads.shop/cdn/shop/files/DETROIT2_c1c00c37-44d8-46bf-89f8-d09d94a84a3d.jpg?v=1718815400&width=1206"
          alt=""
        />
      </div>
      <div className="product_details_full">
        <h6>DETROIT FOOTBALL</h6>
        <p> Sale priceRs. 3,000.00</p>
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
          <p>+</p>
          <p>1</p>
          <p>-</p>
        </div>
        <button className="cart">Add to cart</button>
      </div>
    </div>
  );
};

export default DetailProduct;
