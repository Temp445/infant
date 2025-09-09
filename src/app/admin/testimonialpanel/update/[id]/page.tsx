"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "@/components/Sidebar";

const TestimonialUpdate = () => {
  const { id } = useParams(); 
  const router = useRouter();

  const [form, setForm] = useState({
    clientName: "",
    clientRole: "",
    description: "",
  });

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await axios.get(`/api/testimonial/${id}`);
        setForm({
          clientName: res.data.data.clientName || "",
          clientRole: res.data.data.clientRole || "",
          description: res.data.data.description || "",
        });
  
      } catch (err) {
        console.error("Error fetching testimonial:", err);
      }
    };
    if (id) fetchTestimonial();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("clientName", form.clientName);
      fd.append("clientRole", form.clientRole);
      fd.append("description", form.description);

      await axios.put(`/api/testimonial/${id}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Testimonial updated successfully!");
      router.push("/admin/testimonialpanel");
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating testimonial");
    }
  };



  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <form
        onSubmit={handleUpdate}
        className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4 border h-fit mt-[10vh]"
      >
        <h2 className="text-xl font-bold">Update Testimonial</h2>

        <input
          type="text"
          name="clientName"
          value={form.clientName}
          onChange={handleChange}
          placeholder="client name"
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="text"
          name="clientRole"
          value={form.clientRole}
          onChange={handleChange}
          placeholder="client role or company name"
          className="w-full p-2 border rounded-lg"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="testimonial"
          className="w-full p-2 border rounded-lg"
          rows={4}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded-lg "
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default TestimonialUpdate;
