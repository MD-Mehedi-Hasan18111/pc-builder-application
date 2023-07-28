import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const FeaturedProducts = ({ products }) => {
  return (
    <section className="w-11/12 mx-auto py-10">
      <h1 className="text-center text-2xl font-semibold mb-2">
        Featured Products
      </h1>
      <p className="text-center mb-8">Explore & Get Your Desired Products!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch">
        {products?.map((product, i) => (
          <div
            key={i}
            className="relative border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg"
          >
            <Link href={`/products/${product?._id}`}>
              <div className="relative">
                <img
                  src={product?.image}
                  alt="product-img"
                  className="h-[200px] w-[200px] mx-auto p-4"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold rounded-bl-full py-1 px-3">
                  {product?.Category}
                </div>
              </div>
              <p className="font-semibold text-center my-2">
                {product?.ProductName}
              </p>
            </Link>
            <div className="flex items-center justify-between px-4">
              {/* Add star rating component here if available */}
              <div className="flex items-center">
                <AiFillStar className="text-yellow-500 text-[19px] mr-1.5" />
                <p className="text-gray-600">
                  {(
                    product?.Reviews?.reduce(
                      (acc, review) => acc + review.IndividualRating,
                      0
                    ) / product?.Reviews.length
                  ).toFixed(1)}
                </p>
              </div>
              <p className="font-semibold text-accent">{product?.Price}</p>
            </div>
            <div className="absolute bottom-0 left-0 bg-green-800 text-white text-xs font-semibold py-1 px-3">
              {product?.Status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
