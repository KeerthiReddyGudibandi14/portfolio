import { Navbar } from "@/components/navbar"
import { ProjectsRow } from "@/components/projects-row"
import { Footer } from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "RAG Document Q&A Assistant",
    subtitle: "Full-Stack GenAI Document Q&A Application",
    image: "/DocuQ AI.jpg",
    description: [
      "Built a FastAPI pipeline to ingest, chunk, and embed unstructured documents using Hugging Face models.",
      "Indexed embeddings in ChromaDB and filtered retrieved context to support relevant, source-grounded answers.",
      "Evaluated retrieval quality and exposed document search and question answering through an API.",
    ],
    techStack: ["Python", "FastAPI", "React", "JavaScript", "LangChain", "ChromaDB", "Hugging Face Embeddings", "Groq LLM", "RAG", "REST APIs"],
    githubUrl: "https://github.com/KeerthiReddyGudibandi14/Rag-Based-Document-QA-Assistant",
  },
  {
    id: 2,
    title: "CLIP Semantic Image Search",
    subtitle: "Computer Vision and Image Similarity Search",
    image: "/CLIP-dog.jpg",
    description: [
      "Generated CLIP embeddings for images and text, placing both in a shared vector space so users could search an image collection with either a written description or an example image.",
      "Indexed image embeddings with FAISS and used vector similarity to rank results, enabling semantic searches that go beyond matching filenames or manually assigned labels.",
      "Built a FastAPI-backed search workflow to process queries, retrieve the closest matches, and display ranked images through a user-facing interface.",
    ],
    techStack: ["Python", "FastAPI", "React", "JavaScript", "CLIP", "PyTorch", "Transformers", "FAISS", "Pillow", "NumPy", "REST APIs"],
    githubUrl: "https://github.com/KeerthiReddyGudibandi14/CLIP-Image-Search-Engine",
  },
  {
    id: 3,
    title: "Cloud Log Analytics Pipeline",
    subtitle: "Scheduling and Priority Queue Simulation",
    image: "/Gator-Air.jpg",
    description: [
      "Built a Python and SQL ETL pipeline to process application logs, organize event data into queryable tables, and prepare consistent inputs for trend and performance analysis.",
      "Analyzed usage patterns, recurring errors, and unusual activity to identify potential system issues and distinguish isolated events from broader operational trends.",
      "Created Power BI dashboards showing operational KPIs, error patterns, and usage trends, making it easier to investigate system behavior and communicate findings.",
    ],
    techStack: ["C++", "Data Structures", "Algorithms", "Priority Queues", "Binary Min Heap", "Pairing Heap", "Scheduling", "Simulation", "File I/O", "Makefile"],
    githubUrl: "https://github.com/KeerthiReddyGudibandi14/GATOR-AIR-TRAFFIC-SLOT-SCHEDULER",
  },
  {
    id: 4,
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
