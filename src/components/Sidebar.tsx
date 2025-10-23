"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Package, Users, Quote, UserStar, Factory , Menu, X } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Products", icon: <Package className="w-5 h-5" />, href: "/admin" },
    { label: "Clients", icon: <UserStar className="w-5 h-5" />, href: "/admin/clientslist" },
    { label: "Testimonials", icon: <Quote className="w-5 h-5" />, href: "/admin/testimonialslist" },
    { label: "Machinery", icon: <Factory className="w-5 h-5" />, href: "/admin/machinerylist" },
    { label: "Machinery Count", icon: <Factory className="w-5 h-5" />, href: "/admin/machinery-detail" },
    { label: "Users", icon: <Users className="w-5 h-5" />, href: "/admin/users" },
  ];

  return (
    <>
      {/* Desktop*/}
      <aside className="hidden md:block w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#B71C1C] mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.href)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left font-medium hover:bg-red-50 hover:text-[#B71C1C]"
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="md:hidden bg-white shadow-lg p-4 absolute rounded-br-2xl z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#B71C1C]">Admin</h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="mt-4 space-y-2 border-t pt-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  router.push(item.href);
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left font-medium hover:bg-[#B71C1C]/20 hover:text-[#B71C1C]"
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </>
  );
};

export default Sidebar;
