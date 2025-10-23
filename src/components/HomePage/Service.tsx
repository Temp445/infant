'use client'

import React, { useState } from 'react'
import Image1 from "@/assets/products/Service1.png"
import Image2 from "@/assets/products/Service2.png"
import Image3 from "@/assets/products/Service3.png"
import Image from 'next/image'
import Link from 'next/link'

const Service = () => {
  const services = [
    { 
      id: 1, 
      image: Image1, 
      title: "Rapid Prototyping", 
      des: "Rapid Prototyping is a fast method of creating physical or digital models directly from CAD data to quickly test and refine product designs before full-scale manufacturing." 
    },
    { 
      id: 2, 
      image: Image2, 
      title: "Reverse Engineering", 
      des: "Reverse Engineering is the process of analyzing a product to understand its design and function in order to recreate or improve it."  
    },
    { 
      id: 3, 
      image: Image3, 
      title: "Development of Press Tools, Jigs and Fixtures",
      des: "Development of Press Tools, Jigs, and Fixtures is the process of creating specialized tools that shape, guide, and hold components to ensure accurate and efficient manufacturing." 
    }
  ]

  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null)

  return (
    <section className="py-10 md:pb-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 xl:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-oswald mb-4">
            Our Services
          </h2>
          <p className="md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of services designed to help you achieve your goals with precision and excellence.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  0{service.id}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1F5A8B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {service.des}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5A8B]/30 rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedService.image} 
              alt={selectedService.title}
              className="w-full h-72 2xl:h-[28rem]  object-cover rounded-xl mb-6"
            />
   
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{selectedService.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{selectedService.des}</p>

            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <Link href="/contact" className="flex-1 px-6 py-3 border border-[#C40C0C] text-[#C40C0C] rounded-lg transition-colors font-semibold">
                Contact Us
              </Link>
              <Link href="/products" className="flex-1 px-6 py-3 bg-[#1F5A8B] text-white rounded-lg transition-colors font-semibold">
                Our Products
              </Link>
            </div>

            <button 
              className="absolute top-4 right-4 text-gray-500 font-bold text-2xl"
              onClick={() => setSelectedService(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Service
