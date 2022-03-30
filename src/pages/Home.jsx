import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import Featured from "../components/Featured/Featured";

const Home = ({ products, cartItem, addToCart }) => {
  return (
    <div>
      <HeroSection />
      <Featured products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
