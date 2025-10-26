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
              Building Digital Experiences That Inspire & Innovate
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              At DevByAdebiyi, we code with purpose, create with passion, and design experiences that innovate for your brand. From websites to custom software solutions, 
              we combine creativity and technical expertise to bring ideas to life and make a meaningful impact online
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
              width={400}
              height={400}
              className="rounded-full shadow-sm"
              priority
            />
          </div>
        </div>
      </section>

      {/* Intro / Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold mb-6" style={{ color: "#0a66c2" }}>
             Why Choose Us
            </h2>
          <p className="text-gray-700 mb-10">
            We believe in delivering more than just code. We deliver experiences, performance, and
            value. From startups to enterprise projects, our solutions are tailored to your goals.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center">
            <Image
              src="/quality-reliability.png"
              alt="Quality & Reliability"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Quality & Reliability</h3>
            <p className="text-gray-600 text-sm text-center">
              We prioritize clean, maintainable code and reliable solutions that scale with your business.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center">
            <Image
              src="/user-centered.png"
              alt="User-Centered Design"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">User-Centered Design</h3>
            <p className="text-gray-600 text-sm text-center">
              Every product we build focuses on the end-user, combining functionality with intuitive design.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center">
            <Image
              src="/innovative.png"
              alt="Innovative Solutions"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Innovative Solutions</h3>
            <p className="text-gray-600 text-sm text-center">
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
        <h2 className="text-3xl font-bold mb-10" style={{ color: "#0a66c2" }}>What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", text: "Responsive, high-performing websites that turn visitors into loyal customers.", image: "/web-development.png" },
            { title: "Mobile App Development", text: "Cross-platform mobile apps bulit with speed, design and scalabilty in mind.", image: "/app-development.png" },
            { title: "UI/UX & Product Design", text: "Creating seamless digital experiences that engage users and elevate brands.", image: "/product-design.png" },
            { title: "Custom Software Solution", text: "Tailored software that solves complex problems and drives business growth.", image: "/software.png" },
            { title: "Automation & Integration", text: "Work smarter with automated systems and AI-powered workflows.", image: "/automation.png" },
            { title: "Graphics & Brand Design", text: "Transforming ideas into visuals that inspire connect and tell your story.", image: "/graphics-design.png" },
<<<<<<< HEAD
            { title: "Digital Marketing & SEO", text: "Boost visibility, traffic, and conversions with data-driven marketing strategies.", image: "/digital-marketing.png" },
            { title: "Maintenance & Support.", text: "We keep your websites, apps and systems secure, fast, and always online.", image: "/maintenance.png" },
            { title: "Cloud Infrastructure & DevOps", text: "We help businesses scale securely through modern cloud architecture, CI/CD pipelines, and automated deployment.", image: "/infrastructure.png" },
            { title: "AI & Data Solutions", text: "Harness the power of data and artificial intelligence to gain insights and automate decisions.", image: "/ai.png" },
            { title: "Cybersecurity Solutions", text: "Protect your business with secure infrastructure, risk assessments, and compliance monitoring.", image: "/graphics-design.png" }, 
            { title: "IT Consulting & Digital Transformation", text: "Guiding enterprises through modernization, from legacy systems to cloud-native platforms.", image: "/consultant.png" },
=======
            { title: "Digital Marketing & SEO", text: "Boost visibility, traffic, and conversions with data-driven marketing strategies.", image: "/graphics-design.png" },
            { title: "Maintenance & Support.", text: "We keep your websites, apps and systems secure, fast, and always online.", image: "/graphics-design.png" },
            { title: "Cloud Infrastructure & DevOps", text: "We help businesses scale securely through modern cloud architecture, CI/CD pipelines, and automated deployment.", image: "/graphics-design.png" },
            { title: "AI & Data Solutions", text: "Harness the power of data and artificial intelligence to gain insights and automate decisions.", image: "/graphics-design.png" },
            { title: "Cybersecurity Solutions", text: "Protect your business with secure infrastructure, risk assessments, and compliance monitoring.", image: "/graphics-design.png" }, 
            { title: "IT Consulting & Digital Transformation", text: "Guiding enterprises through modernization, from legacy systems to cloud-native platforms.", image: "/graphics-design.png" },
>>>>>>> ec3c7cfa7951e0659f4731d83d1ffafa12404159

          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center"
              variants={fadeInUp}
              transition={{ delay: idx * 0.2 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    </>
  );
}
