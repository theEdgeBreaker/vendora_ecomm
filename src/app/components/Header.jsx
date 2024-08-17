"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/cartContext";

const Header = () => {
  const { cartCount } = useCart();

  useEffect(() => {
    console.log("Header component re-rendered due to cartCount change");
  }, [cartCount]);

  console.log("header cart count", cartCount);
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto px-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vendora</h1>
        <ul className="flex text-lg space-x-6">
          <li>
            <Link className="hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/cart">
              <div className="flex items-center gap-0.5">
                <FaShoppingCart />
                <span className="ml-1">{cartCount}</span>
                Cart
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
