import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Associate AI & Automations Engineer",
    company: "9D Technologies — Lahore, Pakistan",
    period: "July 2026 – Present",
    description:
      "Architected autonomous agentic procurement workflows that dynamically provision server infrastructure, deploying production LLMs across serverless GPUs and vLLM, with node-level telemetry for real-time VPN fleet monitoring and alerting.",
    current: true,
  },
  {
    title: "Research Assistant",
    company: "FAST-NUCES",
    period: "Aug 2024 – Present",
    description:
      "Research in data mining, audio data processing, and NLP over large-scale text corpora; exploring LLM-based information extraction.",
    current: true,
  },
  {
    title: "Data Scraper Intern",
    company: "Programmers Force — Lahore, Pakistan",
    period: "May 2025 – Oct 2025",
    description:
      "Engineered automated data pipelines to collect, validate, and preprocess structured datasets for downstream ML model training.",
    current: false,
  },
  {
    title: "Teaching Assistant",
    company: "FAST-NUCES",
    period: "Jan 2024 – June 2026",
    description:
      "Mentored 350+ students in Data Science for SE (ML pipelines, feature engineering) and Software Design (Microservices, SOLID).",
    current: false,
  },
  {
    title: "President, Software Engineering Society (SES)",
    company: "FAST-NUCES",
    period: "Sep 2025 – June 2026",
    description:
      "Led a 50+ member technical society — operations, industrial tours (Devsinc), platform engineering and Git/GitHub workshops, hackathons, and academia–industry networking events.",
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
                        <div className="flex items-center gap-2 mb-3">
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                          {exp.current && (
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                              Current
                            </span>
                          )}
                        </div>
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
