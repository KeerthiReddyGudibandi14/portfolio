export default function Contact() {
  return (
    <main className="bg-background text-white px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-10">Contact Me</h1>

        <p className="text-muted-foreground mb-10">
          Feel free to reach out for opportunities or collaborations
        </p>

        <div className="space-y-8">
          <div>
            <p className="text-primary uppercase text-sm tracking-wider">Email</p>
            <a href="mailto:kgudibandi@ufl.edu" className="text-xl hover:text-primary transition">
              kgudibandi@ufl.edu
            </a>
          </div>

          <div>
            <p className="text-primary uppercase text-sm tracking-wider">Phone</p>
            
          </div>

          <div>
            <p className="text-primary uppercase text-sm tracking-wider">LinkedIn</p>
            <a href="https://www.linkedin.com/in/keerthi-reddy-gudibandi-713718273/" target="_blank" className="text-xl hover:text-primary transition">
              View Profile
            </a>
          </div>

          <div className="text-center">
  <p className="text-primary uppercase text-sm tracking-widest mb-2">
    ResearchGate
  </p>
  <a
    href="https://www.researchgate.net/profile/Keerthi-Reddy-Gudibandi"
    target="_blank"
    className="text-xl hover:text-primary transition"
  >
    View Profile
  </a>
</div>

        </div>
      </div>
    </main>
  )
}
