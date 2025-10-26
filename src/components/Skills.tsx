import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      name: "Java",
      description: "Enterprise-grade backend development with Spring Boot",
      icon: "☕",
    },
    {
      name: "Angular",
      description: "Building dynamic SPAs with TypeScript and RxJS",
      icon: "🅰️",
    },
    {
      name: "React",
      description: "Modern UI development with hooks and state management",
      icon: "⚛️",
    },
    {
      name: "Node.js",
      description: "Scalable server-side applications and REST APIs",
      icon: "🟢",
    },
    {
      name: "MongoDB",
      description: "NoSQL database design and optimization",
      icon: "🍃",
    },
    {
      name: "MySQL",
      description: "Relational database management and query optimization",
      icon: "🐬",
    },
    {
      name: "AWS",
      description: "Cloud infrastructure and serverless architecture",
      icon: "☁️",
    },
    {
      name: "DevOps",
      description: "CI/CD pipelines and containerization with Docker",
      icon: "🚀",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 gradient-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:glow-effect group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-5xl mb-4 group-hover:animate-float">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
