import { SectorPage } from "@/components/pages/SectorPage"
import { IndustrialSectorPage } from "@/components/pages/IndustrialSectorPage"
import { MiningSectorPage } from "@/components/pages/MiningSectorPage"
import { AgricultureSectorPage } from "@/components/pages/AgricultureSectorPage"
import { EquipmentSectorPage } from "@/components/pages/EquipmentSectorPage"
import RealEstateSectorPage from "@/components/pages/RealEstateSectorPage";

export function generateStaticParams() {
    return [
        { sector: "industrial" },
        { sector: "industrial-services" },
        { sector: "mining" },
        { sector: "mining-metals" },
        { sector: "agriculture" },
        { sector: "agriculture-livestock" },
        { sector: "equipment" },
        { sector: "equipment-supply" },
        { sector: "realestate" }
    ]
}
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
    const resolvedParams = await Promise.resolve(params);
    const sector = resolvedParams.sector;

    switch (sector) {
        case "industrial":
        case "industrial-services":
            return {
                title: "Industrial Consulting & Services | Anago Group",
                description: "Expert industrial consulting and project management services across Africa. We drive operational excellence and industrial sovereignty.",
                keywords: ["Industrial consulting Africa", "industrial project management", "operational excellence", "Anago Group industrial services"]
            }
        case "mining":
        case "mining-metals":
            return {
                title: "Mining & Metals | Anago Group",
                description: "Responsible extraction and local transformation of metals in Africa. Anago Group operates modern, sustainable mining value chains.",
                keywords: ["Mining Africa", "sustainable mining", "metal extraction Africa", "local transformation", "Anago Group mining"]
            }
        case "agriculture":
        case "agriculture-livestock":
            return {
                title: "Agriculture & Livestock | Anago Group",
                description: "Building modern agro-industrial value chains in Africa. From sustainable farming to precision livestock management and food processing.",
                keywords: ["Agriculture Africa", "livestock management", "agro-industrial value chains", "food security Africa", "Anago Group agriculture"]
            }
        case "equipment":
        case "equipment-supply":
            return {
                title: "Industrial Equipment & Solutions | Anago Group",
                description: "High-performance heavy machinery and full-lifecycle industrial solutions. We provide reliable equipment for mining, construction, and agriculture.",
                keywords: ["Heavy equipment Africa", "industrial machinery supply", "OEM partner Africa", "construction equipment", "Anago Group equipment"]
            }
        case "realestate":
            return {
                title: "Real Estate & Construction | Anago Group",
                description: "Developing sustainable industrial, commercial, and urban infrastructure across Africa.",
                keywords: ["Real estate development Africa", "industrial infrastructure", "commercial spaces", "Anago Group construction"]
            }
        default:
            return {
                title: "Industrial Sectors | Anago Group"
            }
    }
}

export default async function IndustrySector({ params }: { params: any }) {
    const resolvedParams = await Promise.resolve(params);
    const sector = resolvedParams.sector;

    if (sector === "industrial" || sector === "industrial-services") {
        return <IndustrialSectorPage />
    }

    if (sector === "mining" || sector === "mining-metals") {
        return <MiningSectorPage />
    }

    if (sector === "agriculture" || sector === "agriculture-livestock") {
        return <AgricultureSectorPage />
    }

    if (sector === "equipment" || sector === "equipment-supply") {
        return <EquipmentSectorPage />
    }

    if (sector === "realestate") {
        return <RealEstateSectorPage />;
    }

    return <SectorPage />
}
