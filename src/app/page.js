import React from "react";
import ProductList from "./components/products/ProductList";
import { CartProvider } from "@/context/cartContext";

const HomePage = () => {
  return (
    <CartProvider>
      <div>
        <h1 className="text-center text-3xl font-bold mt-8">Product Listing</h1>
        <ProductList />
      </div>
    </CartProvider>
  );
};

export default HomePage;
