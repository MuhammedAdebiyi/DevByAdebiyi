"use client";



import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

type Solution = {
  id: number;
  title: string;
  description: string;
  image: string | null;
};

type Category = {
  id: number;
  slug: string;
  name: string;
};

export default function SolutionCategoryPage() {
  const { category } = useParams();
  const router = useRouter();

  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [catLoading, setCatLoading] = useState(true);

  // Replace this with NEXT_PUBLIC_API_URL later (see notes below)
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    // fetch categories for top nav
    setCatLoading(true);
    axios
      .get(`${API_BASE}/api/categories/`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Categories error:", err))
      .finally(() => setCatLoading(false));
  }, []);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    axios
      .get(`${API_BASE}/api/solutions/${category}/`)
      .then((res) => setSolutions(res.data))
      .catch((err) => {
        console.error("Solutions fetch error:", err);
        setSolutions([]);
      })
      .finally(() => setLoading(false));
  }, [category]);

  // Navigate to a chosen category
  function goToCategory(slug: string) {
    router.push(`/solutions/${slug}`);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Category nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold capitalize">
            {category?.replace("-", " ")}
          </h1>
          <div className="flex items-center gap-3 overflow-x-auto">
            {catLoading ? (
              <div className="flex gap-2 animate-pulse">
                <div className="h-8 w-20 bg-gray-200 rounded-full" />
                <div className="h-8 w-24 bg-gray-200 rounded-full" />
              </div>
            ) : (
              categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => goToCategory(c.slug)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition ${
                    c.slug === category
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-200 hover:shadow"
                  }`}
                >
                  {c.name}
                </button>
              ))
            )}
          </div>
        </div>

        <p className="text-gray-500 mb-6">
          Explore our {category?.replace("-", " ")} projects
        </p>

        {/* Loading skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-56 relative bg-gray-200 skeleton-bg" />
                <div className="p-4 space-y-3">
                  <div className="h-4 w-3/4 rounded bg-gray-200 skeleton-bg" />
                  <div className="h-3 rounded bg-gray-200 skeleton-bg" />
                  <div className="h-3 w-5/6 rounded bg-gray-200 skeleton-bg" />
                </div>
              </div>
            ))}
          </div>
        ) : solutions.length === 0 ? (
          /* No data fallback */
          (<div className="flex flex-col items-center justify-center py-20 text-gray-600">
            <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-4" />
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-center max-w-md">
              We don’t have any projects in this category yet. Try another
              category or check back later.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => router.push("/solutions")}
                className="px-4 py-2 bg-white border rounded-md"
              >
                View all categories
              </button>
              <a
                href="/contact"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Contact us
              </a>
            </div>
          </div>)
        ) : (
          /* Projects grid */
          (<div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 animate-fadeIn"
            style={{ animation: "fadeIn 0.6s ease-in-out forwards" }}
          >
            {solutions.map((solution) => (
              <article
                key={solution.id}
                className="relative group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                aria-labelledby={`solution-${solution.id}-title`}
              >
                {/* Image area */}
                <div className="relative h-56 bg-gray-100">
                  {solution.image ? (
                    <Image
                      src={`${API_BASE}${solution.image}`}
                      alt={solution.title || "Solution image"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      onError={(e) => {
                      
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <div className="text-center p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="mx-auto mb-2 h-8 w-8"
                          aria-hidden
                        >
                          <path
                            fill="currentColor"
                            d="M21 19V5a2 2 0 0 0-2-2H5C3.9 3 3 3.9 3 5v14l4-3 3 2 5-4 6 4z"
                          />
                        </svg>
                        <div className="text-sm">No image</div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Overlay text */}
                <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  <h3 id={`solution-${solution.id}-title`} className="font-semibold text-lg">
                    {solution.title}
                  </h3>
                  <p className="text-sm mt-1 line-clamp-2">{solution.description}</p>
                </div>
              </article>
            ))}
          </div>)
        )}
      </div>
    </div>
  );
}
