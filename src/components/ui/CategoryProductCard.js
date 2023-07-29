import React from "react";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";

const CategoryProductCard = ({ product }) => {
  const sumOfRatings = product?.Reviews.reduce(
    (total, review) => total + review.IndividualRating,
    0
  );
  const averageRating = sumOfRatings / product?.Reviews.length;

  const router = useRouter();

  const handleProductClick = () => {
    // Redirect the user to the product detail page when the card is clicked
    router.push(`/products/${product?._id}`);
  };

  return (
    <div
      className="border rounded p-4 hover:shadow-2xl cursor-pointer"
      onClick={handleProductClick}
    >
      <img
        src={product?.image}
        alt={product?.ProductName}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="font-bold md:text-[16px] text-[14px] mb-2">{product?.ProductName}</h3>
      <p className="text-gray-600 md:text-[16px] text-[14px] mb-2">Category: {product?.Category}</p>
      <p className="text-gray-600 md:text-[16px] text-[14px] mb-2">{product?.Price}</p>
      <p
        className={`text-sm ${
          product?.Status === "In Stock" ? "text-green-500" : "text-red-500"
        } md:text-[16px] text-[14px]`}
      >
        {product?.Status}
      </p>
      <div className="flex items-center mt-2">
        <h2 className="md:text-[16px] text-[14px] mr-1.5">Avg. Rating:</h2>
        <div className="flex items-center">
          <StarRatings
            rating={averageRating}
            starRatedColor="yellow"
            numberOfStars={5}
            starDimension="16px"
            starSpacing="2px"
          />
          <p className="text-[14px] ml-1.5">({averageRating})</p>
        </div>
      </div>
      {/* Add more product details or actions here */}
    </div>
  );
};

export default CategoryProductCard;
