import { Code2, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building high-performance applications optimized for speed",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with teams to deliver exceptional results",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-12"></div>
          
          <div className="mb-16 animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full-Stack Developer with extensive experience in building 
              modern web applications. With a strong foundation in both frontend and backend 
              technologies, I specialize in creating seamless, user-friendly solutions that 
              drive business growth.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey in software development has equipped me with expertise in Java, 
              Angular, React, Node.js, and cloud technologies. I'm committed to staying 
              current with industry trends and best practices, ensuring that every project 
              I undertake leverages the most effective tools and methodologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in India, I work with clients globally, helping them transform their 
              ideas into robust, scalable web applications. My approach combines technical 
              excellence with clear communication and a focus on delivering measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 gradient-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
