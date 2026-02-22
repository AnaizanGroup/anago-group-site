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
