"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { t } from "@/lib/translations"

type AppContextType = {
    lang: string
    setLang: (lang: string) => void
    theme: string
    setTheme: (theme: string) => void
    T: (key: string, fallback?: string) => string
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState("en")
    const [theme, setThemeState] = useState("system")

    // Load preferences from localStorage
    useEffect(() => {
        const savedLang = localStorage.getItem("lang")
        if (savedLang) setLangState(savedLang)

        const savedTheme = localStorage.getItem("theme") || "system"
        setThemeState(savedTheme)
    }, [])

    // Apply theme to document
    useEffect(() => {
        const root = window.document.documentElement
        const effectiveTheme = theme === "system"
            ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
            : theme

        if (effectiveTheme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
    }, [theme])

    const setLang = (newLang: string) => {
        setLangState(newLang)
        localStorage.setItem("lang", newLang)
    }

    const setTheme = (newTheme: string) => {
        setThemeState(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    const T = useCallback((key: string, fallback?: string) => {
        return t(key, lang) || fallback || key
    }, [lang])

    return (
        <AppContext.Provider value={{ lang, setLang, theme, setTheme, T }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider")
    }
    return context
}
