"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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
    Download
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection";

const RealEstateSectorPage = () => {
    const { T, theme } = useAppContext();
    const isLight = theme === "light";
    const router = useRouter();
    const [activeStat, setActiveStat] = useState<number | null>(null);
    const heroParticlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize hero particles
        if (heroParticlesRef.current) {
            const container = heroParticlesRef.current;
            container.innerHTML = "";
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement("div");
                particle.className = "hero-particle absolute rounded-full";
                const size = Math.random() * 3 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.background = "rgba(200, 150, 46, 0.4)";
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;

                const driftX = Math.random() * 80 - 40;
                const driftY = Math.random() * -100 - 20;
                const duration = 6 + Math.random() * 8;
                const delay = Math.random() * 6;

                particle.style.setProperty("--drift-x", `${driftX}px`);
                particle.style.setProperty("--drift-y", `${driftY}px`);
                particle.style.animation = `particleDrift ${duration}s ease-in-out ${delay}s infinite`;

                container.appendChild(particle);
            }
        }
    }, []);

    const stats = [
        { label: T("re_stat_markets", "Active Markets"), value: 12, suffix: "+", icon: MapPin },
        { label: T("re_stat_projects", "Projects Delivered"), value: 80, suffix: "+", icon: Building2 },
        { label: T("re_stat_surface", "Built Surface Area"), value: 1200, suffix: "K+ sqm", icon: Maximize2 },
        { label: T("re_stat_housing", "Housing Units Built"), value: 5000, suffix: "+", icon: Home },
    ];

    const activities = [
        {
            id: "01",
            title: T("re_act1_title", "Industrial Real Estate & Facilities"),
            desc: T("re_act1_desc", "Design and construction of industrial parks, processing plants, warehousing complexes, and specialized facilities."),
            tags: [T("re_act1_tag1", "Industrial Parks"), T("re_act1_tag2", "Processing Plants"), T("re_act1_tag3", "Warehousing")],
            icon: Factory,
            color: "bg-[#1E293B]"
        },
        {
            id: "02",
            title: T("re_act2_title", "Housing & Residential Development"),
            desc: T("re_act2_desc", "Development of quality housing projects from affordable social housing to premium residential estates."),
            tags: [T("re_act2_tag1", "Social Housing"), T("re_act2_tag2", "Premium Estates"), T("re_act2_tag3", "Mixed-Use")],
            icon: Home,
            color: "bg-linear-to-br from-gold-500 to-gold-400",
            iconColor: "text-[#0A1628]"
        },
        {
            id: "03",
            title: T("re_act3_title", "Strategic Infrastructure Development"),
            desc: T("re_act3_desc", "Construction of roads, bridges, utilities, and critical public infrastructure that connect communities."),
            tags: [T("re_act3_tag1", "Roads & Bridges"), T("re_act3_tag2", "Utilities"), T("re_act3_tag3", "Public Works")],
            icon: Landmark,
            color: "bg-[#162240]"
        },
        {
            id: "04",
            title: T("re_act4_title", "Commercial & Office Spaces"),
            desc: T("re_act4_desc", "Modern office towers, retail centers, and mixed-use commercial complexes that attract investment."),
            tags: [T("re_act4_tag1", "Office Towers"), T("re_act4_tag2", "Retail Centers"), T("re_act4_tag3", "Smart Buildings")],
            icon: Store,
            color: "bg-slate-700"
        },
        {
            id: "05",
            title: T("re_act5_title", "Sustainable Design & Green Building"),
            desc: T("re_act5_desc", "Integration of sustainable architecture, renewable energy, and eco-friendly materials."),
            tags: [T("re_act5_tag1", "Solar Integration"), T("re_act5_tag2", "Water Mgmt"), T("re_act5_tag3", "Eco Materials")],
            icon: Trees,
            color: "bg-linear-to-br from-emerald-600 to-emerald-500"
        },
        {
            id: "06",
            title: T("re_act6_title", "Property & Asset Management"),
            desc: T("re_act6_desc", "Full-lifecycle management including facility maintenance, tenant relations, and portfolio optimization."),
            tags: [T("re_act6_tag1", "Facility Mgmt"), T("re_act6_tag2", "Asset Optimization"), T("re_act6_tag3", "Portfolio")],
            icon: KeyRound,
            color: "bg-gold-600"
        }
    ];

    const valueProps = [
        {
            title: T("re_val1_title", "Sustainable Development"),
            desc: T("re_val1_desc", "Integrating renewable energy, water recycling, and green certifications to reduce impact."),
            icon: Leaf,
            color: "bg-linear-to-br from-emerald-600 to-emerald-500"
        },
        {
            title: T("re_val2_title", "Technical Expertise"),
            desc: T("re_val2_desc", "Multidisciplinary teams of architects and engineers delivering world-class capabilities."),
            icon: PencilRuler,
            color: "bg-linear-to-br from-gold-500 to-gold-400",
            iconColor: "text-[#0A1628]"
        },
        {
            title: T("re_val3_title", "Pan-African Presence"),
            desc: T("re_val3_desc", "Active across 12+ countries with deep understanding of local markets and regulation."),
            icon: Globe,
            color: isLight ? "var(--gold-bg)" : "rgba(255,255,255,0.05)"
        },
        {
            title: T("re_val4_title", "Integrated Value Chain"),
            desc: T("re_val4_desc", "Leveraging Group divisions for machinery and materials, creating unique cost efficiencies."),
            icon: Layers,
            color: isLight ? "var(--gold-bg)" : "rgba(255,255,255,0.05)"
        },
        {
            title: T("re_val5_title", "Community Impact"),
            desc: T("re_val5_desc", "Prioritizing local employment, skills transfer, and social infrastructure for lasting impact."),
            icon: Users,
            color: isLight ? "var(--gold-bg)" : "rgba(255,255,255,0.05)"
        },
        {
            title: T("re_val6_title", "Investment-Grade Quality"),
            desc: T("re_val6_desc", "Ensuring international construction standards and transparent governance for strong returns."),
            icon: TrendingUp,
            color: isLight ? "var(--gold-bg)" : "rgba(255,255,255,0.05)"
        }
    ];

    return (
        <div className="block min-h-screen selection:bg-gold-500/30 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
            <style jsx global>{`
        @keyframes particleDrift {
          0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate3d(var(--drift-x), var(--drift-y), 0) scale(0.5); opacity: 0; }
        }
        .architectural-grid {
          background-image: linear-gradient(${isLight ? 'rgba(10, 22, 40, 0.04)' : 'rgba(200, 150, 46, 0.03)'} 1px, transparent 1px),
                            linear-gradient(90deg, ${isLight ? 'rgba(10, 22, 40, 0.04)' : 'rgba(200, 150, 46, 0.03)'} 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .skyline-element {
          background: ${isLight ? 'rgba(10, 22, 40, 0.03)' : 'rgba(255, 255, 255, 0.02)'};
          border-top: 1px solid ${isLight ? 'rgba(10, 22, 40, 0.05)' : 'rgba(200, 150, 46, 0.06)'};
        }
        .re-hero-overlay {
            position: absolute;
            inset: 0;
            background: ${isLight
                    ? 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 100%)'
                    : 'linear-gradient(to bottom, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0.8) 100%)'};
            z-index: 10;
        }
      `}</style>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden theme-transition" style={{ background: isLight ? "var(--hero-bg)" : "linear-gradient(135deg, #0A1628 0%, #162240 50%, #0D1B2A 100%)" }}>
                <div className="absolute inset-0 architectural-grid opacity-60 z-1" />
                <div className="re-hero-overlay" />

                {/* Parallax elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-2" ref={heroParticlesRef} />

                {/* Skyline Silhouettes */}
                <div className="absolute bottom-0 left-[5%] w-10 h-[35%] skyline-element opacity-60 z-3" />
                <div className="absolute bottom-0 left-[8%] w-14 h-[55%] skyline-element opacity-50 z-3" />
                <div className="absolute bottom-0 left-[14%] w-9 h-[40%] skyline-element opacity-40 z-3" />
                <div className="absolute bottom-0 right-[10%] w-12 h-[50%] skyline-element opacity-40 z-3" />
                <div className="absolute bottom-0 right-[15%] w-16 h-[70%] skyline-element opacity-30 z-3" />
                <div className="absolute bottom-0 right-[5%] w-11 h-[38%] skyline-element opacity-45 z-3" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48 lg:py-32 relative z-20 w-full">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col items-center w-full">
                            {/* Breadcrumb */}


                            <RevealSection delay={0.1} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-10">
                                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                                <span className="text-xs text-center font-medium text-gold-400 tracking-wider uppercase">{T("re_hero_badge", "Strategic Sector 03 \u00B7 Building Tomorrow")}</span>
                            </RevealSection>

                            <RevealSection delay={0.2}>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold tracking-tight leading-tight mb-8" style={{ color: "var(--nav-text-hero)" }}>
                                    {T("re_hero_title", "Real Estate & Construction \u2014 ")}
                                    <span className="gold-gradient text-center">
                                        {T("re_hero_title_gold", "Building Sustainable Infrastructure")}
                                    </span>
                                </h1>
                            </RevealSection>

                            <RevealSection delay={0.3}>
                                <p className="text-lg text-center leading-relaxed max-w-xl mb-14 opacity-70" style={{ color: "var(--nav-text-hero)" }}>
                                    {T("re_hero_desc", "From industrial complexes to residential communities and strategic infrastructure, Anago Group develops sustainable real estate projects that shape Africa's urban landscape.")}
                                </p>
                            </RevealSection>

                            <RevealSection delay={0.4} className="flex flex-wrap gap-4">
                                <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })} className="btn-gold px-8 py-4 text-sm font-bold rounded-xl flex items-center gap-2">
                                    {T("re_hero_cta1", "Explore Our Projects")}
                                    <ArrowDownRight className="w-4 h-4" />
                                </button>
                                <button className="btn-outline-light px-8 py-4 text-sm rounded-xl font-bold transition-all flex items-center gap-2">
                                    {T("re_hero_cta2", "Partner With Us")}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </RevealSection>
                        </div>


                    </div>
                </div>
            </section>



            {/* About Section */}
            <section className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <RevealSectionLeft className="relative group">
                            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: "var(--border-color)" }}>
                                <div className="absolute inset-0" style={{ background: isLight ? "var(--bg-secondary)" : "linear-gradient(135deg, #0f1d33 0%, #0A1628 100%)" }} />
                                <div className="absolute inset-0 architectural-grid opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 mx-auto rounded-3xl border flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)" }}>
                                            <Building className="w-12 h-12 opacity-30" style={{ color: "var(--gold-primary)" }} strokeWidth={1} />
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20" style={{ color: "var(--text-primary)" }}>{T("re_sustainable_div_title", "Anago Sustainable Living")}</p>
                                    </div>
                                </div>

                                {/* Architectural Frame */}
                                <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 opacity-20" style={{ borderColor: "var(--gold-primary)" }} />
                                <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 opacity-20" style={{ borderColor: "var(--gold-primary)" }} />
                            </div>

                            {/* Floating Highlight Card */}
                            <div className="absolute -bottom-8 -right-8 border p-6 rounded-2xl shadow-2xl max-w-60 hidden sm:block" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)" }}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}>
                                        <Leaf className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{T("re_about_h1", "Green Building")}</h4>
                                </div>
                                <p className="text-xs opacity-50 leading-relaxed font-medium" style={{ color: "var(--text-secondary)" }}>
                                    {T("re_act5_desc", "Sustainable design reducing footprints by 40% while maximizing comfort.")}
                                </p>
                            </div>

                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl border flex items-center justify-center" style={{ backgroundColor: "var(--gold-bg)", borderColor: "var(--gold-primary)", color: "var(--gold-primary)" }}>
                                <Compass className="w-6 h-6" />
                            </div>
                        </RevealSectionLeft>

                        <RevealSectionRight>
                            <div className="w-16 h-1 bg-linear-to-r from-gold-600 to-gold-400 rounded-full mb-8" />
                            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                {T("re_about_title", "Shaping Africa's Built Environment Through Sustainable Development")}
                            </h2>
                            <p className="text-lg leading-relaxed mb-6 opacity-60" style={{ color: "var(--text-secondary)" }}>
                                {T("re_about_p1", "Anago Group's Real Estate & Construction division is a cornerstone of our vision for African development. We design, develop, and deliver world-class real estate projects.")}
                            </p>
                            <p className="text-lg leading-relaxed mb-10 opacity-60" style={{ color: "var(--text-secondary)" }}>
                                {T("re_about_p2", "Our integrated approach combines architectural innovation with sustainable construction practices, ensuring every project meets international standards while respecting local contexts.")}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                                {[
                                    T("re_act1_tag1", "Industrial Facilities"),
                                    T("re_about_h2", "Housing Development"),
                                    T("re_about_h3", "Green Construction"),
                                    T("re_about_h4", "Strategic Infrastructure")
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-md flex items-center justify-center border" style={{ backgroundColor: "var(--gold-bg)", borderColor: "var(--gold-primary)" }}>
                                            <div className="w-2 h-2 rounded-full bg-gold-400" />
                                        </div>
                                        <span className="text-sm font-bold opacity-80" style={{ color: "var(--text-primary)" }}>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="text-sm font-black uppercase tracking-widest text-gold-400 inline-flex items-center gap-3 group">
                                {T("re_hero_cta1", "Discover Our Projects")}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                            </button>
                        </RevealSectionRight>
                    </div>
                </div>
            </section>

            {/* Activity Grid */}
            <section id="activities" className="py-24 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>{T("re_activity_title", "Development Activities")}</h2>
                        <p className="opacity-40 max-w-2xl mx-auto font-medium" style={{ color: "var(--text-primary)" }}>{T("re_activity_subtitle", "Integrated real estate and construction services spanning the full project lifecycle.")}</p>
                    </RevealSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((act, idx) => (
                            <RevealSection key={idx} delay={idx * 0.1} className="group relative">
                                <div className="h-full border p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden shadow-sm" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    {/* Card ID Indicator */}
                                    <span className="absolute top-8 right-10 text-5xl font-black opacity-5 italic" style={{ color: "var(--text-primary)" }}>{act.id}</span>

                                    <div className={`w-16 h-16 rounded-2xl ${act.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                                        <act.icon className={`w-8 h-8 ${act.iconColor || 'text-white'}`} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 transition-colors group-hover:text-gold-400" style={{ color: "var(--text-primary)" }}>{act.title}</h3>
                                    <p className="text-sm opacity-50 leading-relaxed mb-8 h-12 overflow-hidden" style={{ color: "var(--text-secondary)" }}>{act.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {act.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-color)", color: "var(--text-tertiary)" }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-1.5 text-xs font-black text-gold-500 tracking-widest uppercase group-hover:gap-4 transition-all">
                                        <span>{T("learn_more", "Learn more")}</span>
                                        <ArrowRight className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Prop Section */}
            <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
                {/* Background Accents */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full architectural-grid opacity-20 pointer-events-none" />
                <div className="absolute top-1/2 right-0 w-150 h-150 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="mb-20">
                        <div className="h-1.5 w-24 bg-gold-500 rounded-full mb-8" />
                        <h2 className="text-3xl lg:text-6xl font-black tracking-tighter uppercase mb-4" style={{ color: "var(--text-primary)" }}>{T("re_value_title", "Value Proposition")}</h2>
                        <p className="opacity-40 max-w-xl font-medium" style={{ color: "var(--text-primary)" }}>{T("re_value_subtitle", "Why governments and investors trust Anago Group.")}</p>
                    </RevealSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                        {valueProps.map((prop, idx) => (
                            <RevealSection key={idx} delay={idx * 0.1} className="group p-1 rounded-3xl overflow-hidden hover:bg-gold-500 transition-colors duration-500" style={{ backgroundColor: "var(--border-color)" }}>
                                <div className="h-full border p-8 rounded-[1.4rem] transition-all" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${prop.color.startsWith('bg-') ? prop.color : ''}`} style={{ backgroundColor: prop.color.startsWith('var') || prop.color.startsWith('rgba') ? prop.color : '' }}>
                                        <prop.icon className={`w-7 h-7 ${prop.iconColor || 'text-white'}`} style={{ color: prop.iconColor ? '' : (isLight && (prop.color.includes('rgba') || prop.color.includes('var')) ? 'var(--text-primary)' : 'white') }} />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>{prop.title}</h3>
                                    <p className="text-sm opacity-50 leading-relaxed font-medium" style={{ color: "var(--text-secondary)" }}>{prop.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>

                    {/* Process Methodology */}
                    <RevealSection className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("re_process_title", "Development Methodology")}</h2>
                        <p className="opacity-30 max-w-2xl mx-auto italic" style={{ color: "var(--text-primary)" }}>{T("re_process_subtitle", "A proven lifecycle from concept to asset management.")}</p>
                    </RevealSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { id: 1, title: T("re_proc1_title", "Vision & Feasibility"), desc: T("re_proc1_desc", "Market analysis, site selection, and feasibility studies.") },
                            { id: 2, title: T("re_proc2_title", "Design & Planning"), desc: T("re_proc2_desc", "Architecture, engineering, and regulatory approvals.") },
                            { id: 3, title: T("re_proc3_title", "Build & Deliver"), desc: T("re_proc3_desc", "Construction management and quality control.") },
                            { id: 4, title: T("re_proc4_title", "Manage & Grow"), desc: T("re_proc4_desc", "Property management and asset optimization.") }
                        ].map((step, idx) => (
                            <RevealSection key={idx} delay={idx * 0.1} className="relative pt-12 text-center group">
                                {/* Step Number Badge */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 font-black text-xs text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-800 transition-colors duration-500 shadow-md" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--bg-primary)" }}>
                                    {step.id}
                                </div>
                                {idx < 3 && (
                                    <div className="hidden lg:block absolute top-10 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 opacity-10" style={{ backgroundColor: "var(--text-primary)" }} />
                                )}

                                <h4 className="text-sm font-bold uppercase tracking-wider mb-3 leading-relaxed" style={{ color: "var(--text-primary)" }}>{step.title}</h4>
                                <p className="text-xs opacity-30 leading-relaxed max-w-50 mx-auto group-hover:opacity-60 transition-opacity" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Quote */}
            <section className="py-24 lg:py-40 relative theme-transition" style={{ backgroundColor: isLight ? "var(--bg-secondary)" : "#0A1628" }}>
                <div className="absolute inset-0 architectural-grid opacity-10" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="h-1 w-24 bg-gold-400 mx-auto mb-12" />
                        <blockquote className="text-2xl lg:text-4xl font-serif italic leading-snug mb-12 select-none opacity-80" style={{ color: isLight ? "var(--text-primary)" : "white" }}>
                            &quot;{T("re_quote", "Africa's urbanization is the greatest construction opportunity of the 21st century. We create the foundations for thriving communities.")}&quot;
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg" style={{ background: isLight ? "var(--bg-primary)" : "linear-gradient(135deg, #162240, #0A1628)", borderColor: "var(--border-color)" }}>
                                <span className="text-xs font-black text-gold-400">AG</span>
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold tracking-wide uppercase" style={{ color: "var(--text-primary)" }}>{T("re_quote_author", "Anago Group Leadership")}</p>
                                <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>{T("re_quote_org", "Strategic Vision")}</p>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact-cta" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: isLight ? "var(--hero-bg)" : "linear-gradient(135deg, #0A1628 0%, #162240 50%, #0D1B2A 100%)" }}>
                <div className="absolute inset-0 architectural-grid opacity-30" />
                <div className="absolute bottom-0 left-0 w-full h-full" style={{ background: isLight ? "linear-gradient(to top, rgba(255,255,255,0.4), transparent)" : "linear-gradient(to top, #0A1628, transparent)" }} />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                            <span className="text-[10px] font-black text-gold-400 tracking-[0.2em] uppercase">{T("re_develop_with_us", "Develop With Us")}</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 italic" style={{ color: isLight ? "var(--text-primary)" : "white" }}>{T("re_cta_title", "Ready to Build Something Extraordinary?")}</h2>

                        <p className="text-lg opacity-60 max-w-2xl mx-auto mb-12 font-medium" style={{ color: isLight ? "var(--text-secondary)" : "white" }}>
                            {T("re_cta_desc", "Partner with Anago Group for sustainable, world-class results across Africa.")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => router.push("/contact")} className="btn-gold px-10 py-5 text-navy-950 font-black rounded-2xl flex items-center gap-3 uppercase tracking-widest text-xs shadow-xl">
                                {T("re_cta_btn1", "Discuss Your Project")}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="btn-outline-light px-10 py-5 font-black rounded-2xl transition-all flex items-center gap-3 uppercase tracking-widest text-xs">
                                <Download className="w-5 h-5" />
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
