import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import logo from "@/assets/Logo1.png"
import Image from 'next/image'
import { BsTwitterX } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:pr-10 py-12 flex  md:flex-row gap-20 flex-wrap xl:justify-center-safe">
        <div>
          <div className='flex gap-2'>
            <Image src={logo} alt="Company Logo" className="h-16 md:h-20 w-46 rounded -mt-1" />
          </div>
          <p className="text-base mt-3 leading-relaxed max-w-sm flex gap-2">
          Manufacturing high-precision components for critical automotive and engine systems, designed for maximum reliability and safety in demanding applications.
          </p>

                
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Facebook className="w-7 h-7" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors mt-1">
              <BsTwitterX  className="text-xl" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Linkedin className="w-7 h-7" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Youtube className="w-7 h-8" />
            </Link>
          </div>

        </div>

        <div className='hidden md:block'>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-orange-500 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/machinery" className="hover:text-orange-500 transition-colors">
                Our Machinery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 mb-4 lg:w-72 xl:w-auto max-w-sm">

               <li className="flex items-center gap-3">
              <FaLocationDot  className="w-11 h-10 text-orange-600 -mt-10 text-sm" />
              <span>Factory no: F-43 Sipcot Industrial Park, Katrambakkam, sriperumbudur Taluk, Kanchipuram Dist, Tamil nadu - 602 105.</span>
            </li>
            
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <span>+91 44 42324222</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-500" />
              <span>info@infantengineers.in</span>
            </li>
          </ul>
          
        </div>

          <div className=" w-full md:w-60 lg:w-80 h-46 rounded-lg overflow-hidden border border-gray-700 lg:hidden xl:block">
            <iframe
              title="Infant Engineers Location"
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15546.402389406661!2d80.215027!3d13.061076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266947093a395%3A0x10b037f79c6e698f!2sBrindavanam%20Apartments!5e0!3m2!1sen!2sus!4v1755847210839!5m2!1sen!2sus"
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