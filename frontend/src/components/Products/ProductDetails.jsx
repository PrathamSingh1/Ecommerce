import React, { act, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stove top whistling kettle",
  review: 21,
  price: 120,
  originalPrice: 150,
  description:
    "The vibrantly coloured porcelain exterior is resistant to stains, chips and cracks, whilst the stainless steel handle and lid provide easy and safe handling. Simply remove the lid to fill, place on any hob including induction and, when boiled, a clear, audible whistle will sound.",
  brand: "Electronic",
  material: "Steel",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=3",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=4",
      altText: "Stylish Jacket 1",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 1,
    name: "Product 3",
    price: 130,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 140,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
];

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setSelectedImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select the size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6 min-h-screen text-foreground bg-background">
      <h2 className="text-3xl font-semibold text-center pl-10 mt-10 mb-5">
        Best Seller
      </h2>
      <div className="max-w-7xl mx-auto p-8 rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT - Images */}
          <div>
            <div className="bg-gray-100 h-125 w-120 mx-auto rounded-lg">
              <img
                src={selectedImage}
                alt="product"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-5 pl-15">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  onClick={() => setSelectedImage(image.url)}
                  className={`w-22 h-20 object-cover cursor-pointer border ${
                    selectedImage === image.url
                      ? "border-3 border-neutral-400"
                      : "border-none"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT - Details */}
          <div>
            <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400">★★★★☆</span>
              <span className="text-sm text-gray-500">
                {`(${selectedProduct.review} reviews)`}
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold mt-4">
              {`₹${selectedProduct.price}`}
            </p>

            <div className="border-b border-b-neutral-300 dark:border-b-neutral-600 mt-2" />

            {/* Description */}
            <p className="text-gray-500 dark:text-neutral-300 text-sm mt-4 leading-relaxed">
              {selectedProduct.description}
            </p>

            <div className="border-b border-b-neutral-300 dark:border-b-neutral-600 mt-2" />

            {/* Colors */}
            <div className="mt-6">
              <p className="font-medium mb-2">Colors:</p>
              <div className="flex gap-3">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black dark:border-white"
                        : "border-gray-200 dark:border-none"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.8)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}

            <div className="mb-6">
              <p className="text-neutral-200 text-md">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => {
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-2 py-1 rounded-md border border-neutral-600 ${selectedSize === size ? "bg-black dark:bg-white text-white dark:text-black" : ""}`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-b border-b-neutral-300 dark:border-b-neutral-600 mt-2" />

            {/* Quantity */}
            <div className="mt-6 flex items-center gap-4">
              <p className="font-medium">Quantity:</p>
              <div className="flex items-center border border-neutral-800 dark:border-neutral-600 rounded-md">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="p-2"
                >
                  <FiMinus />
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="p-2"
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`flex-1 bg-black text-neutral-200 py-3 rounded-md hover:bg-gray-800 transition ${isButtonDisabled ? "cursor-not-allowed opacity-50" : ""}`}
              >
                {isButtonDisabled ? "Adding" : "ADD TO BAG"}
              </button>
              <button className="flex-1 border py-3 text-neutral-800 dark:text-neutral-300 rounded-md hover:bg-gray-100 dark:hover:text-neutral-800 transition">
                ADD TO WISHLIST
              </button>
            </div>

            {/* Characteristics */}
            <div className="mt-10 text-neutral-800 dark:text-neutral-200">
              <h3 className="text-xl font-bold mb-4 ">Characteristics:</h3>
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
