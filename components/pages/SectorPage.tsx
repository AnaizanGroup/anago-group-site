"use client"

import { useParams, useRouter } from "next/navigation"
import {
    ArrowRight, Gem, Pickaxe, Search, BarChart3, Brain, Package, Wrench,
    CalendarCheck, Home, Building2, Landmark, Wheat, Beef, Factory, ChevronRight
} from "lucide-react"
import { RevealSection } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"

export function SectorPage() {
    const { sector } = useParams()
    const { T } = useAppContext()
    const router = useRouter()

    const sectorData: Record<string, any> = {
        mining: {
            title: T("mining_h1", "Mining & Metals"),
            intro: T("mining_intro", "Responsible extraction and local transformation of Africa's mineral resources, creating value across the entire mining value chain."),
            features: [
                { icon: <Search className="w-5 h-5 text-[#0A1628]" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #C8962E, #e7b13f)", title: "Exploration", desc: "Advanced prospecting and geological evaluation of mineral deposits using cutting-edge technology." },
                { icon: <Pickaxe className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "#0D1B2A", title: "Extraction & Processing", desc: "Responsible mining operations meeting international safety and environmental standards." },
                { icon: <BarChart3 className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "#343a40", title: "Trading & Marketing", desc: "International distribution and trading of metals and minerals on global markets." },
            ],
            stats: [
                { value: "10+", label: "Operating Sites", gold: true },
                { value: "5", label: "Mineral Types", gold: false },
                { value: "100%", label: "Environmental Compliance", gold: true },
            ]
        },
        "industrial-services": {
            title: T("ind_h1", "Industrial Consulting & Services"),
            intro: T("ind_intro", "Comprehensive industrial solutions from strategic consulting to equipment supply, maintenance and rental services."),
            features: [
                { icon: <Brain className="w-6 h-6 text-[#0A1628]" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #C8962E, #e7b13f)", title: "Strategic Consulting", desc: "Industrial audit, process optimization, and strategic planning for enterprises across Africa." },
                { icon: <Package className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#0D1B2A", title: "Equipment Supply", desc: "High-quality industrial equipment and machinery from world-leading manufacturers." },
                { icon: <Wrench className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#343a40", title: "Maintenance Services", desc: "Preventive and corrective maintenance, 24/7 emergency support, and technical staff training." },
                { icon: <CalendarCheck className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#935D46", title: "Equipment Rental", desc: "Flexible rental solutions for construction machinery, generators, and industrial equipment." },
            ]
        },
        "real-estate": {
            title: T("re_h1", "Real Estate & Construction"),
            intro: T("re_intro", "Developing sustainable residential, commercial and industrial infrastructure across Africa."),
            features: [
                { icon: <Home className="w-10 h-10" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />, title: "Residential", desc: "Modern and affordable housing developments." },
                { icon: <Building2 className="w-10 h-10" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />, title: "Commercial", desc: "International-standard commercial spaces and offices." },
                { icon: <Landmark className="w-10 h-10" style={{ color: "var(--text-secondary)" }} strokeWidth={1.5} />, title: "Infrastructure", desc: "Large-scale public and private infrastructure construction." },
            ]
        },
        agriculture: {
            title: T("agri_h1", "Agriculture & Livestock"),
            intro: T("agri_intro", "Building agro-industrial value chains, food security and sustainable rural development across Africa."),
            features: [
                { icon: <Wheat className="w-5 h-5 text-green-700" strokeWidth={1.5} />, iconBg: "bg-green-100", title: "Crop Production", desc: "Modern, sustainable food and export crop farming." },
                { icon: <Beef className="w-5 h-5 text-amber-700" strokeWidth={1.5} />, iconBg: "bg-amber-100", title: "Livestock", desc: "Cattle, poultry and fish farming with responsible practices." },
                { icon: <Factory className="w-5 h-5" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />, title: "Agro-Processing", desc: "Local agro-food transformation creating added value." },
            ]
        },
        equipment: {
            title: T("s_equip_title", "Equipment & Industrial Solutions"),
            intro: T("s_equip_desc", "Supply, maintenance and rental of industrial equipment across the continent."),
            features: [
                { icon: <Package className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#0D1B2A", title: "Equipment Supply", desc: "High-quality industrial equipment and machinery." },
                { icon: <Wrench className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#343a40", title: "Maintenance", desc: "24/7 technical support and maintenance." },
            ]
        }
    }

    const data = sectorData[sector as string] || sectorData.mining

    return (
        <div className="block">
            <section className="pt-24 lg:pt-32 pb-20 hero-bg relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <RevealSection className="flex items-center gap-2 mb-8">
                        <button onClick={() => router.push("/")} className="text-xs font-medium text-white/40 hover:text-white/60 transition-colors">Home</button>
                        <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                        <span className="text-xs font-medium text-white/40">Industries</span>
                        <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                        <span className="text-xs font-medium text-[#e7b13f]">{data.title}</span>
                    </RevealSection>
                    <RevealSection className="max-w-3xl">
                        <div className="gold-line mb-6" />
                        <h1 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">{data.title}</h1>
                        <p className="text-lg text-white/60 leading-relaxed">{data.intro}</p>
                    </RevealSection>
                </div>
            </section>

            <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid gap-6 mb-16 ${data.features.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                        {data.features.map((s: any, i: number) => (
                            <RevealSection key={i} className="p-8 rounded-2xl border" style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                                {s.iconBg || s.bg ? (
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.iconBg || ""}`} style={s.bg ? { background: s.bg } : {}}>{s.icon}</div>
                                ) : (
                                    <div className="mx-auto mb-4 flex justify-center">{s.icon}</div>
                                )}
                                <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                            </RevealSection>
                        ))}
                    </div>

                    {data.stats && (
                        <RevealSection className="p-10 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #0A1628, #1a2744)" }}>
                            <div className="grid md:grid-cols-3 gap-8">
                                {data.stats.map((stat: any, i: number) => (
                                    <div key={i}>
                                        <div className={`text-3xl font-bold mb-1 ${stat.gold ? "text-[#e7b13f]" : "text-white"}`}>{stat.value}</div>
                                        <div className="text-sm text-white/50">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </RevealSection>
                    )}

                    <div className="mt-20 text-center">
                        <button onClick={() => router.push("/contact")} className="btn-gold px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2">
                            <span>{T("contact_hero_cta", "Request a Partnership")}</span>
                            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
