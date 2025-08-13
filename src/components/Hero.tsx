import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import aboutWorkspace from "@/assets/about-workspace.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aboutWorkspace}
          alt="Modern tech workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-hero">Full-Stack</span>
                <br />
                <span className="text-foreground">Builder</span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Web3, AI & No-Code Explorer ✨
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Delivering next-generation digital solutions through blockchain technology, AI integration, and rapid no-code development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hero-button group h-11 px-8 py-2 text-primary-foreground shadow hover:bg-primary/90"
                aria-label="View my work and projects"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
<a 
                href="https://docs.google.com/document/d/1tGpuHMM3lVV9sNY1pu2yhwY-XvUmbAtV6hdITgaO78I/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2"
                download
              >
                📄 Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/usmanimran-dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 hover:bg-card text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-osman-037aa0302/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/50 hover:bg-card text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Visual Element - Stats/Highlights */}
          <div className={`hidden lg:block ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="project-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">13+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="project-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="project-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="project-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;