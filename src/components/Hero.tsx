import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import aboutWorkspace from "@/assets/about-workspace.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
                Crafting cutting-edge digital experiences with modern technologies. 
                Specializing in blockchain solutions, AI integration, and rapid prototyping 
                with no-code platforms.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="hero-button group" size="lg">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="hero-secondary" size="lg">
                📅 Schedule Call
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="p-3 rounded-lg bg-card/50 hover:bg-card text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-lg bg-card/50 hover:bg-card text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-lg bg-card/50 hover:bg-card text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Visual Element - Stats/Highlights */}
          <div className={`hidden lg:block ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="project-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="project-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-primary mb-2">15+</div>
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