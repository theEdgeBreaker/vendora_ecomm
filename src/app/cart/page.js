// "use client";

// import React, { useContext } from "react";
// import { CartContext } from "@/context/cartContext";

// const Cart = () => {
//   const cart = useContext(CartContext);
//   return (
//     <div>
//       <h1>Cart</h1>
//       {cart &&
//         cart.items.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//           </li>
//         ))}

//       <h5 className=" font-bold">Total Bill: $</h5>
//     </div>
//   );
// };

// export default Cart;

// src/app/cart/page.js
"use client";
import React from "react";
import { useCart } from "../../context/cartContext";
import Image from "next/image";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="border-b py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="object-cover rounded-sm"
                  />
                  <span className="ml-4">{item.name}</span>
                </div>
                <span>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.price)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
