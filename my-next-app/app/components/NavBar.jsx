'use client'
import { useState } from 'react';
import { IoCodeSlash } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <IoCodeSlash />
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Port<span className="font-normal text-blue-500">folio</span>
              </span>
            </div>
          </div>

          {/* Tablet & Desktop Navigation */}
          <div className="hidden font-semibold sm:flex items-center space-x-6 lg:space-x-8">
            <a href="/" className="text-blue-500 font-medium hover:text-blue-600 transition">
              Home
            </a>
            <a href="/services" className="text-gray-600 hover:text-gray-900 transition">
              Services
            </a>
            <a href="/projects" className="text-gray-600 hover:text-gray-900 transition">
              Projects
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition">
              About Us
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <a
              href="/cv.pdf"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition font-medium"
            >
              My CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="sm:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-blue-500 font-medium hover:text-blue-600 transition">
                Home
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition">
                Services
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">
                Projects
              </a>
              <a href="#apropos" className="text-gray-600 hover:text-gray-900 transition">
                À propos
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
                Contact
              </a>
              <a
                href="/cv.pdf"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition font-medium text-center"
              >
                My CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}