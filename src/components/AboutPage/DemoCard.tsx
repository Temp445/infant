"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DemoCard = () => {
  return (
    <section className="relative bg-white py-10 md:py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-4xl font-semibold font-oswald text-gray-900 mb-6 leading-snug"
        >
          Contact Us Today for Trusted Automotive Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Delivering precision-engineered components that power innovation, efficiency, 
          and reliability across the automotive industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row justify-center gap-6 mb-12"
        >
          <Link
            href="/contact"
            className=" px-5 py-2 md:px-10 md:py-4 bg-[#B71C1C] text-white rounded font-semibold shadow-md hover:bg-[#C40C0C] hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
          >
            Contact Us
          </Link>

          <Link
            href="/products"
            className=" px-5 py-2 md:px-10  md:py-4 rounded font-semibold border border-gray-700 text-gray-700 hover:border-[#C40C0C] hover:text-[#C40C0C] transition"
          >
            Explore Products
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default DemoCard;
