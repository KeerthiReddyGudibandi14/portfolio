import { Navbar } from "@/components/navbar"
import { ProjectsRow } from "@/components/projects-row"
import { Footer } from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "RAG-Based Document Q&A Assistant",
    subtitle: "Full-Stack GenAI Document Q&A Application",
    image: "/DocuQ AI.jpg",
    description: [
      "Built a full-stack RAG application that allows users to upload documents, ask questions, and receive context-aware answers from the document.",
      "Implemented document processing, text chunking, local Hugging Face embeddings, ChromaDB vector search, and Groq LLM-based answer generation.",
      "Designed a React and FastAPI interface that displays both generated answers and retrieved source context for more transparent document-based responses.",
    ],
    techStack: ["Python", "FastAPI", "React", "JavaScript", "LangChain", "ChromaDB", "Hugging Face Embeddings", "Groq LLM", "RAG", "REST APIs"],
    githubUrl: "https://github.com/KeerthiReddyGudibandi14/Rag-Based-Document-QA-Assistant",
  },
  {
    id: 2,
    title: "CLIP Image Search Engine",
    subtitle: "Computer Vision and Image Similarity Search",
    image: "/CLIP-dog.jpg",
    description: [
      "Built a full-stack image search engine that retrieves visually similar images using CLIP embeddings and FAISS vector search.",
      "Implemented image dataset upload, query image search, embedding generation, similarity ranking, and visual result display.",
      "Designed a React and FastAPI interface to demonstrate computer vision retrieval in a practical product-style workflow.",
    ],
    techStack: ["Python", "FastAPI", "React", "JavaScript", "CLIP", "PyTorch", "Transformers", "FAISS", "Pillow", "NumPy", "REST APIs"],
    githubUrl: "https://github.com/KeerthiReddyGudibandi14/CLIP-Image-Search-Engine",
  },
  {
    id: 3,
    title: "Reddit Engine",
    subtitle: "Actor-Based Distributed Backend System",
    image: "/distributed-systems.jpg",
    description: [
      "Built a Reddit-like backend engine in Gleam on the Erlang VM using actor-based concurrency and distributed message passing.",
      "Implemented core platform features including users, subreddits, posts, comments, voting, direct messaging, and feed generation.",
      "Added a REST API simulation and interaction layer to test backend behavior, concurrent workflows, and system scalability.",
    ],
    techStack: ["Actor Model", "Gleam", "Erlang VM", "Distributed Systems", "Message Passing", "REST APIs", "Concurrency", "Backend Systems", "Simulation"],
    githubUrl: "https://github.com/KeerthiReddyGudibandi14/Reddit-Engine",
  },
  {
    id: 4,
    title: "GATOR Air Traffic Slot Scheduler",
    subtitle: "Scheduling and Priority Queue Simulation",
    image: "/Gator-Air.jpg",
    description: [
      "Built a air traffic scheduling system that assigns flights to available runways based on priority, submission time, and runway availability.",
      "Implemented custom Binary Min Heap and Pairing Heap data structures to manage runway availability, pending flights, ETA updates, cancellations, and reprioritization.",
      "Designed command-based simulation support for flight submission, cancellation, runway expansion, ground holds, active flight tracking, and schedule queries.",
    ],
    techStack: ["C++", "Data Structures", "Algorithms", "Priority Queues", "Binary Min Heap", "Pairing Heap", "Scheduling", "Simulation", "File I/O", "Makefile"],
    githubUrl: "https://github.com/KeerthiReddyGudibandi14/GATOR-AIR-TRAFFIC-SLOT-SCHEDULER",
  },
  {
    id: 5,
    title: "Smart Campus Services Platform",
    subtitle: "Full-Stack Campus Services Application",
    image: "/business-intelligence-ai-dark.jpg",
    description: [
      "Built a full-stack campus services platform with role-based dashboards, booking workflows, staff approval/rejection flows, and user profile features.",
      "Implemented React frontend, Node.js/Express backend, SQLite database integration, REST APIs, and authentication-aware UI behavior.",
      "Added unit and E2E testing using Jest, React Testing Library, and Cypress to validate core user flows.",
    ],
    techStack: ["React", "Node.js", "Express", "SQLite", "REST APIs", "Cypress", "Jest"],
    githubUrl: "https://github.com/saranjv426/Smart-Campus-Services-Platform",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <ProjectsRow title="Featured Projects" items={projects} />
      </div>
      <Footer />
    </main>
  )
}
