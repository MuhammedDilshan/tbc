import React from "react";
import "./CustomerReview.css";
import { FaStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const CustomerReview = () => {
  return (
    <div className="customer_review">
      <h6>CUSTOMER REVIEWS</h6>
      <div className="review">
        <div className="top_review">
          <div className="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="date">09/10/2024</div>
        </div>
        <div className="middle">
          <div className="icon_user">
            <FiUser />
          </div>
          <span>User</span>
        </div>
        <p className="user_review">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem quas aliquid doloribus
        </p>
      </div>
    </div>
  );
};

export default CustomerReview;
