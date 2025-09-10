"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PhoneCall, Mails, X , Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGear } from "react-icons/fa6";
import { GiGears } from "react-icons/gi";


interface Product {
  _id: string;
  productName: string;
  productImage: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        if (data.success && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
   <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-lg font-medium text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-auto pb-32 text-white">

    <div className="relative py-10 md:py-24 overflow-hidden bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300">
      
      <div className='absolute top-0 left-0 text-8xl text-orange-500/20 -translate-x-5 -translate-y-5'><FaGear /></div>
      <div className='absolute bottom-0 right-0 text-9xl text-red-500/20'><GiGears /></div>
      <div className='absolute top-10 right-0 text-2xl text-red-500/40'><Sparkles /></div>
      <div className='absolute  bottom-20  left-10 text-red-500/20 animate-pulse'><Sparkles  className="w-10 h-10 text-5xl rotate-6"/></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
    
        <motion.h1
          className="text-2xl md:text-5xl text-gray-800 font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Automotive Components
          </span>
        </motion.h1>

        <motion.p
          className="md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed text-justify md:text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover a wide range of <span className="font-semibold text-gray-800">precision-engineered automotive components</span> designed for durability, performance, and reliability. Browse our <span className="font-semibold text-gray-800">custom solutions</span> to find the perfect fit for your automotive projects.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
          
          <motion.a 
            href="tel:+914442324222"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4 bg-white backdrop-blur-md px-6 py-3 rounded-xl border border-orange-400 shadow-lg cursor-pointer transition"
          >
            <span className="w-10 h-10 text-white bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-2 flex items-center justify-center">
              <PhoneCall className="w-6 h-6" />
            </span>
            <span className="font-semibold md:text-lg text-gray-800">
              +91 44 42324222
            </span>
          </motion.a>

          <motion.a 
            href="mailto:info@infantengineers.in"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4 bg-white backdrop-blur-md px-6 py-3 rounded-xl border border-orange-400 shadow-lg cursor-pointer transition"
          >
            <span className="w-10 h-10 text-white bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-2 flex items-center justify-center">
              <Mails className="w-6 h-6" />
            </span>
            <span className="font-semibold md:text-lg text-gray-800">
              info@infantengineers.in
            </span>
          </motion.a>

        </div>
      </div>
    </div>

        <div className="py-20 px-6 lg:px-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer group relative rounded-2xl border-2 border-orange-200 bg-white shadow-md overflow-hidden flex flex-col transform transition-all duration-500 hover:shadow-2xl"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                
                  <div className="relative w-full  overflow-hidden">
                    {product.productImage && product.productImage.length > 0 ? (
                      <motion.img
                        src={product.productImage[0]}
                        alt={product.productName}
                        className="w-full h-full  transition-transform duration-700 "
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 font-medium">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="relative w-full h-2 flex items-center">
                    <div className="w-1/2 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
                    <div className="w-1/2 h-0.5 bg-gradient-to-l from-orange-400 to-transparent"></div>
                  </div>

                  <div className="flex-1 flex flex-col p-2 pt-3 relative z-10">
                    <h3 className="text-lg font-extrabold text-gray-800 text-center mb-3">
                      {product.productName}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  <X size={24} />
                </button>

                {selectedProduct.productImage &&
                selectedProduct.productImage.length > 0 ? (
                  <motion.img
                    src={selectedProduct.productImage[0]}
                    alt={selectedProduct.productName}
                    className="w-full h-96 object-contain rounded-lg mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                    <p>No Image</p>
                  </div>
                )}

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  {selectedProduct.productName}
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="tel:+914442324222"
                    className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition"
                  >
                    <PhoneCall /> +91 44 42324222
                  </Link>

                  <Link
                    href="mailto:info@infantengineers.in"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-black transition"
                  >
                    <Mails /> info@infantengineers.in
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default Products;
