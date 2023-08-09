import React from "react";
import { productData } from "../data";
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section>
      <Hero />
      <LatestProducts productData={productData} />
    </section>
  );
};

export default Home;
