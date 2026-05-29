"use client"

import { Brain, Database, Cpu, Code2, LineChart, Microscope } from "lucide-react"

const expertiseAreas = [
  {
    icon: Brain,
    title: "Generative AI & LLM Applications",
    description: "Build AI-powered applications using LLMs, prompt engineering, RAG pipelines, embeddings, and vector search to solve real-world software and data problems.",
    highlights: ["LLMs", "Generative AI", "RAG", "Embeddings"],
  },
  {
    icon: Microscope,
    title: "LLM Engineering & RAG Systems",
    description: "Design retrieval-augmented generation workflows with document processing, semantic search, prompt design, context handling, and response evaluation.",
    highlights: ["RAG Pipelines", "Vector Search", "Prompt Engineering", "LangChain"],
  },
  {
    icon: Cpu,
    title: "Software Engineering",
    description: "Develop reliable software applications using full-stack development, backend APIs, databases, clean architecture, testing, and production-focused engineering practices.",
    highlights: ["Python", "Java", "React", "REST APIs"],
  },
  {
    icon: Code2,
    title: "Backend & API Development",
    description: "Build scalable backend services, API integrations, authentication flows, database-driven applications, and microservice-style systems for AI and software products.",
    highlights: ["FastAPI", "Node.js", "SQL", "Microservices"],
  },
  {
    icon: Database,
    title: "Cloud & Distributed Systems",
    description: "Build and deploy cloud-based applications using containerized services, CI/CD workflows, distributed system concepts, and scalable infrastructure.",
    highlights: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: LineChart,
    title: "ML & Data Pipelines",
    description: "Design machine learning workflows for data preprocessing, feature engineering, model training, model evaluation, and experiment tracking.",
    highlights: ["Pandas", "NumPy", "Scikit-learn", "MLflow"],
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative px-4 sm:px-8 md:px-12 py-8">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Areas of Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expertiseAreas.map((area, index) => {
          const Icon = area.icon
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground pt-2">{area.title}</h3>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-4">{area.description}</p>

              <div className="flex flex-wrap gap-2">
                {area.highlights.map((highlight, hIndex) => (
                  <span key={hIndex} className="px-3 py-1 text-xm bg-secondary text-secondary-foreground rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
