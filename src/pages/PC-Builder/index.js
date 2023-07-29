import RootLayout from "@/components/layout/RootLayout";
import Heading from "@/components/ui/Heading";
import { chooseSelectCategory } from "@/redux/features/builderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PCBuilder = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categories = [
    {
      title: "CPU",
      image: "/images/cpu.png",
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      image: "/images/motherboard.png",
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      image: "/images/ram.png",
      href: "/categories/ram",
    },
    {
      title: "Power Supply Unit",
      image: "/images/power.png",
      href: "/categories/powersupply",
    },
    {
      title: "Storage Device",
      image: "/images/storage.png",
      href: "/categories/storagedevice",
    },
    {
      title: "Monitor",
      image: "/images/monitor.png",
      href: "/categories/monitor",
    },
    {
      title: "Others",
      image: "/images/others.png",
      href: "/categories/others",
    },
  ];

  const handleChooseClick = (redirectUri, title) => {
    dispatch(chooseSelectCategory(title));
    router.push(redirectUri);
  };

  const builderState = useSelector((state) => state.builder.selectedProducts);

  const showChoosedProduct = (category) => {
    if (category === "CPU") {
      return builderState["cpu"];
    } else if (category === "RAM") {
      return builderState["ram"];
    } else if (category === "Monitor") {
      return builderState["monitor"];
    } else if (category === "Motherboard") {
      return builderState["motherboard"];
    } else if (category === "Storage Device") {
      return builderState["storage"];
    } else if (category === "Power Supply Unit") {
      return builderState["powersupply"];
    } else if (category === "Others") {
      return builderState["others"];
    }
  };

  return (
    <div>
      <Heading title={"PC Builder"} />

      <div className="w-11/12 mx-auto pb-12 ">
        <h1 className="text-center text-2xl font-semibold mb-2">
          Choose Products
        </h1>
        <p className="text-center mb-8">PC Builder - Build Your Dream PC!</p>
        <div className="grid grid-cols-1 gap-8">
          {categories?.map((category, i) => (
            <div
              key={i}
              className="flex items-center justify-between border border-gray-200 rounded-[10px] md:px-10 px-4 py-1"
            >
              <div>
                <div className="flex items-center mb-2">
                  <Image
                    src={category?.image}
                    height={50}
                    width={50}
                    alt="CategoryImage"
                  />
                  <h3 className="md:text-[18px] text-[16px] font-[500] ml-4">
                    {category?.title !== "Others"
                      ? category?.title
                      : `${category?.title} (Optional)`}
                  </h3>
                </div>
                {showChoosedProduct(category?.title) && <hr />}
                {showChoosedProduct(category?.title) && (
                  <div className="flex items-center mt-2">
                    <img
                      src={showChoosedProduct(category?.title)?.image}
                      className="md:h-[60px] h-[150px] md:w-[60px] w-[150px] rounded-[16px]"
                    />
                    <div className="md:text-[16px] text-[14px] ml-[15px]">
                      <h3 className="font-[600]">
                        {showChoosedProduct(category?.title)?.ProductName}
                      </h3>
                      <h4>
                        Price: {showChoosedProduct(category?.title)?.Price}
                      </h4>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() =>
                  handleChooseClick(category?.href, category?.title)
                }
                type="button"
                className="py-2 px-4 border border-transparent md:text-[16px] text-[14px] font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 focus:outline-none"
              >
                {showChoosedProduct(category?.title) ? "Change" : "Choose"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PCBuilder;
