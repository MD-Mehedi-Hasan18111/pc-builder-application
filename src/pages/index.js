import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/ui/Banner";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Footer from "@/components/ui/Footer";
import Heading from "@/components/ui/Heading";
import Navbar from "@/components/ui/Navbar";
import React from "react";
import { useSelector } from "react-redux";

const Home = ({ products }) => {

  // const state = useSelector((state) => state.builder.selectedProducts)

  return (
    <div>
      <Heading title={"Home"} />
      <Banner />
      <FeaturedProducts products={products} />
      <FeaturedCategories />
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  // Randomly select 6 products
  function getRandomProducts(data, count) {
    const shuffled = data.data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomProducts = getRandomProducts(data, 6);

  return {
    props: {
      products: randomProducts,
    },
    revalidate: 10,
  };
};

export default Home;
