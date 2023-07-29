import RootLayout from "@/components/layout/RootLayout";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const sumOfRatings = product?.Reviews.reduce(
    (total, review) => total + review.IndividualRating,
    0
  );
  const averageRating = sumOfRatings / product?.Reviews.length;

  const Description = () => {
    return (
      <div className="ml-[20px]">
        <h2 className="mt-[14px] mb-[8px] font-bold md:text-[20px] text-[14px]">
          Description
        </h2>
        <p>{product?.Description}</p>
      </div>
    );
  };
  const Features = () => {
    return (
      <div className="ml-[20px]">
        <h2 className="mt-[14px] mb-[8px] font-bold md:text-[20px] text-[14px]">
          Features
        </h2>
        {Object?.keys(product?.KeyFeatures)?.length > 0 ? (
          Object?.keys(product?.KeyFeatures)?.map((key, i) => {
            return (
              <div key={i} className="flex items-center mb-[7px]">
                <p className="md:text-[16px] text-[14px] font-bold mr-1.5">
                  {key.replace(/([a-z](?=[A-Z]))/g, "$1 ")}:
                </p>
                <p className="md:text-[16px] text-[14px]">
                  {product?.KeyFeatures[key]}
                </p>
              </div>
            );
          })
        ) : (
          <p className="font-bold md:text-[16px] text-[14px]">
            No Features Available!
          </p>
        )}
      </div>
    );
  };
  const Reviews = () => {
    return (
      <div className="ml-[20px]">
        <h2 className="mt-[14px] mb-[12px] font-bold md:text-[20px] text-[14px]">
          Reviews
        </h2>
        {product?.Reviews?.length > 0 ? (
          product?.Reviews?.map((review, i) => {
            return (
              <div key={i} className="mb-[10px]">
                <div className="flex items-start">
                  <div className="bg-gray-600 h-[30px] w-[30px] rounded-[50%] mr-[12px]" />
                  <div>
                    <h3 className="font-bold">{review?.Name}</h3>
                    {/* Rating show here */}
                    <div className="flex items-center">
                      <StarRatings
                        rating={review?.IndividualRating}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        starDimension="16px"
                        starSpacing="2px"
                      />
                      <p className="text-[14px] ml-1.5">
                        ({review?.IndividualRating})
                      </p>
                    </div>
                  </div>
                </div>
                <p className="md:text-[16px] text-[14px] ml-[42px]">
                  {review?.Comment}
                </p>
              </div>
            );
          })
        ) : (
          <p className="font-bold md:text-[16px] text-[14px]">No Reviews!</p>
        )}
      </div>
    );
  };

  const tabData = [
    { label: "Description", content: <Description /> },
    { label: "Features", content: <Features /> },
    { label: "Reviews", content: <Reviews /> },
  ];

  return (
    <div>
      <div>
        <img
          src={product?.image}
          alt="productImage"
          className="md:h-[300px] h-[100%] md:w-[300px] w-[100%] md:mx-auto"
        />
        <h2 className="md:text-3xl text-[20px] text-center mt-4">
          {product?.ProductName}
        </h2>
        <div className="mt-4 md:w-[240px] mx-auto flex items-center">
          <h3 className="font-[500] md:text-[16px] text-[14px] mr-1.5">
            Avg. Rating:
          </h3>
          <div className="flex items-center">
            <StarRatings
              rating={averageRating}
              starRatedColor="yellow"
              numberOfStars={5}
              starDimension="16px"
              starSpacing="2px"
            />
            <p className="ml-1.5">({averageRating})</p>
          </div>
        </div>
        <div className="mt-6 flex items-center md:w-[400px] w-[270px] mx-auto">
          <div className="md:text-[18px] text-[14px] bg-blue-500 text-white md:px-[12px] px-[6px] py-[4px] rounded-[5px] md:mr-10 mr-4">
            {product?.Category}
          </div>
          <div className="md:text-[18px] text-[14px] bg-green-500 text-white md:px-[12px] px-[6px] py-[4px] rounded-[5px] md:mr-10 mr-4">
            {product?.Status}
          </div>
          <div className="md:text-[18px] text-[14px] bg-gray-500 text-white md:px-[12px] px-[6px] py-[4px] rounded-[5px]">
            {product?.Price}
          </div>
        </div>
        <div className="mt-[30px]">
          <div className="flex border-b border-gray-300">
            {tabData.map((tab, index) => (
              <button
                key={index}
                className={`${
                  index === activeTab
                    ? "bg-gray-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300"
                } py-2 px-4 font-medium rounded-t-md md:text-[16px] text-[14px] focus:outline-none border-b-0`}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-4">{tabData[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?productId=${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};

export default ProductDetails;
