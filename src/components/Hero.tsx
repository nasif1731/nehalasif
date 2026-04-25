import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const CV_URL = "https://drive.google.com/file/d/1fJwhrA_1QsqkWbVohN_4LLG5Su-tJnZm/view?usp=sharing";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Grid + mesh background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 mesh-bg" aria-hidden="true" />
      <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-[120px] animate-float" aria-hidden="true" />
      <div
        className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] bg-accent/15 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-7 animate-fade-in-up text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for opportunities
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="block text-foreground">Nehal</span>
                <span className="block text-gradient">Asif.</span>
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-1 text-base md:text-lg font-mono text-muted-foreground">
                <span className="text-primary">ML / AI</span>
                <span className="opacity-40">/</span>
                <span className="text-accent">GenAI</span>
                <span className="opacity-40">/</span>
                <span className="text-primary">Data Science</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-xl mx-auto md:mx-0">
              Building intelligent systems that bridge research and real-world
              impact — ML pipelines, NLP/LLMs, and AI safety.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all group"
              >
                <Sparkles className="group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
              <Button
                onClick={() => window.open(CV_URL, "_blank", "noopener")}
                size="lg"
                variant="outline"
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary"
              >
                <Download />
                Download CV
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="ghost"
                className="hover:bg-muted"
              >
                <Mail />
                Contact
              </Button>
            </div>



          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-glow" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-primary rounded-full opacity-60 blur-sm" />
              <div className="relative rounded-full p-[3px] bg-gradient-to-br from-primary to-accent">
                <img
                  src={profileImage}
                  alt="Nehal Asif — ML Engineer & AI Specialist"
                  loading="eager"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-elegant border-4 border-background"
                />
              </div>
              {/* Floating tag */}
              <div className="hidden md:block absolute -bottom-3 -left-3 glass px-4 py-2 rounded-full text-xs font-mono shadow-card">
                <span className="text-accent">●</span> Currently shipping AI tools
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
