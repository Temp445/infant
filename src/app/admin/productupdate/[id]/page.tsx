"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

const ProductUpdate = () => {
  const router = useRouter();
  const { id } = useParams(); // Route: /product/update/[id]

  const [productName, setProductName] = useState("");
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProductName(data.productName);
        setExistingImages(data.productImage); // Assuming array of URLs
      } catch (error) {
        console.error(error);
        alert("Failed to fetch product");
      }
    };
    fetchProduct();
  }, [id]);

  // Handle new image uploads
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setNewImages(filesArray);

      const urls = filesArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  // Remove existing image
  const removeExistingImage = (index: number) => {
    const updated = [...existingImages];
    updated.splice(index, 1);
    setExistingImages(updated);
  };

  // Submit update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName) {
      alert("Product name is required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("productName", productName);
      existingImages.forEach((img) => formData.append("existingImages", img));
      newImages.forEach((file) => formData.append("productImage", file));

      await axios.put(`/api/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product updated successfully!");
      router.push("/products"); // Redirect to product list
    } catch (error) {
      console.error(error);
      alert("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
       <div className="min-h-screen ">
           <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-8 bg-white border border-orange-200 shadow-lg rounded-2xl space-y-8 mt-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Update Product
      </h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Name
        </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          placeholder="Enter product name"
          required
        />
      </div>

      {existingImages.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Existing Images
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {existingImages.map((img, idx) => (
              <div key={idx} className="relative group">
                <img
                  src={img}
                  alt={`Existing ${idx}`}
                  className="w-full h-28 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={() => removeExistingImage(idx)}
                  className="absolute top-1 right-1 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload New Images
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full text-sm text-gray-600"
        />
        {previewUrls.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {previewUrls.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Preview ${idx}`}
                className="w-full h-28 object-cover rounded-lg border"
              />
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
      >
        {loading ? "Updating..." : "Update Product"}
      </button>
    </form>
       </div>
  );
};

export default ProductUpdate;
