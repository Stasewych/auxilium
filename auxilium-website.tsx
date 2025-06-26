"use client"

import { Phone, Mail, Facebook, Users, TrendingUp, Building, Scale } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuxiliumWebsite() {
  const stats = [
    {
      icon: Scale,
      text: "> 11 тис. виграних судових процесів",
      number: "11,000+",
    },
    {
      icon: TrendingUp,
      text: "> 3 млрд. грн. стягнуто на користь клієнтів",
      number: "3 млрд",
    },
    {
      icon: Building,
      text: "> 700 млн. грн. вартість реалізованого майна",
      number: "700 млн",
    },
    {
      icon: Users,
      text: "> 4 млрд. грн. перебуває в обслуговуванні групи компаній «Аксіліум» на різних стадіях стягнення",
      number: "4 млрд",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                Про нас
              </Link>
              <Link href="#management" className="text-slate-300 hover:text-white transition-colors">
                Керівництво
              </Link>
              <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                Послуги
              </Link>
              <Link href="#contacts" className="text-slate-300 hover:text-white transition-colors">
                Контакти
              </Link>
              <Link href="#other" className="text-slate-300 hover:text-white transition-colors">
                Інше
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+38 (068) 076-40-96</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>auxilium.company@gmail.com</span>
              </div>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Logo and Company Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white rounded-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"></div>
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Auxilium</h1>
                  <p className="text-slate-400 text-sm">група компаній «Аксіліум»</p>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                <span className="text-orange-500 font-semibold">Auxilium (Аксіліум)</span> - група компаній, яка діє у
                сфері управління проблемною заборгованістю, вирішенні майнових і корпоративних спорів, конфліктів при
                веденні бізнесу
              </p>

              <div className="flex space-x-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Наші послуги</Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                  Зв'язатися з нами
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">Наші досягнення</h2>
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-orange-500 mb-1">{stat.number}</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Професійне вирішення фінансових спорів</h3>
            <p className="text-slate-400 leading-relaxed">
              Ми спеціалізуємося на комплексному підході до управління проблемною заборгованістю, забезпечуючи
              максимальну ефективність стягнення та захист інтересів наших клієнтів на всіх етапах судового процесу.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-500 text-sm">
            <p>&copy; 2024 Auxilium. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
