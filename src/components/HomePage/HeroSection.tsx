"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "@/assets/Image2.png";
import Image2 from "@/assets/Image4.jpg";
import Image3 from "@/assets/Image3.jpg";
import { FaGear } from "react-icons/fa6";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 border-b-4 border-orange-600 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/20 rotate-45 -translate-x-36 -translate-y-36 rounded-xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/20 rotate-12 -translate-x-48 translate-y-24 rounded-xl"></div>
      <div
        className="absolute top-0 left-0 text-8xl text-orange-500/20 -translate-x-5 -translate-y-5 animate-spin"
        style={{ animationDuration: "20s" }}
      >
        <FaGear />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-6 xl:px-12 py-10 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <motion.div className="w-full lg:w-1/2 text-left space-y-6">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="relative"
          >
            <div className="absolute w-1 h-12 md:h-16 2xl:h-24 top-1 md:top-3 -left-3 bg-orange-600"></div>
            <h1 className="text-2xl md:text-4xl  2xl:text-5xl font-bold text-gray-900 leading-tight">
              High-Quality Components,{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Built with Precision
              </span>
            </h1>
          </motion.div>
          <motion.div initial={{ z: -50, opacity: 0 }}></motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn", delay: 0.8 }}
            className="gap-5"
          >
            <p className="md:text-lg text-gray-800 max-w-2xl mb-5">
              Delivering precision-engineered components for brakes and engines
              trusted by leading OEMs and Tier-1 suppliers worldwide.
            </p>

            <p className="md:text-lg text-gray-800 max-w-2xl">
              With advanced manufacturing capabilities and a strong focus on
              quality, we specialize in producing reliable components that power
              safety and efficiency in the automotive industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="mx-auto w-full max-w-2xl"
          >
            <div className="bg-white rounded-xl border border-orange-500 shadow-xl py-5 md:-ml-4  grid grid-cols-4 md:grid-cols-8 text-center items-center">
              <div className="flex flex-col items-center justify-center col-span-2 md:col-span-2">
                <div className="md:text-4xl font-extrabold text-orange-500">
                  ISO
                </div>
                <p className="text-sm text-gray-600 mt-2">Quality Certified</p>
              </div>

              <div className="hidden md:block border-r border-gray-300 h-16 mx-4"></div>

              <div className="flex flex-col items-center justify-center col-span-2 md:col-span-2">
                <div className="md:text-4xl font-extrabold text-red-500">
                  &lt;100
                </div>
                <p className="text-sm text-gray-600 mt-2">PPM Rejection</p>
              </div>

              <div className="hidden md:block border-r border-gray-300 h-16 mx-4"></div>

              <div className="md:flex flex-col items-center justify-center col-span-2 md:col-span-2 hidden">
                <div className="md:text-4xl font-extrabold text-orange-500">
                  25+
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Years of Excellence
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-row gap-4 justify-center lg:justify-start mt-8 lg:mt-12"
          >
            <Link
              href="/contact"
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 text-lg font-semibold border border-gray-800 text-gray-800 rounded-xl shadow"
            >
              Our Products
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="w-full lg:w-1/2 relative flex flex-col gap-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-2xl border-4 border-white"
          >
            <Image
              src={Image1}
              alt="Infant"
              className="w-full md:h-[320px] object-cover"
              priority
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden rounded-xl shadow-lg border-4 border-white"
            >
              <Image
                src={Image2}
                alt="Infant"
                className="w-full h-[180px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-lg border-4 border-white"
            >
              <Image
                src={Image3}
                alt="Infant"
                className="w-full h-[180px] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
