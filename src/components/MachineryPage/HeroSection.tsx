import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-fit flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 overflow-hidden">
  
      <div className="relative text-center max-w-3xl px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Machines That Build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
         Our Products
          </span>
        </h1>
        <p className="mt-6 md:text-lg text-gray-700 max-w-2xl mx-auto">
          With advanced machinery, we deliver {" "}
          <span className="font-semibold text-gray-900">
            precision, quality, and efficiency 
          </span>{" "}
          at every stage of manufacturing.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
