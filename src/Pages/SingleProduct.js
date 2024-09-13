import React from "react";
import Header from "../Componetns/Header/Header";
import ItemNames from "../Componetns/ItemNames/ItemNames";
import DetailProduct from "../Componetns/DetailProduct/DetailProduct";
import CustomerReview from "../Componetns/CustomerReview/CustomerReview";

const SingleProduct = () => {
  return (
    <div>
      <Header />
      <ItemNames />
      <DetailProduct />
      <CustomerReview/>
    </div>
  );
};

export default SingleProduct;
