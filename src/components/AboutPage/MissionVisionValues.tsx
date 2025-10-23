"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MdEngineering,
  MdOutlineTrendingUp,
  MdOutlineVerified,
} from "react-icons/md";

const MissionVisionValues = () => {
  const items = [
    {
      title: "Mission",
      description:
        "To manufacture precision automotive & Aero space components for critical applications with the highest standards of quality, reliability, and safety.",
      icon: <MdEngineering className="text-[#B71C1C] text-5xl" />,
    },
    {
      title: "Vision",
      description:
        "To be a leading global automotive & Aero space components supplier recognized for innovation, excellence, and trustworthiness in the industry.",
      icon: <MdOutlineTrendingUp className="text-[#B71C1C] text-5xl" />,
    },
    {
      title: "Values",
      description:
        "Integrity, Excellence, Innovation, Customer Satisfaction, and Commitment to Quality in every product we deliver.",
      icon: <MdOutlineVerified className="text-[#B71C1C] text-5xl" />,
    },
  ];

  return (
    <section className="relative bg-gray-800 py-20 px-4 lg:px-16 overflow-hidden">
      <div className="mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold font-oswald text-[#F5F5F5] mb-4">
          Driven by Precision & Quality
        </h2>
        <p className="text-[#B0B0B0] max-w-2xl mx-auto">
          Guided by our expertise, certifications, and commitment to quality, we
          uphold values that define our identity and drive our growth.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-4 lg:gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex-1 rounded p-6 text-center bg-white shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="flex justify-center text-amber-500 mb-6">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700  leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionValues;
