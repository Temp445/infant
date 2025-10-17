"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Team from "@/assets/Team/TeamPic.png";
import Rajasekaran from "@/assets/Team/Rajasekaran.png";
import Rajagopalan from "@/assets/Team/Rajagopalan.png";
import Abishek from "@/assets/Team/Abishek.png"
import { MdVerified } from "react-icons/md";

const leadershipTeam = [
  {
    name: "R. Rajagopalan",
    position: "Chairman",
    image: Rajagopalan,
    years: "40+",
    specialty: "Industrial Engineering",
    description:
      "Founder & Chairman of Infant Engineers Private Limited is a Diploma Holder with over 40 years experience in Automobile Industry in Industrial Engineering, Production Planning, Shop Floor Systems and Materials Management, providing strategic inputs for the organizational growth.",
  },
  {
    name: "S. Rajasekaran",
    position: "Managing Director",
    image: Rajasekaran,
    years: "35+",
    specialty: "Materials Management",
    description:
      "Managing Director of Infant Engineers Private Limited is an PhD Graduate with in Mechanical Engineering over 30 years experience in Materials Management & System Design and Finance. He leads the day-to-day functions on a strategic level with his domain expertise.",
  },
  {
    name: "R. Abishek Karthik",
    position: "Special Director",
    image: Abishek,
    years: "10+",
    specialty: "Operations & Finance",
    description:
      "Special Director of Infant Engineers Private Limited is an BE( Mechanical Engineering ) MBA graduate with over 10 years’ experience in operations and finance . He leads the day to day operations of the organization.",
  },
];

const TeamSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-orange-100 to-orange-200 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-10 xl:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-black mb-6 text-center mx-auto leading-tight">
            <span className=" text-black">Leadership </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Excellence
            </span>
          </h3>

          <p className="text-gray-700 md:text-xl max-w-3xl mx-auto leading-relaxed">
            Combined expertise delivering excellence and innovation in
            automotive engineering.{" "}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {leadershipTeam.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white backdrop-blur-xl rounded-3xl p-5 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-black text-orange-500">
                        {leader.years}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        Years Exp.
                      </div>
                    </div>
                    <div className="w-px h-12 bg-gradient-to-b from-orange-500/50 to-red-500/50"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800">
                        {leader.position}
                      </div>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 md:flex items-center justify-center hidden">
                    <div className="text-3xl text-orange-600">
                      <MdVerified />{" "}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-4 items-center">
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={300}
                        height={300}
                        className=" w-full h-40 md:h-80 object-contain rounded lg:object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-2xl lg:text-xl font-bold  text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm xl:text-xs 2xl:text-sm">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Leadership Team
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-xl border border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-orange-500/10"></div>
              <Image
                src={Team}
                alt="Complete Leadership Team"
                className="relative w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
