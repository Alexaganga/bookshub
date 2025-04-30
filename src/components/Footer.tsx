import React from 'react';
import { Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-book-dark text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">
              <span className="bg-gradient-to-r from-book-primary to-book-accent bg-clip-text text-transparent">
                EbookHaven
              </span>
            </h3>
            <p className="text-white/70 mb-4">
              Your premier destination for quality digital books across various fields of interest.
            </p>
            <div className="flex space-x-3">
              <a href="https://twitter.com" aria-label="Twitter" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me" aria-label="WhatsApp" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#books" className="text-white/70 hover:text-white transition-colors">Books</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Business</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Technology</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Self-Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Finance</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Marketing</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-sm">
            © {year} EbookHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;