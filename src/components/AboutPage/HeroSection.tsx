"use client";

import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/aboutbg.png";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gray-900">
      <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[650px]">
        <Image
          src={HeroImage}
          alt="Precision Engineering Excellence"
          className="w-full h-full object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col justify-center text-center lg:text-left max-w-2xl space-y-6 lg:space-y-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-oswald text-white leading-tight"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-100 text-lg sm:text-xl"
          >
            We deliver end-to-end mechanical solutions, from custom components
            to large-scale production, ensuring precision and lasting
            reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/contact"
              className="px-6 py-3 rounded bg-[#B71C1C] text-white font-bold shadow-lg transition"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 text-white font-bold shadow-lg border border-white/30 transition"
            >
              Products
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 lg:mt-0 hidden md:flex flex-wrap justify-center lg:justify-end gap-4 w-full lg:w-auto lg:absolute lg:bottom-5 right-10 "
        >
          <div className="bg-gray-100 p-6 rounded shadow-lg text-center min-w-[110px]">
            <h3 className="text-[#1F5A8B] font-extrabold text-2xl">120+</h3>
            <p className="text-gray-800 font-bold text-sm">Skilled Engineers</p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow-lg text-center min-w-[110px]">
            <h3 className="text-[#1F5A8B] font-extrabold text-2xl">100%</h3>
            <p className="text-gray-800 font-bold text-sm">On-Time Delivery</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
