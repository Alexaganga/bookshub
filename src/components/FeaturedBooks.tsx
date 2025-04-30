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
    author: "Sarah Johnson",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$19.99",
    category: "Marketing",
    rating: 4.7,
    isBestseller: true
  },
  {
    id: 2,
    title: "Mastering Data Science",
    author: "Michael Chen",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$24.99",
    category: "Technology",
    rating: 4.9,
    isBestseller: true
  },
  {
    id: 3,
    title: "Financial Freedom Blueprint",
    author: "Jessica Williams",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$17.99",
    category: "Finance",
    rating: 4.5,
    isBestseller: false
  },
  {
    id: 4,
    title: "The Creative Mind",
    author: "Robert Anderson",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$15.99",
    category: "Self-Help",
    rating: 4.6,
    isBestseller: false
  },
];

const FeaturedBooks: React.FC = () => {
  return (
    <section id="books" className="section-padding bg-book-light">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-book-primary/20 text-book-primary hover:bg-book-primary/30">
            Featured Collection
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Bestselling eBooks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular titles that readers can&rsquo;t put down. From business to creativity, these books will transform your perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="book-card h-full flex flex-col">
              <div className="book-cover relative w-full h-[250px]">
                <Image 
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
                {book.isBestseller && (
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-book-accent text-white">Bestseller</Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pt-4 pb-0">
                <CardTitle className="text-lg mb-1">{book.title}</CardTitle>
                <CardDescription>by {book.author}</CardDescription>
              </CardHeader>
              <CardContent className="py-3">
                <div className="flex justify-between items-center">
                  <span className="text-book-primary font-semibold">{book.price}</span>
                  <Badge variant="outline" className="font-normal">
                    {book.category}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Button className="w-full bg-book-primary hover:bg-book-secondary">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="border-book-primary text-book-primary hover:bg-book-primary/10">
            View All Books <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
