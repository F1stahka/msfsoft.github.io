import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Packages() {
  const packages = [
    {
      name: "Launch",
      bestFor: "Startups and small businesses",
      price: "100",
      duration: "7–10 days",
      features: [
        "Landing page up to 5 sections",
        "Responsive design (mobile/desktop)",
        "Basic SEO optimization",
        "Contact form integration",
        "1 round of revisions",
      ],
    },
    {
      name: "Pro",
      bestFor: "Growing businesses",
      price: "200",
      duration: "14–21 days",
      features: [
        "Multi-page website up to 10 pages",
        "Premium design system",
        "Advanced SEO + analytics setup",
        "CMS integration (headless)",
        "Performance optimization",
        "3 rounds of revisions",
      ],
      popular: true,
    },
    {
      name: "Premium",
      bestFor: "Complex projects and platforms",
      price: "500",
      duration: "4–6 weeks",
      features: [
        "Custom web application or platform",
        "Full CRO optimization",
        "A/B testing and conversion tracking",
        "CRM / API integrations",
        "30 days technical support",
        "Unlimited revisions",
      ],
    },
  ]

  return (
    <section id="packages" className="container py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Packages</h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          Transparent pricing and clear terms
        </p>
      </div>

      <div className="mb-8 grid gap-8 md:grid-cols-3">
        {packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`relative border-border/40 bg-card p-8 transition-all ${
              pkg.popular ? "border-accent shadow-lg shadow-accent/10" : "hover:border-accent/50"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold">{pkg.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{pkg.bestFor}</p>
              <div className="mb-1">
                <span className="text-sm text-muted-foreground">from </span>
                <span className="text-4xl font-bold">${pkg.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{pkg.duration}</p>
            </div>

            <ul className="mb-8 space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
              Choose package
            </Button>
          </Card>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground">Final price depends on project scope and complexity.</p>
    </section>
  )
}
