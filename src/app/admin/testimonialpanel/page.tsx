"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import { Quote, Pencil, Trash2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const router = useRouter();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/testimonial");
        setTestimonials(res.data?.data || []);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };
    fetchData();
  }, []);

  // Handle Delete
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      await axios.delete(`/api/testimonial/${id}`);
      setTestimonials(testimonials.filter((t) => t._id !== id)); 
      alert("Testimonial deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete testimonial.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Client Testimonials
          </h2>
          <button
            onClick={() => router.push("/admin/testimonialpanel/upload")}
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            <Plus className="w-5 h-5" /> Add Testimonial
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
       
         { testimonials.map((t: any) => (
              <div
                key={t._id}
                className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
            
                <div className="absolute -top-4 -left-4 bg-orange-500 text-white p-3 rounded-full shadow-md">
                  <Quote className="w-5 h-5" />
                </div>

                <p className="text-gray-700 line-clamp-2 mb-4">“{t.description}”</p>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">
                    {t.clientName}
                  </h4>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {t.clientRole}
                  </span>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={() =>
                      router.push(`/admin/testimonialpanel/update/${t._id}`)
                    }
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
                  >
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="flex items-center gap-1 text-red-600 hover:text-red-800 transition"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))}
        
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
