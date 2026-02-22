"use client";

import React, { useEffect, useRef, useState } from "react";
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
    Building
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection";

const RealEstateSectorPage = () => {
    const { T } = useAppContext();
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
            color: "bg-navy-900"
        },
        {
            id: "02",
            title: T("re_act2_title", "Housing & Residential Development"),
            desc: T("re_act2_desc", "Development of quality housing projects from affordable social housing to premium residential estates."),
            tags: [T("re_act2_tag1", "Social Housing"), T("re_act2_tag2", "Premium Estates"), T("re_act2_tag3", "Mixed-Use")],
            icon: Home,
            color: "bg-linear-to-br from-gold-500 to-gold-400",
            iconColor: "text-navy-900"
        },
        {
            id: "03",
            title: T("re_act3_title", "Strategic Infrastructure Development"),
            desc: T("re_act3_desc", "Construction of roads, bridges, utilities, and critical public infrastructure that connect communities."),
            tags: [T("re_act3_tag1", "Roads & Bridges"), T("re_act3_tag2", "Utilities"), T("re_act3_tag3", "Public Works")],
            icon: Landmark,
            color: "bg-navy-600"
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
            iconColor: "text-navy-900"
        },
        {
            title: T("re_val3_title", "Pan-African Presence"),
            desc: T("re_val3_desc", "Active across 12+ countries with deep understanding of local markets and regulation."),
            icon: Globe,
            color: "bg-white/10"
        },
        {
            title: T("re_val4_title", "Integrated Value Chain"),
            desc: T("re_val4_desc", "Leveraging Group divisions for machinery and materials, creating unique cost efficiencies."),
            icon: Layers,
            color: "bg-white/5"
        },
        {
            title: T("re_val5_title", "Community Impact"),
            desc: T("re_val5_desc", "Prioritizing local employment, skills transfer, and social infrastructure for lasting impact."),
            icon: Users,
            color: "bg-white/5"
        },
        {
            title: T("re_val6_title", "Investment-Grade Quality"),
            desc: T("re_val6_desc", "Ensuring international construction standards and transparent governance for strong returns."),
            icon: TrendingUp,
            color: "bg-white/5"
        }
    ];

    return (
        <div className="bg-navy-900 text-white min-h-screen selection:bg-gold-500/30">
            <style jsx global>{`
        @keyframes particleDrift {
          0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate3d(var(--drift-x), var(--drift-y), 0) scale(0.5); opacity: 0; }
        }
        .architectural-grid {
          background-image: linear-gradient(rgba(200, 150, 46, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(200, 150, 46, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .skyline-element {
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(200, 150, 46, 0.06);
        }
      `}</style>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-linear-to-br from-navy-900 via-navy-800 to-navy-950">
                <div className="absolute inset-0 architectural-grid opacity-60" />

                {/* Parallax elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden" ref={heroParticlesRef} />

                {/* Skyline Silhouettes */}
                <div className="absolute bottom-0 left-[5%] w-10 h-[35%] skyline-element opacity-60" />
                <div className="absolute bottom-0 left-[8%] w-14 h-[55%] skyline-element opacity-50" />
                <div className="absolute bottom-0 left-[14%] w-9 h-[40%] skyline-element opacity-40" />
                <div className="absolute bottom-0 right-[10%] w-12 h-[50%] skyline-element opacity-40" />
                <div className="absolute bottom-0 right-[15%] w-16 h-[70%] skyline-element opacity-30" />
                <div className="absolute bottom-0 right-[5%] w-11 h-[38%] skyline-element opacity-45" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48 lg:py-32 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7">
                            {/* Breadcrumb */}
                            <RevealSection className="flex items-center gap-2 mb-12">
                                <span className="text-xs font-medium text-white/40">{T("nav_home", "Home")}</span>
                                <ChevronRight className="w-3 h-3 text-white/20" />
                                <span className="text-xs font-medium text-white/40">{T("nav_industries", "Industries")}</span>
                                <ChevronRight className="w-3 h-3 text-white/20" />
                                <span className="text-xs font-medium text-gold-400">{T("s_realestate_title", "Real Estate & Construction")}</span>
                            </RevealSection>

                            <RevealSection delay={0.1} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-10">
                                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                                <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("re_hero_badge", "Strategic Sector 03 · Building Tomorrow")}</span>
                            </RevealSection>

                            <RevealSection delay={0.2}>
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-8">
                                    {T("re_hero_title", "Real Estate & Construction — ")}
                                    <span className="bg-linear-to-r from-gold-400 via-gold-200 to-gold-500 bg-clip-text text-transparent">
                                        {T("re_hero_title_gold", "Building Sustainable Infrastructure")}
                                    </span>
                                </h1>
                            </RevealSection>

                            <RevealSection delay={0.3}>
                                <p className="text-lg text-white/55 leading-relaxed max-w-xl mb-14">
                                    {T("re_hero_desc", "From industrial complexes to residential communities and strategic infrastructure, Anago Group develops sustainable real estate projects that shape Africa's urban landscape.")}
                                </p>
                            </RevealSection>

                            <RevealSection delay={0.4} className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-linear-to-r from-gold-600 to-gold-400 text-navy-950 font-bold rounded-xl flex items-center gap-2 hover:shadow-[0_0_30px_rgba(200,150,46,0.3)] transition-all">
                                    {T("re_hero_cta1", "Explore Our Projects")}
                                    <ArrowDownRight className="w-4 h-4" />
                                </button>
                                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all flex items-center gap-2">
                                    {T("re_hero_cta2", "Partner With Us")}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </RevealSection>
                        </div>

                        <div className="lg:col-span-5 hidden lg:block">
                            <RevealSection delay={0.5} className="relative">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative z-10 overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-navy-800 border border-white/10 flex items-center justify-center">
                                            <Building2 className="w-6 h-6 text-gold-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-white uppercase tracking-widest">{T("re_division_title")}</h3>
                                            <p className="text-xs text-white/40 font-medium">{T("re_org_tagline")}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { label: T("re_stat_surface"), value: "1.2M+ sqm" },
                                            { label: T("re_stat_markets"), value: "12+ Countries" },
                                            { label: T("re_act5_title"), value: "Green Certified", highlight: true },
                                            { label: T("re_stat_projects"), value: "80+ Developments" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                                                <span className="text-xs text-white/40 font-medium">{item.label}</span>
                                                <span className={`text-xs font-bold ${item.highlight ? 'text-emerald-400' : 'text-white/80'}`}>{item.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center">
                                            <Leaf className="w-5 h-5 text-gold-400" />
                                        </div>
                                        <p className="text-[10px] leading-relaxed text-white/50 tracking-wide uppercase font-black whitespace-pre-line">
                                            {T("re_emission_desc")}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative architectural elements */}
                                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-navy-800 border border-gold-500/30 flex items-center justify-center animate-bounce duration-[3000ms] shadow-2xl z-20">
                                    <Ruler className="w-8 h-8 text-gold-400" />
                                </div>
                                <div className="absolute -bottom-10 -left-10 w-24 h-24 border-l border-b border-gold-500/20" />
                            </RevealSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Quickbar */}
            <div className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-navy-900/40 p-8 flex flex-col items-center justify-center group transition-colors hover:bg-white/5"
                            onMouseEnter={() => setActiveStat(idx)}
                            onMouseLeave={() => setActiveStat(null)}
                        >
                            <stat.icon className={`w-6 h-6 mb-4 transition-colors ${activeStat === idx ? 'text-gold-400' : 'text-white/30'}`} />
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold tracking-tighter text-white">{stat.value}</span>
                                <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">{stat.suffix}</span>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mt-2">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Section */}
            <section className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <RevealSectionLeft className="relative group">
                            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-linear-to-br from-navy-800 to-navy-950" />
                                <div className="absolute inset-0 architectural-grid opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                                            <Building className="w-12 h-12 text-gold-400/30" strokeWidth={1} />
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{T("re_sustainable_div_title")}</p>
                                    </div>
                                </div>

                                {/* Architectural Frame */}
                                <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold-500/20" />
                                <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold-500/20" />
                            </div>

                            {/* Floating Highlight Card */}
                            <div className="absolute -bottom-8 -right-8 bg-navy-800 border border-white/10 p-6 rounded-2xl shadow-2xl max-w-[240px] hidden sm:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                        <Leaf className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h4 className="text-sm font-bold text-white">{T("re_about_h3", "Green Building")}</h4>
                                </div>
                                <p className="text-xs text-white/50 leading-relaxed font-medium">
                                    {T("re_act5_desc", "Sustainable design reducing footprints by 40% while maximizing comfort.")}
                                </p>
                            </div>

                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                                <Compass className="w-6 h-6" />
                            </div>
                        </RevealSectionLeft>

                        <RevealSectionRight>
                            <div className="w-16 h-1 bg-linear-to-r from-gold-600 to-gold-400 rounded-full mb-8" />
                            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
                                {T("re_about_title", "Shaping Africa's Built Environment Through Sustainable Development")}
                            </h2>
                            <p className="text-lg text-white/50 leading-relaxed mb-6">
                                {T("re_about_p1", "Anago Group's Real Estate & Construction division is a cornerstone of our vision for African development. We design, develop, and deliver world-class real estate projects.")}
                            </p>
                            <p className="text-lg text-white/50 leading-relaxed mb-10">
                                {T("re_about_p2", "Our integrated approach combines architectural innovation with sustainable construction practices, ensuring every project meets international standards while respecting local contexts.")}
                            </p>

                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
                                {[
                                    T("re_about_h1", "Industrial Facilities"),
                                    T("re_about_h2", "Housing Development"),
                                    T("re_about_h3", "Green Construction"),
                                    T("re_about_h4", "Strategic Infrastructure")
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-md bg-gold-400/10 flex items-center justify-center border border-gold-400/20">
                                            <div className="w-2 h-2 rounded-full bg-gold-400" />
                                        </div>
                                        <span className="text-sm font-bold text-white/80">{item}</span>
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
            <section className="py-24 lg:py-32 bg-navy-950/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">{T("re_activity_title", "Development Activities")}</h2>
                        <p className="text-white/40 max-w-2xl mx-auto font-medium">{T("re_activity_subtitle", "Integrated real estate and construction services spanning the full project lifecycle.")}</p>
                    </RevealSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((act, idx) => (
                            <RevealSection key={idx} delay={idx * 0.1} className="group relative">
                                <div className="h-full bg-navy-900 border border-white/5 p-10 rounded-[2.5rem] transition-all duration-500 hover:border-gold-500/20 hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                                    {/* Card ID Indicator */}
                                    <span className="absolute top-8 right-10 text-5xl font-black text-white/[0.03] italic">{act.id}</span>

                                    <div className={`w-16 h-16 rounded-2xl ${act.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                                        <act.icon className={`w-8 h-8 ${act.iconColor || 'text-white'}`} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-gold-400">{act.title}</h3>
                                    <p className="text-sm text-white/40 leading-relaxed mb-8 h-12 overflow-hidden">{act.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {act.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 text-white/50 px-3 py-1.5 rounded-lg border border-white/5">
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

            {/* Value Prop & Process Section */}
            <section className="py-24 lg:py-32 relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full architectural-grid opacity-20 pointer-events-none" />
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="mb-20">
                        <div className="h-1.5 w-24 bg-gold-500 rounded-full mb-8" />
                        <h2 className="text-3xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-4">{T("re_value_title", "Value Proposition")}</h2>
                        <p className="text-white/40 max-w-xl font-medium">{T("re_value_subtitle", "Why governments and investors trust Anago Group.")}</p>
                    </RevealSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                        {valueProps.map((prop, idx) => (
                            <RevealSection key={idx} delay={idx * 0.1} className="group p-1 bg-white/5 rounded-3xl overflow-hidden hover:bg-gold-500 transition-colors duration-500">
                                <div className="h-full bg-navy-900 border border-white/5 p-8 rounded-[1.4rem] transition-all">
                                    <div className={`w-14 h-14 rounded-2xl ${prop.color} flex items-center justify-center mb-6 shadow-xl`}>
                                        <prop.icon className={`w-7 h-7 ${prop.iconColor || 'text-white'}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{prop.title}</h3>
                                    <p className="text-sm text-white/40 leading-relaxed font-medium">{prop.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>

                    {/* Process Methodology */}
                    <RevealSection className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4">{T("re_process_title", "Development Methodology")}</h2>
                        <p className="text-white/30 max-w-2xl mx-auto italic">{T("re_process_subtitle", "A proven lifecycle from concept to asset management.")}</p>
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
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-navy-800 border-4 border-navy-950 flex items-center justify-center z-10 font-black text-xs text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-500">
                                    {step.id}
                                </div>
                                {idx < 3 && (
                                    <div className="hidden lg:block absolute top-[2.5rem] left-[calc(50%+24px)] w-[calc(100%-48px)] h-[2px] bg-white/5" />
                                )}

                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 leading-relaxed">{step.title}</h4>
                                <p className="text-xs text-white/30 leading-relaxed max-w-[200px] mx-auto group-hover:text-white/50 transition-colors">{step.desc}</p>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Quote */}
            <section className="py-24 lg:py-40 bg-navy-950 relative overflow-hidden">
                <div className="absolute inset-0 architectural-grid opacity-10" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="w-16 h-1 w-24 bg-gold-400 mx-auto mb-12" />
                        <blockquote className="text-2xl lg:text-4xl font-serif italic text-white/80 leading-snug mb-12 select-none">
                            &quot;{T("re_quote", "Africa's urbanization is the greatest construction opportunity of the 21st century. We create the foundations for thriving communities.")}&quot;
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-navy-800 to-navy-900 flex items-center justify-center border border-white/10">
                                <span className="text-xs font-black text-gold-400">AG</span>
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-white tracking-wide uppercase">{T("re_quote_author")}</p>
                                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{T("re_quote_org")}</p>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-950" />
                <div className="absolute inset-0 architectural-grid opacity-30" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-navy-950 to-transparent" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                            <span className="text-[10px] font-black text-gold-400 tracking-[0.2em] uppercase">{T("re_hero_title_gold", "Develop With Us")}</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-8 italic">{T("re_cta_title", "Ready to Build Something Extraordinary?")}</h2>

                        <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 font-medium">
                            {T("re_cta_desc", "Partner with Anago Group for sustainable, world-class results across Africa.")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-10 py-5 bg-linear-to-r from-gold-600 to-gold-400 text-navy-950 font-black rounded-2xl flex items-center gap-3 uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">
                                {T("re_cta_btn1", "Discuss Your Project")}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-10 py-5 bg-white/5 border border-white/10 font-black rounded-2xl transition-all flex items-center gap-3 uppercase tracking-widest text-xs hover:bg-white/10">
                                <KeyRound className="w-5 h-5" />
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
