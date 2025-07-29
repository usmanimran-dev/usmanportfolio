import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Microsoft",
      role: "Software Development Engineer II",
      period: "2024 - Present",
      location: "Remote",
      description: "Improved login performance by 40% through advanced optimization techniques and architecture improvements.",
      achievements: [
        "Optimized authentication systems reducing load time by 40%",
        "Led cross-functional teams on critical infrastructure projects",
        "Implemented scalable solutions serving millions of users"
      ],
      skills: ["TypeScript", "Azure", "Node.js", "React"],
      logo: "🧠",
      current: true
    },
    {
      id: 2,
      company: "WeCredit",
      role: "Bubble.io Developer",
      period: "2023 - 2024",
      location: "Contract",
      description: "Built comprehensive finance application with advanced OTP authentication and seamless API integrations.",
      achievements: [
        "Developed complete finance app from concept to deployment",
        "Integrated secure OTP authentication system",
        "Connected multiple financial APIs for real-time data"
      ],
      skills: ["Bubble.io", "APIs", "Authentication", "Finance"],
      logo: "🚀",
      current: false
    },
    {
      id: 3,
      company: "Libass by Raheela",
      role: "Shopify Expert",
      period: "2023",
      location: "Freelance",
      description: "Rapid Shopify store development and customization completed in record time of 4 days.",
      achievements: [
        "Delivered complete e-commerce store in 4 days",
        "Custom theme development and optimization",
        "Performance optimization and SEO implementation"
      ],
      skills: ["Shopify", "Liquid", "JavaScript", "E-commerce"],
      logo: "💼",
      current: false
    }
  ];

  const certifications = [
    { name: "Google Cloud Professional", icon: "☁️", year: "2024" },
    { name: "Azure Certified Developer", icon: "🔷", year: "2024" },
    { name: "Microsoft Hackathon Winner", icon: "🏆", year: "2023" },
    { name: "PyCon Hong Kong Speaker", icon: "🎤", year: "2023" }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🚀 <span className="text-gradient-hero">Companies I've Worked With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful solutions across diverse industries, from enterprise software 
            to innovative startups and e-commerce platforms.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative mb-12 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-gradient-to-b from-primary to-primary/30"></div>
              )}

              <div className="experience-card p-8 ml-20 relative">
                {/* Company Logo/Icon */}
                <div className="absolute -left-12 top-8 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl shadow-glow">
                  {exp.logo}
                </div>

                {/* Current Badge */}
                {exp.current && (
                  <div className="absolute -top-3 right-6">
                    <Badge className="bg-accent text-accent-foreground">
                      ✨ Current
                    </Badge>
                  </div>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    <h4 className="text-xl text-primary font-semibold mb-4">{exp.role}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <TrendingUp className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details Sidebar */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            🏆 <span className="text-gradient-primary">Awards & Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="award-badge p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <p className="text-sm opacity-90">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;