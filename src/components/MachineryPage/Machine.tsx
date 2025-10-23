'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Machinery {
  _id: string;
  machineryName: string;
  machineryImage: string[];
}
const Machine = () => {
   const [machinery, setmachinery] = useState<Machinery[]>([]);
  
    useEffect(() => {
      const fetchmachinery = async () => {
        try {
          const { data } = await axios.get('/api/machinery');
  
          const machineryArray = Array.isArray(data)
            ? data
            : Array.isArray(data.data)
            ? data.data
            : [];
  
          setmachinery(machineryArray);
        } catch (error) {
          console.error(error);
          alert('Failed to fetch machinery data.');
          setmachinery([]);
        } finally {
        }
      };
      fetchmachinery();
    }, []);
  return (
    <section className="py-5 md:py-20 container mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold font-oswald md:px-4 lg:px-12 mb-14 text-gray-900 text-center md:text-left">
      Machinery We Use
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-12 mx-auto px-6">
        {machinery.map((machine, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 
                       bg-white transition-all duration-500 transform 
                       hover:-translate-y-3 hover:shadow-2xl hover:border-[#1F5A8B] group"
          >
            <div className="relative h-56 md:h-80 w-full overflow-hidden">
              <img
                src={machine.machineryImage[0]}
                alt={machine.machineryName}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-3 text-center relative bg-[#1F5A8B]">
              <h3 className="text-lg font-semibold text-white tracking-wide group-hover:scale-105 transition-transform duration-300">
                {machine.machineryName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Machine;
