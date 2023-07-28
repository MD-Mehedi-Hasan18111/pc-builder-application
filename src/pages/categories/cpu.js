import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const CPU = () => {
  return (
    <div className="mt-[80px]">
      <h2>This is CPU Category Page</h2>
    </div>
  );
};

CPU.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default CPU;
