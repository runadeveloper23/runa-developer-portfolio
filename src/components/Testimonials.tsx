import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content: "Runa delivered our e-commerce platform ahead of schedule. The code quality was exceptional, and the solution scaled perfectly as our business grew. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      content: "Working with Runa was a game-changer for our project. The Angular application they built was robust, maintainable, and exceeded our expectations. Professional and reliable.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, CloudVentures",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content: "Runa's expertise in full-stack development helped us launch our MVP in record time. Their attention to detail and problem-solving skills are outstanding.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Founder, InnovateLab",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      content: "The serverless architecture Runa designed using AWS has saved us thousands in operational costs. Their technical knowledge and communication skills are top-notch.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients say about working with me
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 gradient-card border-border animate-fade-in-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
