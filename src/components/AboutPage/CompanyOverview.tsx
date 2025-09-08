'use client'

import Image from 'next/image'
import Image1 from '@/assets/Image3.jpg'
import { MdDoubleArrow } from "react-icons/md"
import { motion } from "framer-motion"

const CompanyOverview = () => (
  <section className="relative py-10 md:py-20 px-4 lg:px-16 overflow-hidden">

    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-5 md:mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 relative inline-block">
          Company <span className='text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500'>Overview</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
       
        <motion.div className="space-y-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <MdDoubleArrow className="text-gray-700 text-2xl flex-shrink-0 mt-1" />
            <p className="md:text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-orange-600">Infant Engineers Private Limited (IEPL)</span> and its R&D team are strategically 
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
              We are certified with <span className="font-semibold text-orange-600">AS 9100D</span>, 
              <span className="font-semibold text-orange-600"> ISO 9001:2015</span>, and TS 16949, demonstrating our commitment 
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
              Sundaram Clayton, and Bridgestone India.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative group order-1 lg:order-2"
        >
          <Image
            src={Image1}
            alt="Company Overview"
            className="relative rounded-2xl shadow-2xl md:object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
)

export default CompanyOverview
