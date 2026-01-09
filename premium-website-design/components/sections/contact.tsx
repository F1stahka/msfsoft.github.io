"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    alert("Thank you! We'll reply within 24 hours.")
  }

  return (
    <section id="contact" className="container py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Start your project</h2>
          <p className="text-pretty text-lg text-muted-foreground">Fill out the form and get a quote within 24 hours</p>
        </div>

        <Card className="border-border/40 bg-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Company name (optional)" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="project">Project description</Label>
              <textarea
                id="project"
                className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get a quote"}
            </Button>

            <p className="text-center text-sm leading-relaxed text-muted-foreground">
              We reply within <span className="font-semibold text-foreground">24 hours</span>.
              <br />
              No spam. No pressure.
            </p>
          </form>
        </Card>
      </div>
    </section>
  )
}
