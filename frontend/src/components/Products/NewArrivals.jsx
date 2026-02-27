import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const NewArrivals = () => {
  const swiperRef = useRef(null);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Classic Sneakers",
      price: 85,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Classic Sneakers",
        },
      ],
    },
    {
      _id: "3",
      name: "Summer Dress",
      price: 98,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Summer Dress",
        },
      ],
    },
    {
      _id: "4",
      name: "Denim Jeans",
      price: 76,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Denim Jeans",
        },
      ],
    },
    {
      _id: "5",
      name: "Fashionable Handbag",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Fashionable Handbag",
        },
      ],
    },
    {
      _id: "6",
      name: "Sporty T-shirt",
      price: 49,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Sporty T-shirt",
        },
      ],
    },
    {
      _id: "7",
      name: "Trendy Sunglasses",
      price: 60,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Trendy Sunglasses",
        },
      ],
    },
  ];

  return (
    <div className="h-full w-full bg-background text-center text-foreground pt-10">
      <h2 className="text-3xl font-semibold pl-10 mt-10 mb-5">
        Explore New Arrivals
      </h2>
      <p className="text-sm text-neutral-400">
        Discover the latest styles straight off the runway, freshly added to
        keep your wardrobe on the cutting edge of fashion.
      </p>
      <div className="relative">
        {/* Scroll Buttons */}
        <div className="absolute right-3 top-[-50px] flex space-x-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-1 rounded border bg-neutral-200 text-neutral-800 cursor-pointer"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-1 rounded border bg-neutral-200 text-neutral-800 cursor-pointer"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
        {/* Scrollable Content */}

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          resistanceRatio={0}
          watchOverflow={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="container mx-auto mt-20 px-6"
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {newArrivals.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="relative rounded-lg overflow-hidden shadow bg-neutral-800">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  className="w-full sm:h-90 h-70 object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/20 backdrop-blur-md text-neutral-200 p-4">
                  <Link to={`/product/${product._id}`}>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="mt-1">${product.price}</p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
