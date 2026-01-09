import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How much does a website cost?",
      answer:
        "Launch package starts at $100, Pro at $200, Premium at $500. After a brief, we'll provide an accurate quote within 24 hours.",
    },
    {
      question: "What are realistic development timelines?",
      answer:
        "Landing page: 7–10 days. Multi-page website: 14–21 days. Complex projects: 4–6 weeks. Timeline is fixed after scope approval.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. Launch includes 14 days of basic support, Pro includes 14 days, Premium includes 30 days of full technical support. Extended maintenance available separately.",
    },
    {
      question: "How many revision rounds are included?",
      answer:
        "Launch includes 1 round, Pro includes 3 rounds, Premium includes unlimited revisions. Major scope changes during development are discussed separately.",
    },
    {
      question: "How do we communicate during the project?",
      answer:
        "Telegram or email for quick questions. Zoom calls at key milestones. Progress tracked in Notion/Trello (your choice).",
    },
    {
      question: "What happens after launch?",
      answer:
        "You get full code access, admin training, and documentation. Support according to your package. Extended maintenance available if needed.",
    },
  ]

  return (
    <section id="faq" className="container py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">FAQ</h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          Honest answers to common questions
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
