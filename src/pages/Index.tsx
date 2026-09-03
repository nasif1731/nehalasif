import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const SITE_URL = "https://nehalasif.lovable.app";

const featuredProjects = [
  {
    name: "MicCheck AI",
    description:
      "Audio safety platform for deepfake and voice-spoofing detection, built as a final year project.",
    url: "https://github.com/nasif1731/MicCheck",
  },
  {
    name: "NexusOps",
    description:
      "Autonomous ML orchestrator using multi-agent LangGraph workflows for pipeline automation.",
    url: "https://github.com/nasif1731/NexusOps",
  },
  {
    name: "Med-RAG",
    description: "Retrieval-augmented medical question answering over vector databases.",
    url: "https://github.com/nasif1731/Med-RAG",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nehal Asif",
    url: SITE_URL,
    jobTitle: "AI & Automations Engineer",
    email: "mailto:nasif1731@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    },
    knowsAbout: [
      "Machine Learning",
      "Generative AI",
      "Agentic Systems",
      "LangGraph",
      "PyTorch",
      "MLOps",
      "Retrieval-Augmented Generation",
    ],
    sameAs: [
      "https://github.com/nasif1731",
      "https://www.linkedin.com/in/nehal-asif-42917624a/",
    ],
  },
  ...featuredProjects.map((p) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    description: p.description,
    url: p.url,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    author: { "@type": "Person", name: "Nehal Asif", url: SITE_URL },
  })),
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Nehal Asif — AI &amp; Automations Engineer"
        description="AI & Automations Engineer building agentic systems, fine-tuned LLMs, RAG pipelines, and production MLOps with LangGraph, PyTorch, FastAPI, and Kubernetes."
        path="/"
        jsonLd={jsonLd}
      />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
