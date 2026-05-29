"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const skillCategories = [
  {
    title: "Programming & Development",
    skills: ["Python", "Java", "C++", "C", "SQL", "JavaScript", "TypeScript", "Git", "Linux", "Debugging"],
  },
  {
    title: "AI/ML & Deep Learning",
    skills: ["Machine Learning", "Deep Learning", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Model Evaluation", "Feature Engineering"],
  },
  {
    title: "Computer Vision",
    skills: ["YOLO", "Object Detection", "OpenCV", "Satellite Imagery", "MASATI-V2", "Remote Sensing", "mAP", "Image Processing"],
  },
  {
    title: "NLP, LLMs & RAG",
    skills: ["NLP", "LLMs", "RAG", "Embeddings", "Vector Search", "Prompt Engineering", "LangChain", "Hugging Face"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "Microservices", "Authentication", "API Integration"],
  },
  {
    title: "Data & Databases",
    skills: ["Pandas", "NumPy", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "FAISS", "Chroma", "Data Validation"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Vercel", "Monitoring", "Deployment"],
  },
  {
    title: "Research & Evaluation",
    skills: ["Accuracy", "Precision", "Recall", "F1-score", "Experiment Design", "Comparative Analysis", "Healthcare AI", "Publication Writing"],
  },
]

export function TechnicalSkills() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="skills" className="relative px-4 sm:px-8 md:px-12 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Technical Skills</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => scroll("left")} className="h-9 w-9 rounded-full border border-border hover:bg-secondary">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => scroll("right")} className="h-9 w-9 rounded-full border border-border hover:bg-secondary">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {skillCategories.map((category, index) => (
          <div key={index} className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="px-3 py-1 text-xm bg-secondary text-secondary-foreground rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
