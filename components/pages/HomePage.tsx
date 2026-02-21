"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import {
    ArrowRight, ArrowDownRight, Gem, TrendingUp, Award, Factory, Handshake,
    Leaf, ShieldCheck, Globe, BarChart3, Users, Trees, HeartHandshake, Sun,
    Factory as FactoryIcon, LayoutGrid, Pickaxe, Building2, Sprout, Brain, Truck,
    Shield, Target, CheckCircle, Download
} from "lucide-react"
import { RevealSection } from "@/components/shared/RevealSection"
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
            {/* Hero */}
            <section className="hero-bg relative min-h-screen flex items-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-navy-900 z-10" /> {/* Overlay for legibility */}
                    <div className="absolute inset-0 bg-linear-to-b from-navy-950/20 via-transparent to-navy-950/40 z-10" />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                        poster="/images/hero-fallback.jpg"
                    >
                        <source src="/videos/mine.mp4" type="video/mp4" />
                        {/* Fallback for when video doesn't load */}
                    </video>
                </div>

                <div ref={heroRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-175 h-175 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #C8962E 0%, transparent 70%)" }} />
                    <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
                </div>
                <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
                    <div className="flex flex-col items-center text-center pt-10">
                        <div className="max-w-4xl mx-auto">
                            <RevealSection className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-10">
                                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold" />
                                <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("hero_badge", "Pan-African Industrial Holding")}</span>
                            </RevealSection>

                            <RevealSection className="stagger-2">
                                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-8">
                                    {lang === "fr" ? (
                                        <>{"Industrialiser l'Afrique Par des "}<span className="gold-gradient">{"Chaines de Valeur Integrees"}</span></>
                                    ) : (
                                        <>{"Industrializing Africa Through "}<span className="gold-gradient">{"Integrated Value Chains"}</span></>
                                    )}
                                </h1>
                            </RevealSection>



                            <RevealSection className="stagger-4">
                                <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
                                    {T("hero_desc", "Anago Group is a pan-African holding company driving sustainable industrial development through local transformation of natural resources, strategic infrastructure, and integrated industrial solutions.")}
                                </p>
                            </RevealSection>

                            <RevealSection className="flex flex-wrap justify-center gap-6 stagger-5">
                                <button onClick={() => document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold px-10 py-4 text-sm rounded-xl inline-flex items-center gap-3 shadow-2xl shadow-gold-500/20">
                                    <span className="font-bold tracking-wide uppercase">{T("hero_cta1", "Explore Our Sectors")}</span>
                                    <ArrowDownRight className="w-5 h-5" strokeWidth={2} />
                                </button>
                                <button onClick={() => router.push("/contact")} className="btn-outline-light px-10 py-4 text-sm rounded-xl inline-flex items-center gap-3 font-semibold backdrop-blur-md">
                                    <span className="tracking-wide uppercase">{T("hero_cta2", "Invest With Us")}</span>
                                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                                </button>
                            </RevealSection>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in stagger-7">
                    <span className="text-xs text-white/25 font-medium tracking-wider uppercase">Scroll</span>
                    <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                        <div className="w-1 h-2 rounded-full bg-gold-400 animate-float" />
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <RevealSection>
                            <div className="relative">
                                <div className="aspect-4/3 rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0A1628, #1a2744)" }}>
                                    <Image src="/images/Mineimg.png" alt="Anago Group Operations" width={800} height={600} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 rounded-xl shadow-xl p-5 border max-w-50" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C8962E, #e7b13f)" }}>
                                            <Award className="w-4 h-4 text-navy-800" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>Est. 2004</span>
                                    </div>
                                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{"20+ years building Africa's industrial future"}</p>
                                </div>
                            </div>
                        </RevealSection>
                        <RevealSection>
                            <div className="gold-line mb-6" />
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
                                {T("who_title", "A Pan-African Industrial Holding Company")}
                            </h2>
                            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                                {T("who_p1", "Anago Group operates across strategic sectors to build resilient, value-driven African industries. Our mission is to transform raw materials locally, develop infrastructure, and empower sustainable economic growth.")}
                            </p>
                            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                                {T("who_p2", "With operations in over 15 countries and a team of 500+ dedicated professionals, we are committed to creating lasting impact through responsible business practices and strategic partnerships.")}
                            </p>
                            <button onClick={() => router.push("/about")} className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group" style={{ color: "var(--gold-primary)" }}>
                                <span>{T("who_cta", "Read Chairman's Message")}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                            </button>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section id="sectors" className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-16">
                        <div className="gold-line mx-auto mb-6" />
                        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("sectors_title", "Our Strategic Sectors")}</h2>
                        <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("sectors_desc", "Driving Africa's industrial transformation through diversified, high-impact investments across six strategic verticals.")}</p>
                    </RevealSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { id: "mining", num: "01", image: "/images/sectionmine.jpg", iconSm: <Gem className="w-5 h-5 text-navy-800" strokeWidth={1.5} />, iconBg: "linear-gradient(135deg, #C8962E, #e7b13f)", badgeBg: "bg-[#C8962E]/20 text-[#e7b13f]", title: T("s_mining_title", "Mining & Metals"), desc: T("s_mining_desc", "Responsible extraction and local metal transformation across Africa.") },
                            { id: "real-estate", num: "02", image: "/images/immobilier.jpg", iconSm: <Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />, iconBg: "#0D1B2A", badgeBg: "bg-white/10 text-white/70", title: T("s_realestate_title", "Real Estate & Construction"), desc: T("s_realestate_desc", "Developing sustainable industrial and urban infrastructure.") },
                            { id: "agriculture", num: "03", image: "/images/agriculture.jpg", iconSm: <Sprout className="w-5 h-5 text-white" strokeWidth={1.5} />, iconBg: "#15803d", badgeBg: "bg-green-500/20 text-green-400", title: T("s_agri_title", "Agriculture & Livestock"), desc: T("s_agri_desc", "Building agro-industrial value chains and food security.") },
                            { id: "industrial", num: "04", image: "/images/consulting.jpg", iconSm: <Brain className="w-5 h-5 text-white" strokeWidth={1.5} />, iconBg: "#935D46", badgeBg: "bg-[#C8962E]/20 text-[#e7b13f]", title: T("s_consult_title", "Industrial Consulting"), desc: T("s_consult_desc", "Strategic advisory and industrial project management.") },
                            { id: "equipment", num: "05", image: "/images/equipement.jpg", iconSm: <Truck className="w-5 h-5 text-white" strokeWidth={1.5} />, iconBg: "#343a40", badgeBg: "bg-white/10 text-white/70", title: T("s_equip_title", "Equipment & Industrial Solutions"), desc: T("s_equip_desc", "Supply, maintenance and rental of industrial equipment.") },
                        ].map((sector, i) => (
                            <RevealSection key={i}>
                                <article className="card-premium group cursor-pointer rounded-2xl overflow-hidden border shadow-sm flex flex-col h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }} onClick={() => router.push(`/industries/${sector.id}`)}>
                                    <div className="aspect-16/10 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <Image src={sector.image} alt={sector.title as string} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
                                        <div className="absolute top-4 left-4 z-10"><span className={`px-2.5 py-1 text-xs font-semibold rounded-md backdrop-blur-md ${sector.badgeBg}`}>{sector.num}</span></div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="card-icon w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0 shadow-sm" style={{ background: sector.iconBg, marginTop: "-2.5rem", position: "relative", zIndex: 10 }}>{sector.iconSm}</div>
                                        <h3 className="text-lg font-semibold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>{sector.title}</h3>
                                        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>{sector.desc}</p>
                                        <span className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all mt-auto" style={{ color: "var(--gold-primary)" }}>
                                            <span>{T("learn_more", "Learn more")}</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                                        </span>
                                    </div>
                                </article>
                            </RevealSection>
                        ))}

                        <RevealSection>
                            <article onClick={() => router.push("/industries")} className="card-premium group cursor-pointer rounded-2xl overflow-hidden shadow-lg flex flex-col h-full items-center justify-center text-center p-8 min-h-80 lg:min-h-full relative transition-all duration-300 hover:shadow-gold-500/20" style={{ background: "linear-gradient(135deg, #C8962E 0%, #a1761e 100%)", borderColor: "transparent" }}>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 bg-white/20 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                                    <LayoutGrid className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight mb-3 text-white z-10">{T("Voir tous les secteurs", "View All Sectors")}</h3>
                                <p className="text-sm font-medium leading-relaxed mb-6 text-white/90 z-10">{T("Découvrez l'ensemble de notre portefeuille d'investissements stratégiques et d'opérations en Afrique.", "Discover our complete portfolio of strategic investments and operations across Africa.")}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold bg-white text-black px-5 py-2.5 rounded-full transition-all group-hover:bg-gray-100 group-hover:shadow-md z-10">
                                    <span>{T("Explorer nos Industries", "Explore Industries")}</span><ArrowRight className="w-4 h-4" strokeWidth={2} />
                                </span>
                            </article>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#0A1628" }}>
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(200,150,46,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,46,.1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealSection className="text-center mb-16">
                        <div className="gold-line mx-auto mb-6" />
                        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">{T("value_title", "Why Partner With Anago Group?")}</h2>
                        <p className="text-base text-white/50 max-w-2xl mx-auto">{T("value_desc", "Three pillars of sustainable value creation across the African continent.")}</p>
                    </RevealSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <FactoryIcon className="w-7 h-7 text-navy-800" strokeWidth={1.5} />, title: T("vp1_title", "Local Transformation"), desc: T("vp1_desc", "Maximizing value within Africa through local processing and transformation of natural resources into finished products.") },
                            { icon: <Handshake className="w-7 h-7 text-navy-800" strokeWidth={1.5} />, title: T("vp2_title", "Strategic Partnerships"), desc: T("vp2_desc", "Governments, international investors, and global manufacturers working together towards shared prosperity.") },
                            { icon: <Leaf className="w-7 h-7 text-navy-800" strokeWidth={1.5} />, title: T("vp3_title", "Sustainable Growth"), desc: T("vp3_desc", "Responsible, transparent and long-term development creating value for communities and future generations.") },
                        ].map((vp, i) => (
                            <RevealSection key={i} className="text-center p-8 rounded-2xl bg-white/3 border border-white/10 hover:border-gold-500/30 transition-all duration-300">
                                <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #C8962E, #e7b13f)" }}>{vp.icon}</div>
                                <h3 className="text-xl font-semibold tracking-tight text-white mb-3">{vp.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">{vp.desc}</p>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investor Section */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <RevealSection>
                            <div className="gold-line mb-6" />
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>{T("invest_title", "Investing in Africa's Industrial Future")}</h2>
                            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{T("invest_p1", "Africa represents the last great frontier for industrial development. With abundant natural resources, a young and growing workforce, and increasing political stability, the continent offers unprecedented investment opportunities.")}</p>
                            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>{T("invest_p2", "Anago Group provides investors and partners with a trusted gateway to Africa's most promising industrial sectors, backed by 20+ years of operational experience and deep local knowledge.")}</p>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => router.push("/contact")} className="btn-gold px-6 py-3 text-sm rounded-lg inline-flex items-center gap-2"><span>{T("invest_cta1", "Become a Partner")}</span><ArrowRight className="w-4 h-4" strokeWidth={1.5} /></button>
                                <button className="btn-navy px-6 py-3 text-sm rounded-lg inline-flex items-center gap-2 font-medium"><Download className="w-4 h-4" strokeWidth={1.5} /><span>{T("invest_cta2", "Download Corporate Profile")}</span></button>
                            </div>
                        </RevealSection>
                        <RevealSection>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <ShieldCheck className="w-8 h-8" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />, title: "Trusted Track Record", desc: "20+ years of successful operations" },
                                    { icon: <Globe className="w-8 h-8" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />, title: "Pan-African Reach", desc: "Operations across 15+ countries" },
                                    { icon: <BarChart3 className="w-8 h-8" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />, title: "Strong Returns", desc: "Consistent value creation for stakeholders" },
                                    { icon: <Users className="w-8 h-8" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />, title: "Local Expertise", desc: "Deep knowledge of African markets" },
                                ].map((f, i) => (
                                    <div key={i} className="p-6 rounded-2xl border" style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                                        <div className="mb-3">{f.icon}</div>
                                        <h4 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{f.title}</h4>
                                        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ESG */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <RevealSection className="order-2 lg:order-1">
                            <div className="grid grid-cols-1 gap-5">
                                {[
                                    { icon: <Trees className="w-5 h-5 text-green-700" strokeWidth={1.5} />, iconBg: "bg-green-100", title: "Environmental Responsibility", desc: "Minimizing environmental footprint through sustainable mining practices, reforestation initiatives, and clean energy integration." },
                                    { icon: <HeartHandshake className="w-5 h-5 text-blue-700" strokeWidth={1.5} />, iconBg: "bg-blue-100", title: "Local Workforce Empowerment", desc: "Creating quality jobs, investing in training and skills development, and supporting local communities." },
                                    { icon: <Sun className="w-5 h-5 text-amber-700" strokeWidth={1.5} />, iconBg: "bg-amber-100", title: "Low-Carbon Infrastructure", desc: "Investing in renewable energy, energy-efficient buildings, and sustainable transport solutions." },
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
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>{T("Sustainable Industrial Development")}</h2>
                            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{T("At Anago Group, sustainability isn't just a commitment \u2014 it's integral to our business strategy. We believe that responsible practices create stronger companies and more resilient communities.")}</p>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { value: "100%", label: "Environmental Compliance", color: "var(--gold-primary)" },
                                    { value: "90%", label: "Local Workforce", color: "var(--text-primary)" },
                                    { value: "50+", label: "Community Projects", color: "#15803d" },
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
            <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
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
                            { image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80", cat: "Industry", catStyle: { color: "var(--gold-primary)", background: "var(--gold-bg)" }, date: "Dec 2024", title: "Mining Investment Trends in Africa: 2025 Outlook", desc: "Key trends shaping mining investment decisions across the African continent in the coming year." },
                            { image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80", cat: "Sustainability", catStyle: { color: "#15803d", background: "rgba(22,163,74,0.1)" }, date: "Nov 2024", title: "Sustainable Industrial Development in West Africa", desc: "How responsible industrial practices are driving growth and community development in the region." },
                            { image: "https://images.unsplash.com/photo-1541888081696-03700b0efd7a?auto=format&fit=crop&q=80", cat: "Infrastructure", catStyle: { color: "var(--text-primary)", background: "var(--bg-secondary)" }, date: "Oct 2024", title: "Infrastructure Growth Across West Africa: Opportunities Ahead", desc: "Exploring the infrastructure boom and investment opportunities in West Africa's fastest-growing economies." },
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
            </section>

            {/* Final CTA */}
            <section className="py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=80" alt="Partnership and industrial future" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C8962E 0%, transparent 50%)" }} />
                <RevealSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="font-serif text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">{T("final_cta_title", "Ready to Build Africa's Industrial Future Together?")}</h2>
                    <p className="text-base text-white/60 max-w-2xl mx-auto mb-10">{T("final_cta_desc", "Whether you are an investor, government partner, or industry leader, Anago Group is your trusted partner for sustainable industrial development in Africa.")}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={() => router.push("/contact")} className="btn-gold px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2"><span>{T("final_cta1", "Get in Touch")}</span><ArrowRight className="w-4 h-4" strokeWidth={1.5} /></button>
                        <button className="btn-outline-light px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium"><Download className="w-4 h-4" strokeWidth={1.5} /><span>{T("final_cta2", "Download Profile")}</span></button>
                    </div>
                </RevealSection>
            </section>
        </div>
    )
}
