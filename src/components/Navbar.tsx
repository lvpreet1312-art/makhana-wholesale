"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 shadow-xl border-b border-green-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 bg-gradient-to-br from-green-600 via-green-600 to-green-700 rounded-xl flex items-center justify-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 shadow-md">
              <span className="text-white font-bold text-xl">🌾</span>
            </div>
            <div className="block">
              <span className="font-extrabold text-xl bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                ISKI Enterprises
              </span>
              <div className="text-[10px] text-gray-500 font-semibold -mt-1">Premium Quality Products</div>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition px-3 py-2 text-sm font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-green-600 transition px-3 py-2 text-sm font-medium relative group"
            >
              Product
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-green-600 transition px-3 py-2 text-sm font-medium relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 transition px-3 py-2 text-sm font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 text-white hover:bg-green-700 transition px-6 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/*<button
            onClick={() => setIsOpen(!isopen)}
            className="sm:hidden p-2 text-gray-700 hover:text-green-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="sm:hidden pb-4 border-t border-gray-200">
            <Link href="/"
             className="block px-3 py-2 text-gray-700 hover:text-green-600 transition">
              Home
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-green-600 transition">
              Products
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition">
              Blog
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-green-600 text-white rounded-lg mt-2 text-center font-medium">
              Contact Us
            </Link>
          </div>
        )}*/}
        <button
  onClick={() => setIsOpen(!isOpen)}
  className="sm:hidden p-2 text-gray-700 hover:text-green-600"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>
</div>

{isOpen && (
  <div className="sm:hidden pb-4 border-t border-gray-200">

    <Link 
      href="/" 
      onClick={() => setIsOpen(false)} 
      className="block px-3 py-2 text-gray-700 hover:text-green-600 transition"
    >
      Home
    </Link>

    <Link 
      href="/products"
      onClick={() => setIsOpen(false)}
      className="block px-3 py-2 text-gray-700 hover:text-green-600 transition"
    >
      Products
    </Link>

    <Link 
      href="/blog"
      onClick={() => setIsOpen(false)}
      className="block px-3 py-2 text-gray-700 hover:text-green-600 transition"
    >
      Blog
    </Link>

    <Link 
      href="/about"
      onClick={() => setIsOpen(false)}
      className="block px-3 py-2 text-gray-700 hover:text-green-600 transition"
    >
      About
    </Link>

    <Link 
      href="/contact"
      onClick={() => setIsOpen(false)}
      className="block px-3 py-2 bg-green-600 text-white rounded-lg mt-2 text-center font-medium"
    >
      Contact Us
    </Link>

  </div>
)}
      </div>
    </nav>
  );
}
