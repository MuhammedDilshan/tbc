import React from "react";
import ItemNames from "../Componetns/ItemNames/ItemNames";
import Header from "../Componetns/Header/Header";
import ItemSection from "../Componetns/ItemSection/ItemSection";
import Footer from "../Componetns/Footer/Footer";

const ProductList = () => {
  return (
    <div>
      <Header />
      <ItemNames />
      <ItemSection />
      <Footer />
    </div>
  );
};

export default ProductList;
