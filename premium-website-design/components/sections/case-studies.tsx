import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CaseStudies() {
  const cases = [
    {
      title: "E-commerce Fashion",
      label: "Concept Project",
      problem: "Outdated interface with low mobile conversion and slow loading times",
      solution: "Mobile-first redesign focused on visual hierarchy, optimized images, and streamlined checkout flow",
      result: "Expected: 150–200% conversion increase, lower bounce rate, improved Core Web Vitals",
      image: "/modern-ecommerce-fashion-website-dark.jpg",
    },
    {
      title: "Local Services Hub",
      label: "Demo",
      problem: "No online presence, difficulty attracting local customers and generating leads",
      solution: "Simple landing page with strong local SEO, clear service offerings, and optimized contact forms",
      result: "Target: 50+ new qualified leads per month within first quarter",
      image: "/local-services-website-landing.jpg",
    },
    {
      title: "SaaS Startup Platform",
      label: "Concept Project",
      problem: "Need for rapid MVP launch to demonstrate value to potential investors",
      solution: "Functional prototype with core features, clean UI, and data dashboard built in 3 weeks",
      result: "Successful investor presentation, onboarding of first beta users for validation",
      image: "/saas-startup-platform-dashboard-dark.jpg",
    },
  ]

  return (
    <section id="cases" className="container py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Selected projects & demo concepts
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          Examples of our approach to different project types
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {cases.map((caseStudy) => (
          <Card
            key={caseStudy.title}
            className="overflow-hidden border-border/40 bg-card transition-all hover:border-accent/50"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute right-3 top-3">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  {caseStudy.label}
                </Badge>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">{caseStudy.title}</h3>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Problem</p>
                <p className="text-sm leading-relaxed">{caseStudy.problem}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Solution</p>
                <p className="text-sm leading-relaxed">{caseStudy.solution}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-accent">Expected Result</p>
                <p className="text-sm font-semibold leading-relaxed">{caseStudy.result}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
