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

  return (
    <AnimatePresence mode="wait">
      {!enteredWebsite ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.3), transparent 70%)',
                'radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.3), transparent 70%)',
                'radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.3), transparent 70%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          />

          {/* Content */}
          <main className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/logo.svg"
                alt="Bookshub logo"
                width={220}
                height={48}
                priority
                className="drop-shadow-lg"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4"
            >
              Welcome to <span className="text-indigo-300">Bookshub</span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mb-8"
            >
              Embark on a journey through a universe of stories, knowledge, and imagination.
            </motion.p>

            <motion.button
              type="button"
              onClick={() => setEnteredWebsite(true)}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-indigo-600 text-white font-semibold text-lg px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:bg-indigo-700"
              aria-label="Enter the Bookshub website"
            >
              <span className="relative z-10">Enter the Adventure</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </main>

          {/* Decorative Elements */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent"
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
          className="min-h-screen bg-background font-sans"
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
