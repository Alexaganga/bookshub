'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Twitter, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optional: Add actual form handling logic here
    console.log('Form submitted');
    // Optionally show a success toast or notification here
  };

  return (
    <section id="contact" className="section-padding bg-book-light">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-book-primary/20 text-book-primary hover:bg-book-primary/30">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our ebooks or need assistance with your purchase? We're here to help!
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-book-primary to-book-accent text-white p-6">
                <h3 className="text-xl font-serif font-bold mb-4">Connect With Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>support@ebookhaven.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm uppercase tracking-wider mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-white border-muted"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-white border-muted"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-white border-muted"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="bg-white border-muted min-h-[120px]"
                />
                <Button
                  type="submit"
                  className="w-full bg-book-primary hover:bg-book-secondary"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
