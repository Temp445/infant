import React from "react";

const MachineryDetails = () => {
  const machines = [
    { name: "Turn Mill", count: "5" },
    { name: "CNC", count: "45" },
    { name: "VMC", count: "5" },
    { name: "VTL", count: "5" },
    { name: "Drilling Machine", count: "5" },
    { name: "Traub", count: "20" },
    { name: "Centerless Grinding", count: "5" },
    { name: "Cylindrical Grinding", count: "5" },
    { name: "Thread Rolling", count: "5" },
  ];

  return (
    <div className="py-12 px-4 lg:px-10">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
        Machinery <span className="text-orange-500">Details</span>
      </h2>

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
                key={index}
                className={`transition duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-orange-50"
                } hover:bg-orange-100`}
              >
                <td className="px-6 py-4 font-medium text-gray-800 border-r border-gray-200">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-gray-700 border-r border-gray-200">
                  {machine.name}
                </td>
                <td className="px-6 py-4 text-gray-900 font-semibold">{machine.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MachineryDetails;
