import React from "react";
import Service from "@/components/HomePage/Service";
import { Metadata } from "next";

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL || "";

export const metadata: Metadata = {
  title: "Services | Infant Engineers Pvt Ltd",
  description: "We provide end-to-end automotive component manufacturing services with precision engineering, OEM support, advanced technology, and strict quality control to meet global industry needs.",

  openGraph: {
    title: "Services | Infant Engineers Pvt Ltd",
    description:
      "We provide end-to-end automotive component manufacturing services with precision engineering, OEM support, advanced technology, and strict quality control to meet global industry needs.",
    url: `${domainUrl}/services`,
    siteName: "Infant Engineers Pvt Ltd",
    images: [
      {
        url: `${domainUrl}/og-images/Logo.png`,
        width: 1200,
        height: 630,
        alt: "Infant Engineers Pvt Ltd",
      },
    ],
    type: "website",
  },
};

const Services = () => {
  return (
    <>
      <section className="relative w-full bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 lg:px-16 py-20 md:py-20 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-semibold font-oswald leading-tight mb-6">
            Driving Excellence with Cutting-Edge Services
          
          </h1>
          <p className="md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            We specialize in delivering{" "}
            <span className="text-white font-semibold">custom solutions</span>{" "}
            for automotive manufacturing, combining advanced technology,
            precision engineering, and unmatched quality to bring your ideas to
            life.
          </p>
        </div>
      </section>

      <div className="mb-20">
        <Service />
      </div>
    </>
  );
};

export default Services;
