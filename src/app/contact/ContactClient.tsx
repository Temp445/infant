'use client'

import React, { useRef, useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { sendWhatsappMessage } from "@/services/whatsapp/whatsappService";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Facebook, Linkedin, Youtube ,Mails, PhoneCall, MapPin } from "lucide-react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { useRouter } from "next/navigation";

const service_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const template_ID = process.env.NEXT_PUBLIC_EMAILJS_ENQ_TEMPLATE_ID || "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL;

const endpoint = "/api/proxy-validate-email";

const Contact = () => {
  const countryCode = "IN";

  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [phoneError, setPhoneError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateEmail = async (email: string): Promise<string> => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.status !== 200) return "Invalid Email";

      const data = await response.json();
      if (data.success) {
        return data.isValid ? "" : "Invalid Email Address";
      } else {
        return ` Failed: ${data.error}`;
      }
    } catch (err) {
      console.error("Email validation error:", err);
      return "Validation unavailable";
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const formCurrent = form.current;
    if (!formCurrent) return;

    const emailValidationMessage = await validateEmail(email);
    if (emailValidationMessage) {
      setEmailError(emailValidationMessage);

      emailInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      emailInputRef.current?.focus();
      return;
    } else {
      setEmailError("");
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    } else {
      setPhoneError("");
    }

    const phoneWithoutPlus = phone.replace(/[\s+]/g, "");

    const formData = {
      Full_Name: (formCurrent["Name"] as HTMLInputElement)?.value || "",
      Company_Name: formCurrent["company"]?.value || "",
      Business_Email: email,
      Mobile_Number: phoneWithoutPlus,
      Location: formCurrent["location"]?.value || "",
      Message: formCurrent["queries"]?.value || "",
      Product_Interested: formCurrent["product"]?.value || "",
      Originate_From: "Infant Contact Page",
    };

    setLoading(true);

    try {
      await emailjs.send(service_ID, template_ID, formData, publicKey);
      router.push('/thank-you')
      formCurrent.reset();
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }

    try {
      await sendWhatsappMessage("enquiry_form", {
        originateFrom: formData.Originate_From,
        fullName: formData.Full_Name,
        companyName: formData.Company_Name,
        businessEmail: formData.Business_Email,
        mobileNumber: formData.Mobile_Number,
        location: formData.Location,
        productInterest: formData.Product_Interested,
        message: formData.Message,
      });

      await sendWhatsappMessage(
        "customer_greetings",
        {
          fullName: formData.Full_Name,
          product: formData.Product_Interested,
          siteUrl: `${domainUrl}`,
          imageUrl:
            "https://res.cloudinary.com/dohyevc59/image/upload/v1749124753/Enquiry_Greetings_royzcm.jpg",
        },
        phoneWithoutPlus
      );
    } catch (error) {
      console.error("WhatsApp sending error:", error);
    }
  };

  return (
    <>
      <div className="min-h-auto pb-20 bg-white">

        <div className="bg-black/95 py-20 text-center text-white relative">
          <p className="text-3xl md:text-4xl font-semibold font-oswald">Contact Us</p>
          <h1 className="mt-4 md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto">
            Let’s Build the Future of Manufacturing Together – Get in Touch Today
          </h1>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-16 grid lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
              Product Enquiry
            </h2>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your name *"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1F5A8B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name *"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1F5A8B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Business Email</label>
                <input
                  ref={emailInputRef}
                  type="email"
                  name="email"
                  placeholder="Enter your email *"
                  onChange={(e) => setEmail(e.target.value.trim())}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1F5A8B] focus:outline-none"
                />
                {emailError && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">
                    {emailError}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Mobile Number</label>
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  value={phone}
                  onChange={setPhone}
                  className="rounded-lg border border-gray-300 mt-1 p-2"
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location *"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1F5A8B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Product Interested</label>
                <input
                  type="text"
                  name="product"
                  placeholder="Enter the product"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1F5A8B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Queries</label>
                <textarea
                  name="queries"
                  placeholder="Enter your queries"
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1F5A8B] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1F5A8B] text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>


          <div className="flex flex-col gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#B71C1C]">
              <h3 className="font-semibold text-lg mb-2 flex gap-2"><span><Mails className="w-6 h-6 text-red-500"/></span> Email</h3>
              <a href="mailto:abishek@infantengineers.in" className="text-gray-700">abishek@infantengineers.in</a>
              <a href="mailto:rajasekaran@infantengineers.in" className="text-gray-700">rajasekaran@infantengineers.in</a>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#B71C1C]">
              <h3 className="font-semibold text-lg mb-2 flex gap-2"><span><PhoneCall className="w-5 h-5 text-blue-800 mt-1"/></span> Phone</h3>
              <a href="tel:+919701946123" className="text-gray-700">+91 9701946123</a>
              <a href="tel:+919841706116" className="text-gray-700">+91 9841706116</a>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#B71C1C]">
              <h3 className="font-semibold text-lg mb-2 flex gap-2"><span><MapPin/> </span> Location</h3>
              <p className="text-sm text-gray-700">
                Factory no: F-43 Sipcot Industrial Park, Katrambakkam, Sriperumbudur Taluk,  
                Kanchipuram Dist, Tamil Nadu - 602 105.
              </p>
            </div>
               <div className="container mx-auto px-6 py-10 flex justify-center">
          <div className="bg-white border border-[#B71C1C] border-x-4 shadow-lg rounded-xl py-3 px-6 flex gap-8">
            <Link href="#" className="text-blue-600">
              <Facebook size={28} />
            </Link>
            <Link href="#" className="text-black mt-1">
              <BsTwitterX size={20} />
            </Link>
            <Link href="#" className="text-blue-400">
              <Linkedin size={28} />
            </Link>
            <Link href="#" className="text-red-600">
              <Youtube size={28} />
            </Link>
          </div>
        </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;
