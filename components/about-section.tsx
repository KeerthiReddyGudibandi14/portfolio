"use client"

import { MapPin, GraduationCap, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 sm:px-8 md:px-12 py-8">
      <h2 className="text-2xl font-semibold text-foreground mb-6">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I’m a Machine Learning Engineer who enjoys the full process of building an AI system, from preparing data and training models to understanding their errors and putting them to work. At the University of Florida, I develop veterinary X-ray classification and abnormality detection models, with particular attention to patient-disjoint evaluation and reproducible experiments. I also build retrieval and LLM agent workflows that bring imaging predictions together with relevant references, so findings can be reviewed in context.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            My experience extends across computer vision, NLP, and open-source LLMs. I’ve built Python and PyTorch training pipelines, developed FastAPI services for support workflows, and worked with RAG systems that retrieve evidence for generated answers. When evaluating LLMs, I look at more than response quality: I benchmark latency, throughput, and GPU memory use, and test approaches such as quantization to understand the trade-offs involved in serving a model.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Research has shaped how I approach engineering. My published work on neurological disease progression and maritime vessel detection required careful model comparison, error analysis, and clear reporting of results. I bring that same discipline to application development. I want to know where a system succeeds, where it fails, and what it takes to make its output dependable for the people using it.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Location</h3>
            </div>
            <p className="text-muted-foreground text-lg">United States</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Education</h3>
            </div>

            <div className="space-y-2">
              <div>
                <p className="text-muted-foreground text-lg font-medium">M.S. Computer Science</p>
                <p className="text-muted-foreground text-sm">University of Florida</p>
                <p className="text-muted-foreground text-sm">Aug 2025 - May 2027</p>
              </div>

              <div>
                <p className="text-muted-foreground text-lg font-medium">
                  B.Tech Computer Science with AI & ML
                </p>
                <p className="text-muted-foreground text-sm">VIT University</p>
                <p className="text-muted-foreground text-sm">Aug 2021 - May 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Focus</h3>
            </div>
            <p className="text-muted-foreground text-lg">MODEL TRAINING, COMPUTER VISION, NLP, GENERATIVE AI, RAG, LLM INFERENCE, AI AGENTS</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}