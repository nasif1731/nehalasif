import { Brain, Code2, Database, Cloud, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI/ML Frameworks",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "HuggingFace", "NumPy", "Pandas"],
  },
  {
    title: "GenAI & Audio",
    icon: Brain,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["LLM Pipelines", "TTS (Coqui)", "Deepgram", "OpenVoice", "Whisper", "DeepSeek"],
  },
  {
    title: "Programming",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["Python", "C++", "Java", "Haskell", "TypeScript"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub Actions"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["N8N", "Selenium", "Streamlit", "Flask", "Jupyter"],
  },
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

          {/* Data Science Specialties */}
          <Card className="mt-8 shadow-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                Data Science Specialties
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Regression Analysis", "EDA", "Data Visualization", "Model Building", "Feature Engineering", "Statistical Modeling"].map((specialty, i) => (
                  <Badge key={i} className="bg-gradient-primary text-primary-foreground">
                    {specialty}
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
