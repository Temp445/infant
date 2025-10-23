import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import logo from "@/assets/Logo1.png"
import Image from 'next/image'
import { BsTwitterX } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:pr-10 pt-12 flex  md:flex-row gap-20 flex-wrap xl:justify-center-safe">
        <div>
          <div className='flex gap-2'>
            <Image src={logo} alt="Company Logo" className="h-16 md:h-20 w-46 rounded -mt-1" />
          </div>
          <p className="text-base mt-3 leading-relaxed max-w-sm flex gap-2">
          Manufacturing high-precision components for critical automotive and engine systems, designed for maximum reliability and safety in demanding applications.
          </p>

                
          <div className="flex gap-4 mt-4">
            <Link href="#">
              <Facebook className="w-7 h-7" />
            </Link>
            <Link href="#" className="mt-1">
              <BsTwitterX  className="text-xl" />
            </Link>
            <Link href="#">
              <Linkedin className="w-7 h-7" />
            </Link>
            <Link href="#">
              <Youtube className="w-7 h-8" />
            </Link>
          </div>

        </div>

        <div className='hidden md:block'>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/machinery" className="hover:underline">
                Our Machinery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 mb-4 lg:w-72 xl:w-auto max-w-sm">

               <li className="flex items-center gap-3">
              <FaLocationDot  className="w-11 h-10 text-white -mt-10 text-sm" />
              <span>Factory no: F-43 Sipcot Industrial Park, Katrambakkam, sriperumbudur Taluk, Kanchipuram Dist, Tamil nadu - 602 105.</span>
            </li>
            
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5  -mt-5 text-white" />
              <div className="flex flex-col">
                  <a href="tel:+919701946123" className="font-medium">
                    +91 9701946123
                  </a>
                  <a href="tel:+919841706116" className="font-medium">
                    +91 9841706116
                  </a>
                </div>

            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 -mt-5 text-white" />
              <div>
                  <a
                    href="mailto:abishek@infantengineers.in"
                    className="font-medium"
                  >
                    abishek@infantengineers.in
                  </a>{" "}
                  <br />
                  <a
                    href="mailto:rajasekaran@infantengineers.in"
                    className="font-medium"
                  >
                    rajasekaran@infantengineers.in
                  </a>
                </div>
            </li>
          </ul>
          
        </div>

          <div className=" w-full md:w-60 lg:w-80 h-52 rounded-lg overflow-hidden border border-gray-700 lg:hidden 2xl:block">
            <iframe
              title="Infant Engineers Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6391130167176!2d80.02320207575586!3d12.994918914365226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b46769a7ed1%3A0xfee32526eba892ca!2sInfant%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1761215323358!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
      </div>
      

      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © 2025 Infant Engineers Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;