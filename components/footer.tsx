"use client"

import { Phone, Mail, Facebook, ArrowUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left lg:col-span-1">
            <Image
              src="/images/auxilium-logo.avif"
              alt="Auxilium Logo"
              width={150}
              height={50}
              className="h-6 md:h-8 w-auto mx-auto sm:mx-0"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Професійне управління проблемною заборгованістю та вирішення фінансових спорів
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base md:text-lg font-semibold text-white">Швидкі посилання</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-400 hover:text-orange-500 transition-colors text-sm text-center sm:text-left"
              >
                Про нас
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-400 hover:text-orange-500 transition-colors text-sm text-center sm:text-left"
              >
                Послуги
              </button>
              <button
                onClick={() => scrollToSection("management")}
                className="text-slate-400 hover:text-orange-500 transition-colors text-sm text-center sm:text-left"
              >
                Керівництво
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-slate-400 hover:text-orange-500 transition-colors text-sm text-center sm:text-left"
              >
                Контакти
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base md:text-lg font-semibold text-white">Послуги</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-400 hover:text-orange-500 transition-colors text-sm text-center sm:text-left"
              >
                Стягнення заборгованості
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-400 hover:text-orange-500 transition-colors text-sm text-center sm:text-left"
              >
                Юридичний супровід
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-400 hover:text-orange-500 transition-colors text-sm text-center sm:text-left"
              >
                Управління активами
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-400 hover:text-orange-500 transition-colors text-sm text-center sm:text-left"
              >
                Корпоративні спори
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base md:text-lg font-semibold text-white">Контакти</h4>
            <div className="space-y-3">
              <a
                href="tel:+380680764096"
                className="flex items-center justify-center sm:justify-start space-x-2 text-slate-400 hover:text-orange-500 transition-colors"
              >
                <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm">+38 (068) 076-40-96</span>
              </a>
              <a
                href="mailto:auxilium.company@gmail.com"
                className="flex items-center justify-center sm:justify-start space-x-2 text-slate-400 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm break-all">auxilium.company@gmail.com</span>
              </a>
              <Link
                href="https://www.facebook.com/auxilium.company/?locale=uk_UA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 text-slate-400 hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm text-center md:text-left">&copy; 2025 Auxilium. Всі права захищені.</p>
          <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-slate-400 hover:text-orange-500">
            <ArrowUp className="h-4 w-4 mr-2" />
            Вгору
          </Button>
        </div>
      </div>
    </footer>
  )
}
