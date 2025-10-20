"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Solution {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  external_link: string;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/solutions/");
        const data = await res.json();
        setSolutions(data);
      } catch (err) {
        console.error("Failed to fetch solutions:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSolutions();
  }, []);

  if (loading) return <p className="text-center py-20">Loading solutions...</p>;

  // Group by category
  const grouped: Record<string, Solution[]> = {};
  solutions.forEach((sol) => {
    if (!grouped[sol.category]) grouped[sol.category] = [];
    grouped[sol.category].push(sol);
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      {Object.entries(grouped).map(([category, items], idx) => (
        <motion.section
          key={category}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: idx * 0.2 }}
          className="py-12 px-6 bg-gray-50 rounded-3xl shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-8 text-center capitalize border-b-2 border-gray-200 pb-4">
            {category.replace("-", " ")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((sol, cardIdx) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: cardIdx * 0.2 }}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`http://127.0.0.1:8000${sol.image}`}
                    alt={sol.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{sol.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{sol.description}</p>
                <a
                  href={sol.external_link}
                  target="_blank"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
