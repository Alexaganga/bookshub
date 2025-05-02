'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div variants={itemVariants}>
            <h3 className="font-playfair font-bold text-2xl mb-4 text-cyan-400">
              EbookHaven
            </h3>
            <p className="text-gray-300 font-lora mb-4">
              Your premier destination for quality digital books across various fields of interest.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com/yourusername"
                aria-label="Twitter"
                className="p-2 bg-cyan-500/20 rounded-full hover:bg-cyan-500/40 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5 text-cyan-400" />
              </motion.a>
              <motion.a
                href="https://instagram.com/yourusername"
                aria-label="Instagram"
                className="p-2 bg-cyan-500/20 rounded-full hover:bg-cyan-500/40 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5 text-cyan-400" />
              </motion.a>
              <motion.a
                href="https://wa.me/yourphonenumber"
                aria-label="WhatsApp"
                className="p-2 bg-cyan-500/20 rounded-full hover:bg-cyan-500/40 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="h-5 w-5 text-cyan-400" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-2 font-lora">
              {['Home', 'Books', 'About Us', 'Contact'].map((label, idx) => (
                <li key={idx}>
                  <a
                    href={`#${label.toLowerCase().replace(' ', '')}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-cyan-400">
              Categories
            </h4>
            <ul className="space-y-2 font-lora">
              {['Business', 'Technology', 'Self-Development', 'Finance', 'Marketing'].map((category, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-cyan-400">
              Customer Support
            </h4>
            <ul className="space-y-2 font-lora">
              {['FAQs', 'Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-cyan-400/20 pt-8 relative">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400 h-1 w-16 rounded-full" />
          <p className="text-center text-gray-400 text-sm font-lora">
            © {year} EbookHaven. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
