"use client"

import { MapPin, GraduationCap, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 sm:px-8 md:px-12 py-8">
      <h2 className="text-2xl font-semibold text-foreground mb-6">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I'm a software engineer with experience building full-stack applications, backend APIs, AI/ML systems, and GenAI-powered tools. My work combines software engineering with applied machine learning, including projects in visual search, RAG-based document question answering, distributed backend systems, and full-stack platform development.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I enjoy building practical software systems that combine strong engineering foundations with intelligent, data-driven features. I have hands-on experience with Python, Java, FastAPI, React, REST APIs, PyTorch, TensorFlow, Scikit-learn, databases, and backend workflows. My projects reflect my interest in creating reliable, scalable, and user-focused software across full-stack development, AI/ML, GenAI, visual search, and distributed systems.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            I have also contributed to AI/ML research with publications in areas such as healthcare AI, neurological disease progression, clinical data analysis, maritime vessel detection, and computer vision. These experiences have helped me strengthen both my research mindset and my ability to translate models into working software systems. I’m currently a Computer Science graduate student at the University of Florida.
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
            <p className="text-muted-foreground text-lg">SOFTWARE ENGINEERING, AI/ML, GENAI, LLMs, COMPUTER VISION, BACKEND SYSTEMS, SCALABLE APIs</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}