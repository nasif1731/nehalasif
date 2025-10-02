import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Nehal Asif
              </h1>
              <div className="flex flex-wrap gap-2 text-lg text-muted-foreground font-medium">
                <span className="text-primary">Machine Learning</span>
                <span>•</span>
                <span className="text-accent">Generative AI</span>
                <span>•</span>
                <span className="text-primary">Data Science</span>
              </div>
            </div>
            
            <p className="text-xl text-foreground/80 leading-relaxed">
              Building intelligent systems that bridge research and real-world applications. 
              Specializing in ML pipelines, NLP, and AI safety.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all"
              >
                View Projects
              </Button>
              <Button
                onClick={() => window.open("https://drive.google.com/file/d/1VTPZFzM0Hefmr91YsrVk9Vzp0w8wXhv4/view?usp=sharing", "_blank", "noopener")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Download CV
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="ghost"
                className="hover:bg-muted"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img
                src={profileImage}
                alt="Nehal Asif"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-elegant border-4 border-card"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="text-primary" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
