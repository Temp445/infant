'use client'

import Image from 'next/image'
import Image1 from '@/assets/about.png'
import { MdDoubleArrow } from "react-icons/md"
import { motion } from "framer-motion"

const CompanyOverview = () => (
  <section className="relative py-10 md:py-20 px-4 lg:px-16 overflow-hidden">

    <div className="container mx-auto">
     

      <div className="grid lg:grid-cols-2 gap-12 items-center">
       
        <motion.div className="space-y-6 order-2 lg:order-1">
           <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-5 md:mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-semibold font-oswald text-gray-900 relative inline-block">
          Company Overview 
        </h2>
      </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <MdDoubleArrow className="text-gray-700 text-2xl flex-shrink-0 mt-1" />
            <p className="md:text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#B71C1C]">Infant Engineers Private Limited (IEPL)</span> and its R&D team are strategically 
              located at Sipcot Industrial Park, Sriperumbudur, Tamil Nadu, India, close to major automobile manufacturers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start gap-3"
          >
            <MdDoubleArrow className="text-gray-700 text-2xl flex-shrink-0 mt-1" />
            <p className="md:text-lg text-gray-700 leading-relaxed">
              IEPL is guided by highly qualified technocrats, supported by experts in Technical, Finance, and Marketing. 
              Our skilled workforce ensures operational efficiency and precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-start gap-3"
          >
            <MdDoubleArrow className="text-gray-700 text-2xl flex-shrink-0 mt-1" />
            <p className="md:text-lg text-gray-700 leading-relaxed">
              We are certified with <span className="font-semibold text-[#B71C1C]">AS 9100D,ISO 9001:2015</span>, 
               and IATF16949, demonstrating our commitment 
              to world-class quality standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-start gap-3"
          >
            <MdDoubleArrow className="text-gray-700 text-2xl flex-shrink-0 mt-1" />
            <p className="md:text-lg text-gray-700 leading-relaxed">
              As a trusted Tier-2 supplier to OEMs like <span className="font-semibold">Hyundai</span> and 
              <span className="font-semibold"> Maruti</span>, we work with Tier-1 partners such as Brakes India, Lucas TVS, 
              Sundaram Clayton, Kun Aero Space, Violin Tecnologies.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative md:hidden lg:block group order-1 lg:order-2"
        >
          <Image
            src={Image1}
            alt="Company Overview"
            className="relative rounded shadow-2xl md:h-[600px] md:object-cover"
          />
           <div className="absolute -bottom-4 md:bottom-2 -left-3 md:-left-10 bg-[#1F5A8B] p-6 rounded shadow-lg text-center min-w-[110px]">
    <h3 className="text-white font-extrabold text-2xl">35+</h3>
    <p className="text-gray-200 font-bold text-sm">Years</p>
  </div>
        </motion.div>

      </div>
    </div>
  </section>
)

export default CompanyOverview
