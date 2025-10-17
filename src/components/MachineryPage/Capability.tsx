import React from "react";
import { Wrench, Ruler, Gauge, Settings } from "lucide-react";

const Capability = () => {
  const capabilities = [
    {
      title: "Maximum Holding Capacity",
      value: "56mm Bar",
      icon: <Wrench className="w-10 h-10 text-orange-500" />,
    },
    {
      title: "Turning Capacity",
      value: "300 mm",
      icon: <Ruler className="w-10 h-10 text-orange-500" />,
    },
    {
      title: "CNC Tolerance",
      value: "10 Micron",
      icon: <Gauge className="w-10 h-10 text-orange-500" />,
    },
    {
      title: "Grinding Tolerance",
      value: "2 Micron",
      icon: <Settings className="w-10 h-10 text-orange-500" />,
    },
  ];

  return (
    <section className="py-16 container mx-auto">
      <div className=" px-6 lg:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center xl:text-left">
          Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500">Excellence</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-orange-300
                         w-80 p-8 flex flex-col items-center text-center
                         transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="mb-4">{cap.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cap.title}</h3>
              <p className="text-lg font-bold text-orange-600">{cap.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capability;
