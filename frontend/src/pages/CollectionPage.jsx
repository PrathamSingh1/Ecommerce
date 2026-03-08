import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // clean the listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
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

      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-background text-foreground">
      {/* Mobile FIlter button */}
      <button
        ref={buttonRef}
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* filter sidebar */}
      <div
        ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 ease-out lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <h2>
        <div className="text-2xl uppercase mb-4 font-semibold">
          All Collection
        </div>
        {/* sorting */}
        <SortOptions />
        {/* Product Grid */}
        <ProductGrid products={products} />
      </h2>
    </div>
  );
};

export default CollectionPage;
