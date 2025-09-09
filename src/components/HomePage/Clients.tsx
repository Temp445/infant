'use client'

import Marquee from 'react-fast-marquee';
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Client {
  _id: string;
  clientName: string;
  clientImage: string[];
}

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);

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
      }
    };
    fetchClients();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Clients
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-justify md:text-center">
            Partnering with forward-thinking companies, we deliver solutions that drive innovation, performance, and long-term trust.
          </p>
        </div>

        {clients.length > 4 ? (
          <Marquee gradient={false} pauseOnHover speed={45} className="py-6">
            {clients.map((client, index) => (
              <div
                key={`${client._id}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
                  <img
                    src={client.clientImage[0]}
                    alt={client.clientName}
                    width={130}
                    height={130}
                    className="mx-auto object-contain transition duration-500"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        ) : (
          <div className="flex flex-wrap justify-center gap-8 py-6">
            {clients.map((client, index) => (
              <div
                key={`${client._id}-${index}`}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={client.clientImage[0]}
                  alt={client.clientName}
                  width={130}
                  height={130}
                  className="mx-auto object-contain transition duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
