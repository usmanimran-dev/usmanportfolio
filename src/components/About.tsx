import { Button } from "@/components/ui/button";
import { Heart, Coffee, Code, Rocket } from "lucide-react";

const About = () => {
  const handleDownloadResume = () => {
    window.open('https://docs.google.com/document/d/1uTQTi5FA9vgfic3AYAPCF8Y_DRASv8x2wmrKoowYHqA/edit?tab=t.0#heading=h.tm9q5ng275su', '_blank', 'noopener noreferrer');
  };

  const handleSpeakingEngagements = () => {
    // Scroll to contact section for speaking inquiries
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const values = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that stands the test of time"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation",
      description: "Always exploring cutting-edge technologies and pushing boundaries"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "User-Centric",
      description: "Building solutions that truly solve real-world problems"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Collaboration",
      description: "Working closely with teams to achieve extraordinary results"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", emoji: "🚀" },
    { number: "5+", label: "Years Experience", emoji: "⏰" },
    { number: "15+", label: "Technologies", emoji: "⚡" },
    { number: "50+", label: "Happy Clients", emoji: "😊" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                👨‍💻 <span className="text-gradient-hero">Meet Usman</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a deep fascination for emerging technologies. 
                  My journey began with traditional web development, but I've evolved to specialize in 
                  <span className="text-primary font-semibold"> Web3, AI integration, and no-code solutions</span>.
                </p>
                <p>
                  What drives me is the ability to bridge the gap between complex technology and practical 
                  business solutions. Whether it's building a Solana-based DeFi platform or rapidly 
                  prototyping with Bubble.io, I focus on delivering value that makes a real impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest developments in blockchain 
                  technology, contributing to open-source projects, or speaking at tech conferences about 
                  the future of decentralized applications.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="hero-button"
                onClick={handleDownloadResume}
              >
                📄 Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="hero-secondary"
                onClick={handleSpeakingEngagements}
              >
                🎤 Speaking Engagements
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="space-y-8 fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="project-card p-6 text-center"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-2xl mb-2">{stat.emoji}</div>
                  <div className="text-2xl font-bold text-gradient-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Profile Image Placeholder */}
            <div className="experience-card p-8 text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
              <p className="text-muted-foreground">
                Continuously expanding my knowledge in emerging technologies
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            💎 <span className="text-gradient-primary">Core Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="experience-card p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto experience-card p-8">
            <h3 className="text-2xl font-bold mb-4">🎯 Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To democratize access to cutting-edge technology by building intuitive, 
              powerful solutions that bridge the gap between complex innovation and everyday usability. 
              I believe the future belongs to those who can make advanced technology accessible to everyone."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;