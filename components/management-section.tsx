"use client"

import Image from "next/image"

export default function ManagementSection() {
  const team = [
    {
      name: "Назар Павлюк",
      position: "Партнер, приватний виконавець, адвокат",
      image: "/images/павлюк.avif",
    },
    {
      name: "Назар Мужик",
      position: "Керуючий партнер, адвокат",
      image: "/images/мужик.avif",
    },
    {
      name: "Петро Зорена",
      position: "Партнер, приватний виконавець",
      image: "/images/зорена.avif",
    },
  ]

  return (
    <section id="management" className="py-12 md:py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Керівництво</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Досвідчені професіонали з багаторічним досвідом у сфері права та управління заборгованістю
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-[3/4] relative bg-slate-700">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium text-sm md:text-base leading-tight">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">Наша команда</h3>
            <p className="text-slate-300 leading-relaxed text-center text-sm md:text-base">
              Керівництво компанії Auxilium складається з досвідчених юристів та приватних виконавців, які мають глибокі
              знання в галузі стягнення заборгованості та управління проблемними активами. Наші партнери особисто
              контролюють кожну справу та забезпечують найвищий рівень професійного сервісу.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
