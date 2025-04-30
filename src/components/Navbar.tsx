'use client'; // Essential for using client-side features like useState

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'; // Using Next.js Link for client-side navigation

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto py-5 px-6 flex justify-between items-center">
        {/* Brand Logo/Title */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="text-3xl font-serif font-bold text-transparent bg-gradient-to-r from-book-primary to-book-accent bg-clip-text"
          >
            EbookHaven
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12">
          <Link
            href="/"
            className="text-gray-800 hover:text-book-primary font-medium transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/books"
            className="text-gray-800 hover:text-book-primary font-medium transition-colors duration-300"
          >
            Books
          </Link>
          <Link
            href="/AboutSection"
            className="text-gray-800 hover:text-book-primary font-medium transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/ContactSection"
            className="text-gray-800 hover:text-book-primary font-medium transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col space-y-6 animate-in fade-in-50 slide-in-from-top-2">
            <Link
              href="/"
              className="text-gray-800 hover:text-book-primary font-medium transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/books"
              className="text-gray-800 hover:text-book-primary font-medium transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Books
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-book-primary font-medium transition-colors py-2"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-book-primary font-medium transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
