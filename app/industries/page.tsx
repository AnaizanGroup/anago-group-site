import IndustriesPage from "@/components/pages/IndustriesPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Industries & Sectors | Anago Group",
    description: "Explore Anago Group's diversified industrial portfolio across mining, industrial services, real estate, agriculture, and equipment supply. We build resilient value chains in Africa.",
    keywords: ["Anago Group industries", "African industrial sectors", "mining portfolio", "agriculture investments", "industrial real estate Africa", "equipment supply"],
}

export default function Page() {
    return <IndustriesPage />
}
