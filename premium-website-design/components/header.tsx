import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tight">MSFSoft</div>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#cases"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Process
          </Link>
          <Link
            href="#packages"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>

        <Button size="sm">Contact</Button>
      </div>
    </header>
  )
}
