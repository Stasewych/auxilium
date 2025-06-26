"use client"

import { Scale, Users, CreditCard, Gavel } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const divisions = [
    {
      icon: Scale,
      title: "Адвокатське об'єднання",
      subtitle: "«Юридична компанія «Аксіліум»»",
      services: [
        "legal collection (судове стягнення заборгованості)",
        "вирішення корпоративних спорів",
        "протидія рейдерству",
      ],
    },
    {
      icon: Users,
      title: "Колекторська компанія",
      subtitle: "«Аксіліум»",
      services: ["позасудове стягнення заборгованості", "(Soft collection, Hard collection)"],
    },
    {
      icon: Gavel,
      title: "Приватні виконавці",
      subtitle: "",
      services: [
        "стягнення боргів будь-якої складності по всій території України",
        "комплексний супровід виконавчого провадження",
        "виконання рішень немайнового характеру",
      ],
    },
    {
      icon: CreditCard,
      title: "Фінансова компанія",
      subtitle: '"АКСІЛІУМ ФІНАНС"',
      services: ["купівля та обслуговування портфелів NPL", "факторинг та надання інших фінансових послуг"],
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Company Description */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Про компанію Auxilium</h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto px-4">
            Auxilium (Аксіліум) - група компаній, яка діє у сфері управління проблемною заборгованістю, вирішенні
            майнових і корпоративних спорів, конфліктів при веденні бізнесу
          </p>
        </div>

        {/* Company Logo Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center mb-6 md:mb-8">
            <Image
              src="/images/auxilium-logo.avif"
              alt="Auxilium Logo"
              width={300}
              height={100}
              className="h-12 md:h-20 w-auto"
            />
          </div>
        </div>

        {/* Company Divisions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                  <division.icon className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-base md:text-lg font-semibold text-orange-500 mb-1 leading-tight">
                    {division.title}
                  </h3>
                  {division.subtitle && (
                    <p className="text-xs md:text-sm text-orange-400 mb-3 leading-tight">{division.subtitle}</p>
                  )}
                </div>

                <ul className="space-y-2">
                  {division.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start space-x-2 text-xs md:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
