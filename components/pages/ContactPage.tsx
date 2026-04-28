"use client"

import { useState, useEffect, useRef } from "react"
import {
    Send, MapPin, Mail, Phone, Clock, User, FileText, ChevronRight,
    CheckCircle, Globe, ShieldCheck, Linkedin, Twitter, Facebook, ArrowRight, ArrowDownRight,
    Map, Link2, Building2, LayoutGrid, Lightbulb, Users, HelpCircle, Gem, Settings, Sprout, Truck, Handshake, ExternalLink, Instagram, Youtube, Plus, MessageSquare, Monitor, Sun, Moon, X
} from "lucide-react"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function ContactPage() {
    const { T, theme } = useAppContext()
    const isLight = theme === "light"
    const router = useRouter()

    // Form State
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", sector: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [charCount, setCharCount] = useState(0);

    // Custom Select State
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selectedSector, setSelectedSector] = useState<{ label: string, value: string } | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    // Newsletter State
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterLoading, setNewsletterLoading] = useState(false);
    const [newsletterSuccess, setNewsletterSuccess] = useState(false);

    // Hero Particles
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        // Initialize particles
        const newParticles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            driftX: (Math.random() * 80 - 40) + "px",
            driftY: (Math.random() * -100 - 20) + "px",
            duration: (6 + Math.random() * 8) + "s",
            delay: (Math.random() * 6) + "s",
            size: (2 + Math.random() * 3) + "px",
            color: Math.random() > 0.4 ? "rgba(200,150,46,0.3)" : "rgba(148,163,184,0.2)"
        }));
        setParticles(newParticles);

        // Click outside listener for custom select
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsSelectOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "message") {
            if (value.length > 2000) return;
            setCharCount(value.length);
        }
        setFormState(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (formState.name.trim().length < 2) newErrors.name = T("contact_error_name", "Please enter your name");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = T("contact_error_email", "Please enter a valid email address");
        if (formState.subject.trim().length < 3) newErrors.subject = T("contact_error_subject", "Please enter a subject");
        if (formState.message.trim().length < 20) newErrors.message = T("contact_error_message", "Please enter your message (min. 20 characters)");
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };

    const resetForm = () => {
        setFormState({ name: "", email: "", subject: "", sector: "", message: "" });
        setSelectedSector(null);
        setErrors({});
        setCharCount(0);
        setSuccess(false);
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setNewsletterLoading(true);
        setTimeout(() => {
            setNewsletterLoading(false);
            setNewsletterSuccess(true);
            setNewsletterEmail("");
            setTimeout(() => setNewsletterSuccess(false), 3000);
        }, 1200);
    };

    const sectors = [
        { label: T("contact_sector_general"), value: "general", icon: HelpCircle, color: "var(--gold-primary)", bg: "var(--gold-bg)" },
        { label: T("contact_sector_mining"), value: "mining", icon: Gem, color: "var(--navy-800)", bg: "linear-gradient(135deg,#C8962E,#e7b13f)" },
        { label: T("contact_sector_industrial"), value: "industrial", icon: Settings, color: "#ffffff", bg: "var(--navy-600)" },
        { label: T("contact_sector_realestate"), value: "real-estate", icon: Building2, color: "#ffffff", bg: "#1a2744" },
        { label: T("contact_sector_agriculture"), value: "agriculture", icon: Sprout, color: "#ffffff", bg: "#15803d" },
        { label: T("contact_sector_equipment"), value: "equipment", icon: Truck, color: "#ffffff", bg: "var(--steel-700)" },
        { label: T("contact_sector_investment"), value: "investment", icon: Handshake, color: "var(--text-secondary)", bg: "var(--bg-tertiary)" }
    ];
    const socialChannels = [
        { icon: Linkedin, label: "LinkedIn", href: "#" },
        { icon: Twitter, label: "Twitter", href: "#" },
        { icon: Facebook, label: "Facebook", href: "#" },
        { icon: Instagram, label: "Instagram", href: "#" },
        { icon: Youtube, label: "YouTube", href: "#" }
    ];

    return (
        <div className="block">
            {/* HERO SECTION - Cinematic HQ Visual */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/contact/hq-hero.png"
                        alt="Anago Group Headquarters"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 w-full">
                    <div className="w-full flex flex-col items-center">
                        <RevealSection className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-2xl">
                            <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse-gold" />
                            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{T("contact_hero_badge")}</span>
                        </RevealSection>

                        <RevealSection className="stagger-2 flex justify-center ">
                            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-center font-semibold tracking-tight text-white leading-[0.95] mb-10">
                                {T("contact_hero_title").split("Anago")[0]}<br />
                                <span className="gold-gradient italic">Anago Group</span>
                            </h1>
                        </RevealSection>

                        <RevealSection className="stagger-4 flex justify-center w-full">
                            <p className="text-xl lg:text-2xl text-white/80 text-center leading-relaxed max-w-3xl mb-16 font-light">
                                {T("contact_hero_desc")}
                            </p>
                        </RevealSection>

                        <RevealSection className="flex flex-wrap justify-center w-full gap-6 stagger-5">
                            <a href="#contact-form" className="btn-gold px-12 py-5 text-xs rounded-2xl inline-flex items-center gap-4 shadow-2xl shadow-gold-500/30">
                                <span className="font-bold tracking-widest uppercase">{T("contact_hero_cta_send")}</span>
                                <ArrowDownRight className="w-5 h-5" strokeWidth={2.5} />
                            </a>
                        </RevealSection>

                        <RevealSection className="flex flex-wrap justify-center w-full items-center gap-10 mt-20 stagger-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md">
                                    <Clock className="w-4 h-4 text-gold-400" />
                                </div>
                                <span className="text-xs font-bold text-white/60 tracking-widest uppercase">{T("contact_hero_stat_response")}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md">
                                    <Globe className="w-4 h-4 text-gold-400" />
                                </div>
                                <span className="text-xs font-bold text-white/60 tracking-widest uppercase">{T("contact_hero_stat_lang")}</span>
                            </div>
                        </RevealSection>
                    </div>
                </div>

                <div className="absolute bottom-12 left-12 hidden lg:flex flex-col items-center gap-4 fade-in stagger-7">
                    <span className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase vertical-text mb-4">{T("contact_hero_scroll")}</span>
                    <div className="w-0.5 h-16 bg-linear-to-b from-gold-500 to-transparent opacity-40" />
                </div>
            </section>

            {/* FORM + INFO SECTION - Signature Design */}
            <section id="contact-form" className="py-24 lg:py-48 relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-(--bg-secondary) to-transparent opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-24">

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <RevealSectionLeft>
                                <div className="p-10 lg:p-16 rounded-4xl border shadow-2xl relative overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                                    <div className="relative z-10">
                                        <div className="gold-line mb-10" />
                                        <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>{T("contact_form_title")}</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-xl" style={{ color: "var(--text-secondary)" }}>{T("contact_form_desc")}</p>

                                        <form onSubmit={handleSubmit} className={success ? "opacity-0 invisible" : "opacity-100 visible transition-all duration-300 space-y-8"}>
                                            <div className="grid sm:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-xs font-bold uppercase tracking-widest opacity-60" htmlFor="name" style={{ color: "var(--text-primary)" }}>{T("contact_label_name")}</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        value={formState.name}
                                                        onChange={handleInputChange}
                                                        placeholder={T("contact_placeholder_name")}
                                                        className={`w-full px-6 py-5 rounded-2xl border transition-all bg-transparent focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-hidden ${errors.name ? "border-red-500" : "border-(--border-color)"}`}
                                                        style={{ color: "var(--text-primary)" }}
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-xs font-bold uppercase tracking-widest opacity-60" htmlFor="email" style={{ color: "var(--text-primary)" }}>{T("contact_label_email")}</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        value={formState.email}
                                                        onChange={handleInputChange}
                                                        placeholder={T("contact_placeholder_email")}
                                                        className={`w-full px-6 py-5 rounded-2xl border transition-all bg-transparent focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-hidden ${errors.email ? "border-red-500" : "border-(--border-color)"}`}
                                                        style={{ color: "var(--text-primary)" }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-xs font-bold uppercase tracking-widest opacity-60" htmlFor="subject" style={{ color: "var(--text-primary)" }}>{T("contact_label_subject")}</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    value={formState.subject}
                                                    onChange={handleInputChange}
                                                    placeholder={T("contact_placeholder_subject")}
                                                    className={`w-full px-6 py-5 rounded-2xl border transition-all bg-transparent focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-hidden ${errors.subject ? "border-red-500" : "border-(--border-color)"}`}
                                                    style={{ color: "var(--text-primary)" }}
                                                />
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-xs font-bold uppercase tracking-widest opacity-60" htmlFor="message" style={{ color: "var(--text-primary)" }}>{T("contact_label_message")}</label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    value={formState.message}
                                                    onChange={handleInputChange}
                                                    placeholder={T("contact_placeholder_message")}
                                                    className={`w-full px-6 py-5 rounded-2xl border transition-all bg-transparent focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-hidden min-h-48 resize-none ${errors.message ? "border-red-500" : "border-(--border-color)"}`}
                                                    style={{ color: "var(--text-primary)" }}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="btn-gold w-full py-6 rounded-2xl flex items-center justify-center gap-4 group disabled:opacity-70"
                                            >
                                                {loading ? (
                                                    <div className="w-6 h-6 border-3 border-navy-950/20 border-t-navy-950 rounded-full animate-spin"></div>
                                                ) : (
                                                    <>
                                                        <span className="font-bold tracking-widest uppercase">{T("contact_btn_send")}</span>
                                                        <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>

                                        {/* Success State */}
                                        <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-white dark:bg-navy-950 z-20 transition-all duration-500 ${success ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-10"}`}>
                                            <div className="w-24 h-24 rounded-full bg-gold-500/10 flex items-center justify-center mb-8">
                                                <CheckCircle className="w-12 h-12 text-gold-500" />
                                            </div>
                                            <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>{T("contact_success_title")}</h3>
                                            <p className="text-lg opacity-60 mb-10 max-w-sm" style={{ color: "var(--text-secondary)" }}>{T("contact_success_desc")}</p>
                                            <button onClick={resetForm} className="btn-outline-themed px-10 py-4 rounded-xl flex items-center gap-3">
                                                <Plus className="w-4 h-4" />
                                                <span className="uppercase tracking-widest text-xs font-bold">{T("contact_success_btn")}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </RevealSectionLeft>
                        </div>

                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-10">
                            <RevealSectionRight>
                                <div className="space-y-12">
                                    {[
                                        { icon: MapPin, title: T("contact_info_hq_title"), content: T("contact_info_hq_content"), link: "https://maps.google.com" },
                                        { icon: Phone, title: T("contact_info_phone_title"), content: "+225 27 22 00 00 00\n+225 07 09 00 00 00" },
                                        { icon: Mail, title: T("contact_info_email_title"), content: "contact@anagogroup.com\ninvest@anagogroup.com" },
                                        { icon: Clock, title: T("contact_info_hours_title"), content: T("contact_info_hours_content"), footer: T("contact_info_hours_footer") },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-8 group">
                                            <div className="w-16 h-16 rounded-[1.25rem] border flex items-center justify-center shrink-0 shadow-lg group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-500" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                                <item.icon className="w-6 h-6 text-gold-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "var(--gold-primary)" }}>{item.title}</h3>
                                                <p className="text-xl leading-relaxed whitespace-pre-line" style={{ color: "var(--text-primary)" }}>{item.content}</p>
                                                {item.footer && <p className="text-sm font-medium opacity-50 mt-2" style={{ color: "var(--text-secondary)" }}>{item.footer}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealSectionRight>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRESENCE SECTION - Panoramic Network */}
            <section className="py-12 lg:py-24 relative overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/contact/network-map.png"
                        alt="Pan-African Industrial Network"
                        fill
                        className="object-cover opacity-20 grayscale-[0.8] dark:opacity-30"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <RevealSection>
                            <div className="gold-line mx-auto mb-10" />
                            <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>{T("contact_presence_title")}</h2>
                            <p className="text-xl max-w-3xl mx-auto opacity-70 font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>{T("contact_presence_desc")}</p>
                        </RevealSection>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { region: T("contact_region_west"), hubs: "Abidjan · Dakar · Bamako" },
                            { region: T("contact_region_central"), hubs: "Douala · Libreville · Kinshasa" },
                            { region: T("contact_region_north"), hubs: "Casablanca · Tunis" },
                            { region: T("contact_region_east"), hubs: "Nairobi · Dar es Salaam" }
                        ].map((item, i) => (
                            <RevealSection key={i} className={`p-10 rounded-4xl border text-center transition-all duration-500 hover:-translate-y-4 shadow-xl stagger-child-${i + 1}`} style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg" style={{ background: "var(--gold-bg)" }}>
                                    <MapPin className="w-7 h-7 text-gold-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>{item.region}</h3>
                                <p className="text-sm font-medium opacity-60 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.hubs}</p>
                            </RevealSection>
                        ))}
                    </div>

                    <RevealSection className="mt-20 text-center">
                        <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase py-4 px-8 rounded-2xl border transition-all hover:shadow-md hover:text-white" style={{ borderColor: "var(--gold-primary)", color: "var(--gold-primary)" }}>
                            <span>{T("contact_map_google")}</span>
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </RevealSection>
                </div>
            </section>

            {/* NEWSLETTER - Premium Hub */}
            {/* <section className="py-24 lg:py-48 relative overflow-hidden">
                <div className="absolute inset-0 theme-transition" style={{ backgroundColor: isLight ? "var(--bg-secondary)" : "var(--section-dark)" }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? 'black' : 'white'} 1px, transparent 0)`, backgroundSize: "32px 32px" }} />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection>
                        <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-10">
                            <Mail className="w-6 h-6 text-gold-500" />
                        </div>
                        <h2 className="font-serif text-4xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ color: "var(--text-primary)" }}>{T("contact_social_title")}</h2>
                        <p className="text-xl max-w-2xl mx-auto mb-16 font-light opacity-70" style={{ color: "var(--text-secondary)" }}>{T("contact_social_desc")}</p>

                        <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-6 p-2 rounded-4xl border backdrop-blur-xl transition-all" style={{ backgroundColor: isLight ? "var(--bg-primary)" : "rgba(255,255,255,0.05)", borderColor: "var(--border-color)" }}>
                            <input
                                type="email"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                placeholder={T("contact_newsletter_placeholder")}
                                required
                                className="flex-1 bg-transparent px-8 py-5 outline-hidden placeholder:opacity-30"
                                style={{ color: "var(--text-primary)" }}
                            />
                            <button
                                type="submit"
                                disabled={newsletterLoading}
                                className="btn-gold px-10 py-5 rounded-2xl font-bold tracking-widest uppercase transition-all shadow-2xl shadow-gold-500/40"
                            >
                                {newsletterLoading ? <div className="w-6 h-6 border-3 border-navy-950/20 border-t-navy-950 rounded-full animate-spin" /> : T("contact_newsletter_btn")}
                            </button>
                        </form>

                        <div className="mt-16 flex justify-center gap-8">
                            {socialChannels.map((item, i) => (
                                <a key={i} href={item.href} className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-500 transition-all duration-500">
                                    <item.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section> */}
        </div>
    );
}
