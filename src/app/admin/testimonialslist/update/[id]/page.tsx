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

  const [existingLogos, setExistingLogos] = useState<string[]>([]);
  const [newLogos, setNewLogos] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await axios.get(`/api/testimonial/${id}`);
        const data = res.data.data;
        setForm({
          clientName: data.clientName || "",
          clientRole: data.clientRole || "",
          description: data.description || "",
        });
        setExistingLogos(data.clientLogo || []);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setNewLogos(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(previews);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("clientName", form.clientName);
      formdata.append("clientRole", form.clientRole);
      formdata.append("description", form.description);

      newLogos.forEach((file) => {
        formdata.append("clientLogo", file);
      });

      await axios.put(`/api/testimonial/${id}`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Testimonial updated successfully!");
      router.push("/admin/testimonialslist");
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

        {existingLogos.length > 0 && (
          <div>
            <p className="font-medium mb-2">Existing Logos:</p>
            <div className="flex flex-wrap gap-2">
              {existingLogos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`logo-${idx}`}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              ))}
            </div>
          </div>
        )}

        <label className="block font-medium">Update Logo</label>
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
          className="w-full bg-orange-600 text-white py-2 rounded-lg"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default TestimonialUpdate;
