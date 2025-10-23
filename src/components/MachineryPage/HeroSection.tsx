'use client'

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-gray-900 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center md:max-w-4xl px-6 py-16 md:py-24"
      >
        <h1 className="text-2xl md:text-5xl font-oswald text-white leading-tight">
          Powering Innovation With{" "} <br/>
            Advanced Machinery

        </h1>

      </motion.div>
    </section>
  );
};

export default HeroSection;
