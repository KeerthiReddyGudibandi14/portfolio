"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const publications = [
  {
    title:
      "Machine Learning vs. Deep Learning: A Comparative Analysis for Early Detection of Neurological Disease Progression",
    venue: "IEEE",
    researchGateUrl:
      "https://www.researchgate.net/publication/401005175_Machine_Learning_vs_Deep_Learning_A_Comparative_Analysis_for_Early_Detection_of_Neurological_Disease_Progression",
    description:
      "Conducted AI/ML research on neurological disease progression using clinical and MRI datasets, evaluating SVM, Random Forest, XGBoost, TabTransformer, HyperMixer, and ensemble models.",
  },
  {
    title: "Advanced Maritime Vessel Detection in Satellite Imagery Using MASATIv2",
    venue: "SETSCI",
    researchGateUrl:
      "https://www.researchgate.net/publication/394639087_Advanced_Maritime_Vessel_Detection_in_Satellite_Imagery_Using_Masati-V2",
    description:
      "Developed a YOLOv10-based object detection system for maritime vessel detection using satellite imagery, preprocessing, augmentation, GPU-optimized training, and model evaluation pipelines.",
  },
  {
    title:
      "Comparative Analysis of Machine Learning Algorithm for Conversion Predictors of Clinically Isolated Syndrome (CIS) to Multiple Sclerosis (MS)",
    venue: "IEEE",
    researchGateUrl:
      "https://www.researchgate.net/publication/390254005_Comparative_Analysis_of_Machine_Learning_Algorithm_for_Conversion_Predictors_of_Clinically_Isolated_Syndrome_CIS_to_Multiple_Sclerosis_MS",
    description:
      "Built a healthcare AI research workflow to predict conversion from Clinically Isolated Syndrome (CIS) to Multiple Sclerosis (MS) using clinical and MRI-based datasets, with focus on model comparison, prediction accuracy, and ML-based clinical decision support.",
  },
]

export function PublicationsSection() {
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
    <section id="publications" className="relative px-4 sm:px-8 md:px-12 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Publications
        </h2>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            className="h-9 w-9 rounded-full border border-border hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="h-9 w-9 rounded-full border border-border hover:bg-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {publications.map((publication, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
          >
            {/* Venue + ResearchGate logo */}
            <div className="mb-5 flex items-center gap-3">
              <p className="text-base font-semibold uppercase tracking-widest text-primary">
                {publication.venue}
              </p>

              {publication.researchGateUrl && (
                <a
                  href={publication.researchGateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ResearchGate"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white shadow-md transition hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="relative font-serif text-lg leading-none">
                    R
                    <sup className="absolute -right-1 -top-1 text-[8px] font-serif">
                      G
                    </sup>
                  </span>
                </a>
              )}
            </div>

            {/* Fixed title area */}
            <div className="h-[130px]">
              <h3 className="text-xl font-semibold text-primary">
                {publication.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {publication.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}