import RootLayout from "@/components/layout/RootLayout";
import React from "react";
import { signIn } from "next-auth/react";
import Heading from "@/components/ui/Heading";

const LoginPage = () => {
  return (
    <>
      <Heading title={"Login"} />
      <div className="flex flex-col items-center justify-center md:h-[458px] bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <button
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md"
          onClick={() =>
            signIn("github", {
              callbackUrl: "https://pc-builder-application.vercel.app/",
            })
          }
        >
          Sign In with GitHub
        </button>
      </div>
    </>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default LoginPage;
