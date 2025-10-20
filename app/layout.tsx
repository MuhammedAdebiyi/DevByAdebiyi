"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  // Detect scroll for shrink/blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion animations
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.08 },
    },
    exit: { opacity: 0, y: -10 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Sticky Navbar */}
        <motion.nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200 ${
            scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-2" : "bg-white/60 backdrop-blur-md py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
            {/* Desktop Links */}
            <div className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium hover:text-blue-500 transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.PNG"
                alt="DevByAdebiyi Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
              <span className="text-blue-600 font-semibold text-lg">DevByAdebiyi</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-500 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Animated Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden bg-white border-t border-gray-200 shadow-lg py-4 px-6"
              >
                <div className="flex flex-col space-y-4 text-center">
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={linkVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-base font-medium hover:text-blue-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Page content */}
        <main className="pt-28 md:pt-32">{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} DevByAdebiyi. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
