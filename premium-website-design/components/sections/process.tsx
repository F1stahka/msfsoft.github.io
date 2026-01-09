import { Card } from "@/components/ui/card"
import { Search, Palette, Code, Rocket } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      items: ["Business goals and target audience analysis", "Competitor research", "Strategy and scope definition"],
    },
    {
      icon: Palette,
      title: "Design",
      items: ["Premium visual design creation", "Brand identity integration", "Design approval and refinement"],
    },
    {
      icon: Code,
      title: "Build",
      items: [
        "Clean, performant code development",
        "Performance and SEO optimization",
        "Cross-device and browser testing",
      ],
    },
    {
      icon: Rocket,
      title: "Launch",
      items: ["Production deployment", "Team training and documentation", "Full control handoff"],
    },
  ]

  return (
    <section id="process" className="container py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">How we work</h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          Transparent process from idea to launch
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-accent/20 md:block" />
              )}
              <Card className="relative border-border/40 bg-card p-6 text-center transition-all hover:border-accent/50">
                <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                <ul className="space-y-1 text-left">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}
