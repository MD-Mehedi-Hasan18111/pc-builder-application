import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/ui/Banner";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="mt-[80px]">
      <Banner />
      <FeaturedCategories />
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
