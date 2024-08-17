"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding product to cart:", product);

    setCart((prevCart) => [...prevCart, product]);
  };
  const cartCount = cart.length;
  console.log("Current cart state:", cart);
  console.log("Current cart count:", cartCount);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// "use client";

// import { createContext, useState } from "react";
// export const CartContext = createContext(null);
// export const CartProvider = (props) => {
//   const [items, setItems] = useState([]);
//   return (
//     <CartContext.Provider value={{ items, setItems }}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };
