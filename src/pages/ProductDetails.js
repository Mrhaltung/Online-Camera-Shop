import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const data = productData.filter((product) => id.includes(product.id));
  const { addToCart } = useContext(CartContext);
  if (!data) {
    return <div className="container mx-auto">loading...</div>;
  }
  return data.map((details) => {
    return (
      <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0" key={details.id}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
            <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
              <img
                src={details.image}
                alt="images"
                className="w-full max-w-[65%]"
              />
            </div>
            <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
              <div className="uppercase text-accent text-lg font-medium mb-2">
                {details.type}
              </div>
              <h2 className="h2 mb-4">{details.title}</h2>
              <p className="mb-12">{details.description}</p>
              <div className="flex items-center gap-x-8">
                <div className="text-3xl text-accent font-semibold">
                  ₹ {details.price}
                </div>
                <button
                  onClick={() => addToCart(data, id)}
                  className="btn btn-accent"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <RelatedProducts type={details.type} />
        </div>
      </div>
    );
  });
};

export default ProductDetails;
