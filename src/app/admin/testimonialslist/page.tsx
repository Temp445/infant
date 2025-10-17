"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Quote, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
  
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/testimonial");
        setTestimonials(res.data?.data || []);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
          <button
            onClick={() => router.push("/admin/testimonialslist/upload")}
            className="flex items-center gap-2 text-orange-600 font-bold border px-4 py-2 rounded shadow-md transition"
          >
            Add Testimonial
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t._id}
                className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute -top-4 -left-4 bg-orange-500 text-white p-3 rounded-full shadow-md">
                  <Quote className="w-5 h-5" />
                </div>

                {t.clientLogo?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {t.clientLogo.map((logo: string, idx: number) => (
                      <img
                        key={idx}
                        src={logo}
                        alt={`${t.clientName}-logo-${idx}`}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                    ))}
                  </div>
                )}

                <p className="text-gray-700 mb-4 line-clamp-3">“{t.description}”</p>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">{t.clientName}</h4>
                  <span className="inline-block mt-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {t.clientRole}
                  </span>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() =>
                      router.push(`/admin/testimonialslist/update/${t._id}`)
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
        )}
      </div>
    </div>
  );
};

export default TestimonialsList;
