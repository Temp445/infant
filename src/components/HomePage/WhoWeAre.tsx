'use client';

import React from "react";
import { FaIndustry, FaTools, FaUsers } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const WhoWeAre = () => {
  const router = useRouter();

  const features = [
    {
      icon: FaIndustry,
      title: "Advanced Manufacturing",
      desc: "Utilizing state-of-the-art processes for precision and consistency."
    },
    {
      icon: FaTools,
      title: "Technical Expertise",
      desc: "Skilled engineers delivering high-performance and reliable components."
    },
    {
      icon: FaUsers,
      title: "Trusted by OEMs",
      desc: "Partnered with Tier-1 suppliers and leading OEMs across India."
    }
  ];

  return (
    <section className="relative bg-gray-50 py-12 xl:py-24 px-4 lg:px-6 2xl:px-16 overflow-hidden container mx-auto">
      <div className="relative mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        <div className="md:w-1/2 flex flex-col gap-6">
          <motion.h2
            className="text-3xl md:text-4xl font-oswald font-bold text-gray-900 md:mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Who We Are
          </motion.h2>

          <motion.div className="flex flex-col gap-4">
            {[
              "Infant Engineers Private Limited is a leading manufacturer of precision turned components for critical and safety applications in the automotive industry & Aero Space Industry, specializing in brake, Steering, suspension, Motor shafts, engine systems.",
              "Serving Tier-1 suppliers and OEMs, maintaining the highest quality standards. Our clients include Mando India, Brakes India, Sundaram Clayton, Sundaram Fasteners, Brakes India, ZF Rane, Lucas TVS, Violin Technologies & Kun Aero Space",
              "Combining technical expertise, advanced manufacturing, and stringent quality control to deliver components meeting the most demanding performance and safety requirements."
            ].map((text, idx) => (
              <motion.p
                key={idx}
                className="text-gray-700 md:text-lg leading-relaxed relative pl-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <MdDoubleArrow className="absolute left-0 top-1 text-gray-700 text-2xl" />
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.button
            className="mt-6 self-start bg-[#B71C1C] hover:bg-[#D32F2F] text-white font-semibold px-10 py-3 rounded shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/about')}
          >
            Learn More
          </motion.button>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={`bg-white shadow-lg rounded border border-gray-200 p-6 flex gap-5 items-center hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden
              ${idx % 2 === 0 ? "md:mt-0" : "md:mt-12 lg:mt-0"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                <feature.icon className="text-[#B71C1C] text-4xl md:text-5xl mb-4" />
              </motion.div>

              <div className="w-1 h-16 bg-gray-600 rounded"></div>

              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-700 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
