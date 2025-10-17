"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  _id: string;
  productName: string;
  productImage: string[];
}

const ProductSection = () => {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);

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
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="relative container mx-auto px-6 2xl:px-16 mt-6 ">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-2xl md:text-4xl font-extrabold mb-4"
        >
          <span className="text-black">Our</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
            Products
          </span>
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-gray-600 text-justify md:text-balance md:text-lg max-w-5xl mx-auto leading-relaxed"
        >
          Discover our range of high-precision turned components, crafted for
          safety-critical applications in brakes, engines, and other industrial
          systems. Every product is engineered to deliver durability, unmatched
          reliability, and peak performance you can trust.
        </motion.p>
      </div>

      {/* Mobile*/}
      <div className="sm:hidden overflow-hidden relative mb-12">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {products.slice(0, 8).map((product, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 bg-white rounded-2xl border border-orange-200 shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
              onClick={() => router.push("/products")}
            >
              <div className="w- h relative mb-4">
                <img
                  src={product.productImage[0]}
                  alt={product.productName}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {product.productName}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 2xl:gap-10">
        {products.slice(0, 8).map((product, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-md bg-white border border-orange-200 p-6 flex flex-col items-center cursor-pointer group"
            onClick={() => router.push("/products")}
            whileHover={{
              y: -12,
              scale: 1.03,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="absolute z-10 top-3 right-4 text-3xl font-black text-transparent"
              style={{ WebkitTextStroke: "2px rgba(194,65,12,0.6)" }}
            >
              #0{idx + 1}
            </div>
            <div className="w-46 h-46 relative mb-6">
              <img
                src={product.productImage[0]}
                alt={product.productName}
                className="object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition">
              {product.productName}
            </h3>

            <div className="w-12 h-1 mt-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-24 group-hover:h-1.5 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10 flex ">
        <div className="group relative inline-flex items-center gap-2 md:gap-6 bg-transparent border border-black pl-4 pr-2 md:pl-6 py-3  rounded-full mx-auto  tracking-wider overflow-hidden">
          <span className="relative z-10 text-black transition-colors duration-300">
            Discover All Products
          </span>
          <div className="text-center">
            <Link
              href="/products"
              className=" px-2  md:px-4 py-3 bg-orange-600 text-white rounded-full  transition-colors duration-300"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
