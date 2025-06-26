"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react"

export default function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Професійне управління
                <span className="text-orange-500 block">заборгованістю</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="text-orange-500 font-semibold">Auxilium (Аксіліум)</span> - група компаній, яка діє у
                сфері управління проблемною заборгованістю, вирішенні майнових і корпоративних спорів, конфліктів при
                веденні бізнесу
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
                onClick={scrollToServices}
              >
                Наші послуги
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">11K+</div>
                <div className="text-xs md:text-sm text-slate-400">Виграних справ</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">3 млрд</div>
                <div className="text-xs md:text-sm text-slate-400">Стягнуто коштів</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">700 млн</div>
                <div className="text-xs md:text-sm text-slate-400">Реалізовано майна</div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-4 md:space-y-6 mt-8 lg:mt-0">
            <div className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700">
              <Shield className="h-8 w-8 md:h-12 md:w-12 text-orange-500 mb-3 md:mb-4 mx-auto lg:mx-0" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center lg:text-left">
                Гарантія результату
              </h3>
              <p className="text-slate-300 text-sm md:text-base text-center lg:text-left">
                Ми працюємо на результат і гарантуємо професійний підхід до кожної справи
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700">
              <Users className="h-8 w-8 md:h-12 md:w-12 text-orange-500 mb-3 md:mb-4 mx-auto lg:mx-0" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center lg:text-left">
                Досвідчена команда
              </h3>
              <p className="text-slate-300 text-sm md:text-base text-center lg:text-left">
                Наші фахівці мають багаторічний досвід у сфері стягнення заборгованості
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700">
              <TrendingUp className="h-8 w-8 md:h-12 md:w-12 text-orange-500 mb-3 md:mb-4 mx-auto lg:mx-0" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center lg:text-left">
                Високі результати
              </h3>
              <p className="text-slate-300 text-sm md:text-base text-center lg:text-left">
                Понад 4 млрд грн перебуває в обслуговуванні на різних стадіях стягнення
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
