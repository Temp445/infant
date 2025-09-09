"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const ProductUpload = () => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setProductImage(filesArray);
      setPreviewUrls(filesArray.map((file) => URL.createObjectURL(file)));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || productImage.length === 0) {
      alert("Please fill in all fields");
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("productName", productName);
      productImage.forEach((file) => formData.append("productImage", file));

      await axios.post("/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product uploaded successfully!");
      router.push("/admin");
    } catch (error) {
      console.error(error);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar/>
      <div className="flex-1 flex mt-[10vh] h-fit justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 bg-white border border-orange-300 shadow-lg rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Upload Product
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full text-sm text-gray-600"
            required
          />

          {previewUrls.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {previewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index}`}
                  className="w-full h-24  rounded-lg border"
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
          {loading ? "Uploading..." : "Upload Product"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default ProductUpload;
