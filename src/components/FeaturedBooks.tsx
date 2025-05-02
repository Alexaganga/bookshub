import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const featuredBooks = [
  {
    id: 1,
    title: "The Art of Digital Marketing",
    author: "Ian Dodson",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51kSncYjYLL._SX379_BO1,204,203,200_.jpg",
    price: "Ksh 50",
    category: "Marketing",
    rating: 4.7,
    isBestseller: true,
  },
  {
    id: 2,
    title: "Data Science for Business",
    author: "Foster Provost & Tom Fawcett",
    cover: "https://images-na.ssl-images-amazon.com/images/I/41b+Z7+jHFL._SX331_BO1,204,203,200_.jpg",
    price: "Ksh 50",
    category: "Technology",
    rating: 4.9,
    isBestseller: true,
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: "https://upload.wikimedia.org/wikipedia/en/3/33/RichDadPoorDad.jpg",
    price: "Ksh 50",
    category: "Finance",
    rating: 4.5,
    isBestseller: false,
  },
  {
    id: 4,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    cover: "https://upload.wikimedia.org/wikipedia/en/3/3f/Think_and_Grow_Rich.jpg",
    price: "Ksh 50",
    category: "Self-Help",
    rating: 4.6,
    isBestseller: false,
  },
];

const FeaturedBooks: React.FC = () => {
  return (
    <section id="books" className="section-padding bg-gradient-to-r from-[#5F4B8B] via-[#9B59B6] to-[#F39C12]">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-[#F39C12] text-white hover:bg-[#E67E22]">
            Featured Collection
          </Badge>
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Bestselling eBooks
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Discover our most popular titles that readers can't put down. From business to creativity, these books will transform your perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="book-card h-full flex flex-col bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="book-cover relative w-full h-[250px]">
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title} by ${book.author}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={book.id <= 2}
                />
                {book.isBestseller && (
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-[#F39C12] text-white">Bestseller</Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pt-4 pb-0">
                <CardTitle className="text-lg mb-1 text-[#2C3E50] font-semibold">{book.title}</CardTitle>
                <CardDescription className="text-[#7F8C8D]">by {book.author}</CardDescription>
              </CardHeader>
              <CardContent className="py-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#F39C12] font-semibold">{book.price}</span>
                  <Badge variant="outline" className="text-[#E74C3C] font-normal">
                    {book.category}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Button className="w-full bg-[#9B59B6] hover:bg-[#8E44AD] text-white">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="border-[#9B59B6] text-[#9B59B6] hover:bg-[#9B59B6]/10">
            View All Books <ArrowRight className="ml-2 h-4 w-4 text-[#9B59B6]" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
