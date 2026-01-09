import { Card } from "@/components/ui/card"
import { Zap, TrendingUp, Rocket } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Zap,
      title: "Website & landing development",
      description: "High-converting landing pages and corporate websites, turnkey.",
      deliverables: [
        "Responsive design (mobile + desktop)",
        "SEO optimization and fast loading",
        "Lead capture forms and analytics",
      ],
    },
    {
      icon: TrendingUp,
      title: "Redesign & conversion optimization",
      description: "Updating existing websites with a focus on conversion growth.",
      deliverables: [
        "Current UX and performance audit",
        "Modern design with CRO best practices",
        "A/B testing setup and metrics tracking",
      ],
    },
    {
      icon: Rocket,
      title: "Startup MVP websites",
      description: "Fast launch of minimum viable product to validate your idea.",
      deliverables: [
        "Functional prototype in 2–3 weeks",
        "Foundation for scaling",
        "Analytics integration from day one",
      ],
    },
  ]

  return (
    <section id="services" className="container py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">What we do</h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          Three directions with clear outcomes
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Card key={service.title} className="border-border/40 bg-card p-8 transition-all hover:border-accent/50">
              <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
