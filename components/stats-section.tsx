"use client"

import { Scale, TrendingUp, Building, Users, CheckCircle } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: Scale,
      number: "11,000+",
      text: "виграних судових процесів",
      description: "Успішно завершені справи різної складності",
    },
    {
      icon: TrendingUp,
      number: "3 млрд грн",
      text: "стягнуто на користь клієнтів",
      description: "Загальна сума повернених коштів",
    },
    {
      icon: Building,
      number: "700 млн грн",
      text: "вартість реалізованого майна",
      description: "Успішно реалізоване майно боржників",
    },
    {
      icon: Users,
      number: "4 млрд грн",
      text: "перебуває в обслуговуванні групи компаній «Аксіліум» на різних стадіях стягнення",
      description: "Поточний портфель справ в роботі",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наші досягнення</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Цифри, які говорять про нашу ефективність та професіоналізм у сфері управління заборгованістю
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-orange-500 flex-shrink-0" />
                    <div className="text-xl md:text-2xl font-bold text-orange-500">{stat.number}</div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 leading-tight">{stat.text}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
