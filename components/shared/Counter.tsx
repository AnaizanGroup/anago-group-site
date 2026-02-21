"use client"

import React, { useState, useEffect, useRef } from "react"

interface CounterProps {
    value: number
    suffix?: string
    duration?: number
}

export function CounterValue({ value, suffix = "", duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible) return

        let start = 0
        const end = value
        const totalSteps = 60
        const increment = end / totalSteps
        const stepTime = duration / totalSteps

        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, stepTime)

        return () => clearInterval(timer)
    }, [isVisible, value, duration])

    return (
        <div ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </div>
    )
}
