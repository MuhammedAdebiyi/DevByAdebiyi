"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully! 🎉");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("Error sending message. Check console.");
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Backend may not be running.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600">
        Let's Connect
      </h2>
      <p className="text-gray-600 text-center">
        Have a project or idea? Send us a message!
      </p>

      {/* Name */}
      <div className="relative">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 placeholder-transparent"
          placeholder="Your Name"
        />
        <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2">
          Your Name
        </label>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 placeholder-transparent"
          placeholder="Your Email"
        />
        <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2">
          Your Email
        </label>
      </div>

      {/* Subject */}
      <div className="relative">
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 placeholder-transparent"
          placeholder="Subject"
        />
        <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2">
          Subject
        </label>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 resize-none placeholder-transparent"
          placeholder="Your Message"
        />
        <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2">
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-semibold transition-all"
      >
        Send Message
      </button>

      {status && (
        <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
      )}
    </form>
  );
}
