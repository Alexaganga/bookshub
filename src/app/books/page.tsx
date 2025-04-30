'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react'; // Removed unused BookOpen
import { motion } from 'framer-motion';

const featuredBooks = [
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    imageUrl: '/images/things-fall-apart.jpg',
    rating: 4.7,
    price: 1500,
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    imageUrl: '/images/the-alchemist.jpg',
    rating: 4.8,
    price: 1800,
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    imageUrl: '/images/sapiens.jpg',
    rating: 4.9,
    price: 2500,
  },
  {
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    imageUrl: '/images/half-of-a-yellow-sun.jpg',
    rating: 4.6,
    price: 2000,
  },
  {
    title: 'The River and the Source',
    author: 'Margaret A. Ogola',
    imageUrl: '/images/river-and-the-source.jpg',
    rating: 4.5,
    price: 1200,
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    imageUrl: '/images/becoming.jpg',
    rating: 4.9,
    price: 2800,
  },
  {
    title: 'Long Walk to Freedom',
    author: 'Nelson Mandela',
    imageUrl: '/images/long-walk.jpg',
    rating: 4.8,
    price: 2200,
  },
  {
    title: 'Dust',
    author: 'Yvonne Adhiambo Owuor',
    imageUrl: '/images/dust.jpg',
    rating: 4.4,
    price: 1600,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    imageUrl: '/images/atomic-habits.jpg',
    rating: 4.9,
    price: 2300,
  },
  {
    title: 'A Grain of Wheat',
    author: 'Ngũgĩ wa Thiong’o',
    imageUrl: '/images/grain-of-wheat.jpg',
    rating: 4.6,
    price: 1700,
  },
];

const FeaturedBooks: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="featured-books" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-book-primary text-white px-4 py-2 text-lg font-semibold">
          Featured Books
        </Badge>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-12">
          Bestsellers You Can’t Miss
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-white rounded-xl shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={book.imageUrl}
                      alt={`${book.title} by ${book.author}`}
                      width={300}
                      height={400}
                      className="w-full h-72 object-cover rounded-t-xl"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">by {book.author}</p>
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="ml-2 text-gray-700 font-medium">{book.rating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-book-primary">
                        KES {book.price.toLocaleString()}
                      </span>
                      <Button className="relative bg-book-primary text-white px-4 py-2 rounded-full hover:bg-book-primary/80 transition-all overflow-hidden group">
                        <span className="relative z-10">Buy Now</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
