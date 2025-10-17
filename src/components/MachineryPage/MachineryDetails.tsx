"use client";

import React, { useEffect, useState } from "react";

interface Machinery {
  _id?: string;
  machineName: string;
  count: string;
}

const MachineryDetails: React.FC = () => {
  const [machines, setMachines] = useState<Machinery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch machinery data from API
  const fetchMachinery = async () => {
    try {
      const res = await fetch("/api/machinery-detail");
      const data = await res.json();

      if (data.success) {
        setMachines(data.data);
      } else {
        setError("Failed to fetch machinery data.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching machinery data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMachinery();
  }, []);

  return (
    <div className="py-12 px-4 lg:px-10 container mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center lg:text-left mb-10 text-gray-900 tracking-wide">
        Machinery{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500">
          Details
        </span>
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading machinery details...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : machines.length === 0 ? (
        <p className="text-center text-gray-500">No machinery details available.</p>
      ) : (
        <div className="overflow-x-auto mx-auto rounded-xl shadow-xl border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 text-white shadow-md">
              <tr>
                <th className="px-6 py-4 border-r border-orange-300 font-semibold">No</th>
                <th className="px-6 py-4 border-r border-orange-300 font-semibold">Machine Detail</th>
                <th className="px-6 py-4 font-semibold">No. of Machines</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((machine, index) => (
                <tr
                  key={machine._id || index}
                  className={`transition duration-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-orange-50"
                  } hover:bg-orange-100`}
                >
                  <td className="px-6 py-4 font-medium text-gray-800 border-r border-gray-200">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-gray-200">
                    {machine.machineName}
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{machine.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MachineryDetails;
