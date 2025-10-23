'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { PencilLine, Trash2 } from 'lucide-react';

interface Machinery {
  _id: string;
  machineryName: string;
  machineryImage: string[];
}

const MachineryList = () => {
  const router = useRouter();
  const [machinery, setmachinery] = useState<Machinery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchmachinery = async () => {
      try {
        const { data } = await axios.get('/api/machinery');

        const machineryArray = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : [];

        setmachinery(machineryArray);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch machinery data.');
        setmachinery([]);
      } finally {
        setLoading(false);
      }
    };
    fetchmachinery();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this machinery?')) return;
    try {
      await axios.delete(`/api/machinery/${id}`);
      setmachinery(machinery.filter((m) => m._id !== id));
      alert('Machinery deleted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to delete machinery.');
    }
  };

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50 to-red-100">
        <div className="px-2 lg:px-5 py-16 container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Machinery</h1>
            <button
              onClick={() => router.push('/admin/machinerylist/upload')}
              className="group relative border text-[#B71C1C] px-8 py-2 font-bold rounded shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative flex items-center gap-2">Add New Machinery</span>
            </button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-orange-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-lg font-medium text-gray-600">Loading Machinery...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {machinery.map((machinery) => (
                <div
                  key={machinery._id}
                  className="group relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden"
                >
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
                    <div className="relative overflow-hidden">
                      {machinery.machineryImage && machinery.machineryImage.length > 0 ? (
                        <div className="relative">
                          <img
                            src={machinery.machineryImage[0]}
                            alt={machinery.machineryName}
                            className="w-full h-64 object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center">
                          <p className="text-slate-500 font-medium">No Image Available</p>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-800 mb-1 line-clamp-2">
                          {machinery.machineryName}
                        </h3>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            router.push(`/admin/machinerylist/update/${machinery._id}`)
                          }
                          className="flex-1 group/btn relative overflow-hidden border  text-black py-3 px-4 rounded font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                          <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/20 transition-colors duration-300"></div>
                          <div className="relative flex items-center justify-center gap-2">
                            <PencilLine className="w-4 h-4 transition-transform duration-300" />
                            <span className="text-sm">Edit</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleDelete(machinery._id)}
                          className="group/btn relative overflow-hidden bg-red-500 text-white py-3 px-4 rounded font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                          <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/20 transition-colors duration-300"></div>
                          <div className="relative flex items-center justify-center">
                            <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MachineryList;
