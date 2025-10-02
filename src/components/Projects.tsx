import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Detectify",
    subtitle: "Deepfake Audio & Bug Classification",
    description: "AI safety tool with 98%+ accuracy on Urdu deepfake detection; automated multi-label bug classification.",
    tech: ["Scikit-learn", "TensorFlow", "Keras", "Librosa", "Streamlit"],
    link: "https://github.com/nasif1731/Detectify",
    featured: true,
  },
  {
    title: "Audiobook Automation",
    subtitle: "GenAI Pipelines",
    description: "Deepgram (ASR) + Coqui TTS orchestrated via N8N; outperformed OpenVoice; ~70% manual effort reduction.",
    tech: ["Deepgram", "Coqui TTS", "N8N", "Python"],
    link: "https://github.com/nasif1731/AudioBookAutomation",
    featured: true,
  },
  {
    title: "Research Paper Annotation",
    subtitle: "LLM Classification",
    description: "Classifies NeurIPS papers into 6 categories; hybrid DeepSeek-R1 (Ollama) + Gemini API; MySQL storage; robust rate-limit handling.",
    tech: ["DeepSeek-R1", "Gemini API", "Ollama", "MySQL"],
    link: "https://github.com/nasif1731/Research-Paper-Annotation-with-LLMs",
    featured: true,
  },
  {
    title: "NeurIPS Scraper & Classifier",
    subtitle: "Automated Paper Classification",
    description: "Python pipeline scraping/classifying papers; ~80% manual annotation reduction.",
    tech: ["Python", "BeautifulSoup", "Pandas"],
    link: "https://github.com/nasif1731/NeurIPS-scrapper",
    featured: false,
  },
  {
    title: "Disease Category Predictor",
    subtitle: "Healthcare ML",
    description: "Streamlit app (TF-IDF + KNN + SMOTE), ~85–90% accuracy on imbalanced healthcare datasets.",
    tech: ["Streamlit", "Scikit-learn", "SMOTE"],
    link: "https://github.com/nasif1731/disease-predictor",
    featured: false,
  },
  {
    title: "COVID-19 Mobility Analysis",
    subtitle: "Stochastic Modeling",
    description: "Flask dashboard using Markov Chains, HMM, M/M/1 Queueing on Google Mobility Reports; interactive country-wise insights.",
    tech: ["Flask", "NumPy", "Pandas", "Plotly"],
    link: "https://github.com/nasif1731/Covid19_MobilityAnalysisUsingStochasticProcesses",
    featured: false,
  },
  {
    title: "Neural Networks — MNIST",
    subtitle: "Deep Learning Fundamentals",
    description: "~98% accuracy with PyTorch (dropout, weight init, LR scheduling).",
    tech: ["PyTorch", "NumPy"],
    link: "https://github.com/nasif1731/Neural_Networks-Deep_Learning",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`shadow-card hover:shadow-elegant transition-all hover:scale-105 animate-fade-in-up ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      onClick={() => window.open(project.link, "_blank", "noopener")}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary/10"
                    >
                      <Github className="mr-2" size={16} />
                      View Code
                    </Button>
                    <Button
                      onClick={() => window.open(project.link, "_blank", "noopener")}
                      size="sm"
                      variant="ghost"
                      className="hover:bg-muted"
                    >
                      <ExternalLink size={16} />
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
