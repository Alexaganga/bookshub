'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedBooks from '@/components/FeaturedBooks';
import AboutSection from '@/components/AboutSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  const [enteredWebsite, setEnteredWebsite] = useState(false);

  // Typewriter effect variants for subtitle
  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {!enteredWebsite ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-700 overflow-hidden"
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black opacity-40" />

          {/* Content */}
          <main className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
            {/* Logo with enhanced effect */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1.1,
                rotate: 5,
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                type: 'spring',
                stiffness: 150,
                damping: 20,
              }}
              className="mb-8"
            >
              <Image
                src="/images/Logo.png" // Placeholder for your logo
                alt="Bookshub logo"
                width={220}
                height={48}
                priority
                className="drop-shadow-xl rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 font-playfair"
            >
              Welcome to <span className="text-gold">Bookshub</span>
            </motion.h1>

            {/* Subtitle with typewriter effect */}
            <motion.p
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mb-8 font-lora"
            >
              {'Embark on a journey through a universe of stories, knowledge, and imagination.'.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>

            {/* Enter Button */}
            <motion.button
              type="button"
              onClick={() => setEnteredWebsite(true)}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(212, 160, 23, 0.7)',
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-gold to-yellow-400 text-black font-semibold text-lg px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:bg-white"
              aria-label="Enter the Bookshub website"
            >
              <span className="relative z-10">Enter the Adventure</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </main>

          {/* Decorative Gradient */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-600 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>
      ) : (
        <motion.div
          key="website"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gray-50 font-lora"
        >
          <Navbar />
          <HeroSection />
          <FeaturedBooks />
          <AboutSection />
          <TestimonialSection />
          <ContactSection />
          <Footer />
          <Chatbot />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
