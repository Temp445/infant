"use client";

import { useEffect, useState, FormEvent } from "react";

interface Machinery {
  _id?: string;
  machineName: string;
  count: string;
}

export default function MachineryPage() {
  const [machineries, setMachineries] = useState<Machinery[]>([]);
  const [machineName, setMachineName] = useState("");
  const [count, setCount] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchMachinery = async () => {
    try {
      const res = await fetch("/api/machinery-detail");
      const data = await res.json();
      if (data.success) setMachineries(data.data);
    } catch (err) {
      console.error(err);
      setMessage("Failed to fetch machinery.");
    }
  };

  useEffect(() => {
    fetchMachinery();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!machineName || !count) {
      setMessage("Please fill all fields.");
      setLoading(false);
      return;
    }

    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `/api/machinery-detail/${editId}` : "/api/machinery-detail";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ machineName, count }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(editId ? "Updated successfully!" : "Added successfully!");
        setMachineName("");
        setCount("");
        setEditId(null);
        fetchMachinery();
      } else {
        setMessage(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to save machinery.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await fetch(`/api/machinery-detail/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) fetchMachinery();
      setMessage(data.message || "Deleted successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Error deleting machinery.");
    }
  };

  const handleEdit = (item: Machinery) => {
    setMachineName(item.machineName);
    setCount(item.count);
    setEditId(item._id || null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row justify-evenly gap-10 mx-auto p-6">
     <div>
       <h1 className="text-xl font-bold mb-6">{editId ? "Edit Machinery" : "Add Machinery"}</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl mb-8 grid grid-cols-1 gap-5"
      >
        <div>
          <label className="block font-medium mb-1">Machine Name</label>
          <input
            type="text"
            value={machineName}
            onChange={(e) => setMachineName(e.target.value)}
            placeholder="Enter machine name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Count</label>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="Enter count"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
            
        <button
          type="submit"
          disabled={loading}
          className="col-span-1 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Saving..." : editId ? "Update Machinery" : "Add Machinery"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setMachineName("");
              setCount("");
            }}
            className="col-span-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        )}
        </div>

      </form>
     </div>

      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Machinery List</h2>
        {machineries.length === 0 ? (
          <p className="text-gray-500">No machinery added yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-2xl">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Machine Name</th>
                  <th className="p-3 text-left">Count</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {machineries.map((item) => (
                  <tr key={item._id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{item.machineName}</td>
                    <td className="p-3">{item.count}</td>
                    <td className="p-3 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id!)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
