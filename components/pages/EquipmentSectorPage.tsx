"use client"

import React, { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import {
    ArrowRight, Settings, Zap, Wrench, HardHat, Award, CheckCircle,
    Truck, Activity, GraduationCap, ShieldCheck, Target,
    Lightbulb, Globe, Clock, Handshake, Shield, MapPin,
    Users, Download, ChevronRight, ArrowDownRight, Settings2,
    BarChart3, Puzzle, Layers, Headphones, Car, Forklift, ZapOff
} from "lucide-react"
import { RevealSection } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"

export function EquipmentSectorPage() {
    const { T } = useAppContext()
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
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div')
                particle.className = 'hero-particle'
                particle.style.left = Math.random() * 100 + '%'
                particle.style.top = Math.random() * 100 + '%'
                particle.style.setProperty('--drift-x', (Math.random() * 80 - 40) + 'px')
                particle.style.setProperty('--drift-y', (Math.random() * -100 - 20) + 'px')
                particle.style.setProperty('--duration', (6 + Math.random() * 8) + 's')
                particle.style.setProperty('--delay', (Math.random() * 6) + 's')
                const size = (2 + Math.random() * 3) + 'px'
                particle.style.width = size
                particle.style.height = size
                container.appendChild(particle)
            }
        }

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="block">
            <style jsx global>{`
                .hero-equipment-bg {
                    background: linear-gradient(135deg, #0A1628 0%, #131d2e 40%, #0D1B2A 100%);
                    position: relative;
                }
                .hero-equipment-bg::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(ellipse 80% 50% at 70% 60%, rgba(200,150,46,0.06), transparent),
                        radial-gradient(ellipse 60% 40% at 20% 40%, rgba(10,22,40,0.6), transparent);
                }
                .blueprint-grid {
                    background-image:
                        linear-gradient(rgba(200,150,46,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(200,150,46,0.04) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                @keyframes gearSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-gear-spin { 
                    animation: gearSpin 15s linear infinite; 
                }
                .animate-gear-spin-reverse { 
                    animation: gearSpin 20s linear infinite reverse; 
                }
                
                .hero-particle {
                    position: absolute;
                    width: 3px;
                    height: 3px;
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
                    50% { transform: scale(1.2); opacity: 0.7; }
                }
                .animate-pulse-gold {
                    animation: pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>

            {/* ========== HERO SECTION ========== */}
            <section className="hero-equipment-bg relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 right-1/4 w-225 h-225 rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, #C8962E 0%, transparent 70%)" }}></div>
                    <div className="absolute inset-0 blueprint-grid opacity-30"></div>

                    {/* Gear Silhouettes */}
                    <div className="absolute -top-10 -left-10 w-96 h-96 border border-white/5 rounded-full animate-gear-spin opacity-20"></div>
                    <div className="absolute top-1/3 -right-20 w-80 h-80 border border-gold-500/5 rounded-full animate-gear-spin-reverse opacity-20"></div>
                    <div className="absolute -bottom-20 right-1/4 w-64 h-64 border border-white/5 rounded-full animate-gear-spin opacity-10"></div>
                </div>

                <div ref={heroParticlesRef} className="absolute inset-0 pointer-events-none overflow-hidden"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <RevealSection delay={100} className="flex items-center gap-2 mb-8">
                                <button onClick={() => router.push("/")} className="text-xs font-medium text-white/40 hover:text-white/60 transition-colors">Home</button>
                                <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                                <span className="text-xs font-medium text-white/40">{T("nav_industries", "Industries")}</span>
                                <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                                <span className="text-xs font-medium text-gold-400">{T("equip_breadcrumb", "Equipment & Solutions")}</span>
                            </RevealSection>

                            <RevealSection delay={200} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
                                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold"></div>
                                <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("equip_hero_badge", "Strategic Sector 05 · Industrial Solutions")}</span>
                            </RevealSection>

                            <RevealSection delay={300}>
                                <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-6">
                                    {T("equip_hero_title", "Equipment & Solutions — ")}<span className="gold-gradient">{T("equip_hero_title_gold", "Powering African Industry")}</span>
                                </h1>
                            </RevealSection>

                            <RevealSection delay={400}>
                                <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-xl mb-10">
                                    {T("equip_hero_desc", "From procurement to predictive maintenance, Anago Group provides the reliable machinery and technical expertise that keeps Africa's mining, construction, and agriculture sectors moving.")}
                                </p>
                            </RevealSection>

                            <RevealSection delay={500} className="flex flex-wrap gap-4">
                                <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })} className="btn-gold px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2">
                                    <span>{T("equip_hero_cta1", "View Equipment Fleet")}</span>
                                    <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} />
                                </button>
                                <button className="btn-outline-light px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium">
                                    <Download className="w-4 h-4" strokeWidth={1.5} />
                                    <span>{T("equip_hero_cta2", "Download Catalog")}</span>
                                </button>
                            </RevealSection>
                        </div>

                        <div className="lg:col-span-5 hidden lg:block">
                            <RevealSection delay={600} className="relative">
                                <div className="bg-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-navy-600">
                                            <Settings2 className="w-5 h-5 text-white" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-white">{T("equip_div_title", "Equipment Division")}</span>
                                            <span className="text-xs text-white/40 block">{T("equip_div_subtitle", "Operational Ready")}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mb-6">
                                        {[
                                            { label: T("equip_stat_fleet", "Fleet Units"), value: "2,500+" },
                                            { label: T("equip_stat_centers", "Service Centers"), value: "30+" },
                                            { label: T("equip_stat_uptime", "Uptime Guarantee"), value: <span className="text-green-400">97.5%</span> },
                                            { label: T("equip_stat_techs", "Certified Technicians"), value: "500+" },
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 last:pb-0">
                                                <span className="text-xs text-white/45 font-medium">{item.label}</span>
                                                <span className="text-xs font-medium text-white/60">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-gold-500/20 flex items-center justify-center shrink-0">
                                            <Activity className="w-4 h-4 text-gold-400" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <span className="text-xs text-white/35 block">{T("equip_telematics", "Telematics Enabled")}</span>
                                            <span className="text-xs font-medium text-white/60">{T("equip_telematics_desc", "Real-time asset visibility continent-wide")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-navy-600/80 border border-white/10 flex items-center justify-center animate-float">
                                    <Truck className="w-7 h-7 text-gold-400" strokeWidth={1.5} />
                                </div>
                            </RevealSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== ABOUT SECTION ========== */}
            <section id="about" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <RevealSection className="relative">
                            <div className="aspect-4/3 rounded-2xl overflow-hidden relative bg-navy-800">
                                <div className="absolute inset-0 blueprint-grid opacity-60"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center relative z-10">
                                        <div className="w-24 h-24 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                                            <Settings className="w-12 h-12 text-gold-400/40" strokeWidth={1} />
                                        </div>
                                        <div className="text-xs text-white/25 font-medium tracking-wider uppercase">{T("equip_about_tag", "Heavy Equipment Assembly")}</div>
                                    </div>
                                </div>
                                <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/4 rounded-tl-xl"></div>
                                <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/6 rounded-br-xl"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 rounded-xl shadow-xl p-5 border max-w-60 bg-card-bg border-border-color" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-navy-600">
                                        <Award className="w-4 h-4 text-white" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{T("equip_about_card_title", "OEM Partner")}</span>
                                </div>
                                <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{T("equip_about_card_desc", "Authorized dealer and service provider for global brands")}</p>
                            </div>
                        </RevealSection>

                        <RevealSection>
                            <div className="gold-line mb-6"></div>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
                                {T("equip_about_title", "Reliable Equipment & Full-Lifecycle Industrial Solutions")}
                            </h2>
                            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                                {T("equip_about_p1", "Anago Group's Equipment Supply & Industrial Solutions division provides high-performance machinery backed by OEM-certified maintenance and regional support networks.")}
                            </p>
                            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                                {T("equip_about_p2", "We understand that in industrial operations, uptime is everything. That's why we don't just sell equipment; we deliver integrated solutions that include financing, training, spare parts, and telematics.")}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    T("equip_act1_title", "Procurement & Sales"),
                                    T("equip_act2_title", "Rental & Leasing"),
                                    T("equip_act3_title", "Maintenance & Repair"),
                                    T("equip_act4_title", "Spare Parts")
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gold-bg)" }}>
                                            <CheckCircle className="w-4 h-4" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* ========== SERVICES GRID ========== */}
            <section id="activities" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("equip_activity_title", "Equipment Services")}</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("equip_activity_subtitle", "World-class support at every stage of the equipment lifecycle.")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { num: "01", icon: <ShoppingCart className="w-7 h-7 text-white" />, title: T("equip_act1_title"), desc: T("equip_act1_desc"), bg: "bg-navy-800" },
                            { num: "02", icon: <Clock className="w-7 h-7 text-navy-800" />, title: T("equip_act2_title"), desc: T("equip_act2_desc"), bg: "bg-linear-to-br from-gold-500 to-gold-400" },
                            { num: "03", icon: <Wrench className="w-7 h-7 text-white" />, title: T("equip_act3_title"), desc: T("equip_act3_desc"), bg: "bg-stone-600" },
                            { num: "04", icon: <Puzzle className="w-7 h-7 text-white" />, title: T("equip_act4_title"), desc: T("equip_act4_desc"), bg: "bg-linear-to-br from-slate-600 to-slate-500" },
                            { num: "05", icon: <Activity className="w-7 h-7 text-white" />, title: T("equip_act5_title"), desc: T("equip_act5_desc"), bg: "bg-sky-600" },
                            { num: "06", icon: <GraduationCap className="w-7 h-7 text-white" />, title: T("equip_act6_title"), desc: T("equip_act6_desc"), bg: "bg-gold-600" },
                        ].map((act, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <article className="card-premium group cursor-pointer rounded-2xl overflow-hidden border relative p-8 h-full bg-card-bg border-border-color" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="activity-card-number" style={{ color: "var(--text-primary)" }}>{act.num}</div>
                                    <div className={`card-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${act.bg}`}>
                                        {act.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{act.title}</h3>
                                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{act.desc}</p>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-500 group-hover:gap-2.5 transition-all">
                                        <span>{T("learn_more", "Learn more")}</span>
                                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                                    </span>
                                </article>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== VALUE PROPOSITION ========== */}
            <section className="py-20 lg:py-32 relative overflow-hidden bg-navy-800">
                <div className="absolute inset-0 blueprint-grid opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">{T("equip_value_title", "The Anago Advantage")}</h2>
                            <p className="text-base text-white/50 max-w-2xl mx-auto">{T("equip_value_subtitle", "The competitive advantages that make us Africa's preferred equipment partner.")}</p>
                        </RevealSection>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <ShieldCheck className="w-7 h-7 text-white" />, title: T("equip_val1_title"), desc: T("equip_val1_desc") },
                            { icon: <Users className="w-7 h-7 text-navy-800" />, title: T("equip_val2_title"), desc: T("equip_val2_desc"), bg: "bg-linear-to-br from-gold-500 to-gold-400" },
                            { icon: <Headphones className="w-7 h-7 text-gold-400" />, title: T("equip_val4_title", "Full-Lifecycle Support"), desc: T("equip_val4_desc", "From selection and financing to maintenance and final decommissioning.") },
                            { icon: <Globe className="w-7 h-7 text-white/70" />, title: T("equip_val3_title"), desc: T("equip_val3_desc") },
                            { icon: <BarChart3 className="w-7 h-7 text-white/70" />, title: T("equip_val5_title", "Cost Optimization"), desc: T("equip_val5_desc", "Reducing total cost of ownership by up to 30% through predictive maintenance and telematics.") },
                            { icon: <Layers className="w-7 h-7 text-white/70" />, title: T("equip_val6_title", "Global Standards"), desc: T("equip_val6_desc", "Operating to ISO and international safety standards across all service operations.") },
                        ].map((val, i) => (
                            <RevealSection key={i} delay={i * 50}>
                                <div className="value-card-glow group p-8 rounded-2xl bg-white/3 border border-white/10 hover:border-gold-500/30 transition-all duration-400">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${val.bg || 'bg-white/5'} group-hover:scale-105 transition-transform duration-300`}>
                                        {val.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold tracking-tight text-white mb-3">{val.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{val.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CATEGORIES SECTION ========== */}
            <section className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{T("equip_cat_title", "Equipment Categories")}</h2>
                            <p className="text-sm max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("equip_cat_subtitle", "A comprehensive range of industrial and transport equipment for every sector.")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { icon: <HardHat className="w-5 h-5" />, label: T("equip_cat1", "Excavators") },
                            { icon: <Truck className="w-5 h-5" />, label: T("equip_cat2", "Dump Trucks") },
                            { icon: <ArrowUpFromLine className="w-5 h-5" />, label: T("equip_cat3", "Cranes") },
                            { icon: <Zap className="w-5 h-5" />, label: T("equip_cat4", "Generators") },
                            { icon: <Forklift className="w-5 h-5" />, label: T("equip_cat5", "Loaders") },
                            { icon: <Car className="w-5 h-5" />, label: T("equip_cat6", "Vehicles") },
                        ].map((cat, i) => (
                            <RevealSection key={i} delay={i * 50}>
                                <div className="text-center p-5 rounded-2xl border group hover:border-gold-500/30 transition-all bg-card-bg border-border-color" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform" style={{ background: "var(--gold-bg)" }}>
                                        <div style={{ color: "var(--gold-primary)" }}>{cat.icon}</div>
                                    </div>
                                    <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>{cat.label}</span>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PROCESS SECTION ========== */}
            <section className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("equip_process_title", "Our Service Lifecycle")}</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("equip_process_subtitle", "A systematic approach from needs assessment to ongoing performance optimization.")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { num: "1", title: T("equip_proc1", "Needs Analysis"), desc: T("equip_proc1_desc", "Site survey, operational analysis, and equipment specification.") },
                            { num: "2", title: T("equip_proc2", "Procurement & Delivery"), desc: T("equip_proc2_desc", "Coordinated logistics, customs clearance, and site delivery.") },
                            { num: "3", title: T("equip_proc3", "Commissioning"), desc: T("equip_proc3_desc", "Operator training, safety certification, and handover.") },
                            { num: "4", title: T("equip_proc4", "Ongoing Support"), desc: T("equip_proc4_desc", "Ongoing maintenance, telematics monitoring, and parts supply.") },
                        ].map((proc, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <div className="process-connector text-center p-6 rounded-2xl border relative overflow-hidden bg-card-bg border-border-color h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="absolute top-0 left-0 w-full h-1 bg-navy-600"></div>
                                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-4 text-sm font-bold ${i === 3 ? 'bg-sky-600 text-white' : i > 0 ? 'bg-linear-to-br from-gold-500 to-gold-400 text-navy-800' : 'bg-navy-600 text-white'}`}>
                                        {proc.num}
                                    </div>
                                    <h3 className="text-sm font-semibold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>{proc.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{proc.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section id="contact-cta" className="py-20 lg:py-28 relative overflow-hidden bg-navy-800">
                <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold"></div>
                            <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("equip_cta_badge", "Equip Your Operations")}</span>
                        </div>
                        <h2 className="font-serif text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                            {T("equip_cta_title", "Ready to Power Your Next Project?")}
                        </h2>
                        <p className="text-base lg:text-lg text-white/55 max-w-2xl mx-auto mb-10">
                            {T("equip_cta_desc", "Partner with Anago Group for reliable equipment supply and world-class industrial support across the continent.")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => router.push("/contact")} className="btn-gold px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2">
                                <span>{T("equip_cta_btn", "Request a Quote")}</span>
                                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                            </button>
                            <button className="btn-outline-light px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium">
                                <Download className="w-4 h-4" strokeWidth={1.5} />
                                <span>{T("equip_cta_btn2", "Download Catalog")}</span>
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
