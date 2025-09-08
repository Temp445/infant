import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-20 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
         Talk to Our Team
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Your business deserves solutions that are smart, efficient, and tailored to your goals. 
          Our team offers expert advice, dedicated support, and innovative strategies to help 
          you streamline operations and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/products"
            className="bg-white border border-orange-500 hover:bg-orange-50 text-orange-500 font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
