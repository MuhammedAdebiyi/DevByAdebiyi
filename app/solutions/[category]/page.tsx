"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Solution {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  created_at: string;
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [solutions, setSolutions] = useState<Solution[]>([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/solutions/${params.category}/`)
      .then((res) => res.json())
      .then((data) => setSolutions(data));
  }, [params.category]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center capitalize">
        {params.category.replace("-", " ")}
      </h1>

      {solutions.length === 0 ? (
        <p className="text-center text-gray-500">No projects found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={`http://127.0.0.1:8000${solution.image}`}
                alt={solution.title}
                width={400}
                height={300}
                className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
