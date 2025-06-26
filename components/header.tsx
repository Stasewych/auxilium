"use client"

import { Phone, Mail, Facebook, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar - hidden on mobile */}
        <div className="hidden lg:flex items-center justify-end py-2 text-sm border-b border-slate-800">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-orange-500" />
              <span className="text-slate-300">+38 (068) 076-40-96</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-orange-500" />
              <span className="text-slate-300">auxilium.company@gmail.com</span>
            </div>
            <Link
              href="https://www.facebook.com/auxilium.company/?locale=uk_UA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-500 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/auxilium-logo.avif"
              alt="Auxilium Logo"
              width={180}
              height={60}
              className="h-8 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-orange-500 transition-colors"
            >
              Про нас
            </button>
            <button
              onClick={() => scrollToSection("management")}
              className="text-slate-300 hover:text-orange-500 transition-colors"
            >
              Керівництво
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-300 hover:text-orange-500 transition-colors"
            >
              Послуги
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-slate-300 hover:text-orange-500 transition-colors"
            >
              Контакти
            </button>
            <Link href="/other" className="text-slate-300 hover:text-orange-500 transition-colors">
              Інше
            </Link>
          </nav>

          {/* Mobile contact info and menu button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a href="tel:+380680764096" className="text-orange-500 hover:text-orange-400">
              <Phone className="h-5 w-5" />
            </a>
            <Button variant="ghost" size="sm" className="text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-orange-500 transition-colors text-left py-2 px-2 rounded hover:bg-slate-800/50"
              >
                Про нас
              </button>
              <button
                onClick={() => scrollToSection("management")}
                className="text-slate-300 hover:text-orange-500 transition-colors text-left py-2 px-2 rounded hover:bg-slate-800/50"
              >
                Керівництво
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-300 hover:text-orange-500 transition-colors text-left py-2 px-2 rounded hover:bg-slate-800/50"
              >
                Послуги
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-slate-300 hover:text-orange-500 transition-colors text-left py-2 px-2 rounded hover:bg-slate-800/50"
              >
                Контакти
              </button>
              <Link
                href="/other"
                className="text-slate-300 hover:text-orange-500 transition-colors py-2 px-2 rounded hover:bg-slate-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Інше
              </Link>
            </nav>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <a
                  href="tel:+380680764096"
                  className="flex items-center space-x-2 text-slate-300 hover:text-orange-500 transition-colors py-2 px-2 rounded hover:bg-slate-800/50"
                >
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>+38 (068) 076-40-96</span>
                </a>
                <a
                  href="mailto:auxilium.company@gmail.com"
                  className="flex items-center space-x-2 text-slate-300 hover:text-orange-500 transition-colors py-2 px-2 rounded hover:bg-slate-800/50"
                >
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span>auxilium.company@gmail.com</span>
                </a>
                <Link
                  href="https://www.facebook.com/auxilium.company/?locale=uk_UA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-300 hover:text-orange-500 transition-colors py-2 px-2 rounded hover:bg-slate-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Facebook className="h-4 w-4 text-orange-500" />
                  <span>Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
