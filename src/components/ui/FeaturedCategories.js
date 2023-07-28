import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  const categories = [
    {
      title: "CPU",
      image: '/images/cpu.png',
      href: "/categories/cpu",
    },
    {
      title: "Motherboard",
      image: '/images/motherboard.png',
      href: "/categories/motherboard",
    },
    {
      title: "RAM",
      image: '/images/ram.png',
      href: "/categories/ram",
    },
    {
      title: "Power Supply Unit",
      image: '/images/power.png',
      href: "/categories/powersupply",
    },
    {
      title: "Storage Device",
      image: '/images/storage.png',
      href: "/categories/storagedevice",
    },
    {
      title: "Monitor",
      image: '/images/monitor.png',
      href: "/categories/monitor",
    },
    {
      title: "Others",
      image: '/images/others.png',
      href: "/categories/others",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-12 ">
      <h1 className="text-center text-2xl font-semibold mb-2">
        Featured Categories
      </h1>
      <p className="text-center mb-8">
        Get your products from our featured category!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 justify-between">
        {categories?.map((category, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-[10px] hover:text-gray-600 hover:shadow-2xl px-4 py-1"
          >
            <Link href={category?.href}>
              <div className="text-center">
                <Image
                  src={category?.image}
                  width={100}
                  height={100}
                  alt="card image"
                  className="mx-auto pt-4"
                />
                <p className="text-center mt-3 text-sm font-medium">
                  {category?.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
