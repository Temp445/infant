import React from "react";
import Image from "next/image";

import image1 from "@/assets/Machine/machine1.png";
import image2 from "@/assets/Machine/machine2.png";
import image3 from "@/assets/Machine/machine3.png";
import image4 from "@/assets/Machine/machine4.png";
import image5 from "@/assets/Machine/machine5.png";
import image6 from "@/assets/Machine/machine6.png";
import image7 from "@/assets/Machine/machine7.png";
import image8 from "@/assets/Machine/machine8.png";
import image9 from "@/assets/Machine/machine9.png";

const machineryData = [
  { src: image1, title: "Turn Mill" },
  { src: image2, title: "CNC" },
  { src: image3, title: "VMC" },
  { src: image4, title: "VTL" },
  { src: image5, title: "Drilling Machine" },
  { src: image6, title: "Traub" },
  { src: image7, title: "Centerless Grinding" },
  { src: image8, title: "Cylindrical Grinding" },
  { src: image9, title: "Thread Rolling" },
];

const Machine = () => {
  return (
    <section className="py-5 md:py-20 container mx-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold md:px-4 lg:px-12 mb-14 text-gray-900 text-center md:text-left">
        Our Machinery <span className="text-orange-600">Collection</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-12 mx-auto px-6">
        {machineryData.map((machine, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 
                       bg-white transition-all duration-500 transform 
                       hover:-translate-y-3 hover:shadow-2xl hover:border-orange-400 group"
          >
            <div className="relative h-56 md:h-80 w-full overflow-hidden">
              <Image
                src={machine.src}
                alt={machine.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-3 text-center relative bg-gradient-to-r from-orange-500 to-orange-600">
              <h2 className="text-lg font-semibold text-white tracking-wide group-hover:scale-105 transition-transform duration-300">
                {machine.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Machine;
