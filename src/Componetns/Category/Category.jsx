import React from "react";
import "./Category.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className="category">
      <div className="fullSizeImg" data-aos="fade-up">
        <img
          src="https://cdn.shopify.com/s/files/1/0810/4656/9281/files/rear-print-final.jpg?v=1717394068"
          alt=""
        />
      </div>
    </div>
  );
};

export default Category;
