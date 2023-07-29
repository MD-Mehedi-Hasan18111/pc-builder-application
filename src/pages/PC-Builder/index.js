import RootLayout from "@/components/layout/RootLayout";
import Heading from "@/components/ui/Heading";
import {
  chooseSelectCategory,
  clearBuilder,
} from "@/redux/features/builderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const PCBuilder = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categories = [
    {
      title: "CPU",
      image: "/images/cpu.png",
      href: "/category/cpu",
    },
    {
      title: "Motherboard",
      image: "/images/motherboard.png",
      href: "/category/motherboard",
    },
    {
      title: "RAM",
      image: "/images/ram.png",
      href: "/category/ram",
    },
    {
      title: "Power Supply Unit",
      image: "/images/power.png",
      href: "/category/powersupply",
    },
    {
      title: "Storage Device",
      image: "/images/storage.png",
      href: "/category/storagedevice",
    },
    {
      title: "Monitor",
      image: "/images/monitor.png",
      href: "/category/monitor",
    },
    {
      title: "Others",
      image: "/images/others.png",
      href: "/category/others",
    },
  ];

  const handleChooseClick = (redirectUri, title) => {
    router.push(redirectUri);
    dispatch(chooseSelectCategory(title));
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

  const handleCompleteBuild = () => {
    swal("PC Build Completed!", "Your Dream PC Will Get Early Soon 💥", "success");
    dispatch(
      clearBuilder({
        cpu: null,
        ram: null,
        monitor: null,
        storage: null,
        motherboard: null,
        powersupply: null,
        others: null,
      })
    );
  };

  return (
    <div>
      <Heading title={"PC Builder"} />

      <div className="w-11/12 mx-auto pb-12 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="md:text-2xl text-[16px] font-semibold mb-2">Choose Products</h1>
            <p className="md:text-[16px] text-[14px] mb-8">PC Builder - Build Your Dream PC!</p>
          </div>
          {Object.entries(builderState).every(
            ([key, value]) => key === "others" || value !== null
          ) ? (
            <button
              onClick={handleCompleteBuild}
              type="button"
              className="py-2 px-4 border border-transparent md:text-[16px] text-[12px] font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
            >
              Complete Build
            </button>
          ) : (
            <button
              disabled
              type="button"
              className="py-2 px-4 border border-transparent md:text-[16px] text-[12px] font-medium rounded-md text-white bg-red-300"
            >
              Complete Build
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 gap-8">
          {categories?.map((category, i) => (
            <div
              key={i}
              className="flex md:flex-row flex-col md:items-center items-start justify-between border border-gray-200 rounded-[10px] md:px-10 px-4 py-3"
            >
              <div className="md:w-[240px] w-auto">
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
              </div>
              <div className="md:w-[300px] w-auto">
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
                className={`py-2 px-4 md:mt-0 mt-3 border border-transparent md:text-[16px] text-[14px] font-medium rounded-md text-white ${
                  showChoosedProduct(category?.title)
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-purple-500 hover:bg-purple-600"
                } focus:outline-none`}
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
