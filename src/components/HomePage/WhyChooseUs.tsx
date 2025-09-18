'use client';

import React from 'react';
import { FaCogs, FaClock, FaCheckCircle, FaIndustry, FaHandsHelping } from 'react-icons/fa';
import { TbCertificate } from "react-icons/tb";
import { motion } from "framer-motion";

const whyChooseUs = [
  {
    icon: <FaCogs className="w-7 h-7 text-white" />,
    title: 'Precision & Quality',
    desc: 'High-precision components for critical applications like brakes, engines, and safety systems, produced under strict quality control.'
  },
  {
    icon: <TbCertificate className="w-7 h-7 text-white" />,
    title: 'ISO/TS 16949 Certified',
    desc: 'Our processes meet international automotive quality standards, ensuring reliability and compliance with OEM requirements.'
  },
  {
    icon: <FaClock className="w-7 h-7 text-white" />,
    title: 'Decades of Experience',
    desc: 'Over 25 years serving Tier-1 suppliers and OEMs, delivering projects on time and to exact specifications.'
  },
  {
    icon: <FaCheckCircle className="w-7 h-7 text-white" />,
    title: 'Low Defect Rate',
    desc: 'Supply record with rejections below 100 PPM, reflecting our commitment to excellence and reliability.'
  },
  {
    icon: <FaIndustry className="w-7 h-7 text-white" />,
    title: 'Advanced Technology',
    desc: 'State-of-the-art CNC machines, automated quality inspections, and innovative production techniques.'
  },
  {
    icon: <FaHandsHelping className="w-7 h-7 text-white" />,
    title: 'Customer-Centric Approach',
    desc: 'Collaborating closely with clients to ensure components meet technical, functional, and performance requirements.'
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-5 md:py-10 px-6 2xl:px-16 container mx-auto">
      <div className=" mb-16">
        <motion.h2
        initial={{x:-50 , opacity:0}} 
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.8, ease:"easeInOut" }}
         className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Choose Us</span>
        </motion.h2>
        <motion.p
        initial={{x:50 , opacity:0}} 
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.8, ease:"easeInOut" }}
         className="text-gray-700 md:text-lg max-w-6xl">
          For more than 25 years, we’ve been driving innovation in the automotive manufacturing industry—delivering high-precision components built on a foundation of quality, reliability, and trust. Our commitment ensures every product performs at its best, every time.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  mx-auto">
        {whyChooseUs.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/70 backdrop-blur-lg border border-orange-200 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-orange-100/40 to-red-100/40 blur-xl -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
