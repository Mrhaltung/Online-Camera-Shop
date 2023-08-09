import React from "react";
import { productData } from "../data";
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ type }) => {
  const data = productData.filter((product) => type.includes(product.type));
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
