"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Facebook } from "lucide-react"
import { useAppContext } from "@/context/AppContext"

export function Footer() {
    const { T } = useAppContext()

    return (
        <footer className="py-16 border-t theme-transition" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-0.5 mb-4">
                            <span className="text-xl font-bold tracking-tighter" style={{ color: "var(--text-primary)" }}>ANAGO</span>
                            <span className="text-xl font-light tracking-tighter gold-gradient">GROUP</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                            {T("footer_desc", "Pan-African industrial holding company driving sustainable development through integrated value chains.")}
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:border-gold-500/50" style={{ borderColor: "var(--border-color)", color: "var(--text-tertiary)" }} aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
                            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:border-gold-500/50" style={{ borderColor: "var(--border-color)", color: "var(--text-tertiary)" }} aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
                            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:border-gold-500/50" style={{ borderColor: "var(--border-color)", color: "var(--text-tertiary)" }} aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-primary)" }}>{T("footer_industries", "Industries")}</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/industries/mining" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("s_mining_title", "Mining & Metals")}</Link></li>
                            <li><Link href="/industries/industrial" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("s_consult_title", "Industrial Services")}</Link></li>
                            <li><Link href="/industries/realestate" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("s_realestate_title", "Real Estate & Construction")}</Link></li>
                            <li><Link href="/industries/agriculture" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("s_agri_title", "Agriculture & Livestock")}</Link></li>
                            <li><Link href="/industries/equipment" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("s_equip_title", "Equipment Supply")}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-primary)" }}>{T("footer_company", "Company")}</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/about" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("nav_about", "The Group")}</Link></li>
                            <li><Link href="/industries" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("s_all_title", "All Activities")}</Link></li>
                            <li><Link href="/news" className="text-sm font-medium" style={{ color: "var(--gold-primary)" }}>{T("nav_news", "Insights")}</Link></li>
                            <li><Link href="/contact" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("nav_contact", "Contact")}</Link></li>
                            <li><Link href="/careers" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>{T("footer_careers", "Careers")}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-primary)" }}>{T("footer_contact", "Contact")}</h4>
                        <ul className="space-y-2.5">
                            <li className="text-sm" style={{ color: "var(--text-secondary)" }}>Abidjan, Côte d'Ivoire</li>
                            <li><a href="mailto:contact@anagogroup.com" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>contact@anagogroup.com</a></li>
                            <li><a href="tel:+2252722000000" className="text-sm transition-colors hover:text-gold-500" style={{ color: "var(--text-secondary)" }}>+225 27 22 00 00 00</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border-color)" }}>
                    <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>© 2024 Anago Group. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-xs transition-colors hover:text-gold-500" style={{ color: "var(--text-tertiary)" }}>{T("footer_privacy", "Privacy Policy")}</Link>
                        <Link href="/terms" className="text-xs transition-colors hover:text-gold-500" style={{ color: "var(--text-tertiary)" }}>{T("footer_terms", "Terms of Use")}</Link>
                        <Link href="/legal" className="text-xs transition-colors hover:text-gold-500" style={{ color: "var(--text-tertiary)" }}>{T("footer_legal", "Legal Notice")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
