"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    Building2,
    ArrowRight,
    ChevronRight,
    ArrowDownRight,
    Factory,
    Home,
    Landmark,
    Store,
    Trees,
    KeyRound,
    Leaf,
    PencilRuler,
    Globe,
    Layers,
    Users,
    TrendingUp,
    MapPin,
    Maximize2,
    Ruler,
    Compass,
    Building,
    Download,
    CheckCircle,
    Mail
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection";

const RealEstateSectorPage = () => {
    const { T, theme } = useAppContext();
    const isLight = theme === "light";
    const router = useRouter();
    const heroParticlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroParticlesRef.current) {
            const container = heroParticlesRef.current;
            container.innerHTML = "";
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement("div");
                particle.className = "hero-particle";
                particle.style.left = Math.random() * 100 + "%";
                particle.style.top = Math.random() * 100 + "%";
                particle.style.setProperty("--drift-x", (Math.random() * 80 - 40) + "px");
                particle.style.setProperty("--drift-y", (Math.random() * -100 - 20) + "px");
                particle.style.setProperty("--duration", (8 + Math.random() * 10) + "s");
                particle.style.setProperty("--delay", (Math.random() * 8) + "s");
                const size = (2 + Math.random() * 4) + "px";
                particle.style.width = size;
                particle.style.height = size;
                container.appendChild(particle);
            }
        }
    }, []);

    const activities = [
        {
            id: "01",
            title: T("re_act1_title", "Industrial Real Estate & Facilities"),
            desc: T("re_act1_desc", "Design and construction of industrial parks, processing plants, warehousing complexes, and specialized facilities."),
            tags: [T("re_act1_tag1", "Industrial Parks"), T("re_act1_tag2", "Processing Plants"), T("re_act1_tag3", "Warehousing")],
            icon: <Factory className="w-6 h-6" />,
            color: "navy"
        },
        {
            id: "02",
            title: T("re_act2_title", "Housing & Residential Development"),
            desc: T("re_act2_desc", "Development of quality housing projects from affordable social housing to premium residential estates."),
            tags: [T("re_act2_tag1", "Social Housing"), T("re_act2_tag2", "Premium Estates"), T("re_act2_tag3", "Mixed-Use")],
            icon: <Home className="w-6 h-6" />,
            color: "gold"
        },
        {
            id: "03",
            title: T("re_act3_title", "Strategic Infrastructure Development"),
            desc: T("re_act3_desc", "Construction of roads, bridges, utilities, and critical public infrastructure that connect communities."),
            tags: [T("re_act3_tag1", "Roads & Bridges"), T("re_act3_tag2", "Utilities"), T("re_act3_tag3", "Public Works")],
            icon: <Landmark className="w-6 h-6" />,
            color: "navy"
        },
        {
            id: "04",
            title: T("re_act4_title", "Commercial & Office Spaces"),
            desc: T("re_act4_desc", "Modern office towers, retail centers, and mixed-use commercial complexes that attract investment."),
            tags: [T("re_act4_tag1", "Office Towers"), T("re_act4_tag2", "Retail Centers"), T("re_act4_tag3", "Smart Buildings")],
            icon: <Store className="w-6 h-6" />,
            color: "gold"
        },
        {
            id: "05",
            title: T("re_act5_title", "Sustainable Design & Green Building"),
            desc: T("re_act5_desc", "Integration of sustainable architecture, renewable energy, and eco-friendly materials."),
            tags: [T("re_act5_tag1", "Solar Integration"), T("re_act5_tag2", "Water Mgmt"), T("re_act5_tag3", "Eco Materials")],
            icon: <Trees className="w-6 h-6" />,
            color: "green"
        },
        {
            id: "06",
            title: T("re_act6_title", "Property & Asset Management"),
            desc: T("re_act6_desc", "Full-lifecycle management including facility maintenance, tenant relations, and portfolio optimization."),
            tags: [T("re_act6_tag1", "Facility Mgmt"), T("re_act6_tag2", "Asset Optimization"), T("re_act6_tag3", "Portfolio")],
            icon: <KeyRound className="w-6 h-6" />,
            color: "gold"
        }
    ];

    const valueProps = [
        {
            title: T("re_val1_title", "Sustainable Development"),
            desc: T("re_val1_desc", "Integrating renewable energy, water recycling, and green certifications to reduce impact."),
            icon: <Leaf className="w-6 h-6" />,
            color: "green"
        },
        {
            title: T("re_val2_title", "Technical Expertise"),
            desc: T("re_val2_desc", "Multidisciplinary teams of architects and engineers delivering world-class capabilities."),
            icon: <PencilRuler className="w-6 h-6" />,
            color: "gold"
        },
        {
            title: T("re_val3_title", "Pan-African Presence"),
            desc: T("re_val3_desc", "Active across 12+ countries with deep understanding of local markets and regulation."),
            icon: <Globe className="w-6 h-6" />,
            color: "navy"
        }
    ];

    return (
        <div className="block min-h-screen selection:bg-gold-500/30 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
            <style jsx global>{`
                .hero-re-bg {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }
                .architectural-grid {
                    background-image:
                        linear-gradient(${isLight ? 'rgba(10, 22, 40, 0.04)' : 'rgba(200, 150, 46, 0.03)'} 1px, transparent 1px),
                        linear-gradient(90deg, ${isLight ? 'rgba(10, 22, 40, 0.04)' : 'rgba(200, 150, 46, 0.03)'} 1px, transparent 1px);
                    background-size: 60px 60px;
                }
                .hero-particle {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(200, 150, 46, 0.4);
                    animation: particleDrift var(--duration, 8s) ease-in-out infinite;
                    animation-delay: var(--delay, 0s);
                    will-change: transform, opacity;
                    pointer-events: none;
                }
                @keyframes particleDrift {
                    0% { transform: translate3d(0,0,0) scale(1); opacity: 0; }
                    20% { opacity: 0.6; }
                    80% { opacity: 0.6; }
                    100% { transform: translate3d(var(--drift-x), var(--drift-y), 0) scale(0.5); opacity: 0; }
                }
                .activity-card-number {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: 5rem;
                    font-weight: 700;
                    line-height: 1;
                    position: absolute;
                    top: -10px;
                    right: 20px;
                    opacity: 0.06;
                    pointer-events: none;
                    transition: all 0.4s ease;
                }
                .card-premium:hover .activity-card-number { 
                    opacity: 0.12;
                    transform: translateY(10px);
                }
                .gold-line { width: 60px; height: 3px; background: linear-gradient(90deg, #C8962E, #F5D17E); border-radius: 2px; }
            `}</style>

            {/* ========== HERO SECTION ========== */}
            <section className="hero-re-bg">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/realestate/hero-cinematic.jpg"
                        alt="Anago Group Real Estate Vision"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70 z-10" />
                </div>



                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 w-full text-center">
                    <div className="max-w-4xl mx-auto">
                        <RevealSection className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl">
                            <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{T("re_hero_badge", "Strategic Sector 03 · Building Tomorrow")}</span>
                        </RevealSection>

                        <RevealSection delay={200}>
                            <h1 className="font-serif text-5xl sm:text-7xl font-semibold tracking-tight text-white leading-[0.95] mb-10">
                                {T("re_hero_title", "Real Estate & Construction — ")}<span className="gold-gradient italic">{T("re_hero_title_gold", "Building Sustainable Infrastructure")}</span>
                            </h1>
                        </RevealSection>

                        <RevealSection delay={400}>
                            <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                                {T("re_hero_desc", "From industrial complexes to residential communities and strategic infrastructure, Anago Group develops sustainable real estate projects that shape Africa's urban landscape.")}
                            </p>
                        </RevealSection>

                        <RevealSection delay={600} className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })}
                                className="group relative px-10 py-5 bg-gold-500 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold-500/20"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-navy-950 flex items-center gap-3">
                                    {T("re_hero_cta1", "Explore Our Projects")}
                                    <ArrowDownRight className="w-4 h-4" />
                                </span>
                            </button>

                            <button onClick={() => router.push("/contact")} className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3 group">
                                <Mail className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                {T("re_hero_cta2", "Partner With Us")}
                            </button>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ========== ABOUT SECTION (7/5 Editorial Layout) ========== */}
            <section className="py-24 lg:py-40 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-7">
                            <RevealSection>
                                <div className="inline-flex items-center gap-3 mb-8">
                                    <div className="w-12 h-[1px] bg-gold-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500">{T("re_about_h1", "Green Building")}</span>
                                </div>

                                <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-10" style={{ color: "var(--text-primary)" }}>
                                    {T("re_about_title", "Shaping Africa's Built Environment")}
                                </h2>

                                <div className="space-y-8 mb-12">
                                    <p className="text-lg lg:text-xl leading-relaxed font-light opacity-80" style={{ color: "var(--text-secondary)" }}>
                                        {T("re_about_p1", "Anago Group's Real Estate & Construction division is a cornerstone of our vision for African development. We design, develop, and deliver world-class real estate projects.")}
                                    </p>
                                    <p className="text-base leading-relaxed opacity-70" style={{ color: "var(--text-tertiary)" }}>
                                        {T("re_about_p2", "Our integrated approach combines architectural innovation with sustainable construction practices, ensuring every project meets international standards while respecting local contexts.")}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        T("re_act1_tag1", "Industrial Facilities"), T("re_about_h2", "Housing Development"),
                                        T("re_about_h3", "Green Construction"), T("re_about_h4", "Strategic Infrastructure")
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all border group-hover:border-gold-500/50" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                                                <CheckCircle className="w-5 h-5 text-gold-500" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-sm font-bold tracking-wide uppercase" style={{ color: "var(--text-primary)" }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </RevealSection>
                        </div>

                        <div className="lg:col-span-5">
                            <RevealSection>
                                <div className="relative aspect-4/3 lg:aspect-square rounded-4xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/realestate/architectural-detail.jpg"
                                        alt="Modern Architectural Detail"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
                                        <Compass className="w-8 h-8 text-gold-400" strokeWidth={1} />
                                    </div>

                                    <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                                        <p className="text-white font-bold tracking-widest text-[10px] uppercase mb-2">{T("re_sustainable_div_title", "Sustainable Design Division")}</p>
                                        <p className="text-white/70 text-xs leading-relaxed">{T("re_emission_desc", "40% Lower Emissions through sustainable tech")}</p>
                                    </div>
                                </div>
                            </RevealSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== ACTIVITIES GRID ========== */}
            <section id="activities" className="py-24 lg:py-40 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <RevealSection>
                            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-10">
                                <Building2 className="w-8 h-8 text-gold-500" />
                            </div>
                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                {T("re_activity_title", "Development Activities")}
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto font-light opacity-60" style={{ color: "var(--text-secondary)" }}>
                                {T("re_activity_subtitle", "Integrated real estate and construction services spanning the full project lifecycle.")}
                            </p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, idx) => (
                            <RevealSection key={idx} delay={idx * 100}>
                                <div className="card-premium group relative p-10 rounded-3xl border h-full transition-all duration-500 hover:translate-y-[-10px] overflow-hidden shadow-sm" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="activity-card-number" style={{ color: "var(--text-primary)" }}>{activity.id}</div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${activity.color === 'green' ? 'bg-emerald-600 text-white' : activity.color === 'gold' ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-white shadow-xl'}`}>
                                        {activity.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{activity.title}</h3>
                                    <p className="text-sm leading-relaxed mb-8 opacity-60" style={{ color: "var(--text-secondary)" }}>{activity.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {activity.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-color)", color: "var(--text-tertiary)" }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gold-500 group-hover:gap-5 transition-all">
                                        <span>{T("learn_more", "Learn more")}</span>
                                        <ArrowRight className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== METHODOLOGY SECTION ========== */}
            <section className="py-24 lg:py-40 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-10" />
                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                {T("re_process_title", "Development Methodology")}
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto font-light opacity-60" style={{ color: "var(--text-secondary)" }}>
                                {T("re_process_subtitle", "A proven methodology delivering world-class developments from concept to completion.")}
                            </p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { id: 1, title: T("re_proc1_title", "Vision & Feasibility"), desc: T("re_proc1_desc", "Market analysis, site selection, and feasibility studies."), icon: <Maximize2 className="w-6 h-6" /> },
                            { id: 2, title: T("re_proc2_title", "Design & Planning"), desc: T("re_proc2_desc", "Architecture, engineering, and regulatory approvals."), icon: <PencilRuler className="w-6 h-6" /> },
                            { id: 3, title: T("re_proc3_title", "Build & Deliver"), desc: T("re_proc3_desc", "Construction management and quality control."), icon: <Factory className="w-6 h-6" /> },
                            { id: 4, title: T("re_proc4_title", "Manage & Grow"), desc: T("re_proc4_desc", "Property management and asset optimization."), icon: <KeyRound className="w-6 h-6" /> }
                        ].map((step, idx) => (
                            <RevealSection key={idx} delay={idx * 100} className="relative pt-12 text-center group">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl border-4 flex items-center justify-center z-10 bg-card-bg group-hover:bg-gold-400 group-hover:scale-110 transition-all duration-500 shadow-xl" style={{ borderColor: "var(--bg-primary)" }}>
                                    <div className="text-gold-400 group-hover:text-navy-800 transition-colors">{step.icon}</div>
                                </div>
                                {idx < 3 && (
                                    <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] opacity-10" style={{ backgroundColor: "var(--text-primary)" }} />
                                )}
                                <h4 className="text-sm font-bold uppercase tracking-wider mb-3 mt-8" style={{ color: "var(--text-primary)" }}>{step.title}</h4>
                                <p className="text-xs opacity-50 leading-relaxed max-w-[200px] mx-auto" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section id="contact-cta" className="py-24 lg:py-48 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/realestate/hero-cinematic.jpg"
                        alt="Contact Real Estate"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-navy-950 theme-transition" style={{ backgroundColor: isLight ? "var(--bg-secondary)" : "var(--section-dark)" }} />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? 'black' : 'white'} 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <RevealSection>
                        <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-10">
                            <Mail className="w-8 h-8 text-gold-400" />
                        </div>
                        <h2 className="font-serif text-4xl lg:text-7xl font-semibold tracking-tight mb-10" style={{ color: "var(--text-primary)" }}>
                            {T("re_cta_title", "Ready to Build Something Extraordinary?")}
                        </h2>
                        <p className="text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed opacity-70" style={{ color: "var(--text-secondary)" }}>
                            {T("re_cta_desc", "Partner with Anago Group's Real Estate & Construction division for sustainable, world-class results across Africa.")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-12 py-6 bg-gold-500 rounded-2xl text-navy-950 text-xs font-bold uppercase tracking-widest shadow-2xl shadow-gold-500/20 hover:scale-105 transition-all"
                            >
                                {T("re_cta_btn1", "Discuss Your Project")}
                            </button>
                            <button className="px-12 py-6 rounded-2xl border border-border-color bg-card-bg text-text-primary text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}>
                                {T("re_cta_btn2", "Download Portfolio")}
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    );
};

export default RealEstateSectorPage;
