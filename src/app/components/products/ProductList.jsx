"use client";

import React from "react";
import { useCart } from "../../../context/cartContext";
// import { useContext } from "react";
// import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import { products } from "../../../data/products";

const ProductList = () => {
  const { addToCart } = useCart();
  // const cart = useContext(CartContext);
  // console.log("cart", cart);

  const handleAddToCart = (product) => {
    console.log("Product to add:", product); // Logs the product before adding to cart
    addToCart(product); // Call the addToCart function
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-20 py-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group rounded-sm p-2 overflow-hidden hover:shadow-lg transition"
        >
          <div className="relative w-full h-48">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-t-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="pt-4 transition-transform transform group-hover:-translate-y-4 ">
            <p className="text-sm mb-2 text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">
              {product.description}
            </p>
            <p className="text-xs mb-2 text-gray-400">{product.feature}</p>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg font-medium text-gray-800 mb-4">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(product.price)}
            </p>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4
            rounded-sm hover:bg-blue-600 transition"
              onClick={() => handleAddToCart(product)}
              // onClick={() => addToCart(product)}
              // onClick={() => cart.setItems([...cart.items, { product }])}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
