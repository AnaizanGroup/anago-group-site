"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Globe, Menu, X, Sun, Moon, Monitor, ArrowRight, Gem, Settings, Building2, Sprout, Truck, LayoutGrid } from "lucide-react"
import { useAppContext } from "@/context/AppContext"

export function Navbar() {
    const { lang, setLang, theme, setTheme, T } = useAppContext()
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [megaMenuOpen, setMegaMenuOpen] = useState(false)
    const [themeDropdownOpen, setThemeDropdownOpen] = useState(false)
    const pathname = usePathname()
    const megaMenuRef = useRef<HTMLDivElement>(null)
    const themeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    const toggleLang = () => {
        setLang(lang === "en" ? "fr" : "en")
    }

    const isActive = (path: string) => pathname === path

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 nav-glass ${scrolled ? "scrolled" : ""}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
                    <Link href="/" className="flex items-center gap-0.5 group relative z-10">
                        <span className="text-xl lg:text-2xl font-bold tracking-tighter text-white group-hover:opacity-90 transition-opacity">ANAGO</span>
                        <span className="text-xl lg:text-2xl font-light tracking-tighter gold-gradient">GROUP</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-0.5">
                        <Link href="/" className={`nav-link relative px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isActive("/") ? "text-gold-400 nav-link-active" : "text-white/80 hover:text-gold-400"}`}>
                            {T("nav_home", "Home")}
                        </Link>
                        <Link href="/about" className={`nav-link relative px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isActive("/about") ? "text-gold-400 nav-link-active" : "text-white/80 hover:text-gold-400"}`}>
                            {T("nav_about", "The Group")}
                        </Link>

                        <div
                            className="relative"
                            onMouseEnter={() => setMegaMenuOpen(true)}
                            onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                            <button className={`nav-link relative px-3 py-2 text-xs font-medium transition-colors flex items-center gap-1 rounded-lg ${pathname?.startsWith("/industries") ? "text-gold-400 nav-link-active" : "text-white/80 hover:text-gold-400"}`}>
                                <span>{T("nav_industries", "Industries")}</span>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`} style={{ strokeWidth: 1.5 }} />
                            </button>

                            <div className={`mega-menu ${megaMenuOpen ? "open" : ""}`} ref={megaMenuRef}>
                                <div className="w-[640px] rounded-2xl border shadow-2xl overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                    <div className="px-6 pt-5 pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
                                        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--gold-primary)" }}>{T("mega_title", "Our Strategic Sectors")}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-0.5 p-3">
                                        <Link href="/industries/mining" className={`mega-menu-item flex items-start gap-3.5 p-3.5 rounded-xl group/item ${isActive("/industries/mining") || isActive("/industries/mining-metals") ? "bg-white/5 shadow-inner" : ""}`}>
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#C8962E,#e7b13f)" }}><Gem className="w-5 h-5 text-navy-800" /></div>
                                            <div><p className={`text-sm font-semibold group-hover/item:text-gold-500 transition-colors ${isActive("/industries/mining") || isActive("/industries/mining-metals") ? "text-gold-500" : ""}`} style={{ color: isActive("/industries/mining") || isActive("/industries/mining-metals") ? "" : "var(--text-primary)" }}>{T("s_mining_title", "Mining & Metals")}</p><p className="text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>{T("s_mining_desc", "Extraction, processing & trading")}</p></div>
                                        </Link>
                                        <Link href="/industries/industrial" className={`mega-menu-item flex items-start gap-3.5 p-3.5 rounded-xl group/item ${isActive("/industries/industrial") || isActive("/industries/industrial-services") ? "bg-white/5 shadow-inner" : ""}`}>
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-navy-600"><Settings className="w-5 h-5 text-white" /></div>
                                            <div><p className={`text-sm font-semibold group-hover/item:text-gold-500 transition-colors ${isActive("/industries/industrial") || isActive("/industries/industrial-services") ? "text-gold-500" : ""}`} style={{ color: isActive("/industries/industrial") || isActive("/industries/industrial-services") ? "" : "var(--text-primary)" }}>{T("s_consult_title", "Industrial Services")}</p><p className="text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>{T("s_consult_desc", "Consulting & project management")}</p></div>
                                        </Link>
                                        <Link href="/industries/realestate" className={`mega-menu-item flex items-start gap-3.5 p-3.5 rounded-xl group/item ${isActive("/industries/realestate") ? "bg-white/5 shadow-inner" : ""}`}>
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#1a2744" }}><Building2 className="w-5 h-5 text-white" /></div>
                                            <div><p className={`text-sm font-semibold group-hover/item:text-gold-500 transition-colors ${isActive("/industries/realestate") ? "text-gold-500" : ""}`} style={{ color: isActive("/industries/realestate") ? "" : "var(--text-primary)" }}>{T("s_realestate_title", "Real Estate & Construction")}</p><p className="text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>{T("s_realestate_desc", "Infrastructure & development")}</p></div>
                                        </Link>
                                        <Link href="/industries/agriculture" className={`mega-menu-item flex items-start gap-3.5 p-3.5 rounded-xl group/item ${isActive("/industries/agriculture") || isActive("/industries/agriculture-livestock") ? "bg-white/5 shadow-inner" : ""}`}>
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-green-700"><Sprout className="w-5 h-5 text-white" /></div>
                                            <div><p className={`text-sm font-semibold group-hover/item:text-gold-500 transition-colors ${isActive("/industries/agriculture") || isActive("/industries/agriculture-livestock") ? "text-gold-500" : ""}`} style={{ color: isActive("/industries/agriculture") || isActive("/industries/agriculture-livestock") ? "" : "var(--text-primary)" }}>{T("s_agri_title", "Agriculture & Livestock")}</p><p className="text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>{T("s_agri_desc", "Value chains & food security")}</p></div>
                                        </Link>
                                        <Link href="/industries/equipment" className={`mega-menu-item flex items-start gap-3.5 p-3.5 rounded-xl group/item ${isActive("/industries/equipment") || isActive("/industries/equipment-supply") ? "bg-white/5 shadow-inner" : ""}`}>
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-steel-700"><Truck className="w-5 h-5 text-white" /></div>
                                            <div><p className={`text-sm font-semibold group-hover/item:text-gold-500 transition-colors ${isActive("/industries/equipment") || isActive("/industries/equipment-supply") ? "text-gold-500" : ""}`} style={{ color: isActive("/industries/equipment") || isActive("/industries/equipment-supply") ? "" : "var(--text-primary)" }}>{T("s_equip_title", "Equipment Supply")}</p><p className="text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>{T("s_equip_desc", "Supply, maintenance & rental")}</p></div>
                                        </Link>
                                        <Link href="/industries" className={`mega-menu-item flex items-start gap-3.5 p-3.5 rounded-xl group/item ${isActive("/industries") ? "shadow-inner" : ""}`} style={{ background: isActive("/industries") ? "rgba(200, 150, 46, 0.15)" : "var(--gold-bg)" }}>
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#0A1628,#C8962E)" }}><LayoutGrid className="w-5 h-5 text-white" /></div>
                                            <div><p className="text-sm font-semibold transition-colors" style={{ color: isActive("/industries") ? "white" : "var(--gold-primary)" }}>{T("s_all_title", "View All Activities")}</p><p className="text-xs mt-0.5" style={{ color: isActive("/industries") ? "rgba(255,255,255,0.6)" : "var(--text-tertiary)" }}>{T("s_all_desc", "Complete portfolio overview")}</p></div>
                                        </Link>
                                    </div>
                                    <div className="px-6 py-3.5 border-t flex items-center justify-between" style={{ borderColor: "var(--border-color)", background: "var(--bg-secondary)" }}>
                                        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{T("mega_footer", "6 strategic sectors across 15+ countries")}</span>
                                        <Link href="/news#subscribe" className="inline-flex items-center gap-1 text-xs font-semibold transition-colors" style={{ color: "var(--gold-primary)" }}><span>{T("nav_cta", "Subscribe to Insights")}</span><ArrowRight className="w-3.5 h-3.5" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/news" className={`nav-link relative px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isActive("/news") ? "text-gold-400 nav-link-active" : "text-white/80 hover:text-gold-400"}`}>
                            {T("nav_news", "Insights")}
                        </Link>
                        <Link href="/contact" className={`nav-link relative px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isActive("/contact") ? "text-gold-400 nav-link-active" : "text-white/80 hover:text-gold-400"}`}>
                            {T("nav_contact", "Contact")}
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="relative" ref={themeRef}>
                            <button
                                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                                className="flex items-center justify-center w-8 h-8 text-white/70 hover:text-white rounded-lg border border-white/10 hover:border-white/25 transition-all"
                            >
                                {theme === "light" && <Sun className="w-3.5 h-3.5" />}
                                {theme === "dark" && <Moon className="w-3.5 h-3.5" />}
                                {theme === "system" && <Monitor className="w-3.5 h-3.5" />}
                            </button>

                            <div className={`theme-toggle-dropdown rounded-xl border shadow-lg overflow-hidden ${themeDropdownOpen ? "open" : ""}`} style={{ background: "var(--card-bg)", borderColor: "var(--border-color)", minWidth: "150px" }}>
                                <div className="p-1.5">
                                    <button onClick={() => { setTheme("light"); setThemeDropdownOpen(false); }} className={`theme-option w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg ${theme === "light" ? "active" : ""}`} style={{ color: "var(--text-secondary)" }}>
                                        <Sun className="w-3.5 h-3.5" /><span>Light</span>
                                    </button>
                                    <button onClick={() => { setTheme("dark"); setThemeDropdownOpen(false); }} className={`theme-option w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg ${theme === "dark" ? "active" : ""}`} style={{ color: "var(--text-secondary)" }}>
                                        <Moon className="w-3.5 h-3.5" /><span>Dark</span>
                                    </button>
                                    <button onClick={() => { setTheme("system"); setThemeDropdownOpen(false); }} className={`theme-option w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg ${theme === "system" ? "active" : ""}`} style={{ color: "var(--text-secondary)" }}>
                                        <Monitor className="w-3.5 h-3.5" /><span>System</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button onClick={toggleLang} className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-white/70 hover:text-white rounded-lg border border-white/10 hover:border-white/25 transition-all">
                            <Globe className="w-3.5 h-3.5" />
                            <span className="uppercase">{lang}</span>
                        </button>

                        <Link href="/contact" className="hidden md:inline-flex btn-gold px-4 py-2 text-xs font-semibold rounded-lg items-center gap-1.5">
                            <span>{T("nav_cta", "Subscribe")}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-white">
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu fixed top-0 right-0 w-80 max-w-[85vw] h-full z-[60] shadow-2xl overflow-y-auto ${mobileMenuOpen ? "open" : ""}`} style={{ background: "#0A1628" }}>
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                    <span className="text-base font-semibold text-white">Menu</span>
                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/70 hover:text-white"><X className="w-5 h-5" /></button>
                </div>
                <div className="flex flex-col p-4 gap-0.5">
                    <Link href="/" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${isActive("/") ? "text-gold-400 bg-white/5" : "text-white/80 hover:text-gold-400 hover:bg-white/5"}`}>Home</Link>
                    <Link href="/about" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${isActive("/about") ? "text-gold-400 bg-white/5" : "text-white/80 hover:text-gold-400 hover:bg-white/5"}`}>The Group</Link>
                    <Link href="/industries" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${pathname?.startsWith("/industries") ? "text-gold-400 bg-white/5" : "text-white/80 hover:text-gold-400 hover:bg-white/5"}`}>Industries</Link>
                    <Link href="/news" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${isActive("/news") ? "text-gold-400 bg-white/5" : "text-white/80 hover:text-gold-400 hover:bg-white/5"}`}>Insights</Link>
                    <Link href="/contact" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${isActive("/contact") ? "text-gold-400 bg-white/5" : "text-white/80 hover:text-gold-400 hover:bg-white/5"}`}>Contact</Link>

                    <div className="mt-4 px-4 pt-4 border-t border-white/10">
                        <p className="text-xs font-medium text-white/40 mb-3">Theme</p>
                        <div className="flex gap-2">
                            <button onClick={() => setTheme("light")} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white/50 hover:text-gold-400 rounded-lg border border-white/10 transition-all">
                                <Sun className="w-3.5 h-3.5" /><span>Light</span>
                            </button>
                            <button onClick={() => setTheme("dark")} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white/50 hover:text-gold-400 rounded-lg border border-white/10 transition-all">
                                <Moon className="w-3.5 h-3.5" /><span>Dark</span>
                            </button>
                            <button onClick={() => setTheme("system")} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white/50 hover:text-gold-400 rounded-lg border border-white/10 transition-all">
                                <Monitor className="w-3.5 h-3.5" /><span>Auto</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 px-4">
                        <Link href="/contact" className="btn-gold w-full py-3 text-sm font-semibold rounded-lg flex items-center justify-center gap-2">
                            <span>Subscribe</span><ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300" onClick={() => setMobileMenuOpen(false)}></div>
            )}
        </>
    )
}
