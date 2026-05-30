import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keerthi Reddy Gudibandi | AI/ML Engineer & Published Researcher",
  description:
    "Portfolio of Keerthi Reddy Gudibandi - M.S. Computer Science student at the University of Florida, AI/ML engineer, published researcher, and software engineer.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-background text-foreground"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
