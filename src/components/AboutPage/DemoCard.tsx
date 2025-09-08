"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DemoCard = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 py-10 md:py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug"
        >
          Contact Us Today{" "}
          <span className="text-orange-600">for Trusted Automotive Solutions</span>
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
            className=" px-5 py-2 md:px-10 md:py-4 bg-orange-600 text-white rounded md:rounded-xl font-semibold shadow-md hover:bg-orange-700 hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
          >
            Contact Us
          </Link>

          <Link
            href="/product"
            className=" px-5 py-2 md:px-10  md:py-4 rounded md:rounded-xl font-semibold border border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-600 transition"
          >
            Explore Products
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default DemoCard;
