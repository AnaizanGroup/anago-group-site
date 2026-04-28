"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import {
    ArrowRight, ArrowDownRight, Gem, TrendingUp, Award, Factory, Handshake,
    Leaf, ShieldCheck, Globe, BarChart3, Users, Trees, HeartHandshake, Sun,
    Factory as FactoryIcon, LayoutGrid, Pickaxe, Building2, Sprout, Brain, Truck,
    Shield, Target, CheckCircle, Download, Briefcase, Zap, Globe2
} from "lucide-react"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"
import { CounterValue } from "@/components/shared/Counter"
import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/navigation"

export function HomePage() {
    const { T, lang } = useAppContext()
    const router = useRouter()
    const heroRef = useRef<HTMLDivElement>(null)
    const particlesRef = useRef<HTMLDivElement>(null)

    // Scroll handler for parallax
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current && window.scrollY < window.innerHeight) {
                heroRef.current.style.transform = `translate3d(0,${window.scrollY * 0.3}px,0)`
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Particles
    useEffect(() => {
        if (!particlesRef.current) return
        const container = particlesRef.current
        // Clear existing particles if any
        container.innerHTML = ''
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement("div")
            particle.className = "hero-particle"
            particle.style.left = Math.random() * 100 + "%"
            particle.style.top = Math.random() * 100 + "%"
            particle.style.setProperty("--drift-x", (Math.random() * 80 - 40) + "px")
            particle.style.setProperty("--drift-y", (Math.random() * -100 - 20) + "px")
            particle.style.setProperty("--duration", (6 + Math.random() * 8) + "s")
            particle.style.setProperty("--delay", (Math.random() * 6) + "s")
            const size = (2 + Math.random() * 3) + "px"
            particle.style.width = size
            particle.style.height = size
            container.appendChild(particle)
        }
    }, [])

    return (
        <div className="block">
            {/* Hero Section - Elevated Overlay & Typography */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0  bg-black/40 z-10" />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-95"
                        poster="/images/hero-fallback.jpg"
                    >
                        <source src="/videos/mine.mp4" type="video/mp4" />
                    </video>
                </div>

                <div ref={heroRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-150 h-150 rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, var(--gold-primary) 0%, transparent 70%)" }} />
                </div>
                <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20 w-full">
                    <div className="flex flex-col items-center text-center">
                        <div className="max-w-6xl mx-auto">
                            <RevealSection className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl">
                                <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse-gold shadow-[0_0_15px_rgba(200,150,46,0.5)]" />
                                <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{T("hero_badge")}</span>
                            </RevealSection>

                            <RevealSection className="stagger-2">
                                <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-white leading-[0.95] mb-10">
                                    {T("hero_title_1")}<br />
                                    <span className="gold-gradient italic">{T("hero_title_2")}</span>
                                </h1>
                            </RevealSection>

                            <RevealSection className="stagger-4">
                                <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-16 font-light">
                                    {T("hero_desc")}
                                </p>
                            </RevealSection>

                            <RevealSection className="flex flex-wrap justify-center gap-6 stagger-5">
                                <button onClick={() => document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/30">
                                    <span className="font-bold tracking-widest uppercase">{T("hero_cta1")}</span>
                                    <ArrowDownRight className="w-5 h-5" strokeWidth={2.5} />
                                </button>
                                <button onClick={() => router.push("/contact")} className="btn-outline-light px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 font-bold backdrop-blur-xl border-white/20 hover:bg-white/5 transition-all text-white">
                                    <span className="tracking-widest uppercase">{T("hero_cta2")}</span>
                                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                                </button>
                            </RevealSection>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 fade-in stagger-7">
                    <span className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase">{T("home_scroll")}</span>
                    <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-float" />
                    </div>
                </div>
            </section>

            {/* Impact Stats Section - Theme Aware */}
            <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home/impact-bg.png"
                        alt="Global Impact"
                        fill
                        className="object-cover opacity-20 grayscale-[0.5] dark:opacity-20"
                    />

                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <RevealSectionLeft className="lg:col-span-5">
                            <div className="gold-line mb-8" />
                            <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
                                {T("home_stats_title")}
                            </h2>
                            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                                {T("home_stats_desc")}
                            </p>
                        </RevealSectionLeft>

                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: <Globe2 className="w-6 h-6" />, value: 15, label: T("home_stats_countries"), suffix: "+" },
                                { icon: <Award className="w-6 h-6" />, value: 20, label: T("home_stats_years"), suffix: "" },
                                { icon: <Users className="w-6 h-6" />, value: 500, label: T("home_stats_employees"), suffix: "+" },
                                { icon: <Briefcase className="w-6 h-6" />, value: 120, label: T("home_stats_projects"), suffix: "+" }
                            ].map((stat, i) => (
                                <RevealSection key={i} className={`text-center stagger-child-${i + 1}`}>
                                    <div className="mb-4 inline-flex p-3 rounded-2xl border shadow-inner" style={{ background: "var(--gold-bg)", borderColor: "var(--border-color)", color: "var(--gold-primary)" }}>
                                        {stat.icon}
                                    </div>
                                    <div className="text-4xl  font-bold mb-2 tracking-tighter" style={{ color: "var(--text-primary)" }}>
                                        <CounterValue value={stat.value} duration={2500} />
                                    </div>
                                    <div className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-tertiary)" }}>{stat.label}</div>
                                </RevealSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are - Redesigned Asymmetric Layout */}
            <section className="py-24 lg:py-40 relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-20 items-center">
                        <RevealSectionLeft className="lg:col-span-6 relative">
                            <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl border-8 group" style={{ borderColor: "var(--bg-secondary)" }}>
                                <Image
                                    src="/images/home/corporate-vision.png"
                                    alt="Anago Group Leadership"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                            </div>
                            {/* Experience Badge */}
                            <div className="absolute -bottom-10 -right-10 p-10 rounded-[2.5rem] shadow-2xl border backdrop-blur-xl animate-float hidden md:block" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="flex items-center gap-5 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg">
                                        <Award className="w-6 h-6 text-navy-950" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold leading-none mb-1" style={{ color: "var(--text-primary)" }}>2004</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-gold-500">Foundation Year</div>
                                    </div>
                                </div>
                                <p className="text-xs font-medium leading-relaxed max-w-50" style={{ color: "var(--text-tertiary)" }}>
                                    {T("home_who_years_tagline")}
                                </p>
                            </div>
                        </RevealSectionLeft>

                        <RevealSectionRight className="lg:col-span-6">
                            <div className="gold-line mb-10" />
                            <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-10" style={{ color: "var(--text-primary)" }}>
                                {T("who_title")}
                            </h2>
                            <div className="space-y-8">
                                <p className="text-xl leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>
                                    {T("who_p1")}
                                </p>
                                <p className="text-lg leading-relaxed opacity-70" style={{ color: "var(--text-secondary)" }}>
                                    {T("who_p2")}
                                </p>
                            </div>
                            <div className="mt-12 flex flex-wrap gap-8 items-center">
                                <button onClick={() => router.push("/about")} className="group inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase transition-all" style={{ color: "var(--gold-primary)" }}>
                                    <span>{T("who_cta")}</span>
                                    <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all" style={{ borderColor: "var(--gold-primary)" }}>
                                        <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors" />
                                    </div>
                                </button>
                            </div>
                        </RevealSectionRight>
                    </div>
                </div>
            </section>

            {/* Strategic Sectors - Keep Standard Grid for consistency with Sitemap but Premium Cards */}
            <section id="sectors" className="py-24 lg:py-40" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-24">
                        <div className="gold-line mx-auto mb-8" />
                        <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>{T("sectors_title")}</h2>
                        <p className="text-xl max-w-3xl mx-auto opacity-70 font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>{T("sectors_desc")}</p>
                    </RevealSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { id: "mining", num: "01", image: "/images/sectionmine.jpg", iconSm: <Gem className="w-5 h-5" />, iconBg: "linear-gradient(135deg, #C8962E, #e7b13f)", badgeBg: "bg-gold-500/20 text-gold-600", title: T("s_mining_title"), desc: T("s_mining_desc") },
                            { id: "real-estate", num: "02", image: "/images/immobilier.jpg", iconSm: <Building2 className="w-5 h-5 text-white" />, iconBg: "#0D1B2A", badgeBg: "bg-white/10 text-white/70", title: T("s_realestate_title"), desc: T("s_realestate_desc") },
                            { id: "agriculture", num: "03", image: "/images/agriculture.jpg", iconSm: <Sprout className="w-5 h-5 text-white" />, iconBg: "#15803d", badgeBg: "bg-green-500/20 text-green-400", title: T("s_agri_title"), desc: T("s_agri_desc") },
                            { id: "industrial", num: "04", image: "/images/consulting.jpg", iconSm: <Brain className="w-5 h-5 text-white" />, iconBg: "#935D46", badgeBg: "bg-gold-500/20 text-gold-600", title: T("s_consult_title"), desc: T("s_consult_desc") },
                            { id: "equipment", num: "05", image: "/images/equipement.jpg", iconSm: <Truck className="w-5 h-5 text-white" />, iconBg: "#343a40", badgeBg: "bg-white/10 text-white/70", title: T("s_equip_title"), desc: T("s_equip_desc") },
                        ].map((sector, i) => (
                            <RevealSection key={i} className={`stagger-child-${(i % 3) + 1}`}>
                                <article className="group cursor-pointer rounded-[2.5rem] overflow-hidden border shadow-2xl flex flex-col h-full transition-all duration-700 hover:-translate-y-4" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }} onClick={() => router.push(`/industries/${sector.id}`)}>
                                    <div className="aspect-4/3 relative overflow-hidden">
                                        <Image src={sector.image} alt={sector.title as string} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                        <div className="absolute top-6 left-6 z-10"><span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md ${sector.badgeBg}`}>{sector.num}</span></div>
                                    </div>
                                    <div className="px-10 py-4 flex flex-col h-full relative">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-all" style={{ background: sector.iconBg, marginTop: "-4.5rem", position: "relative", zIndex: 10 }}>{sector.iconSm}</div>
                                        <h3 className="text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{sector.title}</h3>
                                        <p className="text-sm leading-relaxed grow opacity-70" style={{ color: "var(--text-secondary)" }}>{sector.desc}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest transition-all group-hover:text-gold-500" style={{ color: "var(--gold-primary)" }}>
                                                <span>{T("learn_more")}</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </RevealSection>
                        ))}

                        <RevealSection className="stagger-child-3">
                            <article onClick={() => router.push("/industries")} className="group cursor-pointer rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-full items-center justify-center text-center p-12 min-h-100 relative transition-all duration-700 hover:shadow-gold-500/20" style={{ background: "linear-gradient(135deg, #0A1628 0%, #1a2744 100%)" }}>
                                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-10 z-10 bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-700 group-hover:scale-110 group-hover:border-gold-500/50">
                                    <LayoutGrid className="w-10 h-10 text-gold-400" strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight mb-4 text-white z-10">{T("home_sectors_all_title")}</h3>
                                <p className="text-sm font-medium leading-relaxed mb-10 text-white/60 z-10">{T("home_sectors_all_desc")}</p>
                                <span className="inline-flex items-center gap-3 text-xs font-bold bg-gold-500 text-navy-950 px-8 py-3.5 rounded-2xl transition-all group-hover:bg-gold-400 shadow-xl z-10 uppercase tracking-widest">
                                    <span>{T("home_sectors_all_cta")}</span><ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                                </span>
                            </article>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* Value Proposition - Glassmorphism Bento */}
            <section className="py-24 lg:py-40 relative overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(200,150,46,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,46,1) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealSection className="text-center mb-24">
                        <div className="gold-line mx-auto mb-10" />
                        <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>{T("value_title")}</h2>
                        <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: "var(--text-secondary)" }}>{T("value_desc")}</p>
                    </RevealSection>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: <Zap className="w-8 h-8" />, title: T("vp1_title"), desc: T("vp1_desc"), bg: "linear-gradient(135deg, #C8962E, #e7b13f)" },
                            { icon: <Handshake className="w-8 h-8" />, title: T("vp2_title"), desc: T("vp2_desc"), bg: "#0D1B2A" },
                            { icon: <Trees className="w-8 h-8" />, title: T("vp3_title"), desc: T("vp3_desc"), bg: "#15803d" },
                        ].map((vp, i) => (
                            <RevealSection key={i} className="group p-12 rounded-[2.5rem] transition-all duration-500 border flex flex-col shadow-xl hover:shadow-2xl" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform text-white" style={{ background: vp.bg }}>{vp.icon}</div>
                                <h3 className="text-2xl font-bold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>{vp.title}</h3>
                                <p className="text-base leading-relaxed opacity-70 grow" style={{ color: "var(--text-secondary)" }}>{vp.desc}</p>
                                <div className="mt-10 w-12 h-1 bg-gold-500/20 group-hover:w-full transition-all duration-700" />
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investor Section - Trusted Gateway */}
            <section className="py-24 lg:py-40 relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <RevealSectionLeft>
                            <div className="gold-line mb-10" />
                            <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-10" style={{ color: "var(--text-primary)" }}>
                                {T("invest_title")}
                            </h2>
                            <div className="space-y-8 mb-16">
                                <p className="text-xl font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>{T("invest_p1")}</p>
                                <p className="text-lg leading-relaxed opacity-70" style={{ color: "var(--text-secondary)" }}>{T("invest_p2")}</p>
                            </div>
                            <div className="flex flex-wrap gap-6">
                                <button onClick={() => router.push("/contact")} className="btn-gold px-10 py-4.5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-xl">
                                    <span className="font-bold uppercase tracking-widest">{T("invest_cta1")}</span>
                                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                                </button>
                                <button className="btn-navy px-10 py-4.5 text-xs rounded-2xl inline-flex items-center gap-4 font-bold tracking-widest uppercase border border-navy-800 dark:border-white/10 hover:bg-navy-900 transition-all">
                                    <Download className="w-5 h-5" strokeWidth={2.5} />
                                    <span>{T("invest_cta2")}</span>
                                </button>
                            </div>
                        </RevealSectionLeft>

                        <RevealSectionRight>
                            <div className="grid grid-cols-2 gap-6 relative">
                                {/* Decorative elements */}
                                <div className="absolute -inset-10 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
                                {[
                                    { icon: <ShieldCheck className="w-10 h-10" />, title: T("invest_feature1_title"), desc: T("invest_feature1_desc") },
                                    { icon: <Globe className="w-10 h-10" />, title: T("invest_feature2_title"), desc: T("invest_feature2_desc") },
                                    { icon: <BarChart3 className="w-10 h-10" />, title: T("invest_feature3_title"), desc: T("invest_feature3_desc") },
                                    { icon: <Users className="w-10 h-10" />, title: T("invest_feature4_title"), desc: T("invest_feature4_desc") },
                                ].map((f, i) => (
                                    <div key={i} className="group p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                                        <div className="mb-6 text-gold-500 group-hover:scale-110 transition-transform">{f.icon}</div>
                                        <h4 className="text-base font-bold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>{f.title}</h4>
                                        <p className="text-xs font-medium opacity-60" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </RevealSectionRight>
                    </div>
                </div>
            </section>

            {/* Sustainable Industrial Development (ESG) */}
            <section className="py-24 lg:py-40" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <RevealSection className="order-2 lg:order-1">
                            <div className="grid grid-cols-1 gap-5">
                                {[
                                    { icon: <Trees className="w-5 h-5 text-green-700" />, iconBg: "bg-green-100", title: T("esg_card1_title"), desc: T("esg_card1_desc") },
                                    { icon: <HeartHandshake className="w-5 h-5 text-blue-700" />, iconBg: "bg-blue-100", title: T("esg_card2_title"), desc: T("esg_card2_desc") },
                                    { icon: <Sun className="w-5 h-5 text-amber-700" />, iconBg: "bg-amber-100", title: T("esg_card3_title"), desc: T("esg_card3_desc") },
                                ].map((esg, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 rounded-xl border shadow-sm" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${esg.iconBg}`}>{esg.icon}</div>
                                        <div>
                                            <h4 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{esg.title}</h4>
                                            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{esg.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealSection>
                        <RevealSection className="order-1 lg:order-2">
                            <div className="gold-line mb-6" />
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>{T("esg_title")}</h2>
                            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{T("esg_desc")}</p>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { value: "100%", label: T("esg_stat1_label"), color: "var(--gold-primary)" },
                                    { value: "90%", label: T("esg_stat2_label"), color: "var(--text-primary)" },
                                    { value: "50+", label: T("esg_stat3_label"), color: "#15803d" },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center p-4 rounded-xl border" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                        <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                                        <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* News */}
            {/* <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="flex items-end justify-between mb-12">
                        <div>
                            <div className="gold-line mb-6" />
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>{T("news_title", "News & Insights")}</h2>
                        </div>
                        <button onClick={() => router.push("/news")} className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group" style={{ color: "var(--gold-primary)" }}>
                            <span>{T("news_all", "View All")}</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                        </button>
                    </RevealSection>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80",
                                cat: T("home_news1_cat", "Industry"),
                                catStyle: { color: "var(--gold-primary)", background: "var(--gold-bg)" },
                                date: T("home_news1_date", "Dec 2024"),
                                title: T("home_news1_title", "Mining Investment Trends in Africa: 2025 Outlook"),
                                desc: T("home_news1_desc", "Key trends shaping mining investment decisions across the African continent in the coming year."),
                            },
                            {
                                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
                                cat: T("home_news2_cat", "Sustainability"),
                                catStyle: { color: "#15803d", background: "rgba(22,163,74,0.1)" },
                                date: T("home_news2_date", "Nov 2024"),
                                title: T("home_news2_title", "Sustainable Industrial Development in West Africa"),
                                desc: T("home_news2_desc", "How responsible industrial practices are driving growth and community development in the region."),
                            },
                            {
                                image: "https://images.unsplash.com/photo-1541888081696-03700b0efd7a?auto=format&fit=crop&q=80",
                                cat: T("home_news3_cat", "Infrastructure"),
                                catStyle: { color: "var(--text-primary)", background: "var(--bg-secondary)" },
                                date: T("home_news3_date", "Oct 2024"),
                                title: T("home_news3_title", "Infrastructure Growth Across West Africa: Opportunities Ahead"),
                                desc: T("home_news3_desc", "Exploring the infrastructure boom and investment opportunities in West Africa's fastest-growing economies."),
                            },
                        ].map((news, i) => (
                            <RevealSection key={i}>
                                <article className="card-premium group cursor-pointer rounded-2xl overflow-hidden border shadow-sm flex flex-col h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }} onClick={() => router.push("/news")}>
                                    <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <Image src={news.image} alt={news.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs font-medium px-2 py-0.5 rounded" style={news.catStyle}>{news.cat}</span>
                                            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{news.date}</span>
                                        </div>
                                        <h3 className="text-sm font-semibold mb-2 group-hover:text-gold-500 transition-colors leading-snug" style={{ color: "var(--text-primary)" }}>{news.title}</h3>
                                        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{news.desc}</p>
                                    </div>
                                </article>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Final CTA - Immersive Cinematic Close */}
            <section className="py-32 lg:py-48 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home/final-cta-bg.png"
                        alt="Africa Industrial Future"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="gold-line mx-auto mb-12" />
                        <h2 className="font-serif text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-10 leading-[0.95]">
                            {T("final_cta_title")}
                        </h2>
                        <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-16 font-light">
                            {T("final_cta_desc")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => router.push("/contact")} className="btn-gold px-12 py-5 text-sm rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/40">
                                <span className="font-bold uppercase tracking-widest">{T("final_cta1")}</span>
                                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button className="btn-outline-light px-12 py-5 text-sm rounded-2xl inline-flex items-center gap-4 font-bold tracking-widest uppercase backdrop-blur-xl border-white/20">
                                <Download className="w-5 h-5" strokeWidth={2.5} />
                                <span>{T("final_cta2")}</span>
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}
