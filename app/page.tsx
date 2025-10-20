"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building Digital Experiences that Matter
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              At DevByAdebiyi, we craft high-quality websites, applications, and custom software solutions
              that drive results. Our team combines creativity, technical expertise, and user-focused design
              to help your brand shine online.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Image / Illustration */}
          <div className="flex-1">
            <Image
              src="/logo.PNG"
              alt="DevByAdebiyi Logo"
              width={500}
              height={500}
              className="rounded-full shadow-sm"
              priority
            />
          </div>
        </div>
      </section>

      {/* Intro / Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-gray-700 mb-10">
            We believe in delivering more than just code. We deliver experiences, performance, and
            value. From startups to enterprise projects, our solutions are tailored to your goals.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Quality & Reliability</h3>
              <p className="text-gray-600 text-sm">
                We prioritize clean, maintainable code and reliable solutions that scale with your business.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-2">User-Centered Design</h3>
              <p className="text-gray-600 text-sm">
                Every product we build focuses on the end-user, combining functionality with intuitive design.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Innovative Solutions</h3>
              <p className="text-gray-600 text-sm">
                We use the latest technologies and creative approaches to solve complex business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* What We Do Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", text: "Building responsive, modern websites that convert visitors into customers." },
              { title: "Product Design", text: "Designing experiences that users love and remember." },
              { title: "Custom Software", text: "Tailored software solutions to solve your unique business challenges." },
              { title: "Automation", text: "Streamline processes and save time with smart automation." },
              { title: "Web Apps", text: "Fast, scalable, and robust web applications to power your business." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
