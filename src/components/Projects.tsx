import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskManager from "@/assets/project-taskmanager.jpg";
import projectCMS from "@/assets/project-cms.jpg";
import projectChat from "@/assets/project-chat.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A scalable e-commerce platform with secure checkout, product management, and user authentication. Features include real-time inventory tracking, payment gateway integration, and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3"],
      image: projectEcommerce,
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app with drag-and-drop task boards, real-time updates, and RESTful APIs. Includes team collaboration features, deadline tracking, and customizable workflows.",
      tech: ["Angular", "Node.js", "MySQL"],
      image: projectTaskManager,
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Custom-built CMS for managing personal portfolios and blogs with an admin dashboard. Features rich text editor, media management, and SEO optimization tools.",
      tech: ["Java (Spring Boot)", "React", "MySQL"],
      image: projectCMS,
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Serverless Chat App",
      description:
        "Real-time chat application using AWS serverless stack with WebSocket integration. Supports group chats, file sharing, and end-to-end encryption.",
      tech: ["React", "AWS Lambda", "DynamoDB"],
      image: projectChat,
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden gradient-card border-border hover:border-primary transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
