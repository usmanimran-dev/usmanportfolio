import { Briefcase, Globe, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    company: "Mitek Systems",
    role: "Software Developer",
    location: "Remote",
    dates: "May 2022 – Jun 2023 · 1 yr 2 mos",
    summary: [
      "Developed UI for Project Harley v1.0 using ReactJS, Java EE, AWS Lambda, S3, EC2, CSS, Bootstrap.",
      "Implemented Java EE logic and REST APIs for backend functionality.",
      "Participated in Agile methodology with Sprint planning, JIRA tickets, and daily standups.",
      "Wrote unit tests with JEST and used Docker, OpenSearch, Terraform for AWS deployment.",
      "Collaborated with sales team and provided technical knowledge sharing."
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-sky-500" />,
    company: "Skilled Score",
    role: "Digital Marketing Intern",
    location: "Sindh, Pakistan · Remote",
    dates: "May 2025 – Present · 4 mos",
    summary: [
      "📈 Improved organic visibility by conducting keyword research, SEO audits, and on-page optimization using tools like Google Search Console and Ubersuggest.",
      "📱 Managed content calendars and created engaging posts for Instagram and LinkedIn using Canva and Buffer, enhancing brand presence.",
      "💰 Assisted in Meta Ads campaign setup, targeting, and performance monitoring, gaining practical experience in paid media.",
      "✍️ Wrote blog content and ad copy optimized for both SEO and user engagement, collaborating with content strategists.",
      "✉️ Executed email marketing flows using Mailchimp and set up WhatsApp automation for lead nurturing and user retention.",
      "Tools Used: Canva · Buffer · Mailchimp · Google Ads · Meta Ads Manager · Ubersuggest · Google Search Console"
    ]
  },
  {
    icon: <Code className="h-8 w-8 text-yellow-500" />,
    company: "Restaurant Marketer",
    role: "Software Developer",
    location: "Sindh, Pakistan · Remote",
    dates: "Jul 2024 – Jun 2025",
    summary: [
      "Participated in complete SDLC to deliver robust web applications using Java, ReactJS, and Spring Boot.",
      "Developed and maintained website functionalities including blog pages and JSON content management.",
      "Designed RESTful APIs using Spring Boot for efficient data operations with PostgreSQL databases.",
      "Built responsive front-end screens with Bootstrap, ReactJS, and Redux using Maven dependencies.",
      "Developed media asset management systems with automated metadata management using server-side JavaScript.",
      "Managed MySQL database functions for reliable data storage and optimized queries.",
      "Built CRUD applications using JSP and REST APIs for seamless client-server interaction.",
      "Deployed scalable applications using AWS Lambda and Amazon S3 for cloud-based solutions.",
      "Used Git, SVN, CVS for version control and collaborated with Postman, Jira for testing and project management.",
      "Skills: Java, ReactJS, Spring Boot, RESTful APIs, Maven, MySQL, JSP, JDBC, AWS Lambda, S3, Postman, Jira"
    ]
  },
  {
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    company: "Libaas by Raheela Mohsin",
    role: "Marketing Specialist",
    location: "Sindh, Pakistan · On-site",
    dates: "Apr 2023 – May 2024",
    summary: [
      "Handled social media, branding, and website improvements."
    ]
  },
  {
    icon: <Briefcase className="h-8 w-8 text-red-500" />,
    company: "Opal LLC",
    role: "Backend Developer Intern",
    location: "Remote",
    dates: "Feb 2023 – Feb 2024",
    summary: [
      "Built NFT Marketplace with Django and ReactJS on Ripple Blockchain Network.",
      "Developed CRUD operations in Django for user data using JWT token authentication.",
      "Created endpoints with Django REST API Library for robust backend services.",
      "Worked with AWS S3 for file storage using boto3 library and managed S3 buckets, policies, and IAM roles.",
      "Designed Django models and connected MongoDB to backend, including live model modifications.",
      "Tested APIs with Postman and used GIT, SVN, CVS for version control.",
      "Collaborated closely with designers to tightly integrate Flash into the Django CMS.",
      "Designed and developed new features and improvements in Advantage2.0.",
      "Participated in Sprint planning, JIRA ticketing, standups, and Agile methodology.",
      "Worked with MongoDB and Mongoose for database persistence using Node.js.",
      "Participated in complete SDLC and used ReactJS to develop website functionality."
    ]
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 flex items-center justify-center gap-2">
            <span role="img" aria-label="Work Experience">🧑‍💼</span>
            <span className="text-gradient-hero">Companies I have worked with</span>
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="flex flex-col md:flex-row md:items-start gap-6 bg-card rounded-xl shadow-card p-6 md:p-8 fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col items-center md:items-start md:w-1/4 min-w-[120px]">
                {exp.icon}
                <div className="font-bold text-lg mt-4 text-primary">{exp.company}</div>
                <div className="text-sm text-muted-foreground font-medium">{exp.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{exp.dates}</div>
                <div className="text-xs text-muted-foreground mt-1">{exp.location}</div>
              </div>
              <div className="flex-1 text-base text-foreground md:pl-8">
                <ul className="list-disc pl-5 space-y-1">
                  {exp.summary.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
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
            <a href="https://docs.google.com/document/d/1uTQTi5FA9vgfic3AYAPCF8Y_DRASv8x2wmrKoowYHqA/edit?tab=t.0#heading=h.tm9q5ng275su" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
