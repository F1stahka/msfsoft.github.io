import { Zap, Shield, BarChart, Code2 } from "lucide-react"

export function SocialProof() {
  const industries = ["E-commerce", "Local Services", "SaaS", "Startups", "Personal Brands"]

  const standards = [
    { icon: Zap, label: "Performance-first" },
    { icon: Shield, label: "SEO-ready" },
    { icon: BarChart, label: "Analytics-ready" },
    { icon: Code2, label: "Scalable architecture" },
  ]

  return (
    <section className="container py-24">
      <div className="space-y-12">
        <div className="text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Industries we work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-base text-muted-foreground/80">
            {industries.map((industry) => (
              <div key={industry} className="transition-colors hover:text-foreground">
                {industry}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/40 pt-12">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {standards.map((standard) => {
              const Icon = standard.icon
              return (
                <div key={standard.label} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                  <Icon className="h-4 w-4" />
                  <span>{standard.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
