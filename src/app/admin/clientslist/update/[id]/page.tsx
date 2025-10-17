"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

const ClientUpdate = () => {
  const router = useRouter();
  const { id } = useParams();

  const [clientName, setClientName] = useState("");
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
  const [newImages, setNewImages] = useState<File[]>([]);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const { data } = await axios.get(`/api/client/${id}`);
        setClientName(data.clientName);
        setExistingImages(data.clientImage);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch client");
      }
    };
    fetchClient();
  }, [id]);

  const handleReplaceClick = (index: number) => {
    setReplaceIndex(index);
    const fileInput = document.getElementById("replaceImageInput");
    fileInput?.click();
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
    if (!clientName) {
      alert("Client name is required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("clientName", clientName);
      existingImages.forEach((img) => formData.append("existingImages", img));
      newImages.forEach((file) => file && formData.append("clientImage", file));

      await axios.put(`/api/client/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Client updated successfully!");
      router.push("/admin/clientslist");
    } catch (error) {
      console.error(error);
      alert("Failed to update client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6 lg:p-12">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white border border-orange-200 shadow-lg rounded-2xl p-8 space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Update Client
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Name
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter client name"
              required
            />
          </div>

          {existingImages.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Images
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {existingImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative group cursor-pointer rounded-lg overflow-hidden border hover:ring-2 hover:ring-orange-500 transition"
                    onClick={() => handleReplaceClick(idx)}
                  >
                    <img
                      src={img}
                      alt={`Existing ${idx}`}
                      className="w-full h-28 object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 bg-black/30 text-white font-bold">
                      Update
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
            {loading ? "Updating..." : "Update Client"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientUpdate;
