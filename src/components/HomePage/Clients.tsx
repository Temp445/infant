'use client'

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import image1 from "@/assets/clients/client1.png";
import image2 from "@/assets/clients/client2.png";
import image3 from "@/assets/clients/client3.png";
import image4 from "@/assets/clients/client4.png";
import image5 from "@/assets/clients/client5.png";
import image6 from "@/assets/clients/client6.png";
import image7 from "@/assets/clients/client7.png";
import image8 from "@/assets/clients/client8.png";

const clients = [
  { image: image1, name: "Client 1" },
  { image: image2, name: "Client 2" },
  { image: image3, name: "Client 3" },
  { image: image4, name: "Client 4" },
  { image: image5, name: "Client 5" },
  { image: image6, name: "Client 6" },
  { image: image7, name: "Client 7" },
  { image: image8, name: "Client 8" },
];

const Clients = () => {
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

        <Marquee
          gradient={false}
          pauseOnHover
          speed={45}
          className="py-6"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={130}
                  height={130}
                  className="mx-auto object-contain  transition duration-500"
                  priority={index < 8}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
