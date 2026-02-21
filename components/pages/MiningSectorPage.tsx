"use client"

import { useEffect, useRef, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import {
    ArrowRight, Gem, Pickaxe, Search, BarChart3, ChevronRight,
    ArrowDownRight, Compass, Drill, TrendingUp, ShieldCheck,
    Mountain, CheckCircle, Users, MapPin, Leaf, Shield, Globe, Building2,
    Linkedin, Twitter, Facebook, Download, Menu, X, Sun, Moon, Monitor
} from "lucide-react"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"

export function MiningSectorPage() {
    const { T } = useAppContext()
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)
    const heroParticlesRef = useRef<HTMLDivElement>(null)

    // Scroll listener for navbar-like effects if needed (though the main layout has one)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Parallax effect
            const parallax = document.getElementById("heroParallax")
            if (parallax && window.scrollY < window.innerHeight) {
                parallax.style.transform = `translate3d(0, ${window.scrollY * 0.2}px, 0)`
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Particle System
    useEffect(() => {
        const container = heroParticlesRef.current
        if (!container) return

        // Clear existing particles
        container.innerHTML = ""

        for (let i = 0; i < 22; i++) {
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
            <style jsx global>{`
                .hero-mining-bg {
                    background: linear-gradient(135deg, #0A1628 0%, #1a2030 30%, #2a1a10 60%, #0D1B2A 100%);
                    position: relative;
                }
                .hero-mining-bg::before {
                    content: '';
                    position: absolute; inset: 0;
                    background: 
                        radial-gradient(ellipse 80% 50% at 70% 60%, rgba(200,150,46,0.08), transparent),
                        radial-gradient(ellipse 60% 40% at 20% 40%, rgba(10,22,40,0.6), transparent);
                }
                .mining-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8962E' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
                .gold-gradient {
                    background: linear-gradient(135deg, #C8962E, #e7b13f, #C8962E);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                @keyframes particleDrift {
                    0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.6; }
                    100% { transform: translate3d(var(--drift-x, 40px), var(--drift-y, -80px), 0) scale(0.5); opacity: 0; }
                }
                .hero-particle {
                    position: absolute; border-radius: 50%;
                    background: rgba(200, 150, 46, 0.4);
                    animation: particleDrift var(--duration, 8s) ease-in-out infinite;
                    animation-delay: var(--delay, 0s);
                    will-change: transform, opacity; pointer-events: none;
                }
                .animate-float {
                    animation: float-mining 5s ease-in-out infinite;
                }
                @keyframes float-mining {
                    0%, 100% { transform: translate3d(0, 0, 0); }
                    50% { transform: translate3d(0, -10px, 0); }
                }
                .animate-pulse-gold {
                    animation: pulseGold-mining 2.5s ease-in-out infinite;
                }
                @keyframes pulseGold-mining {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(200,150,46,0.4); }
                    50% { box-shadow: 0 0 0 14px rgba(200,150,46,0); }
                }
                .gold-line {
                    width: 60px; height: 3px;
                    background: linear-gradient(90deg, #C8962E, #e7b13f);
                    border-radius: 2px;
                }
                .activity-card-number {
                    font-family: serif;
                    font-size: 4rem;
                    font-weight: 700;
                    line-height: 1;
                    position: absolute;
                    top: -8px;
                    right: 16px;
                    opacity: 0.06;
                    pointer-events: none;
                    transition: opacity 0.4s ease;
                }
                .card-premium:hover .activity-card-number {
                    opacity: 0.12;
                }
                .quote-mark {
                    font-family: serif;
                    font-size: 8rem; line-height: 1; color: #C8962E; opacity: 0.15;
                    position: absolute; top: -20px; left: -10px; pointer-events: none;
                }
                .process-connector::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: -12px;
                    width: 24px;
                    height: 2px;
                    background: linear-gradient(90deg, #C8962E, transparent);
                    display: none;
                }
                @media (min-width: 768px) {
                    .process-connector::after { display: block; }
                    .process-connector:last-child::after { display: none; }
                }
            `}</style>

            {/* HERO SECTION */}
            <section className="hero-mining-bg relative min-h-[85vh] lg:min-h-[92vh] flex items-center  overflow-hidden">
                <div className="absolute inset-0 overflow-hidden" id="heroParallax">
                    <img src="/images/hero-mining.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1578502315052-8758dff58ed5?auto=format&fit=crop&q=80" }} alt="Mining Hero Background" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="absolute inset-0 bg-linear-to-b from-navy-950/20 via-transparent to-navy-950/80 z-10" />

                    <div className="absolute top-1/4 right-1/3 w-225 h-225 rounded-full opacity-[0.04] z-20" style={{ background: "radial-gradient(circle, #C8962E 0%, transparent 70%)" }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-[0.06] z-20" style={{ background: "linear-gradient(to top, #C8962E, transparent)" }}></div>

                    {/* Decorative elements */}
                    <div className="absolute top-24 right-16 w-36 h-36 border border-gold-500/5 rounded-full animate-float z-20"></div>
                    <div className="absolute bottom-40 left-10 w-24 h-24 border border-white/5 rounded-xl animate-float z-20" style={{ animationDelay: "2.5s" }}></div>
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-gold-500/8 rounded-full animate-float z-20" style={{ animationDelay: "1.5s" }}></div>

                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-[0.02] z-20" style={{ backgroundImage: "linear-gradient(rgba(200,150,46,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,46,.15) 1px, transparent 1px)", backgroundSize: "80px 80px" }}></div>
                </div>

                <div ref={heroParticlesRef} className="absolute inset-0 pointer-events-none overflow-hidden"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48 lg:py-32 relative z-10 w-full">
                    <div className="flex flex-col items-center text-center">
                        <div className="max-w-4xl mx-auto">
                            {/* Breadcrumb */}
                            <RevealSection delay={100} className="flex items-center justify-center gap-2 mb-12">
                                <button onClick={() => router.push("/")} className="text-xs font-medium text-white/40 hover:text-white/60 transition-colors">Home</button>
                                <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                                <span className="text-xs font-medium text-white/40">Industries</span>
                                <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                                <span className="text-xs font-medium text-gold-400">Mining & Metals</span>
                            </RevealSection>

                            <RevealSection delay={200} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-10">
                                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold"></div>
                                <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">Strategic Sector 01 · Core Division</span>
                            </RevealSection>

                            <RevealSection delay={300}>
                                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-8">
                                    Mining & Metals — <br className="hidden lg:block" /><span className="gold-gradient">Transforming Africa's Natural Resources</span>
                                </h1>
                            </RevealSection>

                            <RevealSection delay={400}>
                                <p className="text-base lg:text-xl text-white/55 leading-relaxed max-w-2xl mx-auto mb-14">
                                    From geological exploration to refined commodities, Anago Group drives responsible mineral extraction and local metal transformation — creating value at every stage of the mining lifecycle across Africa.
                                </p>
                            </RevealSection>

                            <RevealSection delay={500} className="flex flex-wrap justify-center gap-4">
                                <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })} className="btn-gold px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2">
                                    <span>Explore Mining Projects</span>
                                    <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} />
                                </button>
                                <button onClick={() => document.getElementById("contact-cta")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline-light px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium">
                                    <span>Contact Us</span>
                                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                                </button>
                            </RevealSection>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <button onClick={() => document.getElementById("about-mining")?.scrollIntoView({ behavior: "smooth" })} className="flex flex-col items-center gap-2 group">
                        <span className="text-xs text-white/25 font-medium tracking-wider uppercase group-hover:text-white/40 transition-colors">Discover</span>
                        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-gold-500/40 transition-colors">
                            <div className="w-1 h-2 rounded-full bg-gold-400" style={{ animation: "float-mining 2s ease-in-out infinite" }}></div>
                        </div>
                    </button>
                </div>
            </section>

            {/* ABOUT MINING */}
            <section id="about-mining" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <RevealSectionLeft>
                            <div className="relative">
                                <div className="aspect-4/3 rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #1a1510 0%, #2a1a10 40%, #C8962E 200%)" }}>
                                    <div className="absolute inset-0 bg-gold-500/10 z-10 mix-blend-overlay"></div>
                                    <img src="/images/sectormine1.jpg" onError={(e) => { e.currentTarget.src = "/images/section-droite-mine.jpg" }} alt="Mining Operations" className="w-full h-full object-cover" />
                                </div>
                                {/* Floating card */}
                                <div className="absolute -bottom-6 -right-6 rounded-xl shadow-xl p-5 border max-w-60 backdrop-blur-md" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C8962E, #e7b13f)" }}>
                                            <ShieldCheck className="w-4 h-4 text-navy-800" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Responsible Mining</span>
                                    </div>
                                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>ESG-compliant operations across all mining sites with community-first approach</p>
                                </div>
                                {/* Floating accent */}
                                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                                    <Gem className="w-5 h-5 text-gold-400/60" strokeWidth={1.5} />
                                </div>
                            </div>
                        </RevealSectionLeft>
                        <RevealSectionRight>
                            <div className="gold-line mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
                                Africa's Mineral Wealth, Responsibly Extracted & Locally Transformed
                            </h2>
                            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                                Anago Group's Mining & Metals division is at the heart of our integrated industrial strategy. We operate across the full mining value chain — from geological exploration and resource assessment to extraction, processing, and international commodity trading.
                            </p>
                            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                                Our approach prioritizes local transformation of raw materials, ensuring that Africa's natural resources generate maximum economic value within the continent. Every operation adheres to international ESG standards while creating meaningful employment and community development.
                            </p>
                            {/* Key highlights */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { text: "Full Value Chain" },
                                    { text: "ESG Compliant" },
                                    { text: "Local Transformation" },
                                    { text: "Community-First" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gold-bg)" }}>
                                            <CheckCircle className="w-4 h-4" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group" style={{ color: "var(--gold-primary)" }}>
                                <span>Discover Our Activities</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                            </button>
                        </RevealSectionRight>
                    </div>
                </div>
            </section>

            {/* MINING ACTIVITIES */}
            <section id="activities" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>Our Mining Activities</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>Four integrated pillars covering the complete mining lifecycle, from discovery to delivery.</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {[
                            {
                                num: "01",
                                image: "/images/geolocalityt.jpg",
                                title: "Geological Exploration",
                                desc: "Advanced geological surveys, geophysical analysis, and resource assessment to identify and evaluate mineral deposits across Africa. Our exploration teams use cutting-edge technology including satellite imagery, geochemical sampling, and 3D geological modeling.",
                                tags: ["Geological Surveys", "Resource Assessment", "3D Modeling"]
                            },
                            {
                                num: "02",
                                image: "/images/mine-artisanal.jpg",
                                title: "Artisanal Mining Modernization",
                                desc: "Transforming traditional artisanal mining into safe, productive, and environmentally responsible operations. We provide modern equipment, training, and formalized processes that improve yields while protecting miners and their communities.",
                                tags: ["Formalization", "Safety Standards", "Training"]
                            },
                            {
                                num: "03",
                                image: "/images/trading-mine.jpg",
                                title: "Commodity Trading",
                                desc: "Strategic buying, selling, and trading of precious metals and minerals on international markets. Our trading desk leverages deep market intelligence, established global networks, and competitive positioning to optimize returns on Africa's mineral wealth.",
                                tags: ["Gold Trading", "Precious Metals", "Global Markets"]
                            },
                            {
                                num: "04",
                                image: "/images/hydrolique.jpg",
                                title: "Mining & Hydraulic Drilling",
                                desc: "Specialized extraction operations utilizing modern drilling techniques, heavy machinery, and hydraulic systems for efficient mineral recovery. Our drilling operations support both mining exploration and water resource development across arid regions.",
                                tags: ["Drilling Operations", "Hydraulic Systems", "Water Resources"]
                            }
                        ].map((activity, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <article className="card-premium group cursor-pointer rounded-2xl overflow-hidden border relative flex flex-col h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="activity-card-number z-10" style={{ color: "var(--text-primary)", top: "16px" }}>{activity.num}</div>
                                    <div className="relative h-56 w-full overflow-hidden shrink-0">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        {/* Fallback image component via Next.js */}
                                        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                                    </div>
                                    <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{activity.title}</h3>
                                        <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: "var(--text-secondary)" }}>
                                            {activity.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6 mt-auto shrink-0">
                                            {activity.tags.map((tag, j) => (
                                                <span key={j} className="px-3 py-1.5 text-xs font-medium rounded-lg" style={{ background: j === 0 ? "var(--gold-bg)" : "transparent", color: j === 0 ? "var(--gold-primary)" : "var(--text-tertiary)", border: j === 0 ? "none" : "1px solid var(--border-color)" }}>{tag}</span>
                                            ))}
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all shrink-0 mt-auto" style={{ color: "var(--gold-primary)" }}>
                                            <span>Learn more</span>
                                            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                                        </span>
                                    </div>
                                </article>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALUE PROPOSITION */}
            <section className="py-20 lg:py-32 relative overflow-hidden" style={{ background: "#0A1628" }}>
                <div className="absolute inset-0 mining-texture opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #C8962E, transparent)" }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Our Value Proposition</h2>
                            <p className="text-base text-white/50 max-w-2xl mx-auto">What makes Anago Group's Mining & Metals division a trusted partner for governments, investors, and communities.</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Search className="w-7 h-7 text-navy-800" />, title: "Deep Geological Expertise", desc: "Decades of combined geological knowledge and advanced survey techniques enable us to identify high-potential mineral deposits with precision." },
                            { icon: <ArrowRight className="w-7 h-7 text-gold-400" />, title: "Local Value Chain Optimization", desc: "We maximize in-country transformation of raw materials, creating local jobs, building processing infrastructure, and reducing dependence on raw mineral exports.", isLink: true },
                            { icon: <Leaf className="w-7 h-7 text-green-300" />, title: "Environmental Stewardship", desc: "Rigorous environmental management plans, mine rehabilitation programs, and sustainable practices that protect ecosystems while extracting resources.", bg: "bg-green-700/60" },
                            { icon: <Users className="w-7 h-7 text-white/70" />, title: "Community Partnership", desc: "Every mining project includes social development programs, local hiring commitments, and infrastructure investments that benefit surrounding communities." },
                            { icon: <Globe className="w-7 h-7 text-white/70" />, title: "International Trading Networks", desc: "Established commodity trading relationships with global markets, ensuring competitive pricing and reliable delivery of refined minerals and metals." },
                            { icon: <Shield className="w-7 h-7 text-white/70" />, title: "Regulatory Compliance", desc: "Full compliance with national mining codes, international standards (ISO), and conflict-free mineral certification across all jurisdictions." }
                        ].map((item, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <div className="group p-8 rounded-2xl bg-white/3 border border-white/10 hover:border-gold-500/30 transition-all duration-400 cursor-default h-full relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg ${item.bg || (item.isLink ? "bg-white/10" : "bg-white/5")}`} style={!item.bg && !item.isLink && i === 0 ? { background: "linear-gradient(135deg, #C8962E, #e7b13f)" } : {}}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold tracking-tight text-white mb-3">{item.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATISTICS */}
            <section className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>Mining Division in Numbers</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>Key metrics that demonstrate our operational scale and impact across the continent.</p>
                        </RevealSection>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { icon: <MapPin className="w-6 h-6" />, count: "8", suffix: "+", label: "Countries of Operation", gold: true },
                            { icon: <Mountain className="w-6 h-6" />, count: "12", suffix: "+", label: "Mining Concessions" },
                            { icon: <Users className="w-6 h-6" />, count: "200", suffix: "+", label: "Mining Professionals", gold: true },
                            { icon: <TrendingUp className="w-6 h-6" />, count: "20", suffix: " yrs", label: "Operational Experience" }
                        ].map((stat, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <div className="text-center p-8 rounded-2xl border bg-(--card-bg) border-(--border-color) shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gold-bg)" }}>
                                        <div style={{ color: "var(--gold-primary)" }}>{stat.icon}</div>
                                    </div>
                                    <div className={`text-4xl lg:text-5xl font-bold tracking-tight mb-2 ${stat.gold ? "text-(--gold-primary)" : "text-(--text-primary)"}`}>
                                        {stat.count}{stat.suffix}
                                    </div>
                                    <div className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{stat.label}</div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS / VALUE CHAIN */}
            <section className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>Our Mining Value Chain</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>An integrated approach from discovery to delivery, maximizing value at every stage.</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Discover", desc: "Geological exploration, surveys, resource assessment and concession acquisition.", gradient: "linear-gradient(90deg, #C8962E, #e7b13f)" },
                            { step: "2", title: "Extract", desc: "Responsible extraction using modern techniques, safety standards and environmental protocols.", gradient: "linear-gradient(90deg, #e7b13f, #C8962E)" },
                            { step: "3", title: "Transform", desc: "Local processing and refining of raw minerals into market-ready commodities and metals.", gradient: "linear-gradient(90deg, #C8962E, #e7b13f)" },
                            { step: "4", title: "Deliver", desc: "International commodity trading and strategic delivery to global markets and partners.", gradient: "linear-gradient(90deg, #e7b13f, #C8962E)" }
                        ].map((item, i) => (
                            <RevealSection key={i} delay={i * 100} className="process-connector">
                                <div className="text-center p-6 rounded-2xl border relative overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="absolute top-0 left-0 w-full h-1" style={{ background: item.gradient }}></div>
                                    <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-4 text-sm font-bold shadow-sm" style={{ background: "linear-gradient(135deg, #C8962E, #e7b13f)", color: "#0A1628" }}>{item.step}</div>
                                    <h3 className="text-sm font-semibold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP QUOTE */}
            <section className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="relative">
                        <div className="quote-mark">"</div>
                        <div className="relative z-10 text-center">
                            <div className="gold-line mx-auto mb-8"></div>
                            <blockquote className="font-display text-xl lg:text-2xl leading-relaxed mb-8 italic" style={{ color: "var(--text-secondary)" }}>
                                "Africa's mineral wealth has the power to transform the continent — but only if we extract it responsibly, process it locally, and ensure that communities share in the prosperity. At Anago Group, every mining operation is an investment in Africa's industrial sovereignty."
                            </blockquote>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #C8962E, #e7b13f)" }}>
                                    <span className="text-sm font-bold text-navy-800">AG</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Mining Division Leadership</p>
                                    <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>Anago Group · Mining & Metals</p>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* RELATED SECTORS */}
            <section className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <RevealSection>
                            <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>Explore Other Sectors</h2>
                            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Discover how our integrated divisions work together to drive value.</p>
                        </RevealSection>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { id: "industrial", icon: <TrendingUp className="w-5 h-5 text-white" />, title: "Industrial Services", desc: "Consulting & project management", bg: "bg-navy-600" },
                            { id: "real-estate", icon: <Building2 className="w-5 h-5 text-white" />, title: "Real Estate & Construction", desc: "Infrastructure & development", bg: "#1a2744" },
                            { id: "agriculture", icon: <Globe className="w-5 h-5 text-white" />, title: "Agriculture & Livestock", desc: "Value chains & food security", bg: "bg-green-700" },
                            { id: "equipment", icon: <ArrowRight className="w-5 h-5 text-white" />, title: "Equipment Supply", desc: "Supply, maintenance & rental", bg: "#495057" }
                        ].map((sector, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <button onClick={() => router.push(`/industries/${sector.id}`)} className="card-premium group p-6 rounded-2xl border text-left w-full h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="card-icon w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm" style={{ background: sector.bg }}>{sector.icon}</div>
                                    <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{sector.title}</h3>
                                    <p className="text-xs mb-3" style={{ color: "var(--text-tertiary)" }}>{sector.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: "var(--gold-primary)" }}>
                                        <span>Explore</span>
                                        <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                                    </span>
                                </button>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section id="contact-cta" className="py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/partner.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1582218084478-f9b207204f6e?auto=format&fit=crop&q=80" }} alt="Partner With Anago Mining" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/70 z-10" />
                </div>
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C8962E 0%, transparent 50%)" }}></div>
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.08] z-0" style={{ background: "radial-gradient(circle, #e7b13f, transparent)" }}></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold"></div>
                            <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">Partner With Our Mining Division</span>
                        </div>
                        <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">Ready to Unlock Africa's Mineral Potential?</h2>
                        <p className="text-base lg:text-lg text-white/55 max-w-2xl mx-auto mb-10">Whether you're a mining investor, government seeking development partners, or a company exploring African mineral markets — Anago Group's Mining & Metals division is your trusted gateway to responsible resource development.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => router.push("/contact")} className="btn-gold px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 shadow-lg">
                                <span>Get in Touch</span>
                                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                            </button>
                            <button className="btn-outline-light px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium">
                                <Download className="w-4 h-4" strokeWidth={1.5} />
                                <span>Download Mining Profile</span>
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}
