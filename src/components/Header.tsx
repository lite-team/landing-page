"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">Lite</span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-200 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#apps"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Apps
          </Link>
          <Link
            href="#team"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Team
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link
              href="#apps"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Apps
            </Link>
            <Link
              href="#team"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}