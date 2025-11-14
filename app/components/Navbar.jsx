"use client";

import { useState } from "react";
import { Home } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between text-center px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-[60px] md:h-[76px] w-[72px] md:w-[92px] object-contain"
          />
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center bg-[#1D1F21] rounded-full px-2 py-1">
          <a
            href="#home"
            className="flex items-center gap-1 bg-white text-black rounded-full px-4 py-1.5 font-medium text-sm transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Home
          </a>
          <a
            href="#about"
            className="text-white px-4 py-1.5 rounded-full font-medium text-sm hover:text-gray-300"
          >
            About Us
          </a>
          <a
            href="#reviews"
            className="text-white px-4 py-1.5 rounded-full font-medium text-sm hover:text-gray-300"
          >
            Reviews
          </a>
          <a
            href="#products"
            className="text-white px-4 py-1.5 rounded-full font-medium text-sm hover:text-gray-300"
          >
            Products
          </a>
          <a
            href="#blog"
            className="text-white px-4 py-1.5 rounded-full font-medium text-sm hover:text-gray-300"
          >
            Blog
          </a>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 font-medium hover:text-black">
            Sign in
          </button>
          <button className="border border-gray-400 text-gray-800 font-medium rounded-full px-4 py-1.5 hover:bg-gray-100 transition">
            Signup Free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {open && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-gray-700 font-medium md:hidden">
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
            <li><a href="#reviews" onClick={() => setOpen(false)}>Reviews</a></li>
            <li><a href="#products" onClick={() => setOpen(false)}>Products</a></li>
            <li><a href="#blog" onClick={() => setOpen(false)}>Blog</a></li>
            <li><a href="#signin" onClick={() => setOpen(false)}>Sign In</a></li>
            <li><a href="#signup" onClick={() => setOpen(false)}>Signup Free</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
