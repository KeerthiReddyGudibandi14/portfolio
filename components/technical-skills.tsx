"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const skillCategories = [
  {
    title: "Languages & Data",
    skills: ["Python", "Rust", "SQL", "Pandas", "NumPy", "Data Preprocessing", "ETL"],
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "scikit-learn", "XGBoost", "model training", "fine-tuning", "cross-validation", "hyperparameter optimization"],
  },
  {
    title: "Computer Vision",
    skills: ["ResNet", "YOLO26", "YOLOv10", "OpenCV", "pydicom", "CLAHE", "object detection"],
  },
  {
    title: "LLMs & Agents",
    skills: ["Hugging Face Transformers", "BERT", "Mistral 7B", "Llama 3.1 8B", "agentic workflows", "tool calling", "AI evaluation"],
  },
  {
    title: "RAG & Retrieval",
    skills: ["RAG", "embeddings", "semantic search", "FAISS", "ChromaDB", "context filtering", "retrieval evaluation"],
  },
  {
    title: "Inference & Optimization",
    skills: ["vLLM", "open-source LLM serving", "4-bit quantization", "batching", "latency and throughput benchmarking", "GPU memory analysis"],
  },
  {
    title: "Deployment & MLOps",
    skills: ["FastAPI", "REST APIs", "Docker", "Celery", "Redis", "MLflow", "ClearML", "CI/CD"],
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
