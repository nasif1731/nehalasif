import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Category = "All" | "GenAI" | "ML" | "Data";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
  category: Exclude<Category, "All">;
}

const projects: Project[] = [
  {
    title: "Detectify",
    subtitle: "Deepfake Audio & Bug Classification",
    description:
      "AI safety tool with 98%+ accuracy on Urdu deepfake detection; automated multi-label bug classification.",
    tech: ["Scikit-learn", "TensorFlow", "Keras", "Librosa", "Streamlit"],
    link: "https://github.com/nasif1731/Detectify",
    featured: true,
    category: "ML",
  },
  {
    title: "Audiobook Automation",
    subtitle: "GenAI Pipelines",
    description:
      "Deepgram (ASR) + Coqui TTS orchestrated via N8N; outperformed OpenVoice; ~70% manual effort reduction.",
    tech: ["Deepgram", "Coqui TTS", "N8N", "Python"],
    link: "https://github.com/nasif1731/AudioBookAutomation",
    featured: true,
    category: "GenAI",
  },
  {
    title: "Research Paper Annotation",
    subtitle: "LLM Classification",
    description:
      "Classifies NeurIPS papers into 6 categories; hybrid DeepSeek-R1 (Ollama) + Gemini API; MySQL storage; robust rate-limit handling.",
    tech: ["DeepSeek-R1", "Gemini API", "Ollama", "MySQL"],
    link: "https://github.com/nasif1731/Research-Paper-Annotation-with-LLMs",
    featured: true,
    category: "GenAI",
  },
  {
    title: "NeurIPS Scraper & Classifier",
    subtitle: "Automated Paper Classification",
    description: "Python pipeline scraping/classifying papers; ~80% manual annotation reduction.",
    tech: ["Python", "BeautifulSoup", "Pandas"],
    link: "https://github.com/nasif1731/NeurIPS-scrapper",
    category: "Data",
  },
  {
    title: "Disease Category Predictor",
    subtitle: "Healthcare ML",
    description:
      "Streamlit app (TF-IDF + KNN + SMOTE), ~85–90% accuracy on imbalanced healthcare datasets.",
    tech: ["Streamlit", "Scikit-learn", "SMOTE"],
    link: "https://github.com/nasif1731/disease-predictor",
    category: "ML",
  },
  {
    title: "COVID-19 Mobility Analysis",
    subtitle: "Stochastic Modeling",
    description:
      "Flask dashboard using Markov Chains, HMM, M/M/1 Queueing on Google Mobility Reports; interactive insights.",
    tech: ["Flask", "NumPy", "Pandas", "Plotly"],
    link: "https://github.com/nasif1731/Covid19_MobilityAnalysisUsingStochasticProcesses",
    category: "Data",
  },
  {
    title: "Neural Networks — MNIST",
    subtitle: "Deep Learning Fundamentals",
    description: "~98% accuracy with PyTorch (dropout, weight init, LR scheduling).",
    tech: ["PyTorch", "NumPy"],
    link: "https://github.com/nasif1731/Neural_Networks-Deep_Learning",
    category: "ML",
  },
];

const categories: Category[] = ["All", "GenAI", "ML", "Data"];

const Projects = () => {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-muted-foreground mb-4">
              <Sparkles size={12} className="text-accent" />
              Selected Work
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated set of ML, GenAI, and Data Science builds — from research pipelines to production tools.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                  filter === cat
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filtered.map((project, index) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden glass border-border/60 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-elegant animate-fade-in-up flex h-full min-h-[380px] flex-col"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {/* gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
                      Featured
                    </span>
                  </div>
                )}
                <CardHeader className="relative min-h-[138px] pr-20">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-primary/80 mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="font-display text-xl font-bold group-hover:text-gradient transition-all">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </CardHeader>
                <CardContent className="relative flex flex-1 flex-col gap-4">
                  <p className="min-h-[72px] text-foreground/75 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex min-h-[58px] flex-wrap content-start gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] font-mono bg-muted/60 hover:bg-primary/15 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-2">
                    <Button
                      onClick={() => window.open(project.link, "_blank", "noopener")}
                      variant="outline"
                      size="sm"
                      className="h-9 flex-1 justify-center gap-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary"
                    >
                      <Github size={14} />
                      View Code
                    </Button>
                    <Button
                      onClick={() => window.open(project.link, "_blank", "noopener")}
                      size="sm"
                      variant="ghost"
                      className="h-9 w-9 shrink-0 p-0 hover:bg-primary/10 hover:text-primary"
                      aria-label="Open project"
                    >
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
