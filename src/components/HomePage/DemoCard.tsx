"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";

const DemoCard = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 mt-10 py-10 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-2 md:px-6 flex flex-col lg:flex-row md:gap-12 items-start">

        <div className="flex-1 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug"
          >
            Crafting Excellence in{" "}
            <span className="text-orange-600">Every Component</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
          >
            We use advanced manufacturing processes to deliver precise, reliable, and efficient automotive & Aeospace components. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row justify-center lg:justify-start gap-6 mb-10"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 md:px-10 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/products"
              className="relative px-5 py-2 md:px-10 md:py-4 rounded-full font-semibold text-orange-600 border-2 border-orange-500 overflow-hidden group transition"
            >
              <span className="relative z-10 transition">Our Products</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:flex-col lg:items-end mx-auto"
        >
          <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer w-full">
            <FiPhone className="text-orange-600 text-3xl" />
            <div className="text-left">
              <p className="text-sm text-orange-700">Call Us</p>
              <a href="tel:+919701946123" className="text-lg font-semibold text-gray-900">+91 9701946123</a> <br />
              <a href="tel:+919841706116" className="text-lg font-semibold text-gray-900">+91 9841706116</a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer w-full">
            <FiMail className="text-orange-600 text-3xl" />
            <div className="text-left">
              <p className="text-sm text-orange-700">Email Us</p>
              <a href="mailto:abishek@infantengineers.in" className="text-lg font-semibold text-gray-900 hover:underline">abishek@infantengineers.in</a> <br />
              <a href="mailto:rajasekaran@infantengineers.in" className="text-lg font-semibold text-gray-900 hover:underline">rajasekaran@infantengineers.in</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoCard;
