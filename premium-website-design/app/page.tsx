import { Hero } from "@/components/sections/hero"
import { SocialProof } from "@/components/sections/social-proof"
import { Services } from "@/components/sections/services"
import { CaseStudies } from "@/components/sections/case-studies"
import { Process } from "@/components/sections/process"
import { Packages } from "@/components/sections/packages"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <CaseStudies />
        <Process />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
