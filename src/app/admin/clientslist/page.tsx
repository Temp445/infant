"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PencilLine, Trash2 } from "lucide-react";

interface Client {
  _id: string;
  clientName: string;
  clientImage: string[];
}

const ClientsList = () => {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data } = await axios.get("/api/client");
        if (data.success && Array.isArray(data.data)) {
          setClients(data.data);
        } else {
          setClients([]);
        }
      } catch (error) {
        console.error(error);
        setClients([]);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this client?")) return;
    try {
      await axios.delete(`/api/client/${id}`);
      setClients(clients.filter((p) => p._id !== id));
      alert("Client deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete client");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 container mx-auto">
      <div className="flex-1 px-6 lg:px-16 py-12">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center sm:text-left">
            Clients
          </h1>
          <button
            onClick={() => router.push("/admin/clientslist/upload")}
            className="inline-flex items-center gap-2 px-6 py-3 text-[#B71C1C] border rounded font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Add New Client
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-[#B71C1C] rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-medium text-gray-600">
              Loading clients...
            </p>
          </div>
        ) : clients.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">
            No clients found. Add new clients to get started.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div
                key={client._id}
                className="bg-white rounded shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden"
              >
                
             
                <div className="p-4 flex justify-center items-center bg-gray-50">
                  <img
                    src={client.clientImage[0]}
                    alt={client.clientName}
                    className="w-full h-48 object-contain rounded-md"
                  />
                </div>

                   <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-base  line-clamp-2">
                    {client.clientName}
                  </h3>
                </div>

              <div className="flex gap-3">
                        <button
                          onClick={() => router.push(`/admin/clientslist/update/${client._id}`) }

                          className="flex-1 group/btn relative overflow-hidden border text-black py-3 px-4 rounded font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                          <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/20 transition-colors duration-300"></div>
                          <div className="relative flex items-center justify-center gap-2">
                            <PencilLine className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span className="text-sm">Edit</span>
                          </div>
                        </button>
                        
                        <button
                          onClick={() => handleDelete(client._id)}
                          className="group/btn relative overflow-hidden bg-gradient-to-r from-rose-500 to-red-500 text-white py-3 px-4 rounded font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                          <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/20 transition-colors duration-300"></div>
                          <div className="relative flex items-center justify-center">
                            <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                          </div>
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

export default ClientsList;
