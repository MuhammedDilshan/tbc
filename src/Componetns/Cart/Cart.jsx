import React from "react";
import "./Cart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { assets } from "../../Assets/assets";

const Cart = () => {
  return (
    <div className="cart_page">
      <h6>Your Cart</h6>
      <div className="cat">
        <div className="cart_itmDetails">
          <div className="cart_itmImg">
            <img src={assets.tshirt1} alt="" />
          </div>
          <div className="cartitmdtails">
            <h4>PREMIUM BLACKCROW</h4>
            <p>RS : 649</p>
            <p>Color :</p>
            <p>Size :</p>
          </div>
        </div>
        <div className="left_containerAdd">
          <div className="cart_quantity">
            <div className="cart_count">
              <p className="count">-</p>
              <p className="count">1</p>
              <p className="count">+</p>
            </div>
            <p>
              <RiDeleteBin6Line />
            </p>
          </div>
          <p>RS : 799</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
