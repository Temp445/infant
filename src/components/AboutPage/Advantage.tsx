'use client'

import { MdCheckCircle } from "react-icons/md"
import { motion } from "framer-motion"

const Advantages = [
          {
            title: "Advanced Infrastructure",
            desc: "State-of-the-art facilities equipped with modern machinery to meet diverse manufacturing demands."
          },
          {
            title: "Skilled Workforce",
            desc: "A highly trained team of engineers and technicians dedicated to precision and efficiency."
          },
          {
            title: "Quality First",
            desc: "Strict adherence to global certifications ensuring consistent quality across all processes."
          },
          {
            title: "Collaborative Partnerships",
            desc: "Strong, reliable relationships with OEMs and Tier-1 suppliers built on trust and performance."
          },
          {
            title: "Innovation Driven",
            desc: "Continuous R&D focus enables us to deliver smarter, more cost-effective solutions."
          },
          {
            title: "Sustainability Focus",
            desc: "Eco-conscious practices aimed at reducing waste and promoting responsible manufacturing."
          }
        ]

const Advantage = () => (
  <section className="relative py-12 md:py-20 px-4 lg:px-16 overflow-hidden">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-semibold font-oswald text-gray-900 inline-block">
          Why Partners Trust Us 
        </h2>
        <p className="mt-4 text-gray-600 md:text-lg max-w-5xl mx-auto">
          From advanced infrastructure to long-term industry partnerships, explore the advantages that set us apart in precision manufacturing.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Advantages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <MdCheckCircle className="text-[#1F5A8B] text-3xl mr-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Advantage
