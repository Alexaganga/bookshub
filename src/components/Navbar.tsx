'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/', emoji: '🏠' },
  { name: 'Books', href: '/books', emoji: '📚' },
  { name: 'About', href: '/AboutSection', emoji: '🌟' },
  { name: 'Contact', href: '/ContactSection', emoji: '💌' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-white/20"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-3xl font-bold tracking-tighter"
            onClick={() => setIsOpen(false)}
          >
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              EbookHaven
            </motion.span>
            <motion.span
              className="ml-2 text-2xl"
              animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            >
              📚
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              onHoverStart={() => setHoveredLink(link.name)}
              onHoverEnd={() => setHoveredLink(null)}
              className="relative"
            >
              <Link
                href={link.href}
                className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300"
              >
                <motion.span
                  animate={{
                    scale: hoveredLink === link.name ? 1.2 : 1,
                    x: hoveredLink === link.name ? 5 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {link.emoji}
                </motion.span>
                {link.name}
              </Link>
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="navHoverEffect"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', bounce: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 shadow-sm"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="text-purple-600 w-6 h-6" />
            ) : (
              <Menu className="text-purple-600 w-6 h-6" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden bg-gradient-to-b from-white to-purple-50 shadow-lg overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  className="border-b border-purple-50 last:border-0 pb-2 last:pb-0"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-xl font-medium text-gray-800 hover:text-purple-600 transition-colors duration-300 py-2"
                  >
                    <motion.span whileHover={{ rotate: 15 }} className="text-2xl">
                      {link.emoji}
                    </motion.span>
                    {link.name}
                    <motion.span
                      className="ml-auto text-purple-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        repeatType: 'reverse',
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
