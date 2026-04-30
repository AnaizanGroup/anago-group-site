"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
    ArrowRight, Gem, Settings, Building2, Sprout, Truck,
    ArrowDownRight, CheckCircle2, Globe, BarChart3, ShieldCheck, Zap
} from "lucide-react"
import { RevealSection } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"

export default function IndustriesPage() {
    const { T, theme } = useAppContext()
    const isLight = theme === "light"
    const router = useRouter()

    const sectors = [
        {
            id: "mining",
            title: T("s_mining_title"),
            desc: T("s_mining_desc"),
            path: "/industries/mining",
            image: "/images/industries/mining-preview.jpg",
            icon: <Gem className="w-6 h-6" />,
            color: "gold",
            features: [T("min_about_feat1"), T("min_about_feat2"), T("min_about_feat3")]
        },
        {
            id: "industrial",
            title: T("s_consult_title"),
            desc: T("s_consult_desc"),
            path: "/industries/industrial",
            image: "/images/industries/industrial-preview.jpg",
            icon: <Settings className="w-6 h-6" />,
            color: "navy",
            features: [T("ind_about_feat1"), T("ind_about_feat2"), T("ind_about_feat4")]
        },
        {
            id: "realestate",
            title: T("s_realestate_title"),
            desc: T("s_realestate_desc"),
            path: "/industries/realestate",
            image: "/images/industries/realestate-preview.jpg",
            icon: <Building2 className="w-6 h-6" />,
            color: "slate",
            features: [T("re_about_h1"), T("re_about_h2"), T("re_about_h4")]
        },
        {
            id: "agriculture",
            title: T("s_agri_title"),
            desc: T("s_agri_desc"),
            path: "/industries/agriculture",
            image: "/images/industries/agriculture-preview.jpg",
            icon: <Sprout className="w-6 h-6" />,
            color: "green",
            features: [T("agri_about_feat1"), T("agri_about_feat2"), T("agri_about_feat3")]
        },
        {
            id: "equipment",
            title: T("s_equip_title"),
            desc: T("s_equip_desc"),
            path: "/industries/equipment",
            image: "/images/industries/equipment-preview.jpg",
            icon: <Truck className="w-6 h-6" />,
            color: "steel",
            features: [T("equip_act1_title"), T("equip_act3_title"), T("equip_act4_title")]
        }
    ]

    return (
        <div className="block selection:bg-gold-500/30 theme-transition">
            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/industries/hero-hub.jpg"
                        alt="Anago Group Industrial Synergy"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                </div>

                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-54 relative z-20 w-full text-center">
                    <div className="max-w-6xl mx-auto">
                        <RevealSection className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl">
                            <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{T("ind_portal_hero_badge")}</span>
                        </RevealSection>

                        <RevealSection delay={200}>
                            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[0.95] mb-10">
                                {T("ind_portal_hero_title").split("Key")[0]} <span className="gold-gradient italic"></span>
                            </h1>
                        </RevealSection>

                        <RevealSection delay={400}>
                            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-16 font-light">
                                {T("ind_portal_hero_desc")}
                            </p>
                        </RevealSection>

                        <RevealSection delay={600} className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => document.getElementById('sector-mining')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/30">
                                <span className="font-bold tracking-widest uppercase">{T("home_scroll", "Explore the Vision")}</span>
                                <ArrowDownRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ========== SECTOR SECTIONS (Alternating) ========== */}
            <div className="theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                {sectors.map((sector, idx) => {
                    const isEven = idx % 2 === 0
                    return (
                        <section
                            key={sector.id}
                            id={`sector-${sector.id}`}
                            className={`py-24 lg:py-40 relative overflow-hidden theme-transition ${!isEven ? "bg-secondary-theme" : ""}`}
                            style={{ backgroundColor: !isEven ? "var(--bg-secondary)" : "var(--bg-primary)" }}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-center`}>
                                    {/* Image Side (5/12 approx) */}
                                    <div className="w-full lg:w-5/12">
                                        <RevealSection>
                                            <div className="relative aspect-4/3 lg:aspect-square rounded-4xl overflow-hidden shadow-2xl group">
                                                <Image
                                                    src={sector.image}
                                                    alt={sector.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Float Badge */}
                                                <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
                                                    {sector.icon}
                                                </div>
                                            </div>
                                        </RevealSection>
                                    </div>

                                    {/* Text Side (7/12 approx) */}
                                    <div className="w-full lg:w-7/12">
                                        <RevealSection>
                                            <div className="gold-line mb-8" />
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                                                Sector 0{idx + 1}
                                            </div>
                                            <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                                {sector.title}
                                            </h2>
                                            <p className="text-lg leading-relaxed mb-10 opacity-70" style={{ color: "var(--text-secondary)" }}>
                                                {sector.desc}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                                {sector.features.map((feat, fidx) => (
                                                    <div key={fidx} className="flex items-center gap-3 p-4 rounded-xl border border-border-color bg-card-bg/50 backdrop-blur-sm" style={{ borderColor: "var(--border-color)", background: "var(--card-bg)" }}>
                                                        <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                                                            <CheckCircle2 className="w-4 h-4 text-gold-500" />
                                                        </div>
                                                        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{feat}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => router.push(sector.path)}
                                                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gold-500 hover:gap-5 transition-all"
                                            >
                                                <span>{T("ind_portal_explore")}</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </RevealSection>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>

            {/* ========== GLOBAL STATS BAND ========== */}
            <section className="py-20 relative overflow-hidden theme-transition" style={{ backgroundColor: isLight ? "var(--bg-secondary)" : "var(--section-dark)" }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(200,150,46,0.15)'} 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
                        {[
                            { label: T("home_stats_countries"), value: "15+", icon: <Globe className="w-5 h-5" /> },
                            { label: T("stat_sectors"), value: "05", icon: <BarChart3 className="w-5 h-5" /> },
                            { label: T("home_stats_projects"), value: "120+", icon: <Zap className="w-5 h-5" /> },
                            { label: T("about_feature_esg"), value: "100%", icon: <ShieldCheck className="w-5 h-5" /> }
                        ].map((stat, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-gold-400 mb-4 border transition-all" style={{ backgroundColor: isLight ? "var(--bg-primary)" : "rgba(255,255,255,0.05)", borderColor: "var(--border-color)" }}>
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>{stat.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-40" style={{ color: "var(--text-primary)" }}>{stat.label}</div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="py-24 lg:py-40 text-center theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection>
                        <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                            {T("final_cta_title")}
                        </h2>
                        <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                            {T("final_cta_desc")}
                        </p>
                        <button onClick={() => router.push("/contact")} className="btn-gold px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/30">
                            <span className="font-bold tracking-widest uppercase">{T("contact_us")}</span>
                            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                        </button>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}
