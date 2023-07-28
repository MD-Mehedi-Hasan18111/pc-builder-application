import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = ({ products }) => {
  return (
    <section className="w-11/12 mx-auto py-10">
      <h1 className="text-center text-2xl font-semibold mb-2">
        Featured Products
      </h1>
      <p className="text-center mb-8">Explore & Get Your Desired Products!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-stretch">
        {products?.map((product, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg">
            <Link href={`/products/${product?._id}`}>
              <div className="relative">
                <img
                  src={product?.image}
                  alt="product-img"
                  className="h-[200px] w-[200px] mx-auto p-4"
                  style={{objectFit: "cover"}}
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold rounded-bl-full py-1 px-3">
                  {product?.Category}
                </div>
              </div>
              <p className="font-semibold text-center my-2">Product Name</p>
            </Link>
            <div className="flex items-center justify-between px-4">
              {/* Add star rating component here if available */}
              {/* <FaStar className="text-yellow-500" /> */}
              <p className="text-accent"></p>
              <p className="font-semibold text-accent">{product?.Price}</p>
            </div>
            <p className="text-sm text-primary font-semibold px-4 pb-4">
              {product?.Status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
