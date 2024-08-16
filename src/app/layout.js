import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { cartProvider } from "../context/cartContext";

export const metadata = {
  title: "Vendora",
  description:
    "A simple e-commerce application built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex flex-col min-h-screen">
        <cartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </cartProvider>
      </body>
    </html>
  );
}
