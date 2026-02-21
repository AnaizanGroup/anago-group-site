"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
    ChevronRight, ArrowRight, ArrowDownRight, Gem, Building2, Sprout,
    Settings, Truck, LayoutGrid, BarChart3, FileText, Briefcase,
    Lightbulb, Bell, Plus, Search
} from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"
import { CounterValue } from "@/components/shared/Counter"

const INSIGHTS_DATA = [
    {
        id: 1,
        category: "mining",
        type: "Article",
        date: "Nov 15, 2024",
        readTime: "8 min",
        title: "The Future of Gold Mining in West Africa: Trends & Opportunities",
        desc: "An in-depth analysis of emerging trends in West African gold mining, from sustainable extraction methods and digital transformation to shifting global demand patterns and their impact on local economies.",
        author: "Anago Group Research",
        featured: true,
        bg: "linear-gradient(135deg,#1a1a0a,#2a2008,#1a1a0a)",
        icon: <Gem className="w-10 h-10 text-gold-400/30" strokeWidth={1} />,
        catBadgeBg: "bg-gold-500/90 text-navy-800"
    },
    {
        id: 2,
        category: "real-estate",
        type: "Report",
        date: "Nov 8, 2024",
        readTime: "6 min",
        title: "Building Africa's Future: Infrastructure Development in 2025",
        desc: "How strategic infrastructure investments are reshaping African economies and creating new growth corridors.",
        featured: true,
        bg: "linear-gradient(135deg,#0a1018,#101c2a,#0a1018)",
        icon: <Building2 className="w-8 h-8 text-sky-400/30" strokeWidth={1} />,
        catBadgeBg: "bg-sky-500/90 text-white"
    },
    {
        id: 3,
        category: "agriculture",
        type: "Case Study",
        date: "Oct 28, 2024",
        readTime: "10 min",
        title: "Sahel Food Security: Transforming Agricultural Value Chains",
        desc: "How integrated agri-food complexes are addressing food insecurity and creating sustainable livelihoods in the Sahel region.",
        featured: true,
        bg: "linear-gradient(135deg,#081208,#0c1a0c,#081208)",
        icon: <Sprout className="w-8 h-8 text-green-400/30" strokeWidth={1} />,
        catBadgeBg: "bg-green-600/90 text-white"
    },
    {
        id: 4,
        category: "industrial",
        type: "Perspective",
        date: "Oct 15, 2024",
        readTime: "5 min",
        title: "Digital Twins in African Port Modernization",
        desc: "How digital twin technology is revolutionizing port infrastructure planning and operations management.",
        bg: "linear-gradient(135deg,#0a0f1a,#0f1828,#0a0f1a)",
        icon: <Settings className="w-8 h-8 text-blue-400/30" strokeWidth={1} />,
        catBadgeBg: "bg-blue-600/90 text-white"
    },
    {
        id: 5,
        category: "equipment",
        type: "Article",
        date: "Oct 5, 2024",
        readTime: "7 min",
        title: "Fleet Telematics: Maximizing Uptime in Mining Operations",
        desc: "Advanced IoT-powered equipment monitoring is reducing downtime by 40% across mining corridors.",
        bg: "linear-gradient(135deg,#10101a,#181828,#10101a)",
        icon: <Truck className="w-8 h-8 text-white/20" strokeWidth={1} />,
        catBadgeBg: "bg-steel-600/90 text-white"
    },
    {
        id: 6,
        category: "mining",
        type: "Article",
        date: "Sep 28, 2024",
        readTime: "6 min",
        title: "Responsible Mining Practices: Community Engagement at Bouaflé",
        desc: "Examining how community-first mining approaches yield better environmental, social, and economic outcomes in rural West Africa.",
        bg: "linear-gradient(135deg,#1a1a0a,#2a2008)",
        icon: <Gem className="w-8 h-8 text-gold-400/25" strokeWidth={1} />,
        catBadgeBg: "bg-gold-500/10 text-gold-600"
    },
    {
        id: 7,
        category: "agriculture",
        type: "Case Study",
        date: "Sep 15, 2024",
        readTime: "12 min",
        title: "Cold-Chain Innovation: Reducing Post-Harvest Losses by 60%",
        desc: "A case study on deploying mobile cold storage units across the Sahel to dramatically reduce food waste and improve farmer incomes.",
        bg: "linear-gradient(135deg,#081208,#0c1a0c)",
        icon: <Sprout className="w-8 h-8 text-green-400/25" strokeWidth={1} />,
        catBadgeBg: "bg-green-500/10 text-green-600"
    },
    {
        id: 8,
        category: "real-estate",
        type: "Report",
        date: "Sep 2, 2024",
        readTime: "15 min",
        title: "Abidjan Commercial Real Estate: Market Outlook 2025–2030",
        desc: "Comprehensive market analysis of Abidjan's Grade-A office space, retail, and mixed-use development pipeline with investment projections.",
        bg: "linear-gradient(135deg,#0a1018,#101c2a)",
        icon: <Building2 className="w-8 h-8 text-sky-400/25" strokeWidth={1} />,
        catBadgeBg: "bg-sky-500/10 text-sky-600"
    },
    {
        id: 9,
        category: "industrial",
        type: "Perspective",
        date: "Aug 20, 2024",
        readTime: "4 min",
        title: "Why African Industrial Projects Need Integrated PMO Solutions",
        desc: "The critical role of professional project management offices in delivering complex infrastructure programs on time and within budget.",
        bg: "linear-gradient(135deg,#0a0f1a,#0f1828)",
        icon: <Settings className="w-8 h-8 text-blue-400/25" strokeWidth={1} />,
        catBadgeBg: "bg-blue-500/10 text-blue-600"
    }
];

