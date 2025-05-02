'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Twitter, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add toast notification or API call here
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="relative section-padding text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right, #2e003e, #12002f), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-sm" />

      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.2), transparent 60%)',
            'radial-gradient(circle at 70% 70%, rgba(255, 215, 0, 0.2), transparent 60%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="container mx-auto relative z-10 py-24 px-4 md:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30 font-lora">
            Let’s Connect
          </Badge>
          <motion.h2
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
          >
            {'Say Hello!'.split('').map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-gray-300 font-lora max-w-xl mx-auto">
            Whether you're curious about features, a free trial, or even press—we’re ready to answer any and all questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div variants={cardVariants} initial="hidden" animate="visible">
            <Card className="bg-white/10 backdrop-blur-md border-none shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-semibold mb-4 text-gold">
                  Contact Info
                </h3>
                <div className="space-y-4 text-gray-100 font-lora">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gold" />
                    <span>support@ebookhaven.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gold" />
                    <span>0793933528 / 0741138844</span>
                  </div>
                  <div className="pt-6">
                    <h4 className="text-sm uppercase text-gold tracking-wide mb-3">
                      Follow Us
                    </h4>
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://twitter.com"
                        className="p-2 rounded-full bg-gold/20 hover:bg-gold/40"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="text-gold w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="https://instagram.com"
                        className="p-2 rounded-full bg-gold/20 hover:bg-gold/40"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Instagram className="text-gold w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="https://wa.me"
                        className="p-2 rounded-full bg-gold/20 hover:bg-gold/40"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle className="text-gold w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={cardVariants} initial="hidden" animate="visible">
            <Card className="bg-white/10 backdrop-blur-md border-none shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-gold/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-gold"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-gold/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-gold"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-gold/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-gold"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-gold/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-gold min-h-[120px]"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gold text-purple-900 hover:bg-white hover:text-purple-900 font-lora font-semibold transition duration-300"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
