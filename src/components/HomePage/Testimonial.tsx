'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiDoubleQuotesL } from 'react-icons/ri';
import axios from 'axios';

interface Testimonial {
  _id: string;
  clientLogo: string[];
  clientName: string;
  clientRole: string;
  description: string;
}

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/testimonial');
        setTestimonials(res.data?.data || []);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const currentTestimonial = testimonials[currentIndex];

  if (!currentTestimonial) return null;

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-16">
          What Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500">
            Clients Say
          </span>
        </h2>

        <div className="relative bg-white shadow-2xl rounded-3xl border border-orange-200 px-8 md:px-12 py-10 h-80 mx-auto overflow-hidden">
          <span className="text-5xl text-orange-500 absolute top-3 left-3 select-none">
            <RiDoubleQuotesL />
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center h-full"
            >
              <p className="text-gray-700 text-lg md:text-xl italic mb-6">
                {currentTestimonial.description}
              </p>
             <div className='flex gap-5 justify-center'>
              {currentTestimonial.clientLogo?.length > 0 && (
              <img src={currentTestimonial.clientLogo[0]} alt={currentTestimonial.clientName}  className="w-fit h-12 rounded-full shadow-md" />
              )}
              <div>
                 <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {currentTestimonial.clientName}
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                {currentTestimonial.clientRole}
              </p>
              </div>
             </div>
            </motion.div>
          </AnimatePresence>
        </div>

      
        <div className="flex justify-center items-center gap-4 mt-10">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-orange-500 w-6 h-3'
                  : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
