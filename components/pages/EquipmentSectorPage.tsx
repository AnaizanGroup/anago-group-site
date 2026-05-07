"use client"

import React, { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
    ArrowRight, Settings, Zap, Wrench, HardHat, Award, CheckCircle,
    Truck, Activity, GraduationCap, ShieldCheck, Target,
    Lightbulb, Globe, Clock, Handshake, Shield, MapPin,
    Users, Download, ChevronRight, ArrowDownRight, Settings2,
    BarChart3, Puzzle, Layers, Headphones, Car, Forklift, ZapOff, Mail,
    ToolCase
} from "lucide-react"
import { RevealSection } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"

export function EquipmentSectorPage() {
    const { T, theme } = useAppContext()
    const isLight = theme === "light"
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)
    const heroParticlesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)

        // Initialize particles
        if (heroParticlesRef.current) {
            const container = heroParticlesRef.current
            container.innerHTML = ''
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div')
                particle.className = 'hero-particle'
                particle.style.left = Math.random() * 100 + '%'
                particle.style.top = Math.random() * 100 + '%'
                particle.style.setProperty('--drift-x', (Math.random() * 100 - 50) + 'px')
                particle.style.setProperty('--drift-y', (Math.random() * -120 - 40) + 'px')
                particle.style.setProperty('--duration', (8 + Math.random() * 10) + 's')
                particle.style.setProperty('--delay', (Math.random() * 8) + 's')
                const size = (2 + Math.random() * 4) + 'px'
                particle.style.width = size
                particle.style.height = size
                container.appendChild(particle)
            }
        }

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="block selection:bg-gold-500/30 theme-transition">
            <style jsx global>{`
                .hero-equipment-bg {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }
                .blueprint-grid {
                    background-image:
                        linear-gradient(${isLight ? "rgba(10,22,40,0.04)" : "rgba(200,150,46,0.04)"} 1px, transparent 1px),
                        linear-gradient(90deg, ${isLight ? "rgba(10,22,40,0.04)" : "rgba(200,150,46,0.04)"} 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                @keyframes gearSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-gear-spin { 
                    animation: gearSpin 25s linear infinite; 
                }
                .animate-gear-spin-reverse { 
                    animation: gearSpin 30s linear infinite reverse; 
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
                    0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.6; }
                    100% { transform: translate3d(var(--drift-x, 40px), var(--drift-y, -80px), 0) scale(0.5); opacity: 0; }
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
                .value-card-glow { position: relative; overflow: hidden; }
                .value-card-glow::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, #C8962E, transparent);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .value-card-glow:hover::before { opacity: 1; }
                
                @keyframes pulse-gold {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
                .animate-pulse-gold {
                    animation: pulse-gold 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .gold-gradient-text {
                    background: linear-gradient(135deg, #C8962E 0%, #F5D17E 50%, #C8962E 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            {/* ========== HERO SECTION ========== */}
            <section className="hero-equipment-bg">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/equipment/hero-precision.jpg"
                        alt="Anago Group Equipment Precision"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                </div>



                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 w-full text-center">
                    <div className="max-w-4xl mx-auto">
                        <RevealSection className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl">
                            <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse-gold" />
                            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{T("equip_hero_badge")}</span>
                        </RevealSection>

                        <RevealSection delay={200}>
                            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl  font-semibold tracking-tight text-white leading-[0.95] mb-10">
                                {T("equip_hero_title")}<span className="gold-gradient italic">{T("equip_hero_title_gold")}</span>
                            </h1>
                        </RevealSection>

                        <RevealSection delay={400}>
                            <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                                {T("equip_hero_desc")}
                            </p>
                        </RevealSection>

                        <RevealSection delay={600} className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })}
                                className="group relative px-10 py-5 bg-gold-500 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold-500/20"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-navy-950 flex items-center gap-3">
                                    {T("equip_hero_cta1")}
                                    <ArrowDownRight className="w-4 h-4" />
                                </span>
                            </button>

                            <button className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3 group">
                                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                {T("equip_hero_cta2")}
                            </button>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ========== ABOUT SECTION (7/5 Editorial) ========== */}
            <section className="py-24 lg:py-40 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <RevealSection>
                                <div className="relative aspect-4/3 lg:aspect-square rounded-4xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/equipment/workshop-about.jpg"
                                        alt="Anago Group Industrial Workshop"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Float Badge */}
                                    <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
                                        <Award className="w-8 h-8 text-gold-400" strokeWidth={1} />
                                    </div>

                                    <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                                        <p className="text-white font-bold tracking-widest text-[10px] uppercase mb-2">{T("equip_about_card_title")}</p>
                                        <p className="text-white/70 text-xs leading-relaxed">{T("equip_about_card_desc")}</p>
                                    </div>
                                </div>
                            </RevealSection>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <RevealSection>
                                <div className="inline-flex items-center gap-3 mb-8">
                                    <div className="w-12 h-px bg-gold-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500">{T("equip_about_tag")}</span>
                                </div>

                                <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-10" style={{ color: "var(--text-primary)" }}>
                                    {T("equip_about_title")}
                                </h2>

                                <div className="space-y-8 mb-12">
                                    <p className="text-lg lg:text-xl leading-relaxed font-light opacity-80" style={{ color: "var(--text-secondary)" }}>
                                        {T("equip_about_p1")}
                                    </p>
                                    <p className="text-base leading-relaxed opacity-70" style={{ color: "var(--text-tertiary)" }}>
                                        {T("equip_about_p2")}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        T("equip_act1_title"), T("equip_act2_title"),
                                        T("equip_act3_title"), T("equip_act4_title")
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
                    </div>
                </div>
            </section>

            {/* ========== ACTIVITIES GRID ========== */}
            <section id="activities" className="py-8 lg:py-14 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <RevealSection>
                            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-10">
                                <Settings className="w-8 h-8 text-gold-500 animate-gear-spin" />
                            </div>
                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                {T("equip_activity_title")}
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto font-light opacity-60" style={{ color: "var(--text-secondary)" }}>
                                {T("equip_activity_subtitle")}
                            </p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { num: "01", icon: <ShoppingCart className="w-6 h-6" />, title: T("equip_act1_title"), desc: T("equip_act1_desc"), color: "gold" },
                            { num: "02", icon: <Clock className="w-6 h-6" />, title: T("equip_act2_title"), desc: T("equip_act2_desc"), color: "navy" },
                            { num: "03", icon: <Truck className="w-6 h-6" />, title: T("equip_act3_title"), desc: T("equip_act3_desc"), color: "gold" },
                            { num: "04", icon: <Lightbulb className="w-6 h-6" />, title: T("equip_act4_title"), desc: T("equip_act4_desc"), color: "navy" },
                            { num: "05", icon: <Activity className="w-6 h-6" />, title: T("equip_act5_title"), desc: T("equip_act5_desc"), color: "gold" },
                            { num: "06", icon: <GraduationCap className="w-6 h-6" />, title: T("equip_act6_title"), desc: T("equip_act6_desc"), color: "navy" },
                        ].map((activity, idx) => (
                            <RevealSection key={idx} delay={idx * 100}>
                                <div className="card-premium group relative p-10 rounded-3xl border h-full transition-all duration-500 hover:-translate-y-2.5 overflow-hidden" style={{ background: "var(--bg-primary)", borderColor: "var(--border-color)" }}>
                                    <div className="activity-card-number" style={{ color: "var(--text-primary)" }}>{activity.num}</div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 text-black duration-500 ${activity.color === 'gold' ? 'bg-gold-500' : 'bg-navy-900 text-black dark:text-white shadow-xl'}`}>
                                        {activity.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{activity.title}</h3>
                                    <p className="text-sm leading-relaxed mb-8 opacity-60" style={{ color: "var(--text-secondary)" }}>{activity.desc}</p>

                                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gold-500 group-hover:gap-5 transition-all">
                                        <span>{T("learn_more")}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== VALUE PROPOSITION ========== */}
            <section className="py-24 lg:py-40 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-8"></div>
                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                {T("equip_value_title")}
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto font-light opacity-60" style={{ color: "var(--text-secondary)" }}>
                                {T("equip_value_subtitle")}
                            </p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <ShieldCheck className="w-6 h-6" />, title: T("equip_val1_title"), desc: T("equip_val1_desc") },
                            { icon: <Users className="w-6 h-6" />, title: T("equip_val2_title"), desc: T("equip_val2_desc") },
                            { icon: <Headphones className="w-6 h-6" />, title: T("equip_val4_title"), desc: T("equip_val4_desc") },
                            { icon: <Globe className="w-6 h-6" />, title: T("equip_val3_title"), desc: T("equip_val3_desc") },
                            { icon: <BarChart3 className="w-6 h-6" />, title: T("equip_val5_title"), desc: T("equip_val5_desc") },
                            { icon: <Layers className="w-6 h-6" />, title: T("equip_val6_title"), desc: T("equip_val6_desc") },
                        ].map((item, idx) => (
                            <RevealSection key={idx} delay={idx * 100}>
                                <div className="value-card-glow group p-10 rounded-3xl border h-full transition-all duration-400 bg-card-bg border-border-color" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110" style={{ background: "var(--gold-bg)", color: "var(--gold-primary)" }}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                    <p className="text-sm leading-relaxed opacity-60" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CATEGORIES (Visual Grid) ========== */}
            <section className="py-24 lg:py-32 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                {T("equip_cat_title")}
                            </h2>
                        </RevealSection>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { icon: <HardHat className="w-6 h-6" />, label: T("equip_cat1") },
                            { icon: <ToolCase className="w-6 h-6" />, label: T("equip_cat2") },
                            { icon: <Zap className="w-6 h-6" />, label: T("equip_cat4") },
                            { icon: <Forklift className="w-6 h-6" />, label: T("equip_cat5") },
                            { icon: <Car className="w-6 h-6" />, label: T("equip_cat6") },
                        ].map((cat, i) => (
                            <RevealSection key={i} delay={i * 50}>
                                <div className="text-center p-8 rounded-3xl border group hover:scale-105 transition-all duration-500" style={{ background: "var(--bg-primary)", borderColor: "var(--border-color)" }}>
                                    <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:rotate-360 duration-1000" style={{ background: "var(--gold-bg)", color: "var(--gold-primary)" }}>
                                        {cat.icon}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>{cat.label}</span>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="py-8 lg:py-12 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/equipment/parts-grid.jpg"
                        alt="Precision Parts Detail"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80 z-10" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <RevealSection>
                        <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-10">
                            <Mail className="w-8 h-8 text-gold-500" />
                        </div>
                        <h2 className="font-serif text-4xl lg:text-7xl font-semibold tracking-tight text-white mb-10">
                            {T("equip_cta_title")}
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                            {T("equip_cta_desc")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-12 py-6 bg-gold-500 rounded-2xl text-navy-950 text-xs font-bold uppercase tracking-widest shadow-2xl shadow-gold-500/20 hover:scale-105 transition-all"
                            >
                                {T("equip_cta_btn")}
                            </button>
                            <button className="px-12 py-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                                {T("equip_cta_btn2")}
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}

// Icons
function ShoppingCart(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}

function ArrowUpFromLine(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-9 9 9" />
            <path d="M12 0v18" />
            <path d="M3 24h18" />
        </svg>
    )
}
