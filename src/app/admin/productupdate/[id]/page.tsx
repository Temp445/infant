"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

const ProductUpdate = () => {
  const router = useRouter();
  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProductName(data.productName);
        setExistingImages(data.productImage || []);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch product");
      }
    };
    fetchProduct();
  }, [id]);

  const handleReplaceClick = (index: number) => {
    setReplaceIndex(index);
    document.getElementById("replaceImageInput")?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && replaceIndex !== null) {
      const file = e.target.files[0];
      if (!file) return;

      const updatedExisting = [...existingImages];
      updatedExisting[replaceIndex] = URL.createObjectURL(file);
      setExistingImages(updatedExisting);

      const updatedNew = [...newImages];
      updatedNew[replaceIndex] = file;
      setNewImages(updatedNew);

      setReplaceIndex(null);
    }
  };

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
      newImages.forEach(
        (file) => file && formData.append("productImage", file)
      );

      await axios.put(`/api/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product updated successfully!");
      router.push("/admin");
    } catch (error) {
      console.error(error);
      alert("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-50 py-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto p-8 bg-white border border-orange-200 shadow-lg rounded-2xl space-y-8"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Images
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {existingImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer rounded-lg overflow-hidden border"
                  onClick={() => handleReplaceClick(idx)}
                >
                  <img
                    src={img}
                    alt={`Existing ${idx}`}
                    className="w-full h-28 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <input
            id="replaceImageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            {loading ? "Updating..." : "Update Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdate;
