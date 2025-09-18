"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
};

const LatestProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Replace with your backend API URL
    fetch("https://your-backend-api.com/products/latest")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">Latest Products</h2>
        <div className="flex justify-center mb-6">
          <div className="h-[2px] w-20 bg-red-500"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm p-4 flex flex-col justify-between"
            >
              {/* Image */}
              <Image
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-3"
              />

              {/* Name & Category */}
              <h3 className="font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>

              {/* Rating */}
              <div className="flex items-center text-yellow-500 my-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < product.rating ? "fill-current" : "stroke-current"
                    }
                  />
                ))}
              </div>

              {/* Price */}
              <p className="text-red-600 font-semibold mb-3">
                ₦{product.price.toLocaleString()}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm w-full">
                  View More
                </button>
                <button className="ml-2 text-gray-600 hover:text-black">
                  🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
