import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Scraper Intern",
    company: "Programmers Force",
    period: "May 2025 – Aug 2025",
    description: "Utilized a dedicated scraping tool to extract data; performed validation/cleaning for downstream analytics.",
    current: false,
  },
  {
    title: "Teaching Assistant — Discrete Structures",
    company: "FAST-NUCES",
    period: "Jan 2024 – Jun 2024",
    description: "Assignment design; guidance in logic, proofs, discrete math.",
    current: false,
  },
  {
    title: "Teaching Assistant — Programming Fundamentals",
    company: "FAST-NUCES",
    period: "Aug 2023 – Jan 2024",
    description: "Conducted C++ labs, debug sessions; mentored algorithms/problem solving.",
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                    <Card className="shadow-card hover:shadow-elegant transition-all hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="text-primary" size={20} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                        <p className="text-foreground/80">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
