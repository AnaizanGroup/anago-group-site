"use client"

import { useState, useEffect, useRef } from "react"
import {
    Send, MapPin, Mail, Phone, Clock, User, FileText, ChevronRight,
    CheckCircle, Globe, ShieldCheck, Linkedin, Twitter, Facebook, ArrowRight,
    Map, Link2, Building2, LayoutGrid, Lightbulb, Users, HelpCircle, Gem, Settings, Sprout, Truck, Handshake, ExternalLink, Instagram, Youtube, Plus, MessageSquare, Monitor, Sun, Moon, X
} from "lucide-react"
import { RevealSection, RevealSectionLeft, RevealSectionRight } from "@/components/shared/RevealSection"
import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/navigation"

export function ContactPage() {
    const { T } = useAppContext()
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
        if (formState.name.trim().length < 2) newErrors.name = "Please enter your name";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = "Please enter a valid email address";
        if (formState.subject.trim().length < 3) newErrors.subject = "Please enter a subject";
        if (formState.message.trim().length < 20) newErrors.message = "Please enter your message (min. 20 characters)";
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
        { label: "General Inquiry", value: "general", icon: HelpCircle, color: "var(--gold-primary)", bg: "var(--gold-bg)" },
        { label: "Mining & Metals", value: "mining", icon: Gem, color: "var(--navy-800)", bg: "linear-gradient(135deg,#C8962E,#e7b13f)" },
        { label: "Industrial Services", value: "industrial", icon: Settings, color: "#ffffff", bg: "var(--navy-600)" },
        { label: "Real Estate & Construction", value: "real-estate", icon: Building2, color: "#ffffff", bg: "#1a2744" },
        { label: "Agriculture & Livestock", value: "agriculture", icon: Sprout, color: "#ffffff", bg: "#15803d" },
        { label: "Equipment Supply", value: "equipment", icon: Truck, color: "#ffffff", bg: "var(--steel-700)" },
        { label: "Investment & Partnerships", value: "investment", icon: Handshake, color: "var(--text-secondary)", bg: "var(--bg-tertiary)" }
    ];

    return (
        <div className="block">
            <style jsx global>{`
                .hero-contact-bg {
                    background: linear-gradient(135deg, #0A1628 0%, #0f1e35 20%, #162544 40%, #1a2d50 55%, #0f1e35 75%, #0A1628 100%);
                    position: relative;
                }
                .hero-contact-bg::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200, 150, 46, 0.03), transparent);
                }
                .sector-grid-pattern {
                    background-image: linear-gradient(rgba(200, 150, 46, 0.02) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(200, 150, 46, 0.02) 1px, transparent 1px);
                    background-size: 80px 80px;
                }
                .shimmer-line {
                    background: linear-gradient(90deg, transparent 0%, rgba(200, 150, 46, 0.06) 50%, transparent 100%);
                    background-size: 200% 100%;
                    animation: shimmer 8s linear infinite;
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .orbit-ring {
                    position: absolute;
                    border: 1px solid rgba(200, 150, 46, 0.04);
                    border-radius: 50%;
                }
                .orbit-dot {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: rgba(200, 150, 46, 0.2);
                }
                @keyframes orbitSlow {
                    0% { transform: rotate(0deg) translateX(180px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
                }
                @keyframes orbitMedium {
                    0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
                    100% { transform: rotate(-360deg) translateX(120px) rotate(360deg); }
                }
                .hero-particle {
                    position: absolute;
                    border-radius: 50%;
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
                .form-input {
                    width: 100%;
                    padding: 16px 20px;
                    border-radius: 16px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--text-primary);
                    font-size: 15px;
                    line-height: 1.5;
                    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                    outline: none;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
                }
                .dark .form-input {
                    background: rgba(15, 23, 42, 0.3);
                    border-color: rgba(255, 255, 255, 0.08);
                    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
                }
                .form-input:focus {
                    border-color: var(--gold-primary);
                    background: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 0 0 4px rgba(200, 150, 46, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
                    transform: translateY(-2px);
                }
                .dark .form-input:focus {
                    background: rgba(15, 23, 42, 0.5);
                }
                .form-label {
                    display: inline-block;
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: var(--text-primary);
                    letter-spacing: 0.02em;
                }
                .btn-submit {
                    background: linear-gradient(135deg, #C8962E, #e7b13f);
                    color: #0A1628;
                    font-weight: 700;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                    border: none;
                }
                .btn-submit::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
                    transform: translateX(-100%);
                    transition: transform 0.6s ease;
                }
                .btn-submit:hover::after {
                    transform: translateX(100%);
                }
                .btn-submit:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px -5px rgba(200, 150, 46, 0.4);
                }
                .form-success-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 20;
                    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .dark .form-success-overlay {
                    background: rgba(15, 23, 42, 0.95);
                }
                .contact-card:hover {
                    transform: translateY(-6px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--gold-primary) !important;
                }
                .map-container {
                    border-radius: 16px;
                    overflow: hidden;
                    position: relative;
                    background: linear-gradient(135deg, #0A1628 0%, #131d2e 50%, #0D1B2A 100%);
                }
                @keyframes checkmark {
                    0% { stroke-dashoffset: 50; }
                    100% { stroke-dashoffset: 0; }
                }
            `}</style>

            {/* HERO SECTION */}
            <section className="hero-contact-bg relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden sector-grid-pattern">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="orbit-ring" style={{ width: "360px", height: "360px", marginLeft: "-180px", marginTop: "-180px" }}>
                            <div className="orbit-dot" style={{ animation: "orbitSlow 30s linear infinite", top: "50%", left: "50%", margin: "-3px" }}></div>
                        </div>
                        <div className="orbit-ring" style={{ width: "240px", height: "240px", marginLeft: "-120px", marginTop: "-120px" }}>
                            <div className="orbit-dot" style={{ animation: "orbitMedium 22s linear infinite", top: "50%", left: "50%", margin: "-3px" }}></div>
                        </div>
                    </div>
                    <div className="absolute top-1/4 right-1/4 w-200 h-200 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle,#C8962E 0%,transparent 70%)" }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-[0.06]" style={{ background: "linear-gradient(to top,#0A1628,transparent)" }}></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px shimmer-line"></div>
                </div>

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {particles.map(p => (
                        <div
                            key={p.id}
                            className="hero-particle"
                            style={{
                                left: p.left,
                                top: p.top,
                                "--drift-x": p.driftX,
                                "--drift-y": p.driftY,
                                "--duration": p.duration,
                                "--delay": p.delay,
                                width: p.size,
                                height: p.size,
                                background: p.color
                            } as any}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 relative z-10 w-full">
                    <div className="max-w-3xl mx-auto text-center">
                        <RevealSection className="flex items-center justify-center gap-2 mb-8">
                            <button onClick={() => router.push("/")} className="text-xs font-medium text-white/40 hover:text-white/60 transition-colors">Home</button>
                            <ChevronRight className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                            <span className="text-xs font-medium text-gold-400">Contact</span>
                        </RevealSection>

                        <RevealSection className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
                            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold"></div>
                            <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">{T("contact_hero_badge", "Let's Build Together")}</span>
                        </RevealSection>

                        <RevealSection className="stagger-2">
                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-6">
                                {T("contact_hero_title", "Contact")} <span className="gold-gradient">Anago Group</span>
                            </h1>
                        </RevealSection>

                        <RevealSection className="stagger-3">
                            <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto mb-10">
                                {T("contact_hero_desc", "We're here to collaborate, answer questions, and explore opportunities across Africa's industrial sectors. Whether you're an investor, partner, or have a project in mind — let's start a conversation.")}
                            </p>
                        </RevealSection>

                        <RevealSection className="flex flex-wrap justify-center gap-4 stagger-4">
                            <a href="#contact-form" className="btn-gold px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-semibold">
                                <Send className="w-4 h-4" strokeWidth={1.5} />
                                <span>Send Us a Message</span>
                            </a>
                            <a href="#contact-info" className="btn-outline-light px-7 py-3.5 text-sm rounded-lg inline-flex items-center gap-2 font-medium border border-white/20 text-white hover:border-gold-400 hover:text-gold-400 transition-all">
                                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                                <span>Our Locations</span>
                            </a>
                        </RevealSection>

                        <RevealSection className="flex items-center justify-center gap-6 mt-14 stagger-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/3">
                                    <Clock className="w-3.5 h-3.5 text-gold-400/60" strokeWidth={1.5} />
                                </div>
                                <span className="text-xs text-white/35">Response within 24h</span>
                            </div>
                            <div className="w-px h-5 bg-white/10"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/3">
                                    <Globe className="w-3.5 h-3.5 text-gold-400/60" strokeWidth={1.5} />
                                </div>
                                <span className="text-xs text-white/35">EN / FR</span>
                            </div>
                            <div className="w-px h-5 bg-white/10"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/3">
                                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400/60" strokeWidth={1.5} />
                                </div>
                                <span className="text-xs text-white/35">Secure & confidential</span>
                            </div>
                        </RevealSection>
                    </div>
                </div>

                <RevealSection className="absolute bottom-8 left-1/2 -translate-x-1/2 stagger-7">
                    <a href="#contact-form" className="flex flex-col items-center gap-2 group">
                        <span className="text-xs text-white/25 font-medium tracking-wider uppercase group-hover:text-white/40 transition-colors">Reach Out</span>
                        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-gold-500/40 transition-colors">
                            <div className="w-1 h-2 rounded-full bg-gold-400 animate-bounce"></div>
                        </div>
                    </a>
                </RevealSection>
            </section>

            {/* FORM + INFO SECTION */}
            <section id="contact-form" className="py-20 lg:py-32 theme-transition" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                        {/* Form Column */}
                        <div className="lg:col-span-3">
                            <RevealSection>
                                <div className="p-8 sm:p-10 rounded-4xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-100 dark:border-gray-700/50 shadow-2xl shadow-gray-200/50 dark:shadow-black/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                                    <div className="w-12 h-1 bg-linear-to-r from-gold-600 to-gold-400 rounded-full mb-8"></div>
                                    <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("contact_form_title", "Send Us a Message")}</h2>
                                    <p className="text-sm md:text-base mb-10 text-gray-500 dark:text-gray-400 max-w-lg">{T("contact_form_desc", "Fill out the form below and our team will get back to you within 24 hours.")}</p>

                                    <div className="relative">
                                        <form onSubmit={handleSubmit} className={success ? "opacity-0 invisible" : "opacity-100 visible transition-all duration-300"}>
                                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                                {/* Name */}
                                                <div className="space-y-1.5">
                                                    <label className="form-label" htmlFor="name">Full Name <span className="text-red-500">*</span></label>
                                                    <div className="relative">
                                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-gold-500 transition-colors" strokeWidth={1.5} />
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            value={formState.name}
                                                            onChange={handleInputChange}
                                                            placeholder="Your full name"
                                                            className={`form-input pl-12 ${errors.name ? "border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]" : ""}`}
                                                        />
                                                    </div>
                                                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                                                </div>
                                                {/* Email */}
                                                <div className="space-y-1.5">
                                                    <label className="form-label" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={1.5} />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            value={formState.email}
                                                            onChange={handleInputChange}
                                                            placeholder="you@company.com"
                                                            className={`form-input pl-12 ${errors.email ? "border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]" : ""}`}
                                                        />
                                                    </div>
                                                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                                {/* Subject */}
                                                <div className="space-y-1.5">
                                                    <label className="form-label" htmlFor="subject">Subject <span className="text-red-500">*</span></label>
                                                    <div className="relative">
                                                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={1.5} />
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            id="subject"
                                                            value={formState.subject}
                                                            onChange={handleInputChange}
                                                            placeholder="How can we help?"
                                                            className={`form-input pl-12 ${errors.subject ? "border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]" : ""}`}
                                                        />
                                                    </div>
                                                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                                                </div>
                                                {/* Sector Select */}
                                                <div className="space-y-1.5" ref={selectRef}>
                                                    <label className="form-label">Industry / Sector <span className="text-gray-400 font-normal">(optional)</span></label>
                                                    <div className="relative">
                                                        <div
                                                            onClick={() => setIsSelectOpen(!isSelectOpen)}
                                                            className={`form-input flex items-center justify-between cursor-pointer ${isSelectOpen ? "border-gold-500 shadow-[0_0_0_4px_rgba(200,150,46,0.1)]" : ""}`}
                                                        >
                                                            <span className={selectedSector ? "text-primary" : "text-gray-400"}>
                                                                {selectedSector ? selectedSector.label : "Select a sector"}
                                                            </span>
                                                            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${isSelectOpen ? "rotate-90 text-gold-500" : ""}`} strokeWidth={1.5} />
                                                        </div>

                                                        {isSelectOpen && (
                                                            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 py-2 max-h-60 overflow-y-auto">
                                                                {sectors.map((s) => (
                                                                    <div
                                                                        key={s.value}
                                                                        onClick={() => {
                                                                            setSelectedSector(s);
                                                                            setFormState(prev => ({ ...prev, sector: s.value }));
                                                                            setIsSelectOpen(false);
                                                                        }}
                                                                        className="px-4 py-2.5 hover:bg-gold-50 dark:hover:bg-gold-500/10 flex items-center gap-3 cursor-pointer transition-colors group"
                                                                    >
                                                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: s.bg }}>
                                                                            <s.icon className={`w-4 h-4`} style={{ color: s.color }} strokeWidth={1.5} />
                                                                        </div>
                                                                        <span className="text-sm font-medium group-hover:text-gold-500 transition-colors">{s.label}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-1.5 mb-10">
                                                <label className="form-label" htmlFor="message">Message <span className="text-red-500">*</span></label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    value={formState.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Tell us about your project, partnership interest, or inquiry..."
                                                    className={`form-input min-h-40 resize-y ${errors.message ? "border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]" : ""}`}
                                                />
                                                <div className="flex items-center justify-between mt-2">
                                                    {errors.message ? <p className="text-xs text-red-500">{errors.message}</p> : <div></div>}
                                                    <span className="text-xs text-gray-400">{charCount} / 2000</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="btn-submit px-8 py-4 rounded-xl flex items-center justify-center gap-2 min-w-50 disabled:opacity-70 disabled:cursor-not-allowed group"
                                                >
                                                    {loading ? (
                                                        <div className="w-5 h-5 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                                                    ) : (
                                                        <>
                                                            <span>Send Message</span>
                                                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
                                                        </>
                                                    )}
                                                </button>
                                                <p className="text-xs text-gray-400">We'll respond within 24 business hours.</p>
                                            </div>
                                        </form>

                                        {/* Success State */}
                                        <div className={`form-success-overlay rounded-2xl ${success ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                                            <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
                                                <CheckCircle className="w-10 h-10 text-gold-500" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Message Sent Successfully!</h3>
                                            <p className="text-sm text-center max-w-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                                                Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                                            </p>
                                            <button
                                                onClick={resetForm}
                                                className="px-6 py-2.5 bg-linear-to-r from-gold-600 to-gold-400 text-navy-800 font-bold rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-gold-500/20 transition-all active:scale-95"
                                            >
                                                <Plus className="w-4 h-4" />
                                                <span>Send Another Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </RevealSection>
                        </div>

                        {/* Info Column */}
                        <div className="lg:col-span-2 space-y-6">
                            {[
                                {
                                    icon: Building2,
                                    title: "Headquarters",
                                    content: "Plateau, Rue du Commerce\nAbidjan, Côte d'Ivoire",
                                    bg: "linear-gradient(135deg, #C8962E, #e7b13f)",
                                    iconColor: "var(--navy-800)",
                                    link: "https://maps.google.com"
                                },
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    content: "+225 27 22 00 00 00 · General\n+225 07 09 00 00 00 · Partnerships",
                                    bg: "var(--navy-600)",
                                    iconColor: "#ffffff"
                                },
                                {
                                    icon: Mail,
                                    title: "Email",
                                    content: "contact@anagogroup.com · General\ninvest@anagogroup.com · Investment\ncareers@anagogroup.com · Careers",
                                    bg: "#1a2744",
                                    iconColor: "#ffffff"
                                },
                                {
                                    icon: Clock,
                                    title: "Business Hours",
                                    content: "Mon – Fri: 08:00 – 18:00\nSat: 09:00 – 13:00\nSun: Closed",
                                    bg: "#15803d",
                                    iconColor: "#ffffff",
                                    footer: "Timezone: GMT+0 (Abidjan)"
                                },
                            ].map((item, i) => (
                                <RevealSection key={i} className={`contact-card p-6 rounded-2xl border bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transition-all stagger-child-${i + 1}`}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg" style={{ background: item.bg }}>
                                            <item.icon className="w-6 h-6" style={{ color: item.iconColor }} strokeWidth={1.5} />
                                        </div>
                                        <div className="grow">
                                            <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                            <p className="text-sm leading-relaxed whitespace-pre-line mb-3" style={{ color: "var(--text-secondary)" }}>{item.content}</p>
                                            {item.link && (
                                                <a href={item.link} target="_blank" className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-500 hover:text-gold-600 transition-colors">
                                                    <span>View on Map</span>
                                                    <ExternalLink className="w-3 h-3" strokeWidth={2} />
                                                </a>
                                            )}
                                            {item.footer && <p className="text-xs text-gray-400 mt-2">{item.footer}</p>}
                                        </div>
                                    </div>
                                </RevealSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section id="contact-info" className="py-20 lg:py-28 theme-transition" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-16">
                        <div className="w-15 h-0.75 bg-gold-400 mx-auto mb-6"></div>
                        <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{T("contact_presence_title", "Our Presence Across Africa")}</h2>
                        <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                            {T("contact_presence_desc", "With operations spanning 15+ countries, Anago Group maintains a strategic footprint across the continent's key industrial corridors.")}
                        </p>
                    </RevealSection>

                    <RevealSection className="map-container mb-12 aspect-video lg:aspect-21/9 flex flex-col items-center justify-center gap-6 p-12">
                        <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
                            <Map className="w-12 h-12 text-gold-400/40" strokeWidth={1} />
                        </div>
                        <div className="text-center space-y-2">
                            <p className="text-white/40 text-sm font-semibold tracking-wider uppercase">Interactive Presence Map</p>
                            <p className="text-white/20 text-xs">Headquarters: Abidjan, Côte d'Ivoire</p>
                        </div>
                        <a href="https://maps.google.com" target="_blank" className="btn-gold px-7 py-3 rounded-xl inline-flex items-center gap-2 group">
                            <span>Open in Google Maps</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                        </a>
                    </RevealSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { region: "West Africa", hubs: "Abidjan · Dakar · Bamako" },
                            { region: "Central Africa", hubs: "Douala · Libreville · Kinshasa" },
                            { region: "North Africa", hubs: "Casablanca · Tunis" },
                            { region: "East Africa", hubs: "Nairobi · Dar es Salaam" }
                        ].map((item, i) => (
                            <RevealSection key={i} className={`p-6 rounded-2xl border text-center transition-all hover:border-gold-500/40 stagger-child-${i + 1}`} style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="w-10 h-10 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gold-500/10">
                                    <MapPin className="w-5 h-5 text-gold-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.region}</h3>
                                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.hubs}</p>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOCIAL + NEWSLETTER SECTION */}
            <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0A1628 0%,#131d2e 30%,#1a2540 60%,#0D1B2A 100%)" }}>
                <div className="absolute inset-0 sector-grid-pattern opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-dashed border-white/3 animate-[spin_60s_linear_infinite]"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealSection className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
                        <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></div>
                        <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">Stay Connected</span>
                    </RevealSection>

                    <RevealSection>
                        <h2 className="font-serif text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">Follow Anago Group</h2>
                        <p className="text-base lg:text-lg text-white/50 max-w-2xl mx-auto mb-12">
                            Stay up to date with our latest news, industry insights, and project milestones across all our platforms.
                        </p>
                    </RevealSection>

                    {/* Social Grid */}
                    <RevealSection className="flex flex-wrap justify-center gap-4 mb-20">
                        {[
                            { icon: Linkedin, label: "LinkedIn", href: "#" },
                            { icon: Twitter, label: "Twitter", href: "#" },
                            { icon: Facebook, label: "Facebook", href: "#" },
                            { icon: Instagram, label: "Instagram", href: "#" },
                            { icon: Youtube, label: "YouTube", href: "#" }
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-white/40 hover:text-gold-400 hover:border-gold-400/50 hover:-translate-y-1 transition-all"
                                aria-label={item.label}
                            >
                                <item.icon className="w-5 h-5" strokeWidth={1.5} />
                            </a>
                        ))}
                    </RevealSection>

                    {/* Newsletter Card */}
                    <RevealSection className="max-w-xl mx-auto p-10 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-linear-to-r from-gold-500/0 via-white/20 to-gold-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <h3 className="text-xl font-semibold text-white mb-3">Subscribe to Our Newsletter</h3>
                        <p className="text-sm text-white/40 mb-8">Get industry insights and project updates delivered to your inbox.</p>

                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="form-input flex-1 px-5 py-4 bg-white/5 dark:bg-gray-800/40 text-white placeholder-white/40 shadow-inner shadow-white/5"
                            />
                            <button
                                type="submit"
                                disabled={newsletterLoading}
                                className="btn-gold px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 group/btn"
                            >
                                {newsletterLoading ? (
                                    <div className="w-5 h-5 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>Subscribe</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                                    </>
                                )}
                            </button>
                        </form>

                        {newsletterSuccess && (
                            <div className="mt-4 flex items-center justify-center gap-2 text-green-400 font-medium animate-bounce">
                                <CheckCircle className="w-4 h-4" />
                                <span className="text-sm">Subscribed successfully!</span>
                            </div>
                        )}
                        <p className="text-[10px] text-white/20 mt-6 tracking-wide uppercase font-medium underline underline-offset-4 decoration-white/10">No spam. Unsubscribe anytime.</p>
                    </RevealSection>
                </div>
            </section>

            {/* QUICK LINKS SECTION */}
            <section className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealSection className="text-center mb-16">
                        <h2 className="font-serif text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>Explore Anago Group</h2>
                        <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                            Discover more about our strategic vision and industrial footprint.
                        </p>
                    </RevealSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                path: "/about",
                                icon: Users,
                                title: "The Group",
                                desc: "Learn about our leadership, values and mission.",
                                bg: "var(--gold-bg)",
                                iconColor: "var(--gold-primary)"
                            },
                            {
                                path: "/industries",
                                icon: LayoutGrid,
                                title: "Strategic Sectors",
                                desc: "Explore our diverse portfolio across 6 key industries.",
                                bg: "linear-gradient(135deg,#C8962E,#e7b13f)",
                                iconColor: "var(--navy-800)"
                            },
                            {
                                path: "/news",
                                icon: Lightbulb,
                                title: "Insights & News",
                                desc: "The latest industry analysis and group updates.",
                                bg: "var(--navy-600)",
                                iconColor: "#ffffff"
                            }
                        ].map((item, i) => (
                            <RevealSection key={i} className="group p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-gold-500/30 bg-white dark:bg-gray-800 transition-all hover:-translate-y-2 hover:shadow-2xl">
                                <div
                                    onClick={() => router.push(item.path)}
                                    className="cursor-pointer"
                                >
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500" style={{ background: item.bg }}>
                                        <item.icon className="w-7 h-7" style={{ color: item.iconColor }} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-gold-500 transition-colors" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                    <p className="text-sm leading-relaxed mb-8 h-12 overflow-hidden" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                                    <div className="flex items-center gap-2 text-xs font-black text-gold-500 tracking-widest uppercase">
                                        <span>Discover More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" strokeWidth={3} />
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
