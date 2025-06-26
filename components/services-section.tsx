"use client"

import { Scale, FileText, Building2, Users, Gavel, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contacts")
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: Users,
      title: "Soft collection",
      subtitle: "(позасудове стягнення)",
      description: "М'які методи стягнення заборгованості без звернення до суду",
      features: ["Переговори з боржниками", "Складання планів погашення", "Досудове врегулювання"],
    },
    {
      icon: Scale,
      title: "Legal collection",
      subtitle: "(судове стягнення)",
      description: "Професійне судове стягнення заборгованості через правову систему",
      features: ["Підготовка позовів", "Судове представництво", "Отримання виконавчих документів"],
    },
    {
      icon: Building2,
      title: "Купівля та обслуговування портфелів NPL",
      subtitle: "",
      description: "Професійне управління портфелями неробочих кредитів",
      features: ["Аналіз портфелів", "Оцінка вартості", "Управління активами"],
    },
    {
      icon: Gavel,
      title: "Стягнення заборгованості приватними виконавцями",
      subtitle: "на всій території України",
      description: "Комплексні послуги приватного виконання по всій країні",
      features: ["Виконавче провадження", "Розшук майна", "Примусове стягнення"],
    },
    {
      icon: FileText,
      title: "Комплексний супровід виконавчого провадження",
      subtitle: "",
      description: "Повний цикл супроводу виконавчого провадження від початку до завершення",
      features: ["Контроль процесу", "Взаємодія з виконавцями", "Звітність клієнту"],
    },
    {
      icon: TrendingUp,
      title: "Вирішення корпоративних спорів",
      subtitle: "протидія рейдерству",
      description: "Захист бізнесу від корпоративних конфліктів та рейдерських захоплень",
      features: ["Корпоративні спори", "Антирейдерський захист", "Бізнес-медіація"],
    },
  ]

  return (
    <section id="services" className="py-12 md:py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наші послуги</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Повний спектр послуг у сфері управління заборгованістю та вирішення фінансових спорів
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                  <service.icon className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
                </div>

                <div className="space-y-3 text-center md:text-left">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">{service.title}</h3>
                    {service.subtitle && <p className="text-orange-400 text-sm mt-1">{service.subtitle}</p>}
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
            onClick={scrollToContacts}
          >
            Отримати консультацію
          </Button>
        </div>
      </div>
    </section>
  )
}
