import { Navbar } from "@/components/navbar"
import { ExperienceRow } from "@/components/experience-row"
import { Footer } from "@/components/footer"

const experience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Certi",
    location: "Remote – Gainesville, FL",
    period: "May 2026 - Present",
    image: "/PortfolioWebsite/certitry.jpg",
    sections: [
      {
        title: "Software Engineering Work",
        items: [
          "Building full-stack features for a SportsTech authentication and resale platform that supports NFC-enabled verification, digital provenance, and secure tracking for game-worn sports memorabilia, collectibles, and athlete-owned items.",
          "Developing frontend components, backend APIs, and database workflows to support item verification, marketplace functionality, user-facing product features, and reliable authentication experiences.",
          "Collaborating with the engineering team to improve product reliability, code quality, debugging workflows, feature implementation, and maintainable software delivery across the platform.",
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
    title: "Software Engineer – AI/ML",
    company: "Samisen Distributed Technologies",
    location: "Hyderabad, India",
    period: "July 2023 - January 2024",
    image: "/PortfolioWebsite/Samisen.jpg",
    sections: [
      {
        title: "AI/ML Engineering Work",
        items: [
  "Developed AI-assisted software workflows for documentation summarization, technical context extraction, and repetitive analysis automation using LLM and NLP-based approaches to improve team productivity and knowledge access.",
  "Researched and evaluated Generative AI, LLM, and NLP systems for hallucination risks, reliability issues, responsible AI considerations, practical adoption, and real-world workflow integration.",
  "Collaborated on debugging, workflow validation, and technical reporting to improve AI system usability, output quality, maintainable software delivery, and cross-functional understanding of model behavior.",
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
    title: "Machine Learning Research Assistant",
    company: "Vellore Institute of Technology",
    location: "Andhra Pradesh, India",
    period: "August 2024 - May 2025",
    image: "/PortfolioWebsite/Research.jpg",
    sections: [
      {
        title: "Research & Machine Learning Work",
        items: [
  "Conducted computer vision and deep learning research across object detection, clinical imaging, neurological disease progression, and intelligent perception workflows using Python, PyTorch, TensorFlow, Scikit-learn, and OpenCV.",
  "Trained and evaluated CNN, Transformer, YOLOv10, Random Forest, XGBoost, SVM, and ensemble models across healthcare and computer vision datasets to compare accuracy, reliability, and model performance.",
  "Built reproducible experimentation workflows using MLflow and Weights & Biases for hyperparameter tuning, metric comparison, model selection, error analysis, and performance tracking across research prototypes.",
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