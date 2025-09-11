'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';

const MachineryUpdate = () => {
  const router = useRouter();
  const { id } = useParams();

  const [machineryName, setMachineryName] = useState('');
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
  const [newImages, setNewImages] = useState<File[]>([]);

  useEffect(() => {
    const fetchMachinery = async () => {
      try {
        const { data } = await axios.get(`/api/machinery/${id}`);
        setMachineryName(data.machineryName);
        setExistingImages(data.machineryImage);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch machinery');
      }
    };
    fetchMachinery();
  }, [id]);

  const handleReplaceClick = (index: number) => {
    setReplaceIndex(index);
    const fileInput = document.getElementById('replaceImageInput');
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
    if (!machineryName) {
      alert('Machinery name is required');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('machineryName', machineryName);
      existingImages.forEach((img) => formData.append('existingImages', img));
      newImages.forEach((file) => file && formData.append('machineryImage', file));

      await axios.put(`/api/machinery/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Machinery updated successfully!');
      router.push('/admin/machinerylist');
    } catch (error) {
      console.error(error);
      alert('Failed to update machinery');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 lg:p-12">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white border border-orange-200 shadow-lg rounded-2xl p-8 space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Update Machinery
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Machinery Name
            </label>
            <input
              type="text"
              value={machineryName}
              onChange={(e) => setMachineryName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter machinery name"
              required
            />
          </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Machinery Image
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {existingImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative group cursor-pointer rounded-lg overflow-hidden border transition"
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
            className="w-fit bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            {loading ? 'Updating...' : 'Update'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MachineryUpdate;
