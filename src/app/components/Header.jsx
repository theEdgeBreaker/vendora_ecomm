import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
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
            <Link className="hover:underline" href="/about">
              <div className="flex items-center gap-0.5">
                <FaShoppingCart />
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
