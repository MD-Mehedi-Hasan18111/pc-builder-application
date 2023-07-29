import React from "react";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBuilder } from "@/redux/features/builderSlice";

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

  const dispatch = useDispatch();
  const categoryState = useSelector(
    (state) => state.builder.chooseSelectedCategory
  );

  const handleAddProduct = (product) => {
    if (product.Category === "CPU/Processor") {
      dispatch(addProductToBuilder({ key: "cpu", data: product }));
      router.push("/PC-Builder");
    } else if (product?.Category === "RAM") {
      dispatch(addProductToBuilder({ key: "ram", data: product }));
      router.push("/PC-Builder");
    } else if (product?.Category === "Motherboard") {
      dispatch(addProductToBuilder({ key: "motherboard", data: product }));
      router.push("/PC-Builder");
    } else if (product?.Category === "Monitor") {
      dispatch(addProductToBuilder({ key: "monitor", data: product }));
      router.push("/PC-Builder");
    } else if (product?.Category === "Storage Device") {
      dispatch(addProductToBuilder({ key: "storage", data: product }));
      router.push("/PC-Builder");
    } else if (product?.Category === "Power Supply Unit") {
      dispatch(addProductToBuilder({ key: "powersupply", data: product }));
      router.push("/PC-Builder");
    } else if (product?.Category === "Others") {
      dispatch(addProductToBuilder({ key: "others", data: product }));
      router.push("/PC-Builder");
    }
  };

  return (
    <div className="border rounded p-4 hover:shadow-2xl cursor-pointer">
      <div onClick={handleProductClick}>
        <img
          src={product?.image}
          alt={product?.ProductName}
          className="w-full h-40 object-cover mb-4"
        />
        <h3 className="font-bold md:text-[16px] text-[14px] mb-2">
          {product?.ProductName}
        </h3>
        <p className="text-gray-600 md:text-[16px] text-[14px] mb-2">
          Category: {product?.Category}
        </p>
        <p className="text-gray-600 md:text-[16px] text-[14px] mb-2">
          {product?.Price}
        </p>
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
      </div>
      {categoryState !== "" && (
        <div className="text-center mt-4">
          <button
            onClick={() => handleAddProduct(product)}
            className="border border-purple-600 px-6 py-1.5 bg-white text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300"
          >
            Add To Builder
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryProductCard;
