import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";
import projectShowcase from "@/assets/project-showcase.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", count: 12 },
    { id: "web3", label: "Web3", count: 4 },
    { id: "ai", label: "AI/ML", count: 3 },
    { id: "fullstack", label: "Full-Stack", count: 5 },
    { id: "nocode", label: "No-Code", count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: "DeFi Trading Platform",
      description: "Solana-based decentralized trading platform with advanced analytics and automated trading features.",
      image: projectShowcase,
      category: "web3",
      tags: ["Solana", "Rust", "Anchor", "React", "TypeScript"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "AI-powered content creation tool with natural language processing and automated workflows.",
      image: projectShowcase,
      category: "ai",
      tags: ["Python", "OpenAI", "Next.js", "Supabase"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "WeCredit Finance App",
      description: "Complete finance application built with Bubble.io featuring OTP authentication and API integrations.",
      image: projectShowcase,
      category: "nocode",
      tags: ["Bubble.io", "APIs", "Authentication", "Finance"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Analytics Dashboard",
      description: "Real-time analytics dashboard for e-commerce platforms with advanced reporting and insights.",
      image: projectShowcase,
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Shopify Store Builder",
      description: "Custom Shopify store development for Libass by Raheela completed in just 4 days.",
      image: projectShowcase,
      category: "fullstack",
      tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "Automation Workflow Engine",
      description: "n8n-based automation platform connecting multiple services and APIs for business process optimization.",
      image: projectShowcase,
      category: "nocode",
      tags: ["n8n", "APIs", "Automation", "Webhooks"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🚀 <span className="text-gradient-hero">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions across Web3, AI, and full-stack applications. 
            Each project demonstrates cutting-edge technology implementation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card hover:bg-card-hover text-card-foreground"
              }`}
            >
              <Filter className="h-4 w-4" />
              {filter.label}
              <Badge variant="secondary" className="ml-2">
                {filter.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 hero-button">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button className="hero-button" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;