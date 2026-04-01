import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import Jobly from "../assets/jobly.png";
import Sunny from "../assets/sunny.png";
import CodePal from "../assets/codepal.png";
import Resumo from "../assets/resumo.png";
import Logo from "../assets/sample 1.jpg";
import Logo2 from "../assets/sample 2.jpg";
import Logo3 from "../assets/sample 3.jpg";
import Logo4 from "../assets/sample 4.jpg";
import Logo5 from "../assets/sample 5.jpg";
import Logo6 from "../assets/sample 6.jpg";
import Logo7 from "../assets/sample 7.jpg";
import Logo8 from "../assets/sample 8.jpg";

// Split the data into two arrays for easier mapping
const webProjects = [
  {
    title: "Jobly - Job landing webpage",
    description: "A modern, streamlined job board platform designed to connect top talent with tech companies.",
    image: Jobly,
    tags: ["React", "Express.js", "NodeJS", "MongoDB"],
    link: "#", github: "#",
  },
  {
    title: "Thousand sunny - Hotel Landing webpage",
    description: "A luxury hospitality landing page with seamless booking flows and elegant visual storytelling.",
    image: Sunny,
    tags: ["React", "CSS3", "NodeJS"],
    link: "#", github: "#",
  },
  {
    title: "CodePal - Coding assistant Landing webpage",
    description: "A sleek landing page for an AI-driven coding companion with real-time debugging features.",
    image: CodePal,
    tags: ["React", "Tailwind CSS"],
    link: "#", github: "#",
  },
  {
    title: "Resumo - Resume Making webpage",
    description: "An ATS-friendly resume builder with customizable templates and live previews.",
    image: Resumo,
    tags: ["React", "Express.js", "NodeJS", "MongoDB"],
    link: "#", github: "#",
  },
];

const designSamples = [
  { title: "Brand Identity - Sample 1", image: Logo, tags: ["Illustrator", "Branding"] },
  { title: "Visual Identity - Sample 2", image: Logo2, tags: ["Illustrator", "Design"] },
  { title: "Minimalist Logo - Sample 3", image: Logo3, tags: ["Illustrator", "Logo"] },
  { title: "Business Branding - Sample 4", image: Logo4, tags: ["Illustrator", "Branding"] },
  { title: "Creative Agency - Sample 5", image: Logo5, tags: ["Illustrator", "Vector"] },
  { title: "Tech Branding - Sample 6", image: Logo6, tags: ["Illustrator", "Vector"] },
  { title: "Mamba Hockey Poster", image: Logo7, tags: ["Poster Art", "Sports"] },
  { title: "Mamba Hockey Promo", image: Logo8, tags: ["Marketing", "Social"] },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mx-auto max-w-3xl mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that <span className="font-serif italic font-normal text-white">make an impact.</span>
          </h2>
        </div>

        {/* 1. WEB DEVELOPMENT SECTION (2 per row) */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold mb-10 border-l-4 border-primary pl-4">Web Development</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {webProjects.map((project, idx) => (
              <div key={idx} className="group glass rounded-2xl overflow-hidden flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-black/20">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"><ArrowUpRight className="w-5 h-5" /></a>
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-surface text-[10px] border border-border/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. GRAPHIC DESIGN SECTION (4 per row on desktop) */}
        <div>
          <h3 className="text-2xl font-semibold mb-10 border-l-4 border-highlight pl-4 text-highlight">Graphic Design</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {designSamples.map((sample, idx) => (
              <div key={idx} className="group glass rounded-xl overflow-hidden flex flex-col">
                <div className="relative aspect-square flex items-center justify-center bg-black/20 p-6"> {/* 👈 Centering Fix */}
                  <img 
                    src={sample.image} 
                    alt={sample.title} 
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-4 border-t border-border/10">
                  <h4 className="text-sm font-medium truncate">{sample.title}</h4>
                  <div className="flex gap-2 mt-2">
                    {sample.tags.slice(0, 1).map((tag, i) => (
                      <span key={i} className="text-[9px] text-muted-foreground uppercase tracking-tighter italic">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <AnimatedBorderButton>
            View Full Portfolio <ArrowUpRight className="w-5 h-5 ml-2" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};