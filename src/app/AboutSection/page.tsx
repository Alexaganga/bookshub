'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-[#fdfbfa] to-white font-sans">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300">
              Why Bookshub?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Fueling Minds, One Ebook at a Time
            </h2>
            <div className="space-y-5 text-gray-700 text-lg">
              <p>
                At <strong>Bookshub</strong>, we believe that knowledge is power—and accessibility is key.
                Our platform brings together an ever-growing library of ebooks to ignite curiosity,
                support learning, and unlock personal growth for everyone, everywhere.
              </p>
              <p>
                Whether you're escaping into fiction, mastering a new skill, or exploring ideas that
                change your perspective, our ebooks are crafted and curated to make every page count.
              </p>
              <p>
                We’re not just selling books—we’re building bridges to opportunity, understanding, and transformation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 text-center">
              <motion.div variants={itemVariants}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-500">Curated Ebooks</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">50k+</p>
                <p className="text-sm text-gray-500">Readers Empowered</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">20+</p>
                <p className="text-sm text-gray-500">Genres to Explore</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-2 shadow-xl col-span-2 hover:scale-[1.02] transition-transform duration-500 ease-in-out">
                <CardContent className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0ca"
                    alt="Reader enjoying an ebook"
                    width={800}
                    height={400}
                    className="rounded-md w-full h-48 md:h-56 object-cover"
                    priority
                  />
                </CardContent>
              </Card>
              <Card className="p-2 shadow-xl hover:scale-[1.03] transition-transform duration-500 ease-in-out">
                <CardContent className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                    alt="Digital reading"
                    width={400}
                    height={200}
                    className="rounded-md w-full h-36 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="p-2 shadow-xl hover:scale-[1.03] transition-transform duration-500 ease-in-out">
                <CardContent className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
                    alt="Digital technology"
                    width={400}
                    height={200}
                    className="rounded-md w-full h-36 object-cover"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-pink-100 rounded-full blur-3xl -z-10 scale-150 opacity-40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
