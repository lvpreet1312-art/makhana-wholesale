"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMsg("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMsg("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg("Please enter a valid email");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Message is required");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMsg("Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 max-w-2xl border border-gray-100">
      <div className="mb-8">
        <label htmlFor="name" className="block text-gray-900 font-bold mb-3 text-sm uppercase tracking-wide">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500/20 transition bg-gray-50 focus:bg-white"
          placeholder="John Doe"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="email" className="block text-gray-900 font-bold mb-3 text-sm uppercase tracking-wide">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500/20 transition bg-gray-50 focus:bg-white"
          placeholder="john@example.com"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-gray-900 font-bold mb-3 text-sm uppercase tracking-wide">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500/20 transition bg-gray-50 focus:bg-white resize-none"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium flex items-center gap-2">
          <span>⚠️</span>
          {errorMsg}
        </div>
      )}

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium flex items-center gap-2">
          <span>✓</span>
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {status === "error" && !errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium flex items-center gap-2">
          <span>⚠️</span>
          Failed to send message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-105 duration-200 uppercase tracking-wide text-sm"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block animate-spin">⟳</span>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
