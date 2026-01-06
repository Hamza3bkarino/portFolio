"use client";
import axios from "axios";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    // Wait for the POST request to finish
    await axios.post(
      "https://hamzaerraji.app.n8n.cloud/webhook/portfolio-contact",
      form,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });


  } catch (error) {
    console.error("Failed to send message:", error);
    toast.error("Failed to send message, try again");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* INFO */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Have a project or question?  
            Send a message and I’ll reply as soon as possible.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex w-22.5 justify-between items-center"><FaMapMarkerAlt className="text-blue-600"/> Morocco</li>
            <li className="flex w-55 justify-between items-center"><FaPaperPlane className="text-blue-600"/> errajihamza80@gmail.com</li>
            <li className="flex w-38 justify-between items-center"><FaPhoneAlt className="text-blue-600"/> +212 706 430 075</li>
          </ul>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            Contact Form
          </h3>

          {success && (
            <div className="mb-4 bg-green-100 text-green-700 text-sm p-3 rounded-lg flex justify-between items-center ">
              <p>Message sent successfully ✅</p> 
              <IoClose className=""/>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full border-2 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.name ? "border-red-500" : "border-blue-500"}`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border-2 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.email ? "border-red-500" : "border-blue-500"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="4"
                value={form.message}
                onChange={handleChange}
                className={`w-full border-2 px-4 py-3 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${errors.message ? "border-red-500" : "border-blue-500"}`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-sm font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
