"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setStatus({ type: "", message: "" });
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setStatus({ type: "", message: "" });

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus({
        type: "success",
        message: data.message || "Message sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        type: "error",
        message: data.message || "Something went wrong!",
      });
    }
  } catch (error) {
    console.error(error);
    setStatus({
      type: "error",
      message: "Failed to send message. Please try again.",
    });
  } finally {
    setIsLoading(false);
  }
};



    

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SECTION */}
      <div className="bg-black text-white p-10 md:p-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          FEEL FREE TO CONTACT <br /> US
        </h1>

        {/* LANDLINE */}
        <div className="max-w-xl flex justify-between">
          <div className="mt-10">
            <h2 className="font-semibold text-lg mb-2">LandLine</h2>
            <ul className="space-y-2">
              {[
                "0213-4937995",
                "0213-4937997",
                "0213-4937994",
                "0213-4937998",
                "0213-4937995",
              ].map((number, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaPhoneAlt className="text-white" />
                  <span>{number}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp & Mobile */}
          <div className="mt-10">
            <h2 className="font-semibold text-lg mb-2">Whatsapp & Mobile</h2>
            <ul className="space-y-2">
              {[
                "0336 2777995",
                "0333 2777995",
                "0320 2777995",
                "0332 7779957",
                "0333 4937995",
              ].map((number, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaWhatsapp className="text-green-500"/>
                  <span>{number}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COMPLAIN */}
        <div className="mt-10">
          <h2 className="font-semibold text-lg mb-2">Complain</h2>
          <div className="flex items-center gap-3 mb-1">
            <FaWhatsapp className="text-green-500" />
            <span>0333 3277995</span>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-white" />
            <span>complain@arm-interior.net</span>
          </div>
        </div>

        {/* EMAIL */}
        <div className="mt-10">
          <h2 className="font-semibold text-lg mb-2">E-MAIL</h2>
          <div className="flex items-center gap-3">
            <MdEmail className="text-white" />
            <span>contact@arm-interior.net</span>
          </div>
        </div>

        {/* SHOWROOM TIMING */}
        <div className="mt-10">
          <h2 className="font-semibold text-lg mb-2">Showroom Timing</h2>
          <div className="flex items-center gap-3">
            <FaClock className="text-white" />
            <span>11:00–07:00 (Mon–Sat) (Except Namaz Time)</span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="bg-gray-100 p-10 md:p-16 flex items-start justify-center">
        <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="border-2 border-black text-black w-full p-3 focus:outline-none placeholder-gray-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="border-2 border-black text-black w-full p-3 focus:outline-none placeholder-gray-500"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="border-2 border-black text-black w-full p-3 focus:outline-none placeholder-gray-500"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="border-2 border-black text-black w-full p-3 focus:outline-none placeholder-gray-500"
        required
      />
      <button
        type="submit"
        className="w-full bg-black text-white font-semibold py-3 hover:bg-gray-800 transition"
      >
        Send
      </button>
{status.message && (
  <p className={status.type === "success" ? "text-green-600" : "text-red-600"}>
    {status.message}
  </p>
)}

      {/* {status && <p className="mt-2 text-green-600">{status}</p>} */}
    </form>
      </div>
    </div>
  );
}