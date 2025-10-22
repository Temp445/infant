"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "@/assets/bg1.png";
import Link from "next/link";

const HeroSection = () => {
  return (
<section className="relative overflow-hidden">
  <div className="container relative z-10 mx-auto flex flex-col md:flex-row lg:items-center gap-5 2xl:pl-12">
    <div className="w-full text-left space-y-4 lg:space-y-6 px-4 order-2 md:order-1">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-3xl md:text-3xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 font-oswald leading-tight"
      >
        High-Quality Components, <br />
        <span className="text-[#1F5A8B]">Built with Precision</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-4"
      >
        <p className="lg:text-lg text-gray-700 max-w-2xl">
          Delivering precision-engineered components for brakes and engines
          trusted by leading OEMs and Tier-1 suppliers worldwide.
        </p>
        <p className="lg:text-lg text-gray-700 max-w-2xl">
          With advanced manufacturing capabilities and a strong focus on
          quality, we specialize in producing reliable components that power
          safety and efficiency in the automotive industry.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-row gap-6 justify-start mt-8 md:mt-3 lg:mt-12 mb-5"
      >
        <Link
          href="/contact"
          className="px-6 py-3 lg:text-lg font-semibold text-white bg-[#FF0000] hover:bg-[#C40C0C] rounded-full shadow-lg transition-all duration-300"
        >
          Contact Us
        </Link>
        <Link
          href="/products"
          className="px-6 py-3 lg:text-lg font-semibold border border-gray-700 text-gray-800 rounded-full shadow transition-all duration-300"
        >
          Our Products
        </Link>
      </motion.div>
    </div>

    <div className="w-full relative md:h-[500px] xl:h-[530px] 2xl:h-[650px] md:[clip-path:polygon(0%_0,100%_0,100%_100%,15%_100%)] md:order-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={Image1}
          alt="Industrial Components"
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
