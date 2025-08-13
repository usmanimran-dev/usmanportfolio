import { Briefcase, Globe, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    icon: <Code className="h-6 w-6 text-blue-500" />,
    company: "Mitek Systems",
    role: "Software Developer",
    dates: "May 2022 – Jun 2023",
    summary: [
      "Developed UI for Project Harley v1.0 using ReactJS, Java EE, AWS Lambda, S3, EC2, CSS, and Bootstrap.",
      "Implemented Java EE logic and REST APIs for backend functionality.",
      "Participated in Agile methodology with Sprint planning, JIRA tickets, and daily standups.",
      "Wrote unit tests with JEST and used Docker, OpenSearch, Terraform for AWS deployment."
    ]
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-sky-500" />,
    company: "Skilled Score",
    role: "Digital Marketing Intern",
    dates: "May 2025 – Present",
    summary: [
      "Improved organic visibility through keyword research, SEO audits, and on-page optimization.",
      "Managed content calendars and created engaging posts for Instagram and LinkedIn.",
      "Assisted in Meta Ads campaign setup, targeting, and performance monitoring.",
      "Executed email marketing flows and set up WhatsApp automation for lead nurturing."
    ]
  },
  {
    icon: <Code className="h-6 w-6 text-yellow-500" />,
    company: "Restaurant Marketer",
    role: "Software Developer",
    dates: "Jul 2024 – Jun 2025",
    summary: [
      "Participated in complete SDLC to deliver robust web applications using Java, ReactJS, and Spring Boot.",
      "Developed and maintained website functionalities including blog pages and JSON content management.",
      "Designed RESTful APIs using Spring Boot for efficient data operations with PostgreSQL.",
      "Built responsive front-end screens with Bootstrap, ReactJS, and Redux."
    ]
  },
  {
    icon: <Globe className="h-6 w-6 text-purple-500" />,
    company: "Libaas by Raheela Mohsin",
    role: "Marketing Specialist",
    dates: "Apr 2023 – May 2024",
    summary: [
      "Managed social media presence and engagement across multiple platforms.",
      "Developed and executed digital marketing strategies to increase brand awareness.",
      "Created compelling content for various marketing channels.",
      "Analyzed marketing metrics and adjusted strategies for better performance."
    ]
  },
  {
    icon: <Briefcase className="h-6 w-6 text-red-500" />,
    company: "Opal LLC",
    role: "Backend Developer Intern",
    dates: "Feb 2023 – Feb 2024",
    summary: [
      "Built NFT Marketplace with Django and ReactJS on Ripple Blockchain Network.",
      "Developed CRUD operations in Django for user data using JWT token authentication.",
      "Created endpoints with Django REST API Library for robust backend services.",
      "Worked with AWS S3 for file storage and managed S3 buckets and IAM roles."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a summary of my professional journey and the impactful work I've done.
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div 
              key={exp.company}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/20">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.dates}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.role}</p>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.summary.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            className="hero-button"
            size="lg"
            asChild
          >
            <a href="https://docs.google.com/document/d/1tGpuHMM3lVV9sNY1pu2yhwY-XvUmbAtV6hdITgaO78I/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
