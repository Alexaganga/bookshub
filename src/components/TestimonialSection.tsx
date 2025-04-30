import React from 'react';
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

const TestimonialSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-book-primary to-book-accent text-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-white/20 text-white hover:bg-white/30">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our Readers Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover why thousands of readers choose our ebooks for their personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-book-secondary text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-white/80">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
