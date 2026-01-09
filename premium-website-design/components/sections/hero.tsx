"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { Hero3DBackground } from "@/components/hero-3d-background"
import { useEffect, useState } from "react"

export function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return (
    <section className="relative container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center pt-20 text-center overflow-hidden">
      {!prefersReducedMotion && <Hero3DBackground />}

      <div className="relative z-10 max-w-4xl space-y-8">
        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Websites for businesses that{" "}
          <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
            generate leads
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Full-cycle development from strategy to launch. Premium design, modern technology, transparent process. 7–21
          days.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Button size="lg" className="gap-2">
            Get a quote in 24 hours
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <Calendar className="h-4 w-4" />
            Book a 15-min call
          </Button>
        </div>
      </div>
    </section>
  )
}
