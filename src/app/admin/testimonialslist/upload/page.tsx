"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const TestimonialUpload = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    clientName: "",
    clientRole: "",
    description: "",
  });

  const [clientLogos, setClientLogos] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setClientLogos(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(previews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("clientName", form.clientName);
      formdata.append("clientRole", form.clientRole);
      formdata.append("description", form.description);

      clientLogos.forEach((file) => {
        formdata.append("clientLogo", file);
      });

      await axios.post("/api/testimonial", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Testimonial uploaded successfully!");
      router.push("/admin/testimonialslist");
      setForm({ clientName: "", clientRole: "", description: "" });
      setClientLogos([]);
      setPreviewUrls([]);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading testimonial");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
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
          placeholder="Client Name"
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="text"
          name="clientRole"
          value={form.clientRole}
          onChange={handleChange}
          placeholder="Client Role or Company Name"
          className="w-full p-2 border rounded-lg"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Testimonial"
          className="w-full p-2 border rounded-lg"
          rows={4}
          required
        />

        <label className="block font-medium">Client Logo</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="w-full p-2 border rounded-lg"
        />

        {previewUrls.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {previewUrls.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`preview-${idx}`}
                className="w-20 h-20 object-cover rounded-lg border"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#1F5A8B] text-white py-2 rounded-lg hover:bg-emerald-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default TestimonialUpload;
