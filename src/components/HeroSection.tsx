import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text and Buttons */}
          <div className="space-y-6">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <span className="block">Discover the World of</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Knowledge & Adventure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-md">
              Expand your mind with our carefully curated collection of premium ebooks on various subjects. From fiction to self-improvement, we have something for every reader.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-secondary text-white transition-colors"
                aria-label="Browse our ebook collection"
              >
                <Link href="/books">
                  Browse Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-colors"
                aria-label="Learn more about Bookshub"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right side: Images */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="animate-glow bg-gradient-to-br from-purple-100 to-purple-300 shadow-lg rounded-lg p-3">
                  <Image
                    src="/images/book-preview-1.jpg"
                    alt="Book preview 1"
                    width={200}
                    height={200}
                    className="rounded-md shadow-md object-cover h-48 w-full"
                    priority
                  />
                </div>
                <div className="animate-glow bg-gradient-to-br from-pink-100 to-pink-300 shadow-lg rounded-lg p-3 mt-8">
                  <Image
                    src="/images/book-preview-2.jpg"
                    alt="Book preview 2"
                    width={200}
                    height={200}
                    className="rounded-md shadow-md object-cover h-48 w-full"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-radial-gradient rounded-full blur-3xl opacity-50 -z-10 transform scale-125" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;