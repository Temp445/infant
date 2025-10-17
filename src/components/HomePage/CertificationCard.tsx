"use client";

import React from "react";
import { motion } from "framer-motion";

const CertificationCard = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="mx-auto w-full max-w-6xl px-4 z-30 mt-5"
    >
      <div className="bg-white rounded border border-orange-500 shadow-xl py-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center">
        <div className="flex flex-col items-center justify-center md:border-r">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500">
            Quality Certification
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-2 leading-snug">
            ISO 9001:2015, IATF 16949:2016, <br className="hidden sm:block" />
            AS9100 D Certified
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:border-r">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-500">
            OEM Approved
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-2 leading-snug">
            100 PPM Certified by Hyundai <br />
            Green Vendor: Maruti Suzuki, TATA Motors, Mahindra
          </p>
        </div>

        <div className="md:flex flex-col items-center justify-center hidden">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-500">
            35+
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Years of Excellence
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
