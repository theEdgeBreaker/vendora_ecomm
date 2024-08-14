import React from "react";
import Image from "next/image";
import { products } from "../../../data/products";

const ProductList = () => {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-14 py-6">
      {products.map((product) => (
        <div
          key={product.id}
          //   className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          className=" rounded-sm px-2 py-5 hover:shadow-lg transition "
        >
          <div className="relative w-full h-48 mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              //   className="object-cover rounded-md"
              className="object-cover rounded-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="text-sm mb-2 text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">
            {product.description}
          </p>
          <p className=" text-xs mb-2 text-gray-400">{product.feature}</p>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-lg font-medium text-gray-800 mb-4">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
          <button
            //   className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
