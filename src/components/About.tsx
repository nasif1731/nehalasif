import { GraduationCap, Download, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>

          <div className="space-y-8">
            {/* Bio */}
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  I'm a Software Engineering student at FAST-NUCES with a deep passion for Machine Learning and Generative AI. 
                  My work focuses on building robust ML pipelines, developing AI safety systems, and creating practical solutions 
                  that make complex AI technologies accessible and reliable.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm driven by curiosity and a systems-thinking mindset, always looking to bridge the gap between cutting-edge 
                  research and real-world applications. Whether it's detecting deepfake audio, automating audiobook production, 
                  or classifying research papers with LLMs, I love tackling challenging problems at the intersection of AI and impact.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-card hover:shadow-elegant transition-shadow bg-gradient-subtle">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">
                        Bachelors in Software Engineering
                      </p>
                      <p className="text-muted-foreground">
                        National University of Computer and Emerging Sciences (FAST-NUCES), Pakistan
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">2022 – Present</span>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-semibold">
                          CGPA: 3.90/4.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personality & Links */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">What Drives Me</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-foreground/80">Endlessly curious about AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-foreground/80">Detail-driven with strong debugging skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-foreground/80">Systems thinker who loves pipelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-foreground/80">Bridging research with practical applications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    <Button
                      onClick={() => window.open("https://drive.google.com/file/d/19cEPsiDLeVjCeduY7FwrVq9Z-1F1dr1I/view?usp=sharing", "_blank", "noopener")}
                      className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-all"
                    >
                      <Download className="mr-2" size={20} />
                      Download CV
                    </Button>
                    <Button
                      onClick={() => window.open("https://www.linkedin.com/in/nehal-asif-42917624a/", "_blank", "noopener")}
                      variant="outline"
                      className="w-full justify-start border-primary text-primary hover:bg-primary/10"
                    >
                      <Linkedin className="mr-2" size={20} />
                      LinkedIn
                    </Button>
                    <Button
                      onClick={() => window.open("https://github.com/nasif1731", "_blank", "noopener")}
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Github className="mr-2" size={20} />
                      GitHub
                    </Button>
                    <Button
                      onClick={() => window.location.href = "mailto:nasif1731@gmail.com"}
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Mail className="mr-2" size={20} />
                      Email Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
