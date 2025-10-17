'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const MachineryUpload = () => {
  const router = useRouter();
  const [machineryName, setMachineryName] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!machineryName || images.length === 0) {
      alert('Please provide machinery name and at least one image.');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('machineryName', machineryName);
      images.forEach((image) => {
        formData.append('machineryImage', image);
      });

      await axios.post('/api/machinery', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Machinery uploaded successfully!');
      router.push('/admin/machinerylist');
      setMachineryName('');
      setImages([]);
      setPreviewImages([]);
    } catch (error) {
      console.error(error);
      alert('Error uploading machinery.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex-1 p-8">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Upload Machinery
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Machinery Name
              </label>
              <input
                type="text"
                value={machineryName}
                onChange={(e) => setMachineryName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter machinery name"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Machinery Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {previewImages.length > 0 && (
                <div className="flex gap-4 mt-4 flex-wrap">
                  {previewImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="w-32 h-32 relative border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
                    >
                      <Image
                        src={src}
                        alt={`Preview ${idx}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition font-semibold shadow-md"
              >
                {loading ? 'Uploading...' : 'Upload Machinery'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MachineryUpload;
