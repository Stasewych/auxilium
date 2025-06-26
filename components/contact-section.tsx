"use client"

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contacts" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Контакти</h2>
          <p className="text-lg md:text-xl text-slate-300 px-4">
            Зв'яжіться з нами для отримання професійної консультації
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">Телефон</h3>
                  <a href="tel:+380680764096" className="text-slate-300 hover:text-orange-500 transition-colors">
                    +38 (068) 076-40-96
                  </a>
                  <p className="text-xs md:text-sm text-slate-400">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:auxilium.company@gmail.com"
                    className="text-slate-300 hover:text-orange-500 transition-colors break-all"
                  >
                    auxilium.company@gmail.com
                  </a>
                  <p className="text-xs md:text-sm text-slate-400">Відповідаємо протягом 24 годин</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">Адреса</h3>
                  <p className="text-slate-300">м. Київ, Україна</p>
                  <p className="text-xs md:text-sm text-slate-400">Зустрічі за попередньою домовленістю</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">Режим роботи</h3>
                  <p className="text-slate-300">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-slate-300">Сб-Нд: За домовленістю</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3">Безкоштовна консультація</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Отримайте професійну консультацію щодо можливостей стягнення вашої заборгованості. Наші експерти
                проаналізують вашу ситуацію та запропонують оптимальне рішення.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Написати нам</h3>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ім'я</label>
                  <Input
                    placeholder="Ваше ім'я"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Телефон</label>
                  <Input
                    placeholder="+38 (___) ___-__-__"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Тема звернення</label>
                <Input
                  placeholder="Коротко опишіть тему"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Повідомлення</label>
                <Textarea
                  placeholder="Детально опишіть вашу ситуацію..."
                  rows={4}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 resize-none"
                />
              </div>

              <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Відправити повідомлення
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
