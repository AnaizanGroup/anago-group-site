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
                .gold-gradient {
                    background: linear-gradient(135deg, #C8962E, #e7b13f, #C8962E);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .gold-line {
                    width: 40px;
                    height: 2px;
                    background: var(--gold-primary);
                    border-radius: 1px;
                }
                .card-mining {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 1rem;
                    transition: all 0.3s ease;
                }
                .card-mining:hover {
                    border-color: var(--gold-primary);
                    transform: translateY(-4px);
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
                }
                .mining-stat-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 1rem;
                }
            `}</style>

            {/* HERO SECTION - Cinematic & Authoritative */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/mining/hero-bg.jpg"
                        alt="Anago Mining Operations"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/80 transition-colors duration-700 z-10" />
                </div>

                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 w-full flex flex-col items-center text-center">
                    <div className="max-w-5xl mx-auto">
                        <RevealSection className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 shadow-2xl">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold" />
                            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{T("min_hero_badge")}</span>
                        </RevealSection>

                        <RevealSection className="stagger-2">
                            <h1 className="font-serif text-5xl sm:text-7xl font-semibold tracking-tight text-white leading-[0.95] mb-10">
                                {T("min_hero_title")}<br />
                                <span className="gold-gradient ">{T("min_hero_title_gold")}</span>
                            </h1>
                        </RevealSection>

                        <RevealSection className="stagger-4">
                            <p className="text-xl lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-16 font-light">
                                {T("min_hero_desc")}
                            </p>
                        </RevealSection>

                        <RevealSection className="flex flex-wrap justify-center gap-6 stagger-5">
                            <button onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/30 transition-all hover:scale-105">
                                <span className="font-bold tracking-widest uppercase">{T("min_hero_cta1")}</span>
                                <ArrowDownRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button onClick={() => router.push("/contact")} className="btn-outline-light px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 font-bold backdrop-blur-xl border-white/20 hover:bg-white/5 transition-all text-white">
                                <span className="tracking-widest uppercase">{T("contact_us")}</span>
                                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                        </RevealSection>
                    </div>
                </div>

                <div className="absolute bottom-12 right-12 flex-col items-center gap-4 hidden lg:flex">
                    <span className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase vertical-text mb-4">{T("min_hero_discover")}</span>
                    <div className="w-0.5 h-16 bg-linear-to-b from-gold-500 to-transparent opacity-40" />
                </div>
            </section>

            {/* ABOUT MINING - Editorial Layout */}
            <section id="about-mining" className="py-12 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-7">
                            <RevealSectionLeft>
                                <div className="gold-line mb-10" />
                                <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-10" style={{ color: "var(--text-primary)" }}>
                                    {T("min_about_title")}
                                </h2>
                                <div className="space-y-8 text-lg lg:text-lg text-justify leading-relaxed mb-12 font-light" style={{ color: "var(--text-secondary)" }}>
                                    <p>{T("min_about_p1")}</p>
                                    <p>{T("min_about_p2")}</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                    {[T("min_about_feat1"), T("min_about_feat2"), T("min_about_feat3"), T("min_about_feat4")].map((text, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--gold-bg)" }}>
                                                <CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--gold-primary)" }} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-4 text-xs font-bold tracking-widest uppercase transition-all group" style={{ color: "var(--gold-primary)" }}>
                                    <span>{T("min_about_cta")}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                                </button>
                            </RevealSectionLeft>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <RevealSectionRight>
                                <div className="relative aspect-4/5 lg:aspect-3/4 lg:h-190 rounded-4xl overflow-hidden shadow-2xl border" style={{ borderColor: "var(--border-color)" }}>
                                    <img src="/images/mining/operations.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1578502315052-8758dff58ed5?auto=format&fit=crop&q=80" }} alt="Mining Operations" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 from-15% to-white/30" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
                                            <ShieldCheck className="w-4 h-4 text-gold-400" />
                                            <span className="text-xs font-bold text-white uppercase tracking-widest">{T("min_about_label")}</span>
                                        </div>
                                        <p className="text-sm text-white/80 font-medium">{T("min_about_label_desc")}</p>
                                    </div>
                                </div>
                            </RevealSectionRight>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACTIVITIES - Professional Grid */}
            <section id="activities" className="py-6 lg:py-12 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-24">
                        <RevealSection>
                            <div className="gold-line mb-8" />
                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>{T("min_act_title")}</h2>
                            <p className="text-xl opacity-70 font-light" style={{ color: "var(--text-secondary)" }}>{T("min_act_desc")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {[
                            { num: "01", image: "/images/geolocalityt.jpg", title: T("min_act1_title"), desc: T("min_act1_desc"), tags: [T("min_act1_tag1"), T("min_act1_tag2")] },
                            { num: "02", image: "/images/mining/Mining-Exploitation.jpeg", title: T("min_act2_title"), desc: T("min_act2_desc"), tags: [T("min_act2_tag1"), T("min_act2_tag2")] },
                            { num: "03", image: "/images/mining/Minining-Commerce.jpeg", title: T("min_act3_title"), desc: T("min_act3_desc"), tags: [T("min_act3_tag1"), T("min_act3_tag2")] },
                            { num: "04", image: "/images/mining/operations-services.jpg", title: T("min_act4_title"), desc: T("min_act4_desc"), tags: [T("min_act4_tag1"), T("min_act4_tag2")] }
                        ].map((activity, i) => (
                            <RevealSection key={i} className="card-mining overflow-hidden flex flex-col sm:flex-row h-full group">
                                <div className="sm:w-2/5 relative overflow-hidden">
                                    <img src={activity.image} alt={activity.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                                        <span className="text-xs font-bold text-white">{activity.num}</span>
                                    </div>
                                </div>
                                <div className="p-10 sm:w-3/5 flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>{activity.title}</h3>
                                    <p className="text-sm opacity-70 leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>{activity.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {activity.tags.map((tag, j) => (
                                            <span key={j} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg border" style={{ borderColor: "var(--border-color)", color: "var(--text-tertiary)" }}>{tag}</span>
                                        ))}
                                    </div>
                                    <button className="inline-flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase transition-all" style={{ color: "var(--gold-primary)" }}>
                                        <span>{T("learn_more")}</span>
                                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                                    </button>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>


            {/* FINAL CTA - High Authority */}
            <section id="contact-cta" className="py-8 lg:py-12 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/partner.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1582218084478-f9b207204f6e?auto=format&fit=crop&q=80" }} alt="Partner With Anago" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/80 z-10" />
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <RevealSection>
                        <div className="gold-line mx-auto mb-12" />
                        <h2 className="font-serif text-4xl lg:text-7xl font-semibold tracking-tight text-white mb-10">{T("min_final_title")}</h2>
                        <p className="text-xl lg:text-2xl text-white/60 mb-16 font-light leading-relaxed">{T("min_final_desc")}</p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <button onClick={() => router.push("/contact")} className="btn-gold px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/30">
                                <span className="font-bold tracking-widest uppercase">{T("min_final_cta1")}</span>
                                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button className="btn-outline-light px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 font-bold backdrop-blur-xl border-white/20 hover:bg-white/5 transition-all text-white">
                                <Download className="w-5 h-5" strokeWidth={2.5} />
                                <span className="tracking-widest uppercase">{T("min_final_cta2")}</span>
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}