export default function InsightsPage() {
    const { T } = useAppContext();
    const [filter, setFilter] = useState("all");
    const [visibleCount, setVisibleCount] = useState(6);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredItems = INSIGHTS_DATA.filter(item => {
        const matchesFilter = filter === "all" || item.category === filter;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const featuredItems = filteredItems.filter(item => item.featured);
    const latestItems = filteredItems.filter(item => !item.featured).slice(0, visibleCount);

    return (
        <main className="theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
            {/* Hero Section */}
            <section className="hero-insights-bg relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <img src="/images/hero-insigth.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80" }} alt="Insights Hero Background" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-black/10 z-10" />
                    <div className="absolute inset-0 bg-linear-to-b from-navy-950/20 via-transparent to-navy-950/80 z-10" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="orbit-ring" style={{ width: 360, height: 360, marginLeft: -180, marginTop: -180 }}>
                            <div className="orbit-dot" style={{ animation: "orbitSlow 30s linear infinite", top: "50%", left: "50%", margin: -3 }}></div>
                        </div>
                        <div className="orbit-ring" style={{ width: 240, height: 240, marginLeft: -120, marginTop: -120 }}>
                            <div className="orbit-dot" style={{ animation: "orbitMedium 22s linear infinite", top: "50%", left: "50%", margin: -3 }}></div>
                        </div>
                    </div>
                    <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full opacity-[0.04] z-20" style={{ background: "radial-gradient(circle,#C8962E 0%,transparent 70%)" }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-[0.06] z-20" style={{ background: "linear-gradient(to top,#0A1628,transparent)" }}></div>
                    <div className="absolute top-[20%] right-[15%] w-32 h-32 border border-gold-500/[0.05] rounded-full animate-float z-20" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute bottom-[25%] left-[10%] w-20 h-20 border border-white/[0.04] rounded-full animate-float z-20" style={{ animationDelay: "2.5s" }}></div>
                    <div className="absolute top-[35%] left-[25%] w-px h-48 z-20" style={{ background: "linear-gradient(180deg,transparent,rgba(200,150,46,.06),transparent)" }}></div>
                    <div className="absolute top-[60%] right-[30%] w-48 h-px z-20" style={{ background: "linear-gradient(90deg,transparent,rgba(200,150,46,.05),transparent)" }}></div>
                    <div className="absolute top-24 left-8 w-28 h-28 border-l border-t border-white/[0.04] z-20"></div>
                    <div className="absolute bottom-24 right-8 w-28 h-28 border-r border-b border-gold-500/[0.04] z-20"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px shimmer-line z-20"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Link href="/" className="text-xs font-medium text-white/40 hover:text-white/60 transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                            <span className="text-xs font-medium text-gold-400">Insights</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold"></div>
                            <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("insights_hero_badge", "Knowledge & Thought Leadership")}</span>
                        </div>

                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-8">
                            Insights — <br className="hidden md:block" />
                            <span className="gold-gradient">{T("insights_subtitle", "Explore Our Knowledge & Expertise")}</span>
                        </h1>

                        <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto mb-10">
                            {T("insights_intro", "Dive into expert analyses, in-depth case studies, industry reports, and strategic perspectives from Anago Group's leadership across mining, agriculture, real estate, and industrial services.")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#featured-insights" className="btn-gold px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-semibold">
                                <span>{T("read_articles", "Read Our Articles")}</span>
                                <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} />
                            </a>
                            <a href="#subscribe-cta" className="btn-outline-light px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium border border-white/20">
                                <Bell className="w-4 h-4" strokeWidth={1.5} />
                                <span>{T("subscribe_updates", "Subscribe to Updates")}</span>
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-3 mt-14">
                            {[
                                { icon: <FileText className="w-4 h-4 text-gold-400/60" />, title: "Articles" },
                                { icon: <Briefcase className="w-4 h-4 text-white/40" />, title: "Case Studies" },
                                { icon: <BarChart3 className="w-4 h-4 text-white/40" />, title: "Reports" },
                                { icon: <Lightbulb className="w-4 h-4 text-white/40" />, title: "Perspectives" },
                            ].map((item, i) => (
                                <div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] hover:border-gold-500/30 transition-all cursor-default" title={item.title}>
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <a href="#featured-insights" className="flex flex-col items-center gap-2 group">
                        <span className="text-xs text-white/25 font-medium tracking-wider uppercase group-hover:text-white/40 transition-colors">Explore</span>
                        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-gold-500/40 transition-colors">
                            <div className="w-1 h-2 rounded-full bg-gold-400" style={{ animation: "float 2s ease-in-out infinite" }}></div>
                        </div>
                    </a>
                </div>
            </section>

            {/* Featured Insights Section */}
            <section id="featured-insights" className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-12">
                        <div className="gold-line mx-auto mb-6"></div>
                        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("featured_insights", "Featured Insights")}</h2>
                        <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("featured_desc", "Our most impactful articles, case studies, and reports — handpicked by Anago Group's editorial team.")}</p>
                    </RevealSection>

                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                        {[
                            { id: "all", label: T("all", "All") },
                            { id: "mining", label: T("mining", "Mining"), icon: <Gem className="w-3 h-3" /> },
                            { id: "agriculture", label: T("agriculture", "Agriculture"), icon: <Sprout className="w-3 h-3" /> },
                            { id: "real-estate", label: T("real_estate", "Real Estate"), icon: <Building2 className="w-3 h-3" /> },
                            { id: "industrial", label: T("industrial", "Industrial Services"), icon: <Settings className="w-3 h-3" /> },
                            { id: "equipment", label: T("equipment", "Equipment"), icon: <Truck className="w-3 h-3" /> },
                        ].map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`filter-btn px-4 py-2 text-xs font-medium rounded-lg border flex items-center gap-1.5 ${filter === cat.id ? "active" : ""}`}
                                style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                            >
                                {cat.icon}
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto mb-16 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" strokeWidth={1.5} />
                        <input
                            type="text"
                            placeholder="Search insights..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border bg-transparent outline-none focus:border-gold-500/50 transition-all text-sm"
                            style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}
                        />
                    </div>

                    {/* Featured Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {featuredItems.map((item, i) => (
                            <RevealSection
                                key={item.id}
                                className={`card-premium group rounded-2xl overflow-hidden border insight-item ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
                                style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}
                            >
                                <div className={i === 0 ? "grid md:grid-cols-2" : ""}>
                                    <div className={`insight-card-image aspect-[16/10] relative ${i === 0 ? "md:aspect-auto" : ""}`} style={{ background: item.bg }}>
                                        <div className="img-placeholder absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                                            {item.featured && <span className="px-3 py-1.5 text-xs font-semibold bg-gold-500/90 text-navy-800 rounded-lg">Featured</span>}
                                            <span className={`px-3 py-1.5 text-xs font-medium rounded-lg ${item.catBadgeBg.includes("text-white") ? item.catBadgeBg : "bg-black/40 text-white/80 backdrop-blur-sm"}`}>
                                                {item.category.charAt(0).toUpperCase() + item.category.slice(1).replace("-", " ")}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={i === 0 ? "p-8 flex flex-col justify-center" : "p-6"}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xs font-medium" style={{ color: "var(--gold-primary)" }}>{item.type}</span>
                                            <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-color)" }}></span>
                                            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{item.date}</span>
                                            <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-color)" }}></span>
                                            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{item.readTime} read</span>
                                        </div>
                                        <h3 className={`${i === 0 ? "text-xl lg:text-2xl" : "text-lg"} font-semibold tracking-tight mb-3 group-hover:text-gold-500 transition-colors leading-snug`} style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                                        <div className="flex items-center justify-between mt-auto">
                                            {i === 0 && (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#C8962E,#e7b13f)" }}><span className="text-xs font-bold text-navy-800">AG</span></div>
                                                    <span className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>{item.author}</span>
                                                </div>
                                            )}
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all ml-auto" style={{ color: "var(--gold-primary)" }}>
                                                <span>Read More</span>
                                                <ArrowRight className="w-3.5 h-3.5 card-arrow" strokeWidth={1.5} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Articles Section */}
            <section id="latest-articles" className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                        <RevealSectionLeft>
                            <div className="gold-line mb-6"></div>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>{T("latest_articles_title", "Latest Articles & Case Studies")}</h2>
                            <p className="text-base" style={{ color: "var(--text-secondary)" }}>{T("latest_articles_desc", "Stay current with our newest publications and analyses.")}</p>
                        </RevealSectionLeft>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>Sort by:</span>
                            <button className="px-3 py-1.5 text-xs font-semibold rounded-lg" style={{ color: "var(--gold-primary)", background: "var(--gold-bg)" }}>Newest</button>
                            <button className="px-3 py-1.5 text-xs font-medium rounded-lg" style={{ color: "var(--text-tertiary)" }}>Popular</button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {latestItems.map((item, i) => (
                            <RevealSection
                                key={item.id}
                                delay={i * 100}
                                className="article-row group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl border cursor-pointer"
                                style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}
                            >
                                <div className="article-thumb flex-shrink-0 w-full sm:w-40 aspect-[16/10] sm:aspect-square relative rounded-xl overflow-hidden" style={{ background: item.bg }}>
                                    <div className="img-placeholder absolute inset-0 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="px-2.5 py-1 text-xs font-medium rounded-md" style={{ background: "var(--gold-bg)", color: "var(--gold-primary)" }}>
                                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                        </span>
                                        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{item.date}</span>
                                        <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-color)" }}></span>
                                        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{item.type} · {item.readTime}</span>
                                    </div>
                                    <h3 className="text-base font-semibold tracking-tight mb-1.5 group-hover:text-gold-500 transition-colors truncate" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                    <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                                </div>
                                <div className="flex items-center flex-shrink-0">
                                    <div className="article-arrow w-10 h-10 rounded-xl flex items-center justify-center border group-hover:border-gold-500/40 transition-all" style={{ borderColor: "var(--border-color)" }}>
                                        <ArrowRight className="w-5 h-5 group-hover:text-gold-500 transition-colors" style={{ color: "var(--text-tertiary)" }} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>

                    {/* Load More */}
                    {filteredItems.length > latestItems.length + featuredItems.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => setVisibleCount(prev => prev + 3)}
                                className="load-more-btn inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-xl border"
                                style={{ background: "var(--card-bg)", borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                            >
                                <Plus className="w-4 h-4" strokeWidth={1.5} />
                                <span>{T("load_more", "Load More Articles")}</span>
                            </button>
                            <p className="text-xs mt-4" style={{ color: "var(--text-tertiary)" }}>
                                {T("showing_count", "Showing {count} of {total} articles").replace("{count}", (latestItems.length + featuredItems.length).toString()).replace("{total}", filteredItems.length.toString())}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0A1628 0%,#131d2e 50%,#0D1B2A 100%)" }}>
                <div className="absolute inset-0 sector-grid-pattern opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold tracking-tight mb-1" style={{ color: "var(--gold-primary)" }}>
                                <CounterValue value={120} suffix="+" />
                            </div>
                            <div className="text-xs font-medium text-white/40">{T("stat_articles", "Published Articles")}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-1">
                                <CounterValue value={35} />
                            </div>
                            <div className="text-xs font-medium text-white/40">{T("stat_case_studies", "Case Studies")}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-1">
                                <CounterValue value={15} />
                            </div>
                            <div className="text-xs font-medium text-white/40">{T("stat_reports", "Industry Reports")}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold tracking-tight mb-1" style={{ color: "var(--gold-primary)" }}>
                                <CounterValue value={5} />
                            </div>
                            <div className="text-xs font-medium text-white/40">{T("stat_sectors_covered", "Sectors Covered")}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-16">
                        <div className="gold-line mx-auto mb-6"></div>
                        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("topics_we_cover_title", "Topics We Cover")}</h2>
                        <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("topics_we_cover_desc", "Deep expertise across every sector we operate in — from mine-to-market analyses to infrastructure thought leadership.")}</p>
                    </RevealSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { id: "mining", title: T("topic_mining", "Mining & Commodities"), desc: T("topic_mining_desc", "Gold market analysis, extraction innovation, ESG in mining, and commodity trading trends."), icon: <Gem className="w-6 h-6 text-navy-800" />, bg: "linear-gradient(135deg,#C8962E,#e7b13f)" },
                            { id: "agriculture", title: T("topic_agri", "Agriculture & Food Security"), desc: T("topic_agri_desc", "Agri-tech innovation, cold-chain logistics, livestock management, and value chain optimization."), icon: <Sprout className="w-6 h-6 text-white" />, bg: "#15803d" },
                            { id: "realestate", title: T("topic_infra", "Infrastructure & Real Estate"), desc: T("topic_infra_desc", "Market outlooks, urban development, construction technology, and investment analysis."), icon: <Building2 className="w-6 h-6 text-white" />, bg: "#1a2744" },
                            { id: "industrial", title: T("topic_strategy", "Industrial Strategy"), desc: T("topic_strategy_desc", "Project management best practices, digital transformation, and operational excellence."), icon: <Settings className="w-6 h-6 text-white" />, bg: "#0D1B2A" },
                            { id: "tech", title: T("topic_tech", "Equipment & Technology"), desc: T("topic_tech_desc", "Fleet management, telematics innovation, OEM partnerships, and predictive maintenance."), icon: <Truck className="w-6 h-6 text-white" />, bg: "#343a40" },
                            { id: "continental", title: T("topic_pan_african", "Pan-African Perspectives"), desc: T("topic_pan_african_desc", "Continental economic outlook, regulatory landscape, investment climate, and sustainability."), icon: <LayoutGrid className="w-6 h-6 text-white" />, bg: "#935D46" }
                        ].map((topic, i) => (
                            <RevealSection key={topic.id} delay={i * 50} className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all group" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: topic.bg }}>
                                    {topic.icon}
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{topic.title}</h3>
                                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{topic.desc}</p>
                                <Link href={`#filter-${topic.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase" style={{ color: "var(--gold-primary)" }}>
                                    <span>View Articles</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                                </Link>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA Section */}
            <section id="subscribe-cta" className="py-20 lg:py-32 relative overflow-hidden" style={{ background: "#0A1628" }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-500 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-gold-400/20 blur-[120px] rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                            <Bell className="w-8 h-8 text-gold-400" strokeWidth={1} />
                        </div>
                        <h2 className="font-serif text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                            {T("newsletter_title", "Subscribe to Anago Group Insights")}
                        </h2>
                        <p className="text-base lg:text-lg text-white/50 max-w-2xl mx-auto mb-10">
                            {T("newsletter_desc", "Get the latest articles, case studies, and industry reports delivered directly to your inbox.")}
                        </p>

                        <form className="max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert(T("newsletter_success", "Thank you! You've been subscribed successfully.")); }}>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    required
                                    placeholder={T("newsletter_placeholder", "Enter your email address")}
                                    className="flex-grow px-5 py-3.5 text-sm rounded-lg border border-white/10 bg-white/5 text-white outline-none focus:ring-2 focus:ring-gold-500/30 transition-all"
                                />
                                <button type="submit" className="btn-gold px-8 py-3.5 text-sm rounded-lg font-semibold shrink-0">
                                    {T("newsletter_btn", "Subscribe")}
                                </button>
                            </div>
                            <p className="text-xs text-white/20 mt-6 tracking-wide uppercase">
                                {T("newsletter_privacy", "No spam. Unsubscribe anytime. We respect your privacy.")}
                            </p>
                        </form>
                    </RevealSection>
                </div>
            </section>
        </main>
    )
}
