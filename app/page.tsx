import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  )
}
