"use client"

import React, { useEffect, useState, useRef } from "react"
import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
    ArrowRight, Sprout, Wheat, Beef, Fish, Factory, Cpu, Warehouse,
    Leaf, Trophy, ShieldCheck, Handshake, Layers, MapPin, Users,
    CheckCircle, Globe, Building2, TrendingUp, Gem, Settings,
    Download, ChevronRight, ArrowDownRight, Apple, Egg, Coffee, Mail
} from "lucide-react"
import { RevealSection } from "@/components/shared/RevealSection"

export function AgricultureSectorPage() {
    const { T, theme } = useAppContext()
    const router = useRouter()
    const isLight = theme === "light"
    const heroParticlesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
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
    }, [])

    return (
        <div className="block selection:bg-gold-500/30 theme-transition">
            <style jsx global>{`
                .hero-agri-bg {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }
                .field-grid {
                    background-image:
                        linear-gradient(rgba(34,197,94,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px);
                    background-size: 60px 60px;
                }
                .hero-particle {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(34, 197, 94, 0.4);
                    animation: particleDrift var(--duration, 8s) ease-in-out infinite;
                    animation-delay: var(--delay, 0s);
                    will-change: transform, opacity;
                    pointer-events: none;
                }
                @keyframes particleDrift {
                    0% { transform: translate3d(0,0,0) scale(1); opacity: 0; }
                    20% { opacity: 0.5; }
                    80% { opacity: 0.5; }
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
                
                @keyframes pulse-green {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
                .animate-pulse-green {
                    animation: pulse-green 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>

            {/* ========== HERO SECTION ========== */}
            <section className="hero-agri-bg">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/agriculture/hero-cinematic.jpg"
                        alt="Anago Group Sustainable Agriculture"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/80 transition-colors duration-700 z-10" />
                </div>



                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 w-full text-center">
                    <div className="max-w-5xl mx-auto">
                        <RevealSection className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-green" />
                            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{T("agri_hero_badge")}</span>
                        </RevealSection>

                        <RevealSection delay={200}>
                            <h1 className="font-serif text-5xl sm:text-7xl font-semibold tracking-tight text-white leading-[0.95] mb-10">
                                {T("agri_hero_title")} <br />
                                <span className="gold-gradient ">{T("agri_hero_gold")}</span>
                            </h1>
                        </RevealSection>

                        <RevealSection delay={400}>
                            <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                                {T("agri_hero_desc")}
                            </p>
                        </RevealSection>

                        <RevealSection delay={600} className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })}
                                className="group relative px-10 py-5 bg-gold-500 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold-500/20"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-navy-950 flex items-center gap-3">
                                    {T("agri_hero_cta1")}
                                    <ArrowDownRight className="w-4 h-4" />
                                </span>
                            </button>

                            <button onClick={() => router.push("/contact")} className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3 group">
                                <Mail className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                {T("agri_hero_cta2")}
                            </button>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ========== ABOUT SECTION 1 (Livestock) ========== */}
            <section className="py-24 lg:py-40 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-7">
                            <RevealSection>
                                <div className="inline-flex items-center gap-3 mb-8">
                                    <div className="w-12 h-[1px] bg-gold-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500">{T("agri_about_tag")}</span>
                                </div>

                                <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-10" style={{ color: "var(--text-primary)" }}>
                                    {T("agri_about_title")}
                                </h2>

                                <div className="space-y-8 mb-12">
                                    <p className="text-lg lg:text-xl leading-relaxed font-light opacity-80" style={{ color: "var(--text-secondary)" }}>
                                        {T("agri_about_p1")}
                                    </p>
                                    <p className="text-base leading-relaxed opacity-70" style={{ color: "var(--text-tertiary)" }}>
                                        {T("agri_about_p2")}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        T("agri_about_feat1"), T("agri_about_feat2"),
                                        T("agri_about_feat3"), T("agri_about_feat4")
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
                                        src="/images/agriculture/livestock-precision.jpg"
                                        alt="Modern Livestock Precision"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Float Badge */}
                                    <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
                                        <Beef className="w-8 h-8 text-gold-400" strokeWidth={1} />
                                    </div>

                                    <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                                        <p className="text-white font-bold tracking-widest text-[10px] uppercase mb-2">{T("agri_about_card_title")}</p>
                                        <p className="text-white/70 text-xs leading-relaxed">{T("agri_about_card_desc")}</p>
                                    </div>
                                </div>
                            </RevealSection>
                        </div>
                    </div>
                </div>
            </section>



            {/* ========== ACTIVITIES GRID ========== */}
            <section id="activities" className="py-24 lg:py-40 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <RevealSection>

                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                {T("agri_act_title")}
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto font-light opacity-60" style={{ color: "var(--text-secondary)" }}>
                                {T("agri_act_subtitle")}
                            </p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { num: "01", icon: <Wheat className="w-6 h-6" />, title: T("agri_act1_title"), desc: T("agri_act1_desc"), color: "green" },
                            { num: "02", icon: <Beef className="w-6 h-6" />, title: T("agri_act2_title"), desc: T("agri_act2_desc"), color: "gold" },
                            { num: "03", icon: <Factory className="w-6 h-6" />, title: T("agri_act3_title"), desc: T("agri_act3_desc"), color: "navy" },
                            { num: "04", icon: <Fish className="w-6 h-6" />, title: T("agri_act4_title"), desc: T("agri_act4_desc"), color: "green" },
                            { num: "05", icon: <Cpu className="w-6 h-6" />, title: T("agri_act5_title"), desc: T("agri_act5_desc"), color: "gold" },
                            { num: "06", icon: <Warehouse className="w-6 h-6" />, title: T("agri_act6_title"), desc: T("agri_act6_desc"), color: "navy" },
                        ].map((activity, idx) => (
                            <RevealSection key={idx} delay={idx * 100}>
                                <div className="card-premium group relative p-10 rounded-3xl border h-full transition-all duration-500 hover:translate-y-[-10px] overflow-hidden" style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                                    <div className="activity-card-number" style={{ color: "var(--text-primary)" }}>{activity.num}</div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${activity.color === 'green' ? 'bg-green-600 text-white' : activity.color === 'gold' ? 'bg-gold-500 text-navy-950' : 'bg-navy-900 text-white shadow-xl'}`}>
                                        {activity.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{activity.title}</h3>
                                    <p className="text-sm leading-relaxed mb-8 opacity-60" style={{ color: "var(--text-secondary)" }}>{activity.desc}</p>

                                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gold-500 group-hover:gap-5 transition-all">
                                        <span>{T("nav_learn_more")}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== ABOUT SECTION 2 (Processing) ========== */}
            <section className="py-24 lg:py-40 relative overflow-hidden theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <RevealSection>
                                <div className="relative aspect-4/3 lg:aspect-square rounded-4xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/agriculture/processing-industrial.jpg"
                                        alt="Industrial Food Processing"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
                                        <Factory className="w-8 h-8 text-green-400" strokeWidth={1} />
                                    </div>
                                </div>
                            </RevealSection>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <RevealSection>
                                <div className="gold-line mb-10" />
                                <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-10" style={{ color: "var(--text-primary)" }}>
                                    {T("agri_vc_title")}
                                </h2>
                                <p className="text-xl font-light leading-relaxed mb-12 opacity-80" style={{ color: "var(--text-secondary)" }}>
                                    {T("agri_vc_subtitle")}
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: T("agri_vc1_title"), desc: T("agri_vc1_desc"), icon: <Sprout className="w-5 h-5" /> },
                                        { title: T("agri_vc2_title"), desc: T("agri_vc2_desc"), icon: <Settings className="w-5 h-5" /> },
                                        { title: T("agri_vc3_title"), desc: T("agri_vc3_desc"), icon: <Factory className="w-5 h-5" /> }
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-6 p-6 rounded-2xl border transition-all hover:translate-x-2" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)" }}>
                                            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                                                {step.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm uppercase tracking-widest mb-1" style={{ color: "var(--text-primary)" }}>{step.title}</h4>
                                                <p className="text-sm opacity-60" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="py-8 lg:py-12 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-navy-950 theme-transition" style={{ backgroundColor: isLight ? "var(--bg-secondary)" : "var(--section-dark)" }} />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? 'black' : 'white'} 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <RevealSection>
                        <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-10">
                            <Mail className="w-8 h-8 text-gold-500" />
                        </div>
                        <h2 className="font-serif text-4xl lg:text-7xl font-semibold tracking-tight mb-10" style={{ color: "var(--text-primary)" }}>
                            {T("agri_final_title")}
                        </h2>
                        <p className="text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed opacity-70" style={{ color: "var(--text-secondary)" }}>
                            {T("agri_final_desc")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-12 py-6 bg-gold-500 rounded-2xl text-navy-950 text-xs font-bold uppercase tracking-widest shadow-2xl shadow-gold-500/20 hover:scale-105 transition-all"
                            >
                                {T("agri_final_cta1")}
                            </button>
                            <button className="px-12 py-6 rounded-2xl border border-border-color bg-card-bg text-text-primary text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", color: "var(--text-primary)" }}>
                                {T("agri_final_cta2")}
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}
