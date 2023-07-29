import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="py-[50px] md:px-[100px] px-[20px]">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
