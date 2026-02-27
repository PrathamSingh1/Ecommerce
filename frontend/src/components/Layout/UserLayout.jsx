import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Home from "../../pages/Home";
import Category from "./Category";
import Products from "../../pages/Products";
import ProductDetails from "../Products/ProductDetails";
import ProductGrid from "../Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 3,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 4,
    name: "Product 2",
    price: 160,
    images: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    _id: 5,
    name: "Product 3",
    price: 170,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 6,
    name: "Product 4",
    price: 180,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: 3,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 4,
    name: "Product 2",
    price: 160,
    images: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    _id: 5,
    name: "Product 3",
    price: 170,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 6,
    name: "Product 4",
    price: 180,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
];

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <Home />
      {/* Category */}
      <Category />
      {/* Product Details */}
      <ProductDetails />
      {/* Product Page */}
      <div className="mx-auto bg-background text-foreground">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Top Wears for Women
        </h2>
        <div className="px-30">
          <ProductGrid products={placeholderProducts} />
        </div>
      </div>
      <Products />
      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default UserLayout;
