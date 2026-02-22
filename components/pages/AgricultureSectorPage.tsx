"use client"

import React, { useEffect, useState, useRef } from "react"
import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/navigation"
import {
    ArrowRight, Sprout, Wheat, Beef, Fish, Factory, Cpu, Warehouse,
    Leaf, Trophy, ShieldCheck, Handshake, Layers, MapPin, Users,
    CheckCircle, Globe, Building2, TrendingUp, Gem, Settings,
    Linkedin, Twitter, Facebook, Download, Menu, X, Sun, Moon, Monitor,
    ChevronDown, ChevronRight, ArrowDownRight, Apple, Egg, Coffee
} from "lucide-react"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"

export function AgricultureSectorPage() {
    const { T } = useAppContext()
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)
    const heroParticlesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const container = heroParticlesRef.current
        if (!container) return

        // Clear existing particles if any
        container.innerHTML = ""

        for (let i = 0; i < 15; i++) {
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
            particle.style.background = Math.random() > 0.5 ? "rgba(34,197,94,0.35)" : "rgba(200,150,46,0.3)"
            container.appendChild(particle)
        }
    }, [])

    return (
        <div className="block">
            <style jsx global>{`
                .hero-agri-bg {
                    background: linear-gradient(135deg, #0A1628 0%, #0c1e15 25%, #122a1a 50%, #163320 75%, #0D1B2A 100%);
                    position: relative;
                }
                .hero-agri-bg::before {
                    content: '';
                    position: absolute; inset: 0;
                    background:
                        radial-gradient(ellipse 70% 50% at 75% 55%, rgba(34,139,34,0.06), transparent),
                        radial-gradient(ellipse 50% 40% at 25% 45%, rgba(10,22,40,0.5), transparent);
                }
                .field-grid {
                    background-image:
                        linear-gradient(rgba(34,139,34,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34,139,34,0.03) 1px, transparent 1px);
                    background-size: 80px 80px;
                }
                .terrain-element {
                    position: absolute;
                    bottom: 0;
                    background: rgba(34,139,34,0.02);
                    border-radius: 50% 50% 0 0;
                }
                .hero-particle {
                    position: absolute; width: 3px; height: 3px; border-radius: 50%;
                    animation: particleDrift var(--duration, 8s) ease-in-out infinite;
                    animation-delay: var(--delay, 0s);
                    will-change: transform, opacity; pointer-events: none;
                }
                @keyframes particleDrift {
                    0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.6; }
                    100% { transform: translate3d(var(--drift-x, 40px), var(--drift-y, -80px), 0) scale(0.5); opacity: 0; }
                }
                .leaf-accent {
                    position: absolute;
                    width: 2px;
                    background: linear-gradient(180deg, rgba(34,139,34,0.08), transparent);
                    border-radius: 1px;
                }
                .activity-card-number {
                    font-family: var(--font-playfair), serif;
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
                .card-premium:hover .activity-card-number { opacity: 0.12; }
                .gold-line { width: 60px; height: 3px; background: linear-gradient(90deg, #C8962E, #e7b13f); border-radius: 2px; }
                .process-connector::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: -12px;
                    width: 24px;
                    height: 2px;
                    background: linear-gradient(90deg, var(--gold-primary), transparent);
                    display: none;
                }
                @media (min-width: 768px) {
                    .process-connector::after { display: block; }
                    .process-connector:last-child::after { display: none; }
                }
                .quote-mark {
                    font-family: var(--font-playfair), serif;
                    font-size: 8rem; line-height: 1; color: var(--gold-primary); opacity: 0.15;
                    position: absolute; top: -20px; left: -10px; pointer-events: none;
                }
                .value-card-glow { position: relative; overflow: hidden; }
                .value-card-glow::before {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
                    opacity: 0; transition: opacity 0.4s ease;
                }
                .value-card-glow:hover::before { opacity: 1; }
            `}</style>

            {/* HERO SECTION */}
            <section className="hero-agri-bg relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden field-grid">
                    <div className="absolute top-1/4 right-1/4 w-200 h-200 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #228B22 0%, transparent 70%)" }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-[0.06]" style={{ background: "linear-gradient(to top, #0c2010, transparent)" }}></div>

                    {/* Terrain hills */}
                    <div className="terrain-element" style={{ left: "-5%", width: "40%", height: "20%", opacity: 0.6 }}></div>
                    <div className="terrain-element" style={{ left: "25%", width: "35%", height: "28%", opacity: 0.4 }}></div>
                    <div className="terrain-element" style={{ right: "-5%", width: "45%", height: "22%", opacity: 0.5 }}></div>

                    {/* Leaf accents */}
                    <div className="leaf-accent" style={{ left: "15%", bottom: 0, height: "200px" }}></div>
                    <div className="leaf-accent" style={{ left: "16%", bottom: 0, height: "160px", transform: "rotate(8deg)" }}></div>
                    <div className="leaf-accent" style={{ right: "20%", bottom: 0, height: "180px" }}></div>
                    <div className="leaf-accent" style={{ right: "21%", bottom: 0, height: "140px", transform: "rotate(-6deg)" }}></div>

                    {/* Decorative geometry */}
                    <div className="absolute top-1/3 right-1/4 w-28 h-28 border border-green-500/5 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute bottom-1/3 left-1/5 w-20 h-20 border border-white/5 rounded-full animate-float" style={{ animationDelay: "2.5s" }}></div>
                </div>

                <div ref={heroParticlesRef} className="absolute inset-0 pointer-events-none overflow-hidden"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <RevealSection>
                                <div className="flex items-center gap-2 mb-8">
                                    <span className="text-xs font-medium text-white/40">{T("nav_home")}</span>
                                    <ChevronRight className="w-3 h-3 text-white/20" />
                                    <span className="text-xs font-medium text-white/40">{T("nav_industries")}</span>
                                    <ChevronRight className="w-3 h-3 text-white/20" />
                                    <span className="text-xs font-medium text-gold-400">{T("s_agri_title")}</span>
                                </div>

                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-gold" style={{ boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" }}></div>
                                    <span className="text-xs font-medium text-green-400 tracking-wider uppercase">{T("agri_hero_badge")}</span>
                                </div>

                                <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-6">
                                    {T("agri_hero_title")}<span className="gold-gradient">{T("agri_hero_gold")}</span>
                                </h1>

                                <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-xl mb-10">
                                    {T("agri_hero_desc")}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })} className="btn-gold px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2">
                                        <span>{T("agri_hero_cta1")}</span>
                                        <ArrowDownRight className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => router.push("/contact")} className="btn-outline-light px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium">
                                        <span>{T("agri_hero_cta2")}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </RevealSection>
                        </div>

                        <div className="lg:col-span-5 hidden lg:block">
                            <RevealSectionRight>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-green-700">
                                            <Sprout className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-white">{T("agri_div_title")}</span>
                                            <span className="text-xs text-white/40 block">{T("agri_div_subtitle")}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mb-6">
                                        {[
                                            { label: T("agri_stat_crops"), value: [T("agri_stat_crops"), T("agri_stat_livestock"), T("agri_stat_agroind")], isTags: true },
                                            { label: T("agri_stat_markets"), value: T("agri_stat_markets_val") },
                                            { label: T("agri_stat_land"), value: T("agri_stat_land_val") },
                                            { label: T("agri_stat_live_cap"), value: T("agri_stat_live_cap_val") },
                                            { label: T("agri_stat_certs"), value: T("agri_stat_org"), isGreen: true }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                                                <span className="text-xs text-white/45 font-medium">{item.label}</span>
                                                {item.isTags ? (
                                                    <div className="flex items-center gap-2">
                                                        {(item.value as string[]).map((tag, j) => (
                                                            <span key={j} className={`px-2 py-0.5 text-[10px] font-medium rounded ${j === 0 ? "bg-green-500/15 text-green-400" : "bg-white/5 text-white/60"}`}>{tag}</span>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span className={`text-xs font-medium ${item.isGreen ? "text-green-400" : "text-white/60"}`}>{item.value}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-4 h-4 text-green-400" />
                                        </div>
                                        <div>
                                            <span className="text-xs text-white/35 block">{T("agri_stat_food_safety")}</span>
                                            <span className="text-xs font-medium text-white/60">{T("agri_stat_standards")}</span>
                                        </div>
                                    </div>
                                </div>
                            </RevealSectionRight>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT AGRICULTURE */}
            <section id="about-agriculture" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <RevealSectionLeft>
                            <div className="relative">
                                <div className="aspect-4/3 rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0c2010 0%, #163320 40%, #1a3d25 100%)" }}>
                                    <div className="absolute inset-0 field-grid opacity-60"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center relative z-10">
                                            <div className="w-24 h-24 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                                                <Wheat className="w-12 h-12 text-green-400/40" strokeWidth={1} />
                                            </div>
                                            <div className="text-xs text-white/25 font-medium tracking-wider uppercase">{T("agri_about_tag")}</div>
                                        </div>
                                    </div>
                                    <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/5"></div>
                                    <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-green-500/10"></div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 rounded-xl shadow-xl p-5 border max-w-60" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--gold-bg)" }}>
                                            <Handshake className="w-4 h-4" style={{ color: "var(--gold-primary)" }} />
                                        </div>
                                        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{T("agri_about_card_title")}</span>
                                    </div>
                                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{T("agri_about_card_desc")}</p>
                                </div>
                            </div>
                        </RevealSectionLeft>

                        <RevealSectionRight>
                            <div className="gold-line mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
                                {T("agri_about_title")}
                            </h2>
                            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                                {T("agri_about_p1")}
                            </p>
                            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                                {T("agri_about_p2")}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[T("agri_about_feat1"), T("agri_about_feat2"), T("agri_about_feat3"), T("agri_about_feat4")].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gold-bg)" }}>
                                            <CheckCircle className="w-4 h-4" style={{ color: "var(--gold-primary)" }} />
                                        </div>
                                        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group" style={{ color: "var(--gold-primary)" }}>
                                <span>{T("agri_about_cta")}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </RevealSectionRight>
                    </div>
                </div>
            </section>

            {/* ACTIVITIES */}
            <section id="activities" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("agri_act_title")}</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("agri_act_subtitle")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { num: "01", icon: Wheat, title: T("agri_act1_title"), color: "bg-green-700", desc: T("agri_act1_desc"), tags: [T("agri_act1_tag1"), T("agri_act1_tag2"), T("agri_act1_tag3")] },
                            { num: "02", icon: Beef, title: T("agri_act2_title"), color: "bg-(--gold-primary)", desc: T("agri_act2_desc"), tags: [T("agri_act2_tag1"), T("agri_act2_tag2"), T("agri_act2_tag3")] },
                            { num: "03", icon: Factory, title: T("agri_act3_title"), color: "bg-navy-600", desc: T("agri_act3_desc"), tags: [T("agri_act3_tag1"), T("agri_act3_tag2"), T("agri_act3_tag3")] },
                            { num: "04", icon: Fish, title: T("agri_act4_title"), color: "bg-sky-600", desc: T("agri_act4_desc"), tags: [T("agri_act4_tag1"), T("agri_act4_tag2"), T("agri_act4_tag3")] },
                            { num: "05", icon: Cpu, title: T("agri_act5_title"), color: "bg-steel-700", desc: T("agri_act5_desc"), tags: [T("agri_act5_tag1"), T("agri_act5_tag2"), T("agri_act5_tag3")] },
                            { num: "06", icon: Warehouse, title: T("agri_act6_title"), color: "bg-gold-600", desc: T("agri_act6_desc"), tags: [T("agri_act6_tag1"), T("agri_act6_tag2"), T("agri_act6_tag3")] }
                        ].map((item, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <div className="card-premium group cursor-pointer rounded-2xl overflow-hidden border relative h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="activity-card-number" style={{ color: "var(--text-primary)" }}>{item.num}</div>
                                    <div className="p-8">
                                        <div className={`card-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white ${item.color}`}>
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {item.tags.map((tag, j) => (
                                                <span key={j} className="px-3 py-1 text-[10px] font-medium rounded-lg border" style={{ borderColor: "var(--border-color)", color: "var(--text-tertiary)" }}>{tag}</span>
                                            ))}
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all" style={{ color: "var(--gold-primary)" }}>
                                            <span>{T("nav_learn_more")}</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALUE PROPOSITION */}
            <section className="py-20 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #0c1e15 40%, #0D1B2A 100%)" }}>
                <div className="absolute inset-0 field-grid opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">{T("agri_vp_title")}</h2>
                            <p className="text-base text-white/50 max-w-2xl mx-auto">{T("agri_vp_desc")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Users, title: T("agri_vp1_title"), color: "bg-green-700", desc: T("agri_vp1_desc") },
                            { icon: Leaf, title: T("agri_vp2_title"), color: "bg-(--gold-primary)", desc: T("agri_vp2_desc") },
                            { icon: Trophy, title: T("agri_vp3_title"), color: "bg-white/10", iconColor: "text-gold-400", desc: T("agri_vp3_desc") },
                            { icon: ShieldCheck, title: T("agri_vp4_title"), color: "bg-white/5", desc: T("agri_vp4_desc") },
                            { icon: Handshake, title: T("agri_vp5_title"), color: "bg-white/5", desc: T("agri_vp5_desc") },
                            { icon: Layers, title: T("agri_vp6_title"), color: "bg-white/5", desc: T("agri_vp6_desc") }
                        ].map((item, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <div className="value-card-glow group p-8 rounded-2xl bg-white/3 border border-white/10 hover:border-green-500/30 transition-all cursor-default h-full">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform ${item.color} ${item.iconColor || "text-white"}`}>
                                        <item.icon className="w-7 h-7" />
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
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("agri_stat_title")}</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("agri_stat_subtitle")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { icon: MapPin, count: "10", suffix: "+", label: T("agri_stat1_label"), gold: true },
                            { icon: Wheat, count: "50", suffix: "K+ ha", label: T("agri_stat2_label") },
                            { icon: Beef, count: "200", suffix: "K+ Head", label: T("agri_stat3_label"), gold: true },
                            { icon: Users, count: "15,000", suffix: "+", label: T("agri_stat4_label") }
                        ].map((stat, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <div className="text-center p-8 rounded-2xl border bg-(--card-bg) border-(--border-color) shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(34,197,94,0.1)" }}>
                                        <div className="text-green-600"><stat.icon className="w-6 h-6" /></div>
                                    </div>
                                    <div className={`text-3xl lg:text-4xl font-bold tracking-tight mb-2 ${stat.gold ? "text-(--gold-primary)" : "text-(--text-primary)"}`}>
                                        {stat.count}{stat.suffix}
                                    </div>
                                    <div className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{stat.label}</div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALUE CHAIN */}
            <section className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("agri_vc_title")}</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("agri_vc_subtitle")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { num: "1", title: T("agri_vc1_title"), color: "bg-green-700", desc: T("agri_vc1_desc") },
                            { num: "2", title: T("agri_vc2_title"), color: "bg-gold-500", desc: T("agri_vc2_desc") },
                            { num: "3", title: T("agri_vc3_title"), color: "bg-gold-600", desc: T("agri_vc3_desc") },
                            { num: "4", title: T("agri_vc4_title"), color: "bg-sky-600", desc: T("agri_vc4_desc") }
                        ].map((step, i) => (
                            <RevealSection key={i} delay={i * 150}>
                                <div className="process-connector text-center p-6 rounded-2xl border relative overflow-hidden h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className={`absolute top-0 left-0 w-full h-1 ${step.color}`}></div>
                                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-4 text-sm font-bold text-white ${step.color}`}>{step.num}</div>
                                    <h3 className="text-sm font-semibold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUOTE */}
            <section className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection>
                        <div className="relative">
                            <div className="quote-mark">"</div>
                            <div className="relative z-10 text-center">
                                <div className="gold-line mx-auto mb-8"></div>
                                <blockquote className="font-display text-xl lg:text-2xl leading-relaxed mb-8 italic" style={{ color: "var(--text-secondary)" }}>
                                    "{T("agri_quote")}"
                                </blockquote>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-700 text-white font-bold text-sm">AG</div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{T("agri_quote_role")}</p>
                                        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>{T("agri_quote_org")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* PRODUCT PORTFOLIO */}
            <section className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{T("agri_port_title")}</h2>
                            <p className="text-sm max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("agri_port_subtitle")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { icon: Wheat, label: T("agri_port_item1") },
                            { icon: Coffee, label: T("agri_port_item2") },
                            { icon: Beef, label: T("agri_port_item3") },
                            { icon: Egg, label: T("agri_port_item4") },
                            { icon: Fish, label: T("agri_port_item5") },
                            { icon: Apple, label: T("agri_port_item6") }
                        ].map((item, i) => (
                            <RevealSection key={i} delay={i * 50}>
                                <div className="text-center p-5 rounded-2xl border group hover:border-green-500/30 transition-all" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform" style={{ background: "rgba(34,197,94,0.1)" }}>
                                        <item.icon className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>{item.label}</span>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED SECTORS */}
            <section className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <RevealSection>
                            <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{T("rel_title")}</h2>
                            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{T("rel_subtitle")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { id: "mining", icon: <Gem className="w-5 h-5 text-navy-800" />, title: "Mining & Metals", desc: "Extraction & processing", bg: "bg-(--gold-primary)" },
                            { id: "industrial", icon: <Settings className="w-5 h-5 text-white" />, title: "Industrial Services", desc: "Consulting & management", bg: "bg-navy-600" },
                            { id: "real-estate", icon: <Building2 className="w-5 h-5 text-white" />, title: "Real Estate", desc: "Infrastructure development", bg: "#1a2744" },
                            { id: "equipment", icon: <ArrowRight className="w-5 h-5 text-white" />, title: "Equipment Supply", desc: "Supply & maintenance", bg: "#495057" }
                        ].map((sector, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <button onClick={() => router.push(`/industries/${sector.id}`)} className="card-premium group p-6 rounded-2xl border text-left w-full h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className={`card-icon w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${sector.bg}`}>{sector.icon}</div>
                                    <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{sector.title}</h3>
                                    <p className="text-xs mb-3" style={{ color: "var(--text-tertiary)" }}>{sector.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: "var(--gold-primary)" }}>
                                        <span>{T("nav_explore")}</span>
                                        <ArrowRight className="w-3" />
                                    </span>
                                </button>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section id="contact-cta" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #0c1e15 30%, #122a1a 60%, #0D1B2A 100%)" }}>
                <div className="absolute inset-0 field-grid opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-gold"></div>
                            <span className="text-xs font-medium text-green-400 tracking-wider uppercase">{T("agri_final_badge")}</span>
                        </div>
                        <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">{T("agri_final_title")}</h2>
                        <p className="text-base lg:text-lg text-white/55 max-w-2xl mx-auto mb-10">{T("agri_final_desc")}</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => router.push("/contact")} className="btn-gold px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 shadow-lg font-bold">
                                <span>{T("agri_final_cta1")}</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="btn-outline-light px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium">
                                <Download className="w-4 h-4" />
                                <span>{T("agri_final_cta2")}</span>
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}
