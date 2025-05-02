import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text and Buttons */}
          <div className="space-y-6">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              <span className="block">Discover the World of</span>
              <span className="bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
                Knowledge & Adventure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-md">
              Expand your mind with our carefully curated collection of premium ebooks on various subjects. From fiction to self-improvement, we have something for every reader.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-blue-600 text-white transition-colors transform hover:scale-105"
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
                className="border-white text-white hover:bg-white/10 transition-colors transform hover:scale-105"
                aria-label="Learn more about EbookHaven"
              >
                
              </Button>
            </div>
          </div>

          {/* Right side: Book Images */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                {/* Book 1 */}
                <div className="animate-glow bg-gradient-to-br from-purple-200 to-purple-500 shadow-xl rounded-lg p-3">
                  <Image
                    src="/images/book-preview-1.jpg"
                    alt="Romantic Fiction Book"
                    width={200}
                    height={200}
                    className="rounded-md shadow-md object-cover h-48 w-full"
                    priority
                  />
                  <p className="mt-2 text-sm text-center font-medium text-white">Romantic Fiction - 50 KSH</p>
                </div>

                {/* Book 2 */}
                <div className="animate-glow bg-gradient-to-br from-pink-200 to-pink-500 shadow-xl rounded-lg p-3 mt-8">
                  <Image
                    src="/images/book-preview-2.jpg"
                    alt="Science & Nature Book"
                    width={200}
                    height={200}
                    className="rounded-md shadow-md object-cover h-48 w-full"
                    priority
                  />
                  <p className="mt-2 text-sm text-center font-medium text-white">Science & Nature - 50 KSH</p>
                </div>

                {/* Book 3 */}
                <div className="animate-glow bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-xl rounded-lg p-3">
                  <Image
                    src="/images/book-preview-3.jpg"
                    alt="Self Improvement Book"
                    width={200}
                    height={200}
                    className="rounded-md shadow-md object-cover h-48 w-full"
                    priority
                  />
                  <p className="mt-2 text-sm text-center font-medium text-white">Self-Improvement - 50 KSH</p>
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