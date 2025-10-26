import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Node.js and AWS",
      excerpt: "Learn how to architect and deploy microservices that can handle millions of requests with minimal latency using AWS Lambda and API Gateway.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["Node.js", "AWS", "Microservices"],
    },
    {
      title: "React Performance Optimization: Advanced Techniques",
      excerpt: "Discover advanced patterns and techniques to optimize React applications, including code splitting, memoization, and virtual list rendering.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
      date: "March 8, 2024",
      readTime: "10 min read",
      tags: ["React", "Performance", "JavaScript"],
    },
    {
      title: "MongoDB Aggregation Pipeline: A Complete Guide",
      excerpt: "Master MongoDB's powerful aggregation framework to transform and analyze your data with complex queries and operations.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop",
      date: "February 28, 2024",
      readTime: "12 min read",
      tags: ["MongoDB", "Database", "Backend"],
    },
    {
      title: "Angular 17: What's New and Why It Matters",
      excerpt: "Explore the latest features in Angular 17, including improved performance, new APIs, and better developer experience.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
      date: "February 20, 2024",
      readTime: "6 min read",
      tags: ["Angular", "Frontend", "TypeScript"],
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Tech <span className="text-gradient">Insights</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Thoughts and tutorials on web development, best practices, and emerging technologies
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden gradient-card border-border animate-fade-in-up group hover:shadow-xl transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="group/btn p-0 h-auto">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="glow-effect">
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
