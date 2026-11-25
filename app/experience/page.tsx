import { Navbar } from "@/components/navbar"
import { ExperienceRow } from "@/components/experience-row"
import { Footer } from "@/components/footer"

const experience = [
  {
    id: 1,
    title: "Machine Learning Engineer",
    company: "University of Florida, College of Veterinary Medicine",
    location: "Remote – Gainesville, FL",
    period: "June 2026 - Present",
    image: "/certitry.jpg",
    sections: [
      {
        title: "Machine Learning Work",
        items: [
          "Fine-tuned ResNet for multilabel veterinary X-ray classification, achieving 0.91 ROC-AUC on held-out, patient-disjoint test data.",
          "Trained a YOLO26 abnormality detector that achieved 54.2% mAP@0.5:0.95; analyzed missed findings and tracked experiments in MLflow and ClearML.",
          "Built DICOM preprocessing with pydicom and CLAHE, plus a RAG pipeline that retrieves veterinary imaging references for source-grounded X-ray summaries.",
          "Built an LLM agent that calls retrieval and ResNet/YOLO26 inference tools to surface imaging findings and localized abnormalities for clinician review.",
        ],
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Backend APIs",
      "Databases",
      "NFC Verification",
      "Digital Provenance",
      "Full-Stack Development"
    
    ],
  },
  {
    id: 2,
    title: "Machine Learning Researcher",
    company: "VIT University",
    location: "Hyderabad, India",
    period: "August 2024 - May 2025",
    image: "/Samisen.jpg",
    sections: [
      {
        title: "Machine Learning Work",
        items: [
  "Benchmarked Mistral 7B and Llama 3.1 8B with vLLM and 4-bit quantization, comparing latency, GPU memory use, and response quality.",
  "Developed clinical and MRI models for neurological disease progression, reporting a 17% improvement in predictive accuracy.",
  "Trained YOLOv10 on more than 40,000 satellite images, improving vessel-detection recall by 12% through augmentation and hyperparameter tuning.",
]
      },
    ],
    techStack: [
      "Generative AI",
      "LLMs",
      "NLP",
      "Prompt Engineering",
      "AI Workflows",
      "Python",
      "Software Engineering",
    ],
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    company: "InTrain Tech",
    location: "Andhra Pradesh, India",
    period: "January 2023 - July 2024",
    image: "/Research.jpg",
    sections: [
      {
        title: "Machine Learning Work",
        items: [
  "Built Python training pipelines for support-ticket classification, preparing labeled text and features for routing across imbalanced categories.",
  "Tuned models with stratified five-fold cross-validation and Bayesian optimization; refined thresholds using macro F1 and precision-recall analysis to achieve 94.2% routing accuracy.",
],
      },
    ],
    techStack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "YOLOv10",
      "MLflow",
      "Computer Vision",
    ],
  },
  {
    id: 4,
    title: "NLP Engineer",
    company: "Samisen Distributed Technologies",
    location: "Andhra Pradesh, India",
    period: "February 2022 - January 2023",
    image: "/Research.jpg",
    sections: [
      {
        title: "Work",
        items: [
  "Built a Python/FastAPI NLP service to preprocess and classify support tickets, route requests, and present draft responses for review through Zendesk and SendGrid.",
  "Added Rust ticket processing and Celery/Redis workers, reducing measured end-to-end triage latency by 35%.",
],      },
    ],
    techStack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "YOLOv10",
      "MLflow",
      "Computer Vision",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <ExperienceRow title="Professional Journey" items={experience} />
      </div>
      <Footer />
    </main>
  )
}