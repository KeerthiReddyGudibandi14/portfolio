import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PublicationsSection } from "@/components/publications-section"

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <PublicationsSection />
      </div>
      <Footer />
    </main>
  )
}

// const publications = [
//   {
//     title: "Machine Learning vs. Deep Learning: A Comparative Analysis for Early Detection of Neurological Disease Progression",
//     venue: "IEEE Publication",
//     description:
//       "Conducted AI/ML research on neurological disease progression using clinical and MRI datasets, evaluating SVM, Random Forest, XGBoost, TabTransformer, HyperMixer, and ensemble models.",
//     tags: ["Machine Learning", "Deep Learning", "Healthcare AI", "Clinical Data", "IEEE"],
//   },
//   {
//     title: "Advanced Maritime Vessel Detection in Satellite Imagery Using MASATIv2",
//     venue: "SETSCI",
//     description:
//       "Developed a YOLOv10-based object detection system for maritime vessel detection using satellite imagery, preprocessing, augmentation, GPU-optimized training, and model evaluation pipelines.",
//     tags: ["Computer Vision", "YOLOv10", "Object Detection", "Satellite Imagery", "SETSCI"],
//   },
//   {
//     title: "Comparative Analysis of Machine Learning Algorithm; for Conversion Predictors of Clinically Isolated Syndrome (CIS) to Multiple Sclerosis (MS)",
//     venue: "IEEE",
//     description:
//       "Built a healthcare AI research workflow to predict conversion from Clinically Isolated Syndrome (CIS) to Multiple Sclerosis (MS) using clinical and MRI-based datasets, with focus on model comparison, prediction accuracy, and ML-based clinical decision support.",
//     tags: ["Machine Learning", "Healthcare AI", "Clinical Prediction", "Multiple Sclerosis", "MRI Data", "Model Evaluation"],
//   },
// ]

// export default function PublicationsPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       <Navbar />

//       <section className="px-4 pt-24 pb-20 sm:px-8 md:px-12">
//         <div className="mx-auto max-w-6xl">
//           <h1 className="mb-4 text-4xl font-bold text-foreground">
//             Publications
//           </h1>

//           <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
//             Research work across AI/ML, healthcare AI, clinical data analysis,
//             computer vision, object detection, and applied machine learning.
//           </p>

//           <div className="grid gap-6">
//             {publications.map((publication) => (
//               <div
//                 key={publication.title}
//                 className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50"
//               >
//                 <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
//                   {publication.venue}
//                 </p>

//                 <h2 className="mb-3 text-2xl font-bold text-foreground">
//                   {publication.title}
//                 </h2>

//                 <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
//                   {publication.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {publication.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }