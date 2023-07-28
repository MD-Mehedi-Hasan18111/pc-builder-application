import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Build Your Dream PC
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Choose the best components and create your custom PC.
        </p>
        <Link href="/pc-builder">
          <p className="inline-block px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300">
            PC Builder
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
