import React from "react";
import ProductList from "./components/products/ProductList";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-8">Product Listing</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
