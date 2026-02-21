"use client"

import {
    ChevronRight, ArrowRight, ArrowDownRight, Gem, TrendingUp, Award, Leaf,
    CheckCircle, Globe, Trophy, Pickaxe, Users, Handshake, Shield, Target,
    Sprout, Brain, Factory, Building2, Truck, LayoutGrid
} from "lucide-react"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"
import { CounterValue } from "@/components/shared/Counter"
import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/navigation"

export function AboutPage() {
    const { T } = useAppContext()
    const router = useRouter()

    return (
        <div className="block">
            {/* Hero */}
            <section className="hero-bg relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, #C8962E 0%, transparent 70%)" }} />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-[0.08]" style={{ background: "linear-gradient(to top, #C8962E, transparent)" }} />
                    <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                    <div className="absolute top-20 right-10 w-32 h-32 border border-white/5 rounded-full opacity-30 animate-float" />
                    <div className="absolute bottom-32 left-16 w-20 h-20 border border-[#C8962E]/10 rounded-xl opacity-40 animate-float" style={{ animationDelay: "2s" }} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-12 max-w-4xl mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                            <RevealSection className="flex items-center justify-center lg:justify-start gap-2 mb-8 stagger-1">
                                <button onClick={() => router.push("/")} className="text-xs font-medium text-white/40 hover:text-white/60 transition-colors">Home</button>
                                <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                                <span className="text-xs font-medium text-[#e7b13f]">The Group</span>
                            </RevealSection>
                            <RevealSection className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8962E]/30 bg-[#C8962E]/5 mb-8 stagger-1">
                                <div className="w-2 h-2 rounded-full bg-[#e7b13f] animate-pulse-gold" />
                                <span className="text-xs font-medium text-[#e7b13f] tracking-wider uppercase">{"Since 2004 \u00B7 Pan-African Industrial Holding"}</span>
                            </RevealSection>
                            <RevealSection className="stagger-2">
                                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-6">
                                    {"Building Africa's "}<span className="gold-gradient">{"Industrial Future"}</span>{" Together"}
                                </h1>
                            </RevealSection>
                            <RevealSection className="stagger-3">
                                <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                                    {"Anago Group is a diversified pan-African holding company transforming natural resources into sustainable economic growth through integrated value chains, strategic partnerships, and operational excellence."}
                                </p>
                            </RevealSection>
                            <RevealSection className="flex flex-wrap justify-center lg:justify-start gap-4 stagger-4">
                                <button onClick={() => document.getElementById('group-sectors')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2">
                                    <span>Explore Our Activities</span>
                                    <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} />
                                </button>
                                <button onClick={() => router.push("/contact")} className="btn-outline-light px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium stagger-5">
                                    <span>Contact Us</span>
                                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                                </button>
                            </RevealSection>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group fade-in stagger-7">
                    <span className="text-xs text-white/25 font-medium tracking-wider uppercase group-hover:text-white/40 transition-colors">Discover</span>
                    <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#C8962E]/40 transition-colors">
                        <div className="w-1 h-2 rounded-full bg-[#e7b13f] animate-float" />
                    </div>
                </div>
            </section>

            {/* About Anago Group */}
            <section id="group-about" className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <RevealSectionLeft>
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0A1628 0%, #1a2744 60%, #C8962E 200%)" }}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-24 h-24 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                                                <Factory className="w-12 h-12 text-[#e7b13f]/40" strokeWidth={1} />
                                            </div>
                                            <div className="text-xs text-white/25 font-medium tracking-wider uppercase">Industrial Operations</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 rounded-xl shadow-xl p-5 border max-w-[220px]" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C8962E, #e7b13f)" }}>
                                            <Award className="w-4 h-4 text-[#0A1628]" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Est. 2004</span>
                                    </div>
                                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{"Two decades shaping Africa's industrial landscape"}</p>
                                </div>
                                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-[#C8962E]/10 border border-[#C8962E]/20 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                                    <Globe className="w-5 h-5 text-[#e7b13f]/60" strokeWidth={1.5} />
                                </div>
                            </div>
                        </RevealSectionLeft>
                        <RevealSectionRight>
                            <div className="gold-line mb-6" />
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
                                A Pan-African Industrial Holding Company Driving Sustainable Growth
                            </h2>
                            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                                {"Founded in 2004, Anago Group has grown from a focused mining operation into one of Africa's most diversified industrial holding companies. With strategic investments across six key sectors, we are uniquely positioned to drive continental transformation."}
                            </p>
                            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                                {"Our integrated approach connects mining and metals extraction with industrial processing, infrastructure development, agricultural value chains, and equipment supply \u2014 creating a self-reinforcing ecosystem that maximizes local value creation."}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {["Vertically Integrated", "Pan-African Reach", "ESG Committed", "Proven Track Record"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gold-bg)" }}>
                                            <CheckCircle className="w-4 h-4" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => document.getElementById('group-vision')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group" style={{ color: "var(--gold-primary)" }}>
                                <span>Discover Our Vision</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                            </button>
                        </RevealSectionRight>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section id="group-vision" className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="max-w-3xl mx-auto text-center mb-20">
                        <div className="gold-line mx-auto mb-6" />
                        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>Our Vision</h2>
                        <p className="text-lg lg:text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            {"To become "}<strong style={{ color: "var(--text-primary)" }}>{"Africa's reference industrial holding group"}</strong>{", recognized for operational excellence, unwavering commitment to sustainable development, and the ability to create shared value across every market we serve \u2014 from mining sites to agricultural fields, from urban centers to industrial zones."}
                        </p>
                        <div className="flex items-center justify-center gap-6 mt-10">
                            {[
                                { label: "Excellence", color: "var(--gold-primary)" },
                                { label: "Sustainability", color: "var(--text-primary)", opacity: 0.6 },
                                { label: "Impact", color: "#15803d" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ background: item.color, opacity: item.opacity || 1 }} />
                                    <span className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </RevealSection>

                    <RevealSection>
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>Our Mission</h2>
                            <p className="text-base" style={{ color: "var(--text-secondary)" }}>Mobilizing the most advanced resources, skills and technologies to build high-performing and sustainable enterprises.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: <Pickaxe className="w-6 h-6 text-[#0A1628]" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #C8962E, #e7b13f)", title: "Transform Locally", desc: "Process Africa's natural resources within the continent to maximize local economic value and reduce raw material exports." },
                                { icon: <Users className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#0D1B2A", title: "Empower Communities", desc: "Create quality jobs, invest in skills development, and foster economic empowerment in every community we operate in." },
                                { icon: <Leaf className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#15803d", title: "Protect the Environment", desc: "Implement sustainable practices that minimize environmental impact while maintaining world-class operational standards." },
                                { icon: <Handshake className="w-6 h-6 text-white" strokeWidth={1.5} />, bg: "#343a40", title: "Build Partnerships", desc: "Forge strategic alliances with governments, investors, and global industry leaders to amplify collective impact." },
                            ].map((item, i) => (
                                <RevealSection key={i} className={`p-6 rounded-2xl border shadow-sm stagger-child-${i + 1}`} style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: item.bg }}>{item.icon}</div>
                                    <h3 className="text-base font-semibold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                                </RevealSection>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 lg:py-32 relative overflow-hidden" style={{ background: "#0A1628" }}>
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(200,150,46,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,46,.1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #C8962E, transparent)" }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealSection className="text-center mb-16">
                        <div className="gold-line mx-auto mb-6" />
                        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Core Values That Guide Us</h2>
                        <p className="text-base text-white/50 max-w-2xl mx-auto">The foundational principles that drive every decision, partnership, and investment across our portfolio.</p>
                    </RevealSection>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <Shield className="w-7 h-7 text-[#0A1628]" strokeWidth={1.5} />, iconBg: "linear-gradient(135deg, #C8962E, #e7b13f)", title: "Integrity", desc: "Conducting all business with the highest ethical standards, transparency, and accountability to all stakeholders.", tags: ["Transparency", "Ethics", "Accountability"] },
                            { icon: <Target className="w-7 h-7 text-[#e7b13f]" strokeWidth={1.5} />, iconBg: "rgba(255,255,255,0.1)", title: "Excellence", desc: "Pursuing the highest standards of operational performance, innovation, and service delivery across every sector.", tags: ["Innovation", "Quality", "Performance"] },
                            { icon: <Sprout className="w-7 h-7 text-green-300" strokeWidth={1.5} />, iconBg: "rgba(22,101,52,0.6)", title: "Sustainable Growth", desc: "Balancing financial performance with environmental stewardship and social responsibility for long-term prosperity.", tags: ["ESG", "Long-term", "Responsible"] },
                        ].map((value, i) => (
                            <RevealSection key={i} className={`stagger-child-${i + 1}`}>
                                <div className="value-card-glow group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C8962E]/30 transition-all duration-300 cursor-default h-full">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300" style={{ background: value.iconBg }}>{value.icon}</div>
                                    <h3 className="text-xl font-semibold tracking-tight text-white mb-3">{value.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed mb-5">{value.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {value.tags.map((tag, j) => (
                                            <span key={j} className="px-2.5 py-1 text-xs text-white/40 bg-white/5 rounded-md border border-white/5">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Sectors */}
            <section id="group-sectors" className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-16">
                        <div className="gold-line mx-auto mb-6" />
                        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>Our Strategic Sectors</h2>
                        <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>{"Six integrated verticals working together to transform Africa's industrial landscape and create sustainable value."}</p>
                    </RevealSection>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { id: "mining", num: "01", icon: <Gem className="w-12 h-12 text-[#e7b13f]/30" strokeWidth={1} />, iconSm: <Gem className="w-5 h-5 text-[#0A1628]" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #0A1628 0%, #1a3050 100%)", iconBg: "linear-gradient(135deg, #C8962E, #e7b13f)", badgeBg: "bg-[#C8962E]/20 text-[#e7b13f]", title: "Mining & Metals", desc: "Responsible extraction and local transformation of Africa's mineral wealth into refined products." },
                            { id: "industrial", num: "02", icon: <Brain className="w-12 h-12 text-white/15" strokeWidth={1} />, iconSm: <Brain className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #0D1B2A 0%, #1a2744 100%)", iconBg: "#0D1B2A", badgeBg: "bg-white/10 text-white/70", title: "Industrial Services", desc: "Strategic consulting, audit, process optimization and industrial project management." },
                            { id: "real-estate", num: "03", icon: <Building2 className="w-12 h-12 text-white/15" strokeWidth={1} />, iconSm: <Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #1a2744 0%, #2a3a5c 100%)", iconBg: "#1a2744", badgeBg: "bg-white/10 text-white/70", title: "Real Estate & Construction", desc: "Developing sustainable residential, commercial and industrial infrastructure." },
                            { id: "agriculture", num: "04", icon: <Sprout className="w-12 h-12 text-green-400/30" strokeWidth={1} />, iconSm: <Sprout className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #1a3020 0%, #2a5030 100%)", iconBg: "#15803d", badgeBg: "bg-green-500/20 text-green-400", title: "Agriculture & Livestock", desc: "Building agro-industrial value chains, ensuring food security and rural development." },
                            { id: "equipment", num: "05", icon: <Truck className="w-12 h-12 text-white/15" strokeWidth={1} />, iconSm: <Truck className="w-5 h-5 text-white" strokeWidth={1.5} />, bg: "linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 100%)", iconBg: "#343a40", badgeBg: "bg-white/10 text-white/70", title: "Equipment Supply", desc: "Supply, maintenance and rental of industrial and construction equipment." },
                        ].map((sector, i) => (
                            <RevealSection key={i} className={`stagger-child-${(i % 3) + 1}`}>
                                <article className="card-premium group cursor-pointer rounded-2xl overflow-hidden border shadow-sm" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }} onClick={() => router.push(`/industries/${sector.id}`)}>
                                    <div className="aspect-[16/10] relative" style={{ background: sector.bg }}>
                                        <div className="absolute inset-0 flex items-center justify-center">{sector.icon}</div>
                                        <div className="absolute top-4 left-4"><span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${sector.badgeBg}`}>{sector.num}</span></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="card-icon w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: sector.iconBg }}>{sector.iconSm}</div>
                                        <h3 className="text-lg font-semibold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>{sector.title}</h3>
                                        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{sector.desc}</p>
                                        <span className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: "var(--gold-primary)" }}>
                                            <span>Learn more</span><ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                                        </span>
                                    </div>
                                </article>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
