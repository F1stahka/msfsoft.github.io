import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 text-lg font-bold">MSFSoft</div>
            <p className="text-sm text-muted-foreground">Premium web development for businesses and startups</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-foreground">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground">
                  Redesign & CRO
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#cases" className="hover:text-foreground">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-foreground">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@msfsoft.com</li>
              <li>Contact via email</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MSFSoft. Yura Fostiak. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
