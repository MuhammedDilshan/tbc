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
      <div className="cateList">
        <div className="cateItem" data-aos="fade-up">
          <img
            src="https://deadthreads.shop/cdn/shop/files/1_15fcc3a1-4a68-4dfe-b8b4-b46a30d560cc.png?v=1719198864&width=1000"
            alt=""
          />
        </div>
        <div className="cateItem" data-aos="fade-down">
          <img
            src="https://deadthreads.shop/cdn/shop/files/1_15fcc3a1-4a68-4dfe-b8b4-b46a30d560cc.png?v=1719198864&width=1000"
            alt=""
          />
        </div>
        <div className="cateItem" data-aos="fade-up">
          <img
            src="https://deadthreads.shop/cdn/shop/files/1_15fcc3a1-4a68-4dfe-b8b4-b46a30d560cc.png?v=1719198864&width=1000"
            alt=""
          />
        </div>
        <div className="cateItem" data-aos="fade-down">
          <img
            src="https://deadthreads.shop/cdn/shop/files/1_15fcc3a1-4a68-4dfe-b8b4-b46a30d560cc.png?v=1719198864&width=1000"
            alt=""
          />
        </div>
      </div>
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
