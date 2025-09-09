"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PencilLine, Trash2  } from 'lucide-react';

interface Product {
  _id: string;
  productName: string;
  productImage: string[];
}

const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Delete product
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
      alert("Product deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

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

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center sm:text-left">
                Admin Panel
              </h1>
              <p className="text-gray-600 mt-2 text-center sm:text-left">Manage your products and users</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => router.push("/admin/productupload")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Product
              </button>
              <button
                onClick={() => router.push("/admin/users")}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0H21v-1a6 6 0 00-9-5.197" />
                </svg>
                Users
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-white rounded-full p-8 shadow-lg mb-6">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Products Found</h3>
            <p className="text-gray-500 mb-8 text-center max-w-md">
              Get started by adding your first product to the inventory.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className=" lg:px-16 mx-auto px-6 py-16 container">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center sm:text-left">
              Admin Panel
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => router.push("/admin/productupload")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Product
            </button>
            <button
              onClick={() => router.push("/admin/users")}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
               Users
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl not-only-of-type:not-visited:overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-orange-300"
            >
              <div className="relative overflow-hidden">
                {product.productImage && product.productImage.length > 0 ? (
                  <>
                    <img
                      src={product.productImage[0]}
                      alt={product.productName}
                      className="w-full h-56 transition-transform duration-300"
                    />
             
                  </>
                ) : (
                  <div className="w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-500">No Image</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2  transition-colors duration-200">
                  {product.productName}
                </h3>

       
                <div className="flex gap-3">
                  <button
                    onClick={() => router.push(`/admin/productupdate/${product._id}`)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-2 rounded font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                   <span><PencilLine className="w-5 h-5"/></span>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-2 rounded font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span><Trash2 className="w-5 h-5"/></span>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;