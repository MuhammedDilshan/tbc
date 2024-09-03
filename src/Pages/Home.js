import React from "react";
import Header from "../Componetns/Header/Header";
import ItemNames from "../Componetns/ItemNames/ItemNames";
import Category from "../Componetns/Category/Category";
import ItemSection from "../Componetns/ItemSection/ItemSection";
import VedioSection from "../Componetns/VedioSection/VedioSection";
import Footer from "../Componetns/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <ItemNames />
      <Category />
      <ItemSection />
      <VedioSection />
      <Footer />
    </div>
  );
};

export default Home;
