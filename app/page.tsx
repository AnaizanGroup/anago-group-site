import { Metadata } from "next"
import { HomePage } from "@/components/pages/HomePage"

export const metadata: Metadata = {
  title: "Anago Group – Pan-African Industrial Holding",
  description: "Anago Group is a leading pan-African holding company driving economic growth through diversified investments in mining, infrastructure, agriculture, and industrial solutions.",
  keywords: ["Anago Group", "African industrial development", "pan-African holding", "infrastructure Africa", "mining Africa", "agriculture Africa"],
  openGraph: {
    title: "Anago Group – Architect of Africa's Industrial Renaissance",
    description: "Driving sustainable industrial development and economic growth across the African continent.",
  }
}

export default function Home() {
  return <HomePage />
}
