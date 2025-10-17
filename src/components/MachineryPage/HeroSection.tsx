'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-gradient-to-br from-orange-200 via-orange-300 to-red-200 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center md:max-w-4xl px-6 py-16 md:py-24"
      >
        <h1 className="text-2xl md:text-5xl  text-gray-900 leading-tight">
          Powering Innovation With{" "} <br/>
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Advanced Machinery
          </span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          We use state-of-the-art equipment to ensure{" "}
          <span className="font-semibold text-gray-900">
            precision, efficiency, and consistent quality
          </span>{" "}
          in every product we manufacture.
        </p>

  
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/products"
            className="px-6 py-3 rounded-full border text-black hover:bg-white font-semibold shadow-lg hover:scale-105 transition"
          >
           Our Products
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition hidden md:block"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
