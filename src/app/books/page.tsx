'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredBooks = [
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/65/ThingsFallApart.jpg',
    rating: 4.7,
    price: 50,
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg',
    rating: 4.8,
    price: 50,
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Sapiens_A_Brief_History_of_Humankind.jpg',
    rating: 4.9,
    price: 50,
  },
  {
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Half_of_a_Yellow_Sun.jpg',
    rating: 4.6,
    price: 50,
  },
  {
    title: 'The River and the Source',
    author: 'Margaret A. Ogola',
    imageUrl: 'https://bookskenya.com/wp-content/uploads/2020/10/The-River-and-the-Source-by-Margaret-A.-Ogola.jpg',
    rating: 4.5,
    price: 50,
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Becoming_%28Michelle_Obama%29.png',
    rating: 4.9,
    price: 50,
  },
  {
    title: 'Long Walk to Freedom',
    author: 'Nelson Mandela',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Long_Walk_to_Freedom.jpg',
    rating: 4.8,
    price: 50,
  },
  {
    title: 'Dust',
    author: 'Yvonne Adhiambo Owuor',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/23/Dust_%28novel%29.jpg',
    rating: 4.4,
    price: 50,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Atomic_Habits.jpg',
    rating: 4.9,
    price: 50,
  },
  {
    title: 'A Grain of Wheat',
    author: 'Ngũgĩ wa Thiong’o',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4b/A_Grain_of_Wheat.jpg',
    rating: 4.6,
    price: 50,
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
    <section id="featured-books" className="py-16 bg-gradient-to-b from-burgundy/10 to-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-gold text-burgundy px-4 py-2 text-lg font-lora font-semibold">
          Featured Books
        </Badge>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-burgundy mb-12">
          Bestsellers You Can’t Miss
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-white rounded-xl shadow-lg border-gold/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={book.imageUrl}
                      alt={`Cover of ${book.title} by ${book.author}`}
                      width={300}
                      height={400}
                      className="w-full h-72 object-cover rounded-t-xl"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy/50 to-transparent rounded-t-xl" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-burgundy mb-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-lora mb-4">
                      by {book.author}
                    </p>
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-gold" />
                      <span className="ml-2 text-gray-700 font-lora font-medium">
                        {book.rating}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-lora font-semibold text-gold">
                        KES {book.price.toLocaleString()}
                      </span>
                      <Button className="relative bg-gold text-burgundy px-4 py-2 rounded-full hover:bg-white hover:text-burgundy font-lora font-semibold transition-all overflow-hidden group">
                        <span className="relative z-10">Buy Now</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-gold to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
