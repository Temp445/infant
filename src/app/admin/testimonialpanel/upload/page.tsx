"use client";
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";


const TestimonialUpload = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    clientName: "",
    clientRole: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("clientName", form.clientName);
      fd.append("clientRole", form.clientRole);
      fd.append("description", form.description);

      await axios.post("/api/testimonial", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Testimonial uploaded successfully!");
      router.push("/admin/testimonialpanel");
      setForm({ clientName: "", clientRole: "", description: "" });
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading testimonial");
    }
  };

  return (
<div className="min-h-screen flex bg-gray-100">
    <Sidebar/>
        <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4 border h-fit mt-[10vh]"
    >
      <h2 className="text-xl font-bold">Add Testimonial</h2>

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
        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
      >
        Upload
      </button>
    </form>
</div>
  );
};

export default TestimonialUpload;
