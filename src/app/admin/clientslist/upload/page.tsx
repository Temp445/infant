"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ClientUpload = () => {
  const [clientName, setClientName] = useState("");
  const [clientImage, setClientImage] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setClientImage(filesArray);
      setPreviewUrls(filesArray.map((file) => URL.createObjectURL(file)));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || clientImage.length === 0) {
      alert("Please fill in all fields");
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("clientName", clientName);
      clientImage.forEach((file) => formData.append("clientImage", file));

      await axios.post("/api/client", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Client uploaded successfully!");
      router.push("/admin/clientslist");
    } catch (error) {
      console.error(error);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 container mx-auto">

      <div className="flex-1 flex mt-[10vh]  justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg h-fit p-8 bg-white border border-orange-300 shadow-lg rounded-xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Upload Client
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Images
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
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientUpload;
