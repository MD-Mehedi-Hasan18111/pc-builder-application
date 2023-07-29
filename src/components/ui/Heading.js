import Head from "next/head";
import React from "react";

const Heading = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Heading;
