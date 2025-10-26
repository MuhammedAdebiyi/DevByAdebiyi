"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About DevByAdebiyi</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          DevByAdebiyi is a team of passionate developers and designers committed to creating digital experiences that 
          drive real business results. Our mission is to combine creativity, technology, and strategy to deliver impactful solutions.
        </p>
      </section>

      {/* Mission & Vision */}
      <motion.section
        className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To empower businesses with innovative, reliable, and scalable digital solutions that create value and inspire growth.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be recognized as a trusted partner for companies looking to enhance their digital presence and achieve success through technology.
          </p>
        </div>
      </motion.section>

      {/* Team / Founder Section */}
      <motion.section
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Founder */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src="/logo.PNG" alt="Founder" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Muhammed Adebiyi</h3>
              <p className="text-gray-500 text-sm mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Visionary and tech enthusiast driving the company's creative and strategic direction.
              </p>
            </div>

            {/* Team Members (example placeholders) */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src="/lion.png" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Jane Doe</h3>
              <p className="text-gray-500 text-sm mb-2">Senior Developer</p>
              <p className="text-gray-600 text-sm">
                 Building reliable and scalable applications for all our clients.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src="/koala.png" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Ismail Akaani</h3>
              <p className="text-gray-500 text-sm mb-2">Lead Designer</p>
              <p className="text-gray-600 text-sm">
               Leading creative direction and user-centered design Solutions
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
