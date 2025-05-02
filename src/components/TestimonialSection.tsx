import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: "Emma Watson",
    role: "Marketing Expert",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "These ebooks completely transformed my approach to digital marketing. The strategies are well-explained and easy to implement. I've seen a 40% increase in my campaign performance!",
    initials: "EW"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "As someone starting a business, the financial guides offered here provided invaluable insights. The content is practical and straightforward without unnecessary fluff.",
    initials: "DC"
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "University Professor",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "I recommend these ebooks to all my students. The depth of information and clarity of explanation is outstanding. It's rare to find such quality educational material.",
    initials: "SR"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 font-sans overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 text-sm tracking-wide uppercase px-4 py-1 rounded-full">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight drop-shadow-sm">
            What Our Readers Say
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Discover why thousands of readers trust our ebooks to elevate their knowledge and careers.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-gray-300 shadow-sm">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gray-600 text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-800 text-base leading-relaxed italic">
                      “{testimonial.content}”
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
