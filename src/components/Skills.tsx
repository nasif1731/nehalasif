import { Brain, Code2, Database, Cloud, Wrench, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["Python", "Java", "C/C++", "JavaScript", "SQL"],
  },
  {
    title: "ML / AI",
    icon: Brain,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["PyTorch", "TensorFlow", "LangChain", "LangGraph", "CrewAI", "HuggingFace", "Transformers", "LoRA", "RAG"],
  },
  {
    title: "LLMs",
    icon: Bot,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["Llama 3", "Mistral-7B", "GPT-2", "Prompt Engineering", "Fine-tuning", "Quantization (GGUF/4-bit)", "Vector Embeddings"],
  },
  {
    title: "MLOps",
    icon: Cloud,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["FastAPI", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Terraform", "Model Serving"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["MongoDB", "PostgreSQL", "ChromaDB", "Zilliz", "Vector DBs"],
  },
  {
    title: "NLP & Testing",
    icon: Wrench,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["ViT", "SentencePiece", "BPE Tokenization", "NER", "PyTest", "Appium", "Playwright"],
  },
];

const certifications = [
  "AI Agents Fundamentals — Hugging Face",
  "Building RAG Apps — MongoDB",
  "Programming with JavaScript — Meta",
  "Git 101 — GitHub",
  "Cohere Labs ML Summer School 2025",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${category.bgColor} rounded-lg`}>
                      <category.icon className={category.color} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="mt-8 shadow-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                Certifications
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {certifications.map((cert, i) => (
                  <Badge key={i} className="bg-gradient-primary text-primary-foreground">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
