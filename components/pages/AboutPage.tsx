"use client"

import {
    ArrowRight, ArrowDownRight, Gem, Award, Leaf,
    CheckCircle, Globe, Pickaxe, Users, Handshake, Shield, Target,
    Sprout, Brain, Factory, Building2, Truck, TrendingUp, Zap, BarChart3, Briefcase
} from "lucide-react"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function AboutPage() {
    const { T } = useAppContext()
    const router = useRouter()

    const features = [
        T("about_feature_integrated"),
        T("about_feature_reach"),
        T("about_feature_esg"),
        T("about_feature_trackrecord")
    ]

    const missionItems = [
        { icon: <Pickaxe className="w-6 h-6 text-navy-800" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #C8962E, #e7b13f)", title: T("about_mission_1_title"), desc: T("about_mission_1_desc") },
        { icon: <Users className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#0D1B2A", title: T("about_mission_2_title"), desc: T("about_mission_2_desc") },
        { icon: <Leaf className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#15803d", title: T("about_mission_3_title"), desc: T("about_mission_3_desc") },
        { icon: <Handshake className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#343a40", title: T("about_mission_4_title"), desc: T("about_mission_4_desc") },
    ]

    const valueItems = [
        { icon: <Shield className="w-7 h-7 text-navy-800" strokeWidth={1.5} />, iconBg: "linear-gradient(135deg, #C8962E, #e7b13f)", title: T("about_value_1_title"), desc: T("about_value_1_desc"), tags: [T("about_value_1_tag1"), T("about_value_1_tag2"), T("about_value_1_tag3")] },
        { icon: <Target className="w-7 h-7 text-gold-400" strokeWidth={1.5} />, iconBg: "rgba(255,255,255,0.1)", title: T("about_value_2_title"), desc: T("about_value_2_desc"), tags: [T("about_value_2_tag1"), T("about_value_2_tag2"), T("about_value_2_tag3")] },
        { icon: <Sprout className="w-7 h-7 text-green-300" strokeWidth={1.5} />, iconBg: "rgba(22,101,52,0.6)", title: T("about_value_3_title"), desc: T("about_value_3_desc"), tags: [T("about_value_3_tag1"), T("about_value_3_tag2"), T("about_value_3_tag3")] },
    ]

    const sectorItems = [
        { id: "mining", num: "01", icon: <Gem className="w-12 h-12 text-gold-400/30" strokeWidth={1} />, iconSm: <Gem className="w-5 h-5 text-navy-800" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #0A1628 0%, #1a3050 100%)", iconBg: "linear-gradient(135deg, #C8962E, #e7b13f)", badgeBg: "bg-[#C8962E]/20 text-[#e7b13f]", title: T("s_mining_title"), desc: T("about_s_mining_desc") },
        { id: "industrial", num: "02", icon: <Brain className="w-12 h-12 text-white/15" strokeWidth={1} />, iconSm: <Brain className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #0D1B2A 0%, #1a2744 100%)", iconBg: "#0D1B2A", badgeBg: "bg-white/10 text-white/70", title: T("about_s_industrial_title"), desc: T("about_s_industrial_desc") },
        { id: "real-estate", num: "03", icon: <Building2 className="w-12 h-12 text-white/15" strokeWidth={1} />, iconSm: <Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #1a2744 0%, #2a3a5c 100%)", iconBg: "#1a2744", badgeBg: "bg-white/10 text-white/70", title: T("s_realestate_title"), desc: T("about_s_realestate_desc") },
        { id: "agriculture", num: "04", icon: <Sprout className="w-12 h-12 text-green-400/30" strokeWidth={1} />, iconSm: <Sprout className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #1a3020 0%, #2a5030 100%)", iconBg: "#15803d", badgeBg: "bg-green-500/20 text-green-400", title: T("s_agri_title"), desc: T("about_s_agri_desc") },
        { id: "equipment", num: "05", icon: <Truck className="w-12 h-12 text-white/15" strokeWidth={1} />, iconSm: <Truck className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 100%)", iconBg: "#343a40", badgeBg: "bg-white/10 text-white/70", title: T("about_s_equip_title"), desc: T("about_s_equip_desc") },
    ]

    return (
        <div className="block overflow-hidden">
            {/* Hero Section - Cinematic & Immersive */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about/hero-bg.jpg"
                        alt="Anago Group Industrial Vision"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/80 z-10" />
                </div>

                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
                    <div className="max-w-7xl mx-auto">
                        <RevealSection className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl">
                            <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse-gold" />
                            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{T("about_hero_badge")}</span>
                        </RevealSection>

                        <RevealSection className="stagger-2 max-w-5xl mx-auto">
                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[0.95] mb-10">
                                {T("about_hero_title1")}<br />
                                <p className="gold-gradient italic py-2">{T("about_hero_title3")}</p>

                            </h1>
                        </RevealSection>

                        <RevealSection className="stagger-4">
                            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-16 font-light">
                                {T("about_hero_desc")}
                            </p>
                        </RevealSection>

                        <RevealSection className="flex flex-wrap justify-center gap-6 stagger-5">
                            <button onClick={() => document.getElementById('group-heritage')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/30">
                                <span className="font-bold tracking-widest uppercase">{T("about_hero_cta")}</span>
                                <ArrowDownRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button onClick={() => router.push("/contact")} className="btn-outline-light px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 font-bold backdrop-blur-xl border-white/20 hover:bg-white/5 transition-all text-white">
                                <span className="tracking-widest uppercase">{T("final_cta1")}</span>
                                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                        </RevealSection>
                    </div>
                </div>


            </section>

            {/* Heritage Section (Asymmetric) */}
            <section id="group-heritage" className="py-24 lg:py-40 relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1">
                            <RevealSectionLeft>
                                <div className="gold-line mb-8" />
                                <div className="inline-block px-3 py-1 rounded-md bg-gold-500/10 text-gold-500 text-xs font-bold uppercase tracking-widest mb-4">
                                    {T("about_intro_label")}
                                </div>
                                <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                    {T("about_intro_title")}
                                </h2>
                                <div className="space-y-6 text-base lg:text-lg text-justify leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                                    <p>{T("about_intro_p1")}</p>
                                    <p>{T("about_intro_p2")}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 mb-10">
                                    {features.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--gold-bg)" }}>
                                                <CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--gold-primary)" }} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={() => document.getElementById('strategic-vision')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-3 text-sm font-bold transition-all group" style={{ color: "var(--gold-primary)" }}>
                                    <span className="border-b border-gold-500/30 pb-0.5">{T("about_vision_cta")}</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" strokeWidth={2} />
                                </button>
                            </RevealSectionLeft>
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <RevealSectionRight className="relative">
                                <div className="relative aspect-4/5 sm:aspect-square lg:aspect-3/3 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                                    <Image
                                        src="/images/about/mining-facility.jpg"
                                        alt="Industrial Operations"
                                        fill
                                        className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent lg:hidden" />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-8 -left-8 lg:-left-12 p-8 rounded-3xl shadow-2xl border backdrop-blur-xl animate-float" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gold-gradient shadow-lg shadow-gold-500/20">
                                            <Award className="w-6 h-6 text-navy-900" strokeWidth={2} />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold tracking-tighter" style={{ color: "var(--text-primary)" }}>{T("about_intro_est")}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--gold-primary)" }}>Industrial Heritage</div>
                                        </div>
                                    </div>
                                    <p className="text-xs font-medium leading-relaxed max-w-45" style={{ color: "var(--text-tertiary)" }}>
                                        {T("about_intro_tagline")}
                                    </p>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-dashed border-gold-500/20 animate-spin-slow" />
                            </RevealSectionRight>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars & Vision (Glassmorphism Bento) */}
            <section id="strategic-vision" className="py-8 lg:py-12 relative min-h-screen flex items-center overflow-hidden bg-[#06101f]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about/strategic-vision.jpg"
                        alt="Strategic Vision"
                        fill
                        className="object-cover opacity-40 grayscale-[0.5]"
                    />
                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <RevealSection className="max-w-4xl mx-auto text-center mb-24">
                        <div className="gold-line mx-auto mb-10" />
                        <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight text-white mb-10">
                            {T("about_vision_title")}
                        </h2>
                        <p className="text-xl lg:text-2xl leading-relaxed text-blue-50 font-light italic">
                            "{T("about_vision_p1")}"
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                            {[
                                { icon: <TrendingUp className="w-5 h-5" />, label: T("about_vision_stat_excellence"), color: "#C8962E" },
                                { icon: <Zap className="w-5 h-5" />, label: T("about_vision_stat_sustainability"), color: "#60a5fa" },
                                { icon: <BarChart3 className="w-5 h-5" />, label: T("about_vision_stat_impact"), color: "#4ade80" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                    <div className="p-1 rounded-full" style={{ color: item.color }}>{item.icon}</div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/90">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </RevealSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {missionItems.map((item, i) => (
                            <RevealSection key={i} className={`p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col h-full group hover:-translate-y-2 transition-all duration-500 stagger-child-${i + 1}`} style={{ background: "rgba(13, 27, 42, 0.4)" }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500" style={{ background: item.bg }}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-gold-400 transition-colors">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-blue-100/70 font-medium">{item.desc}</p>
                                <div className="mt-auto pt-8">
                                    <div className="w-10 h-0.5 bg-white/10 group-hover:w-full group-hover:bg-gold-500/50 transition-all duration-500" />
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values & Innovation (Bento Layout) */}
            <section className=" py-6 lg:py-12 relative overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 lg:mb-20">
                        <RevealSection>
                            <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                {T("about_values_subtitle")}
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg opacity-80" style={{ color: "var(--text-secondary)" }}>
                                {T("about_values_desc")}
                            </p>
                        </RevealSection>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Innovation Highlight Card (Visual) */}
                        <RevealSectionLeft className="lg:col-span-5 h-full min-h-100">
                            <div className="relative h-full rounded-[2.5rem] overflow-hidden border shadow-2xl group" style={{ borderColor: "var(--border-color)" }}>
                                <Image
                                    src="/images/about/industrial-innovation.jpg"
                                    alt="Industrial Innovation"
                                    fill
                                    className="object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 from-10% to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-2">Innovation</div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Driving Excellence</h3>
                                </div>
                            </div>
                        </RevealSectionLeft>

                        {/* Value Cards Grid */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                            {valueItems.map((value, i) => (
                                <RevealSectionRight key={i} className={`stagger-child-${i + 1} ${i === 2 ? 'sm:col-span-2' : ''}`}>
                                    <div className="group p-8 rounded-[2.5rem] transition-all duration-500 border shadow-lg h-full flex flex-col" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                        <div className="flex items-center gap-5 mb-6">
                                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform shadow-lg" style={{ background: value.iconBg }}>
                                                {value.icon}
                                            </div>
                                            <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>{value.title}</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed mb-8 grow opacity-80" style={{ color: "var(--text-secondary)" }}>{value.desc}</p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {value.tags.map((tag, j) => (
                                                <span key={j} className="px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-xl border transition-colors group-hover:border-gold-500/30" style={{ color: "var(--text-tertiary)", background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </RevealSectionRight>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section - President's Profile */}
            <section className="relative overflow-hidden bg-navy-950 border-y border-white/5">
                <div className="max-w-8xl mx-auto">
                    <div className="grid lg:grid-cols-2 items-stretch min-h-150 lg:min-h-160">
                        {/* Image Side */}
                        <RevealSectionLeft className="relative h-125 lg:h-auto overflow-hidden">
                            <Image
                                src="/images/about/founder.jpeg"
                                alt={T("about_leader_name")}
                                fill
                                className="object-cover object-center scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-navy-950/40 via-transparent to-transparent hidden lg:block" />
                            <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent lg:hidden" />
                        </RevealSectionLeft>

                        {/* Content Side */}
                        <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 bg-navy-950">
                            <RevealSectionRight>
                                <div className="gold-line mb-8" />
                                <div className="text-xs font-bold text-gold-500 uppercase tracking-[0.4em] mb-4">
                                    {T("about_leader_role")}
                                </div>
                                <h2 className="text-4xl lg:text-6xl font-serif dark:text-white font-bold text-black mb-10 tracking-tight leading-tight">
                                    {T("about_leader_name")}
                                </h2>
                                <div className="space-y-8">
                                    <p className="text-lg lg:text-xl dark:text-white/70 text-black/70 leading-relaxed max-w-xl font-light italic border-l-2 border-gold-500/30 pl-8">
                                        {T("about_leader_bio")}
                                    </p>

                                    <div className="flex items-center gap-6 pt-4">
                                        <div className="w-12 h-12 rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center">
                                            <Shield className="w-5 h-5 text-gold-500/50" />
                                        </div>
                                        <div className="text-[10px] font-bold dark:text-white/40 text-black/40 uppercase tracking-[0.3em]">
                                            Direction Générale du Groupe Anago
                                        </div>
                                    </div>
                                </div>
                            </RevealSectionRight>
                        </div>
                    </div>
                </div>
            </section>
            {/* Investor Positioning Section */}
            <section className="py-8 lg:py-12 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-5">
                            <RevealSectionLeft>
                                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-[10px] font-bold uppercase tracking-widest mb-8 border border-gold-500/20">
                                    <Briefcase className="w-3.5 h-3.5" />
                                    <span>{T("about_invest_label")}</span>
                                </div>
                                <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                                    {T("about_invest_title")}
                                </h2>
                                <p className="text-lg lg:text-xl leading-relaxed opacity-80 mb-10" style={{ color: "var(--text-secondary)" }}>
                                    {T("about_invest_desc")}
                                </p>
                                <button onClick={() => router.push("/contact")} className="btn-gold px-10 py-4 text-xs rounded-xl inline-flex items-center gap-3 shadow-xl shadow-gold-500/20">
                                    <span className="font-bold tracking-widest uppercase">{T("hero_cta2")}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </RevealSectionLeft>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <Target className="w-6 h-6" />, title: T("about_invest_point1"), color: "var(--gold-primary)" },

                                    { icon: <Award className="w-6 h-6" />, title: T("about_invest_point3"), color: "#4ade80" },
                                    { icon: <Handshake className="w-6 h-6" />, title: T("about_invest_point4"), color: "#f472b6" },
                                    { icon: <TrendingUp className="w-6 h-6" />, title: T("about_invest_point5"), color: "#a78bfa" },
                                ].map((item, i) => (
                                    <RevealSection key={i} className={`p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 stagger-child-${i + 1}`} style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: "var(--bg-secondary)", color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                        <div className="mt-6 w-8 h-1 rounded-full" style={{ background: item.color, opacity: 0.3 }} />
                                    </RevealSection>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Systemic Integration Model (Replaces simple Sectors Grid) */}
            <section id="integration-model" className="py-8 lg:py-12 relative overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--gold-primary) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealSection className="text-center mb-24">
                        <span className="px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-[10px] font-bold uppercase tracking-widest mb-6 inline-block border border-gold-500/20">
                            {T("about_integration_synergy_tag")}
                        </span>
                        <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>
                            {T("about_integration_title")}
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto opacity-80 leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>
                            {T("about_integration_desc")}
                        </p>
                    </RevealSection>

                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                        {/* 01. Mining - The Foundation (Large Card) */}
                        <RevealSectionLeft className="lg:col-span-7">
                            <div className="group relative h-full rounded-[2.5rem] overflow-hidden border shadow-2xl transition-all duration-700 hover:shadow-gold-500/10" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }} onClick={() => router.push('/industries/mining')}>
                                <div className="absolute top-0 right-0 p-10 z-10 text-right">
                                    <span className="text-7xl font-serif font-bold opacity-5 block" style={{ color: "var(--gold-primary)" }}>01</span>
                                    <div className="text-xs font-bold uppercase tracking-[0.3em] mb-2" style={{ color: "var(--gold-primary)" }}>Foundation</div>
                                </div>
                                <div className="p-10 lg:p-14 flex flex-col h-full relative z-10">
                                    <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-gold-500 to-gold-400 flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                        <Gem className="w-10 h-10 text-navy-950" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>{T("s_mining_title")}</h3>
                                    <p className="text-lg leading-relaxed mb-10 opacity-80 max-w-md" style={{ color: "var(--text-secondary)" }}>
                                        {T("about_integration_mining_role")}
                                    </p>
                                    <div className="mt-auto flex items-center gap-4 group/btn cursor-pointer">
                                        <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover/btn:bg-gold-500 group-hover/btn:border-gold-500 transition-all duration-300" style={{ borderColor: "var(--border-color)" }}>
                                            <ArrowRight className="w-5 h-5 group-hover/btn:text-navy-950 transition-colors" />
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-widest">{T("learn_more")}</span>
                                    </div>
                                </div>
                                {/* Background Decorative element */}
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-colors duration-700" />
                            </div>
                        </RevealSectionLeft>

                        {/* 02. Industrial Services - The Engine (Medium Card) */}
                        <RevealSectionRight className="lg:col-span-5">
                            <div className="group relative h-full rounded-[2.5rem] overflow-hidden border shadow-xl transition-all duration-700 hover:shadow-navy-500/10" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }} onClick={() => router.push('/industries/industrial-services')}>
                                <div className="absolute top-0 right-0 p-10 z-10">
                                    <span className="text-5xl font-serif font-bold opacity-5 block" style={{ color: "var(--text-primary)" }}>02</span>
                                </div>
                                <div className="p-10 flex flex-col h-full relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-navy-950 flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform">
                                        <Brain className="w-8 h-8 text-gold-400" strokeWidth={1.5} />
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gold-primary)" }}>Strategic Engine</div>
                                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("about_s_industrial_title")}</h3>
                                    <p className="text-base leading-relaxed opacity-70" style={{ color: "var(--text-secondary)" }}>
                                        {T("about_integration_industrial_role")}
                                    </p>
                                    <div className="mt-10 pt-6 border-t" style={{ borderColor: "var(--border-color)" }}>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Operational Intelligence</span>
                                            <ArrowRight className="w-4 h-4 opacity-30 group-hover:translate-x-2 group-hover:opacity-100 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealSectionRight>

                        {/* Row 2: Secondary Support Pillars */}
                        <RevealSection className="lg:col-span-4">
                            <div className="group p-10 rounded-[2.5rem] border shadow-xl shadow-black/10 bg-navy-50/30 dark:bg-navy-950/20 h-full flex flex-col transition-all duration-500 hover:border-gold-500/30" style={{ borderColor: "var(--border-color)" }} onClick={() => router.push('/industries/real-estate')}>
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-900 shadow-md flex items-center justify-center mb-8 group-hover:-translate-y-1 transition-transform">
                                    <Building2 className="w-7 h-7 text-navy-800 dark:text-gold-400" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{T("s_realestate_title")}</h4>
                                <p className="text-sm opacity-70 mb-6 leading-relaxed">{T("about_integration_realestate_role")}</p>
                                <span className="text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-md bg-white/50 dark:bg-white/5 border inline-block w-fit" style={{ borderColor: "var(--border-color)" }}>Infrastructure</span>
                            </div>
                        </RevealSection>

                        <RevealSection className="lg:col-span-4" style={{ transitionDelay: '0.1s' }}>
                            <div className="group p-10 shadow-xl rounded-[2.5rem] border bg-navy-50/30 dark:bg-navy-950/20 h-full flex flex-col transition-all duration-500 hover:border-gold-500/30" style={{ borderColor: "var(--border-color)" }} onClick={() => router.push('/industries/agriculture')}>
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-900 shadow-md flex items-center justify-center mb-8 group-hover:-translate-y-1 transition-transform">
                                    <Sprout className="w-7 h-7 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{T("s_agri_title")}</h4>
                                <p className="text-sm opacity-70 mb-6 leading-relaxed">{T("about_integration_agri_role")}</p>
                                <span className="text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-md bg-white/50 dark:bg-white/5 border inline-block w-fit" style={{ borderColor: "var(--border-color)" }}>Resilience</span>
                            </div>
                        </RevealSection>

                        <RevealSection className="lg:col-span-4" style={{ transitionDelay: '0.2s' }}>
                            <div className="group p-10 rounded-[2.5rem] shadow-xl  border bg-navy-50/30 dark:bg-navy-950/20 h-full flex flex-col transition-all duration-500 hover:border-gold-500/30" style={{ borderColor: "var(--border-color)" }} onClick={() => router.push('/industries/equipment')}>
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-900 shadow-md flex items-center justify-center mb-8 group-hover:-translate-y-1 transition-transform">
                                    <Truck className="w-7 h-7 text-navy-800 dark:text-gold-400" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{T("about_s_equip_title")}</h4>
                                <p className="text-sm opacity-70 mb-6 leading-relaxed">{T("about_integration_equipment_role")}</p>
                                <span className="text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-md bg-white/50 dark:bg-white/5 border inline-block w-fit" style={{ borderColor: "var(--border-color)" }}>Backbone</span>
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
