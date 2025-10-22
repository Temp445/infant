'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaCogs, FaHandshake, FaLeaf, FaMedal } from 'react-icons/fa'

const milestones = [
  {
    year: '2009 -',
    title: 'NIQR Award',
    description:
      'Selected as Best Organization for the prestigious NIQR Award, presented in November 2009.',
    icon: <FaAward className="text-white text-3xl" />,
  },
  {
    year: '2016 -',
    title: 'Emergency Support Recognition',
    description:
      'Mando Automotive India Pvt Ltd awarded a Certificate of Appreciation for support during an emergency situation.',
    icon: <FaHandshake className="text-white text-3xl" />,
  },
  {
    year: '2017 -',
    title: '20 Years Appreciation',
    description:
      'Mando Automotive India Pvt Ltd awarded a Special Appreciation Award for 20 years of long-term relationship and commitment to excellence.',
    icon: <FaMedal className="text-white text-3xl" />,
  },
  {
    year: 'Ongoing -',
    title: 'Continuous Growth & Quality',
    description:
      'Scope and demand for services are constantly growing due to strategic location and proximity to Tier-1 Automobile Manufacturers. Regular audits, training, and zero-effluent compliance ensure high-quality operations.',
    icon: <FaCogs className="text-white text-3xl" />,
  },
  {
    year: 'Hyundai Certification -',
    title: '100 PPM Certification',
    description:
      'Achieved 100 PPM certification from M/s Hyundai Motor India Limited.',
    icon: <FaLeaf className="text-white text-3xl" />,
  },
  {
    year: 'Maruti Udyog Certification',
    title: '',
    description:
      'Maruti Udyog Certification- Approved supplier under Green Category.',
    icon: <FaLeaf className="text-white text-3xl" />,
  },
]

const Milestones = () => {
  return (
    <section className="relative bg-white py-10 xl:py-24 px-6 xl:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold font-oswald text-gray-900 mb-6">
          Our Milestones </h2>
        <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
          A journey of excellence, innovation, and recognition through the years.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:block absolute top-0 bottom-0 left-10 lg:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#1F5A8B] to-[#7aa6e7]"></div>

        <div className="space-y-20">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative flex flex-col lg:flex-row items-center ${
                idx % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >

              <div
                className={`bg-gray-50 border-l-4 border-[#1F5A8B] border p-5 md:p-10 rounded-2xl shadow-lg max-w-md z-10 text-left md:text-left ${
                  idx % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#1F5A8B] mb-3">
                  {item.year}  {item.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
              </div>

              <div className="absolute left-5 -top-10 md:left-10 md:top-12 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#1F5A8B] flex items-center justify-center shadow-xl z-20">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Milestones
