"use client"

import React, { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import {
    ArrowRight, Settings, Zap, Wrench, HardHat, Award, CheckCircle,
    Brain, GanttChart, Container, GraduationCap, ShieldCheck, Target,
    Lightbulb, Globe, Clock, Handshake, Shield, MapPin, FolderCheck,
    Users, Droplets, Wheat, Download, ChevronRight, ArrowDownRight
} from "lucide-react"
import { RevealSection } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"

export function IndustrialSectorPage() {
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
            for (let i = 0; i < 18; i++) {
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
                .hero-industrial-bg {
                    background: linear-gradient(135deg, #0A1628 0%, #0f1d33 30%, #162240 60%, #0D1B2A 100%);
                    position: relative;
                }
                .hero-industrial-bg::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(ellipse 80% 50% at 70% 60%, rgba(200,150,46,0.06), transparent),
                        radial-gradient(ellipse 60% 40% at 20% 40%, rgba(10,22,40,0.6), transparent);
                }
                .industrial-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8962E' fill-opacity='0.02'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
                .animate-gear-slow { animation: gearSpin 20s linear infinite; }
                .animate-gear-slow-reverse { animation: gearSpin 25s linear infinite reverse; }
                
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
            `}</style>

            {/* ========== HERO SECTION ========== */}
            <section className="hero-industrial-bg relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden" id="heroParallax">
                    <img src="/images/hero-industrie.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" }} alt="Industrial Hero Background" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="absolute inset-0 bg-linear-to-b from-navy-950/20 via-transparent to-navy-950/80 z-10" />

                    <div className="absolute top-1/4 right-1/3 w-225 h-225 rounded-full opacity-[0.03] z-20" style={{ background: "radial-gradient(circle, #C8962E 0%, transparent 70%)" }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-[0.04] z-20" style={{ background: "linear-gradient(to top, #162240, transparent)" }}></div>
                    <div className="absolute inset-0 blueprint-grid opacity-20 z-20"></div>

                    <div className="absolute top-32 right-20 w-40 h-40 border border-white/4 rounded-full animate-gear-slow z-20"></div>
                    <div className="absolute top-28 right-16 w-48 h-48 border border-gold-400/3 rounded-full animate-gear-slow-reverse z-20"></div>
                    <div className="absolute bottom-40 left-16 w-28 h-28 border border-white/5 rounded-full animate-gear-slow z-20" style={{ animationDelay: "3s" }}></div>
                    <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-gold-400/6 rounded-xl animate-float z-20" style={{ animationDelay: "1.5s", transform: "rotate(45deg)" }}></div>
                </div>

                <div ref={heroParticlesRef} className="absolute inset-0 pointer-events-none overflow-hidden"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48 lg:py-32 relative z-10 w-full">
                    <div className="flex flex-col items-center text-center">
                        <div className="max-w-4xl mx-auto">
                            <RevealSection delay={100} className="flex items-center justify-center gap-2 mb-12">
                                <button onClick={() => router.push("/")} className="text-xs font-medium text-white/40 hover:text-white/60 transition-colors">{T("nav_home", "Home")}</button>
                                <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                                <span className="text-xs font-medium text-white/40">{T("nav_industries", "Industries")}</span>
                                <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                                <span className="text-xs font-medium text-gold-400">{T("about_s_industrial_title", "Industrial Services")}</span>
                            </RevealSection>

                            <RevealSection delay={200} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-10">
                                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold"></div>
                                <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("ind_hero_badge")}</span>
                            </RevealSection>

                            <RevealSection delay={300}>
                                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-8">
                                    {T("ind_hero_title")}<br className="hidden lg:block" /><span className="gold-gradient">{T("ind_hero_title_gold")}</span>
                                </h1>
                            </RevealSection>

                            <RevealSection delay={400}>
                                <p className="text-base lg:text-xl text-white/55 leading-relaxed max-w-2xl mx-auto mb-14">
                                    {T("ind_hero_desc")}
                                </p>
                            </RevealSection>

                            <RevealSection delay={500} className="flex flex-wrap justify-center gap-4">
                                <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })} className="btn-gold px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2">
                                    <span>{T("ind_hero_cta1", "Explore Our Services")}</span>
                                    <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} />
                                </button>
                                <button onClick={() => document.getElementById("contact-cta")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline-light px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium">
                                    <span>{T("ind_hero_cta2", "Request Consultation")}</span>
                                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                                </button>
                            </RevealSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== ABOUT INDUSTRIAL SERVICES ========== */}
            <section id="about-industrial" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <RevealSection className="relative">
                            <div className="aspect-4/3 rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0f1d33 0%, #162240 40%, #1a2744 100%)" }}>
                                <div className="absolute inset-0 blueprint-grid opacity-60"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center relative z-10">
                                        <div className="w-24 h-24 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                                            <HardHat className="w-12 h-12 text-gold-400/40" strokeWidth={1} />
                                        </div>
                                        <div className="text-xs text-white/25 font-medium tracking-wider uppercase">{T("ind_about_label")}</div>
                                    </div>
                                </div>
                                <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/4 rounded-tl-xl"></div>
                                <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-500/6 rounded-br-xl"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 rounded-xl shadow-xl p-5 border max-w-60" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-navy-600">
                                        <Award className="w-4 h-4 text-white" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{T("ind_about_iso")}</span>
                                </div>
                                <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{T("ind_about_iso_desc")}</p>
                            </div>
                        </RevealSection>

                        <RevealSection>
                            <div className="gold-line mb-6"></div>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
                                {T("ind_about_title")}
                            </h2>
                            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                                {T("ind_about_p1")}
                            </p>
                            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                                {T("ind_about_p2")}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    T("ind_about_feat1"),
                                    T("ind_about_feat2"),
                                    T("ind_about_feat3"),
                                    T("ind_about_feat4")
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

            {/* ========== SERVICE ACTIVITIES ========== */}
            <section id="activities" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("ind_act_title")}</h2>
                            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{T("ind_act_desc")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { num: "01", icon: <Brain className="w-7 h-7 text-white" />, title: T("ind_act1_title"), desc: T("ind_act1_desc"), tags: [T("ind_act1_tag1", "Feasibility"), T("ind_act1_tag2", "Audits"), T("ind_act1_tag3", "Strategy")], bg: "bg-navy-800" },
                            { num: "02", icon: <GanttChart className="w-7 h-7 text-navy-800" />, title: T("ind_act2_title"), desc: T("ind_act2_desc"), tags: [T("ind_act2_tag1", "PM"), T("ind_act2_tag2", "Procurement"), T("ind_act2_tag3", "Commissioning")], bg: "bg-linear-to-br from-gold-500 to-gold-400" },
                            { num: "03", icon: <Container className="w-7 h-7 text-white" />, title: T("ind_act3_title"), desc: T("ind_act3_desc"), tags: [T("ind_act3_tag1", "Machinery"), T("ind_act3_tag2", "Generators"), T("ind_act3_tag3", "Rental")], bg: "bg-[#343a40]" },
                            { num: "04", icon: <Wrench className="w-7 h-7 text-white" />, title: T("ind_act4_title"), desc: T("ind_act4_desc"), tags: [T("ind_act4_tag1", "Predictive"), T("ind_act4_tag2", "Preventive"), T("ind_act4_tag3", "24/7")], bg: "bg-navy-600" },
                            { num: "05", icon: <GraduationCap className="w-7 h-7 text-white" />, title: T("ind_act5_title"), desc: T("ind_act5_desc"), tags: [T("ind_act5_tag1", "Certifications"), T("ind_act5_tag2", "Safety"), T("ind_act5_tag3", "Skills")], bg: "bg-green-700" },
                            { num: "06", icon: <ShieldCheck className="w-7 h-7 text-white" />, title: T("ind_act6_title"), desc: T("ind_act6_desc"), tags: [T("ind_act6_tag1", "Risk"), T("ind_act6_tag2", "Compliance"), T("ind_act6_tag3", "HSE")], bg: "bg-linear-to-br from-green-600 to-emerald-500" },
                        ].map((act, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <article className="card-premium group cursor-pointer rounded-2xl overflow-hidden border relative p-8 h-full" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="activity-card-number" style={{ color: "var(--text-primary)" }}>{act.num}</div>
                                    <div className={`card-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${act.bg}`}>
                                        {act.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>{act.title}</h3>
                                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{act.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {act.tags.map((tag, j) => (
                                            <span key={j} className="px-3 py-1.5 text-xs font-medium rounded-lg border" style={{ borderColor: "var(--border-color)", color: "var(--text-tertiary)" }}>{tag}</span>
                                        ))}
                                    </div>
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
                <div className="absolute inset-0 industrial-texture opacity-50"></div>
                <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-6"></div>
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">{T("ind_vp_title")}</h2>
                            <p className="text-base text-white/50 max-w-2xl mx-auto">{T("ind_vp_desc")}</p>
                        </RevealSection>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Target className="w-7 h-7 text-navy-800" />, title: T("ind_vp1_title"), desc: T("ind_vp1_desc") },
                            { icon: <Lightbulb className="w-7 h-7 text-gold-400" />, title: T("ind_vp2_title"), desc: T("ind_vp2_desc") },
                            { icon: <Globe className="w-7 h-7 text-gold-400" />, title: T("ind_vp3_title"), desc: T("ind_vp3_desc") },
                            { icon: <Clock className="w-7 h-7 text-white/70" />, title: T("ind_vp4_title"), desc: T("ind_vp4_desc") },
                            { icon: <Handshake className="w-7 h-7 text-white/70" />, title: T("ind_vp5_title"), desc: T("ind_vp5_desc") },
                            { icon: <Shield className="w-7 h-7 text-green-300" />, title: T("ind_vp6_title"), desc: T("ind_vp6_desc") },
                        ].map((val, i) => (
                            <RevealSection key={i} delay={i * 50}>
                                <div className="value-card-glow group p-8 rounded-2xl bg-white/3 border border-white/10 hover:border-gold-500/30 transition-all duration-400">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 group-hover:scale-105 transition-transform duration-300">
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

            {/* ========== STATISTICS ========== */}
            <section className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { icon: <MapPin className="w-6 h-6 text-gold-500" />, val: "15+", label: T("ind_stat1") },
                            { icon: <FolderCheck className="w-6 h-6 text-gold-500" />, val: "150+", label: T("ind_stat2") },
                            { icon: <Container className="w-6 h-6 text-gold-500" />, val: "500+", label: T("ind_stat3") },
                            { icon: <Users className="w-6 h-6 text-gold-500" />, val: "350+", label: T("ind_stat4") },
                        ].map((stat, i) => (
                            <RevealSection key={i} delay={i * 100}>
                                <div className="text-center p-8 rounded-2xl border" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gold-bg)" }}>{stat.icon}</div>
                                    <div className="text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-gold-500">{stat.val}</div>
                                    <div className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{stat.label}</div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section id="contact-cta" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #0f1d33 30%, #162240 70%, #0D1B2A 100%)" }}>
                <div className="absolute inset-0 industrial-texture opacity-30"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold"></div>
                            <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("ind_final_badge")}</span>
                        </div>
                        <h2 className="font-serif text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">{T("ind_final_title")}</h2>
                        <p className="text-base lg:text-lg text-white/55 max-w-2xl mx-auto mb-10">{T("ind_final_desc")}</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => router.push("/contact")} className="btn-gold px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2">
                                <span>{T("ind_final_cta1", "Request a Consultation")}</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="btn-outline-light px-8 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium">
                                <Download className="w-4 h-4" />
                                <span>{T("ind_final_cta2", "Download Services Brochure")}</span>
                            </button>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    )
}
