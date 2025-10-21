"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Product Manager",
    quote: "The team at DevByAdebiyi exceeded our expectations! Their designs are intuitive and solutions scalable.",
    image: "/testimonials/sarah.jpg",
  },
  {
    name: "John D.",
    role: "CTO",
    quote: "Amazing UX design and flawless execution. I highly recommend their services to anyone looking to grow digitally.",
    image: "/testimonials/john.jpg",
  },
  {
    name: "Emily R.",
    role: "Founder, StartupX",
    quote: "Professional, creative, and reliable. Their work helped us launch our product faster than expected.",
    image: "/testimonials/emily.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold  mb-10" style={{ color: "#0a66c2" }}>What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-gray-700 text-sm mb-4">"{t.quote}"</p>
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
