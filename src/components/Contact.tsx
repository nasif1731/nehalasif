import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:nasif1731@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client",
      description: "Your default email client should open shortly",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2" size={18} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Links */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Mail className="text-primary" size={20} />
                      <a href="mailto:nasif1731@gmail.com" className="hover:text-primary transition-colors">
                        nasif1731@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-subtle">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Connect on Social</h3>
                  <div className="space-y-3">
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
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Open to internship and full-time opportunities in Machine Learning, AI, and Data Science. 
                    Remote-friendly and ready to contribute to innovative projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
