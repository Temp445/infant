import React from "react";
import Image from "next/image";

import image1 from "@/assets/Image1.png";
import image2 from "@/assets/Image2.png";
import image3 from "@/assets/Image4.jpg";
import image4 from "@/assets/Image3.jpg";
import image5 from "@/assets/Image5.jpg";

const ShopFloor = () => {
  return (
    <section className="py-16 bg-orange-100">
      <div className="container mx-auto">
           <div className=" mb-12 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center md:text-left">
          Shop <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500">Floor</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-4 lg:px-10">
        <div className="space-y-6">
          <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-lg group border-2 border-white">
            <Image
              src={image1}
              alt="Shop Floor"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg group border-2 border-white">
            <Image
              src={image2}
              alt="Shop Floor"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <div className="relative h-72 md:h-[700px] w-full rounded-2xl overflow-hidden shadow-lg group border-2 border-white">
          <Image
            src={image3}
            alt="Shop Floor"
            fill
            className="object-cover transform group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="space-y-6">
          <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg group border-2 border-white">
            <Image
              src={image4}
              alt="Shop Floor"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-lg group border-2 border-white hidden md:block">
            <Image
              src={image5}
              alt="Shop Floor"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
      </div>
   
    </section>
  );
};

export default ShopFloor;
