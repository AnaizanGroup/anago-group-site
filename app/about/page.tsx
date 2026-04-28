import { Metadata } from "next"
import { AboutPage } from "@/components/pages/AboutPage"

export const metadata: Metadata = {
  title: "About Us | Anago Group",
  description: "Learn about Anago Group's history, vision, and leadership. We are committed to building long-term value and driving sustainable industrial growth across Africa.",
  keywords: ["About Anago Group", "African corporate leadership", "sustainable investment Africa", "industrial growth vision"],
}

export default function About() {
    return <AboutPage />
}
