import RootLayout from "@/components/layout/RootLayout";
import CategoryProductCard from "@/components/ui/CategoryProductCard";
import Heading from "@/components/ui/Heading";
import React from "react";

const CPU = ({ products }) => {
  return (
    <div>
      <Heading title={"CPU/Processor"} />

      <h2 className="text-2xl font-bold mb-[68px]">CPU / Processor</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {products.map((product) => (
          <CategoryProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

CPU.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `http://localhost:3000/api/products?category=CPU/Processor`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

export default CPU;
