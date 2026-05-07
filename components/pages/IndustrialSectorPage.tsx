"use client"

import React, { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import {
    ArrowRight, Settings, Zap, Wrench, HardHat, Award, CheckCircle,
    Brain, GanttChart, Container, GraduationCap, ShieldCheck, Target,
    Lightbulb, Globe, Clock, Handshake, Shield, MapPin, FolderCheck,
    Users, Droplets, Wheat, Download, ChevronRight, ArrowDownRight
} from "lucide-react"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"
import Image from "next/image"

export function IndustrialSectorPage() {
    const { T, theme } = useAppContext()
    const isLight = theme === "light"
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="theme-transition overflow-x-hidden">
            <style jsx global>{`
                .industrial-gradient {
                    background: linear-gradient(135deg, rgba(200,150,46,0.1) 0%, transparent 100%);
                }
                .blueprint-subtle {
                    background-image: 
                        linear-gradient(var(--border-color) 1px, transparent 1px),
                        linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
                    background-size: 50px 50px;
                    opacity: 0.15;
                }
                .gold-line-industrial {
                    width: 60px;
                    height: 2px;
                    background: var(--gold-primary);
                    position: relative;
                }
                .gold-line-industrial::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -6px;
                    width: 30px;
                    height: 2px;
                    background: var(--gold-primary);
                    opacity: 0.3;
                }
            `}</style>

            {/* ========== HERO SECTION - Cinematic & Institutional ========== */}
            <section className="relative min-h-[90vh] flex items-center justify-center   overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/industrial/hero-bg.png"
                        alt="Anago Industrial Excellence"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 z-10 bg-black/60" />
                </div>

                <div className="max-w-8xl mx-auto px-4 sm:px-6 py-32 relative z-20 w-full flex flex-col items-center text-center">
                    <div className="max-w-5xl mx-auto">
                        <RevealSection className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 backdrop-blur-xl mb-10">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold" />
                            <span className="text-[10px] font-bold text-gold-500 tracking-[0.2em] uppercase">{T("ind_hero_badge")}</span>
                        </RevealSection>

                        <RevealSection delay={200}>
                            <h1 className="font-serif text-5xl sm:text-7xl font-semibold tracking-tight leading-[0.95] mb-10" style={{ color: "var(--text-primary)" }}>

                                <span className="font-semibold tracking-tight leading-[0.95] mb-10 text-white py-2">{T("ind_hero_title")}</span>
                                <span className="gold-gradient">{T("ind_hero_title_gold")}</span>
                            </h1>
                        </RevealSection>

                        <RevealSection delay={400}>
                            <p className="text-xl lg:text-xl leading-relaxed max-w-3xl mx-auto mb-16 font-light " style={{ color: "var(--text-secondary)" }}>
                                {T("ind_hero_desc")}
                            </p>
                        </RevealSection>

                        <RevealSection delay={600} className="flex flex-wrap justify-center gap-6 ">
                            <button onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/20 transition-all hover:scale-105">
                                <span className="font-bold tracking-widest uppercase">{T("ind_hero_cta1")}</span>
                                <ArrowDownRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button onClick={() => router.push("/contact")} className="btn-outline px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 font-bold backdrop-blur-xl border-white/10 transition-all hover:bg-white/5" style={{ color: "var(--text-primary)", borderColor: "var(--border-color)" }}>
                                <span className="tracking-widest uppercase">{T("ind_hero_cta2")}</span>
                                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                        </RevealSection>
                    </div>
                </div>

                <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4 lg:flex">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase vertical-text mb-4 opacity-40" style={{ color: "var(--text-primary)" }}>{T("min_hero_discover")}</span>
                    <div className="w-0.5 h-16 bg-linear-to-b from-gold-500 to-transparent opacity-40" />
                </div>
            </section>

            {/* ========== ABOUT INDUSTRIAL - Editorial Layout ========== */}
            <section id="about-industrial" className="py-24 lg:py-40 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-7">
                            <RevealSectionLeft>
                                <div className="gold-line-industrial mb-10" />
                                <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight leading-tight mb-10" style={{ color: "var(--text-primary)" }}>
                                    {T("ind_about_title")}
                                </h2>
                                <div className="space-y-8 text-lg lg:text-xl leading-relaxed mb-12 font-light" style={{ color: "var(--text-secondary)" }}>
                                    <p>{T("ind_about_p1")}</p>
                                    <p>{T("ind_about_p2")}</p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                    {[T("ind_about_feat1"), T("ind_about_feat2"), T("ind_about_feat3"), T("ind_about_feat4")].map((text, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--gold-bg)" }}>
                                                <CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--gold-primary)" }} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </RevealSectionLeft>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <RevealSectionRight>
                                <div className="relative aspect-4/5 lg:h-162.5 rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "var(--border-color)" }}>
                                    <Image
                                        src="/images/industrial/consulting.png"
                                        alt="Industrial Project Management"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
                                    <div className="absolute bottom-10 left-10 right-10 z-20">
                                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                                            <Award className="w-5 h-5 text-gold-400" />
                                        </div>
                                        <p className="text-xl text-white/90 font-medium leading-relaxed max-w-md">{T("ind_about_iso_desc")}</p>
                                    </div>
                                </div>
                            </RevealSectionRight>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== ACTIVITIES - Professional Grid ========== */}
            <section id="activities" className="py-24 lg:py-40 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-24">
                        <RevealSection>
                            <div className="gold-line-industrial mb-8" />
                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>{T("ind_act_title")}</h2>
                            <p className="text-xl opacity-70 font-light" style={{ color: "var(--text-secondary)" }}>{T("ind_act_desc")}</p>
                        </RevealSection>
                    </div>

                    <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] border-y theme-transition overflow-hidden" style={{ borderColor: "var(--border-color)" }}>
                        {[
                            {
                                num: "01",
                                icon: Settings,
                                title: T("ind_act1_title"),
                                desc: T("ind_act1_desc"),
                                tags: [T("ind_act1_tag1"), T("ind_act1_tag2"), T("ind_act1_tag3")],
                                img: "/images/equipment/hero-precision.jpg"
                            },
                            {
                                num: "02",
                                icon: Wheat,
                                title: T("ind_act2_title"),
                                desc: T("ind_act2_desc"),
                                tags: [T("ind_act2_tag1"), T("ind_act2_tag2"), T("ind_act2_tag3")],
                                img: "/images/agriculture/hero-cinematic.jpg"
                            },
                            {
                                num: "03",
                                icon: MapPin,
                                title: T("ind_act3_title"),
                                desc: T("ind_act3_desc"),
                                tags: [T("ind_act3_tag1"), T("ind_act3_tag2"), T("ind_act3_tag3")],
                                img: "/images/realestate/hero-cinematic.jpg"
                            },
                        ].map((act, i) => (
                            <div key={i} className="group relative flex-1 hover:flex-[1.8] transition-all duration-700 ease-in-out border-b lg:border-b-0 lg:border-r last:border-0 overflow-hidden" style={{ borderColor: "var(--border-color)" }}>
                                {/* Background Image Reveal */}
                                <div className="absolute inset-0 z-0 transition-all duration-1000 lg:group-hover:scale-110">
                                    <Image
                                        src={act.img}
                                        alt={act.title}
                                        fill
                                        className="object-cover opacity-30 lg:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-700 grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60 opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />
                                </div>

                                {/* Content Layer */}
                                <div className="relative z-10 h-full p-10 lg:p-16 flex flex-col theme-transition">
                                    <span className="absolute top-10 right-10 text-8xl lg:text-9xl font-bold opacity-10 lg:opacity-5 transition-all duration-700 lg:group-hover:opacity-10 lg:group-hover:-translate-y-4" style={{ color: "var(--text-primary)" }}>{act.num}</span>

                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-12 theme-transition lg:group-hover:scale-110 lg:group-hover:bg-gold-500/20 transition-all duration-500" style={{ background: "var(--gold-bg)", color: "var(--gold-primary)" }}>
                                        <act.icon className="w-8 h-8" strokeWidth={1.5} />
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-6 transition-all duration-500 lg:group-hover:text-gold-400" style={{ color: "var(--text-primary)" }}>{act.title}</h3>

                                        <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-700">
                                            <div className="overflow-hidden">
                                                <p className="text-lg leading-relaxed mb-8 font-light opacity-80 lg:opacity-0 lg:group-hover:opacity-80 transition-opacity duration-700 lg:delay-200" style={{ color: "var(--text-secondary)" }}>{act.desc}</p>
                                                <div className="flex flex-wrap gap-2 pt-6 border-t opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 lg:delay-300" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                                                    {act.tags.map((tag, j) => (
                                                        <span key={j} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/10 text-white/60">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== VALUE PROPOSITION - Minimalist & Bold ========== */}
            <section className="py-8 lg:py-24 theme-transition relative" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="absolute inset-0 blueprint-subtle" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <RevealSection>
                            <div className="gold-line-industrial mx-auto mb-8" />
                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>{T("ind_vp_title")}</h2>
                            <p className="text-xl max-w-2xl mx-auto font-light opacity-70" style={{ color: "var(--text-secondary)" }}>{T("ind_vp_desc")}</p>
                        </RevealSection>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { icon: Target, title: T("ind_vp1_title"), desc: T("ind_vp1_desc") },
                            { icon: Lightbulb, title: T("ind_vp2_title"), desc: T("ind_vp2_desc") },
                            { icon: Handshake, title: T("ind_vp5_title"), desc: T("ind_vp5_desc") },


                        ].map((val, i) => (
                            <RevealSection key={i} delay={i * 50}>
                                <div className="group">
                                    <div className="mb-6 theme-transition group-hover:translate-x-2 transition-transform duration-500" style={{ color: "var(--gold-primary)" }}>
                                        <val.icon className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{val.title}</h3>
                                    <p className="text-base leading-relaxed font-light opacity-70" style={{ color: "var(--text-secondary)" }}>{val.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>


            {/* ========== FINAL CTA - Strategic Vision ========== */}
            <section id="contact-cta" className="py-8 lg:py-12 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/industrial/hero-bg.png"
                        alt="Anago Vision"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80 z-10" />
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <RevealSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-xl mb-12">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold" />
                            <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("ind_final_badge")}</span>
                        </div>
                        <h2 className="font-serif text-4xl lg:text-7xl font-semibold tracking-tight text-white mb-10 leading-tight">{T("ind_final_title")}</h2>
                        <p className="text-xl lg:text-2xl opacity-70 max-w-2xl mx-auto mb-16 font-light text-white">{T("ind_final_desc")}</p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <button onClick={() => router.push("/contact")} className="btn-gold px-12 py-5 text-sm rounded-2xl inline-flex items-center gap-4 transition-all hover:scale-105">
                                <span className="font-bold tracking-widest uppercase">{T("ind_final_cta1")}</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="text-white font-bold tracking-widest uppercase text-xs inline-flex items-center gap-4 group hover:opacity-80 transition-all">
                                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                                <span>{T("ind_final_cta2")}</span>
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}
