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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 bg-book-primary/20 text-book-primary hover:bg-book-primary/30">
              Our Story
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Transforming Knowledge Into Digital Excellence
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a passion for spreading knowledge, Bookshub has become a premier
                destination for quality digital books across various fields of interest.
              </p>
              <p>
                Our carefully curated collection focuses on providing readers with valuable insights,
                practical knowledge, and captivating stories that inspire growth and learning.
              </p>
              <p>
                We collaborate with renowned authors and experts to ensure our readers receive only
                the highest quality content, professionally formatted for the best reading experience.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <motion.div variants={itemVariants} className="text-center p-4">
                <p className="font-serif text-3xl font-bold text-book-primary">500+</p>
                <p className="text-sm text-gray-500">Ebooks Available</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center p-4">
                <p className="font-serif text-3xl font-bold text-book-primary">50k+</p>
                <p className="text-sm text-gray-500">Happy Readers</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center p-4">
                <p className="font-serif text-3xl font-bold text-book-primary">100+</p>
                <p className="text-sm text-gray-500">Expert Authors</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-2 shadow-lg col-span-2">
                <CardContent className="p-0">
                  <Image
                    src="/images/reader-enjoying-ebook.jpg"
                    alt="Reader enjoying an ebook"
                    width={800}
                    height={400}
                    className="rounded-sm w-full h-44 object-cover"
                    priority
                  />
                </CardContent>
              </Card>
              <Card className="p-2 shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src="/images/digital-reading.jpg"
                    alt="Digital reading"
                    width={400}
                    height={200}
                    className="rounded-sm w-full h-36 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="p-2 shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src="/images/digital-technology.jpg"
                    alt="Digital technology"
                    width={400}
                    height={200}
                    className="rounded-sm w-full h-36 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-book-primary/10 to-transparent rounded-full blur-3xl -z-10 transform scale-150" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
