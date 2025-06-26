"use client"

import Header from "../../components/header"
import Footer from "../../components/footer"
import {
  FileText,
  Scale,
  AlertCircle,
  ArrowLeft,
  Shield,
  Building,
  Ban,
  Phone,
  MapPin,
  User,
  Calendar,
  Users,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function OtherPage() {
  const [showDisclosure, setShowDisclosure] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back button */}
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" className="text-slate-300 hover:text-orange-500">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Повернутися на головну
                </Button>
              </Link>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Інше</h1>
              <p className="text-xl text-slate-300">Додаткова правова інформація та вимоги законодавства</p>
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => setShowDisclosure(false)}
                variant={!showDisclosure ? "default" : "outline"}
                className={`${
                  !showDisclosure
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border-slate-600 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Scale className="h-4 w-4 mr-2" />
                Стаття 25 Закону України
              </Button>
              <Button
                onClick={() => setShowDisclosure(true)}
                variant={showDisclosure ? "default" : "outline"}
                className={`${
                  showDisclosure
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border-slate-600 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Building className="h-4 w-4 mr-2" />
                Розкриття інформації про компанію
              </Button>
            </div>

            {!showDisclosure ? (
              // Article 25 content with full text
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Scale className="h-6 w-6 text-orange-500" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white">
                    Стаття 25 Закону України "Про споживче кредитування"
                  </h2>
                </div>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-orange-400 mb-2">
                          Вимоги щодо взаємодії із споживачами та іншими особами при врегулюванні простроченої
                          заборгованості
                        </h3>
                        <p className="text-sm text-slate-300">(вимоги щодо етичної поведінки)</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 1 */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="mb-4">
                          Взаємодія кредитодавця, нового кредитора, колекторської компанії із споживачем, його близькими
                          особами, представником, спадкоємцем, поручителем, майновим поручителем або третіми особами,
                          взаємодія з якими передбачена договором про споживчий кредит та які надали згоду на таку
                          взаємодію, при врегулюванні простроченої заборгованості може здійснюватися виключно шляхом:
                        </p>

                        <div className="space-y-4 ml-4">
                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <p className="mb-3">
                              <strong className="text-orange-400">1)</strong> безпосередньої взаємодії (телефонні та
                              відеопереговори, особисті зустрічі).
                            </p>
                            <p className="text-sm text-slate-400">
                              Проведення особистих зустрічей можливе виключно з 9 до 19 години, за умови що особа, з
                              якою здійснюється взаємодія, не заперечує проти проведення з нею зустрічі та попередньо
                              надала згоду на особисту зустріч під час телефонної розмови або окрему письмову згоду на
                              це. Місце і час зустрічі підлягають обов'язковому попередньому узгодженню;
                            </p>
                          </div>

                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <p>
                              <strong className="text-orange-400">2)</strong> надсилання текстових, голосових та інших
                              повідомлень через засоби телекомунікації, у тому числі без залучення працівника
                              кредитодавця, нового кредитора або колекторської компанії, шляхом використання програмного
                              забезпечення або технологій;
                            </p>
                          </div>

                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <p>
                              <strong className="text-orange-400">3)</strong> надсилання поштових відправлень із
                              позначкою "Вручити особисто" за місцем проживання чи перебування або за місцем роботи
                              фізичної особи.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="mb-4">
                          Під час першої взаємодії із споживачем, його близькими особами, представником, спадкоємцем,
                          поручителем, майновим поручителем або третіми особами, взаємодія з якими передбачена договором
                          про споживчий кредит та які надали згоду на таку взаємодію, у рамках врегулювання простроченої
                          заборгованості кредитодавець, новий кредитор, колекторська компанія зобов'язані повідомити:
                        </p>

                        <div className="space-y-3 ml-4">
                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <p>
                              <strong className="text-orange-400">1)</strong> повне найменування кредитора (у разі якщо
                              взаємодію здійснює новий кредитор або колекторська компанія), своє повне найменування,
                              номер телефону для здійснення зв'язку та адресу (електронну або поштову) для листування;
                            </p>
                          </div>

                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <p>
                              <strong className="text-orange-400">2)</strong> прізвище, власне ім'я, по батькові (за
                              наявності) особи, яка здійснює взаємодію із споживачем, його близькими особами,
                              представником, спадкоємцем, поручителем, майновим поручителем або третіми особами,
                              взаємодія з якими передбачена договором про споживчий кредит та які надали згоду на таку
                              взаємодію, або ім'я та індекс, за допомогою якого кредитодавець, новий кредитор,
                              колекторська компанія однозначно ідентифікують особу, яка здійснює взаємодію, або
                              зазначення про використання для взаємодії програмного забезпечення або технології, якщо
                              взаємодія здійснюється без залучення працівника кредитодавця, нового кредитора чи
                              колекторської компанії;
                            </p>
                          </div>

                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <p>
                              <strong className="text-orange-400">3)</strong> правову підставу взаємодії;
                            </p>
                          </div>

                          <div className="bg-slate-700/30 rounded-lg p-4">
                            <p>
                              <strong className="text-orange-400">4)</strong> розмір простроченої заборгованості (розмір
                              кредиту, проценти за користування кредитом, розмір комісії та інших платежів, пов'язаних з
                              отриманням, обслуговуванням і поверненням кредиту), розмір неустойки та інших платежів, що
                              стягуються при невиконанні зобов'язання за договором про споживчий кредит або відповідно
                              до закону. У разі звернення відповідно до договору про споживчий кредит до третіх осіб,
                              взаємодія з якими передбачена договором про споживчий кредит та які надали згоду на таку
                              взаємодію, у тому числі до близьких осіб, відповідно до частини шостої цієї статті
                              інформація про розмір простроченої заборгованості повідомляється лише за наявності згоди
                              споживача на передачу інформації про наявність простроченої заборгованості таким особам.
                              Розрахунок розміру простроченої заборгованості для колекторської компанії здійснюється
                              кредитодавцем або новим кредитором.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <FileText className="h-5 w-5 text-orange-500" />
                            <h4 className="font-semibold text-white">Надання підтвердних документів</h4>
                          </div>
                          <p className="text-sm mb-3">
                            Новий кредитор, колекторська компанія на вимогу споживача, його близьких осіб, представника,
                            спадкоємця, поручителя або майнового поручителя зобов'язані протягом{" "}
                            <strong>п'яти робочих днів</strong> після першої взаємодії при врегулюванні простроченої
                            заборгованості надати документи, що підтверджують інформацію, зазначену у частині другій
                            цієї статті (у тому числі детальний розрахунок простроченої заборгованості та всіх інших
                            платежів по кожному платіжному періоду та підставу їх нарахування), особисто або шляхом
                            направлення листа на адресу (електронну або поштову) такої особи, або в інший визначений
                            договором про споживчий кредит спосіб.
                          </p>
                          <p className="text-sm mb-3">
                            Кредитодавець на вимогу споживача, його близьких осіб, представника, спадкоємця, поручителя
                            або майнового поручителя зобов'язаний протягом <strong>семи робочих днів</strong> після
                            першої взаємодії при врегулюванні простроченої заборгованості (якщо інший строк не
                            встановлено законом) надати документи, що підтверджують інформацію, зазначену у пункті 4
                            частини другої цієї статті, особисто або шляхом направлення листа на зазначену в договорі
                            про споживчий кредит адресу (електронну або поштову), або в інший визначений таким договором
                            спосіб.
                          </p>
                          <p className="text-sm text-slate-400">
                            Новий кредитор, колекторська компанія не має права за власною ініціативою повторно
                            взаємодіяти із споживачем, його близькими особами, представником, спадкоємцем, поручителем
                            або майновим поручителем до моменту надання підтвердних документів. Кредитодавець не має
                            права за власною ініціативою повторно взаємодіяти із споживачем, його близькими особами,
                            представником, спадкоємцем, поручителем або майновим поручителем до моменту надання
                            підтвердних документів.
                          </p>
                        </div>

                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <h5 className="font-semibold text-white mb-2">Момент надання підтвердних документів:</h5>
                          <div className="space-y-2 text-sm">
                            <p>
                              <strong className="text-orange-400">1)</strong> момент отримання кредитодавцем, новим
                              кредитором, колекторською компанією підтвердження направлення споживачу підтвердних
                              документів - у разі направлення таких документів електронною поштою;
                            </p>
                            <p>
                              <strong className="text-orange-400">2)</strong> 23 година 59 хвилин десятого робочого дня
                              з дня направлення рекомендованого поштового відправлення з описом вкладення, що містило
                              відповідні підтвердні документи, або момент отримання повідомлення про вручення
                              зазначеного поштового відправлення, якщо таке повідомлення отримано раніше зазначеного
                              10-денного строку.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Shield className="h-5 w-5 text-orange-500" />
                            <h4 className="font-semibold text-white">Фіксування взаємодії</h4>
                          </div>
                          <p className="text-sm mb-3">
                            Кредитодавець, новий кредитор, колекторська компанія зобов'язані здійснювати у встановленому
                            Національним банком України порядку фіксування кожної безпосередньої взаємодії із
                            споживачем, його близькими особами, представником, спадкоємцем, поручителем, майновим
                            поручителем або третіми особами, взаємодія з якими передбачена договором про споживчий
                            кредит та які надали згоду на таку взаємодію, за допомогою відео- та/або звукозаписувального
                            технічного засобу з метою захисту правового інтересу учасників врегулювання простроченої
                            заборгованості. Кредитодавець, новий кредитор, колекторська компанія зобов'язані попередити
                            споживача про таке фіксування.
                          </p>
                          <p className="text-sm mb-3">
                            Кредитодавець, новий кредитор, колекторська компанія зобов'язані зберігати всі носії
                            інформації, на яких зафіксовано взаємодію із споживачем (у тому числі за допомогою технічних
                            засобів), протягом <strong>трьох років</strong> після такої взаємодії.
                          </p>
                          <p className="text-sm text-slate-400">
                            Кредитодавець, новий кредитор, колекторська компанія можуть здійснювати обробку виключно
                            персональних даних споживача, обов'язок з обробки яких покладений на них законом, а також
                            персональних даних, що містяться у матеріалах та даних, зібраних у процесі взаємодії при
                            врегулюванні простроченої заборгованості.
                          </p>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                          <h5 className="font-semibold text-red-400 mb-2">Заборонена обробка персональних даних:</h5>
                          <div className="grid md:grid-cols-2 gap-2 text-sm">
                            <p>• щодо графіка роботи</p>
                            <p>• щодо місця та часу відпочинку</p>
                            <p>• щодо поїздок у межах та за межі України</p>
                            <p>• щодо зустрічей з рідними, друзями</p>
                            <p>• щодо інформації в соціальних мережах</p>
                            <p>• щодо стану здоров'я</p>
                            <p>• щодо політичних поглядів та релігійних переконань</p>
                            <p>• щодо членства у партіях та громадських об'єднаннях</p>
                            <p>• фото та відеоматеріали (крім випадків письмової згоди)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 - Prohibitions */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Ban className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-4">
                          Заборонені дії при врегулюванні заборгованості:
                        </h4>

                        <div className="space-y-4">
                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">1) Погрози та шантаж</h5>
                            <p className="text-sm">
                              Здійснювати дії, що зазіхають на особисту гідність, права, свободи, власність споживача,
                              його близьких осіб, представника, спадкоємця, поручителя, майнового поручителя та/або
                              інших осіб, ставлять під загрозу життя, здоров'я, ділову репутацію зазначених осіб, а
                              також використовувати погрози, шантаж, вчиняти інші незаконні (неправомірні) дії стосовно
                              зазначених осіб.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">2) Введення в оману щодо:</h5>
                            <div className="text-sm space-y-1">
                              <p>
                                <strong>а)</strong> розміру, характеру та підстав виникнення простроченої
                                заборгованості, а також наслідків, що настануть у разі невиконання умов договору про
                                споживчий кредит;
                              </p>
                              <p>
                                <strong>б)</strong> передачі питання про погашення простроченої заборгованості на
                                розгляд суду, можливості застосування до боржника заходів адміністративного і
                                кримінального переслідування;
                              </p>
                              <p>
                                <strong>в)</strong> належності кредитора, кредитодавця, нового кредитора, колекторської
                                компанії до органів державної влади та органів місцевого самоврядування.
                              </p>
                            </div>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">3) Часові обмеження</h5>
                            <p className="text-sm">
                              З власної ініціативи взаємодіяти із споживачем у період з 20 до 9 години, а також у
                              вихідні, святкові і неробочі дні.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">4) Частота взаємодії</h5>
                            <p className="text-sm">
                              Взаємодіяти із споживачем більше двох разів на добу, крім випадків додаткової взаємодії за
                              їхньою власною ініціативою. Взаємодія за допомогою засобів зв'язку вважається такою, що
                              відбулася, якщо в результаті такої взаємодії особі передано змістовну інформацію про
                              розмір простроченої заборгованості, порядок її погашення, розмір неустойки та інших
                              платежів.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">5) Приховування контактної інформації</h5>
                            <p className="text-sm">
                              Приховувати інформацію про номер контактного телефону, з якого здійснюється дзвінок або
                              надсилається повідомлення споживачу, про поштову адресу або адресу електронної пошти, з
                              якої надсилається повідомлення, про відправника поштового або електронного повідомлення.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">6) Автодозвін</h5>
                            <p className="text-sm">
                              Використовувати функцію (сервіс) автоматичного додзвону до споживача протягом більше 30
                              хвилин на добу.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">7) Погрозливі повідомлення</h5>
                            <p className="text-sm">
                              Використовувати на конвертах або повідомленнях зображення, що можуть бути сприйняті як
                              такі, що містять погрозу, розміщувати відомості, що прямо чи опосередковано вказують на
                              наявність заборгованості, використовувати написи "виконавчий документ", "рішення про
                              стягнення", "повідомлення про виселення" тощо, а також найменування органів державної
                              влади.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">8) Розголошення інформації</h5>
                            <p className="text-sm">
                              Будь-яким чином повідомляти третіх осіб (крім осіб, взаємодія з якими передбачена
                              договором про споживчий кредит та які надали згоду на таку взаємодію) про заборгованість
                              споживача або здійснювати взаємодію з цими особами таким чином, щоб їм стала відома або
                              могла стати відомою інформація про заборгованість споживача.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">9) Вимагання зобов'язань</h5>
                            <p className="text-sm">
                              Вимагати від споживача, його близьких осіб, представника, спадкоємця, поручителя,
                              майнового поручителя, а також його роботодавця та/або інших осіб прийняти на себе
                              зобов'язання щодо простроченої заборгованості, якщо інше не передбачено договором про
                              споживчий кредит або законом.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">10) Шкода репутації</h5>
                            <p className="text-sm">
                              Вчиняти дії, що завдають шкоду репутації, у тому числі діловій репутації, споживача, його
                              близьких осіб, представника, спадкоємця, поручителя, або погрожувати вчиненням таких дій.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">11) Неправомірні способи погашення</h5>
                            <p className="text-sm">
                              Вимагати погашення заборгованості в інший спосіб, ніж передбачено договором про споживчий
                              кредит або законом.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">12) Взаємодія при наявності представника</h5>
                            <p className="text-sm">
                              За власною ініціативою будь-яким чином взаємодіяти із споживачем або його близькими
                              особами, якщо споживач письмово, шляхом надання всіх належним чином оформлених підтвердних
                              документів, повідомив, що його інтереси при врегулюванні простроченої заборгованості
                              представляє його представник.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">13) Неузгоджені зустрічі</h5>
                            <p className="text-sm">
                              Проводити особисті зустрічі із споживачем, його близькими особами, представником,
                              спадкоємцем, поручителем, майновим поручителем, третіми особами без попереднього
                              погодження таких зустрічей відповідною особою.
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="font-medium text-red-400 mb-2">14) Взаємодія без згоди</h5>
                            <p className="text-sm">
                              Будь-яким чином взаємодіяти з приводу укладеного споживачем договору про споживчий кредит
                              з особами (крім споживача, його представника, спадкоємця, поручителя, майнового
                              поручителя), які не надали згоди на таку взаємодію.
                            </p>
                          </div>
                        </div>

                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-4">
                          <p className="text-sm text-slate-300">
                            Національний банк України у разі виявлення існування практики врегулювання простроченої
                            заборгованості, що порушує права та законні інтереси споживачів, у межах своєї компетенції
                            встановлює додаткові вимоги щодо взаємодії із споживачами при врегулюванні простроченої
                            заборгованості (вимоги щодо етичної поведінки).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sections 6-9 */}
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">6</span>
                          </div>
                          <h4 className="font-semibold text-white">Взаємодія з третіми особами</h4>
                        </div>
                        <p className="text-sm text-slate-300 mb-3">
                          Кредитодавець, новий кредитор, колекторська компанія має право для донесення до споживача
                          інформації про необхідність виконання зобов'язань за договором про споживчий кредит при
                          врегулюванні простроченої заборгованості взаємодіяти з третіми особами, персональні дані яких
                          передані кредитодавцю, новому кредитору, колекторській компанії споживачем у процесі
                          укладення, виконання та припинення договору про споживчий кредит.
                        </p>
                        <p className="text-sm text-slate-400">
                          Обов'язок щодо отримання згоди таких третіх осіб на обробку їхніх персональних даних до
                          передачі таких персональних даних кредитодавцю, новому кредитору, колекторській компанії
                          покладається на споживача.
                        </p>
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">7</span>
                          </div>
                          <h4 className="font-semibold text-white">Відповідальність за дії третіх осіб</h4>
                        </div>
                        <p className="text-sm text-slate-300">
                          Дії, які від імені кредитодавця, нового кредитора, колекторської компанії вчиняються третіми
                          особами, залученими на договірних засадах кредитодавцем, новим кредитором, колекторською
                          компанією до безпосередньої взаємодії із споживачем при врегулюванні простроченої
                          заборгованості, вважаються вчиненими таким кредитодавцем, новим кредитором, колекторською
                          компанією.
                        </p>
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">8</span>
                          </div>
                          <h4 className="font-semibold text-white">Витрати на врегулювання</h4>
                        </div>
                        <p className="text-sm text-slate-300">
                          Забороняється покладати на споживача обов'язок з оплати/компенсації витрат на здійснення
                          врегулювання простроченої заборгованості. Витрати на врегулювання простроченої заборгованості,
                          крім оплати зобов'язань за договором про споживчий кредит або іншим договором, передбаченим
                          статтею 3 цього Закону, здійснюються виключно за рахунок коштів кредитодавця, нового
                          кредитора, колекторської компанії.
                        </p>
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">9</span>
                          </div>
                          <h4 className="font-semibold text-white">Особливі категорії осіб</h4>
                        </div>
                        <p className="text-sm text-slate-300 mb-3">
                          З ініціативи кредитодавця, нового кредитора, колекторської компанії або третьої особи, яка діє
                          від їхнього імені та/або в їхніх інтересах, не допускається спрямована на повернення
                          простроченої заборгованості взаємодія у спосіб, передбачений пунктом 1 частини першої цієї
                          статті (безпосередня взаємодія), із споживачем з моменту отримання документів, які свідчать,
                          що така особа:
                        </p>
                        <div className="text-sm text-slate-400 space-y-1">
                          <p>1) є недієздатною особою або особою, обмеженою в дієздатності;</p>
                          <p>2) перебуває на стаціонарному лікуванні в закладі охорони здоров'я;</p>
                          <p>3) є особою з інвалідністю I групи;</p>
                          <p>4) є неповнолітньою особою.</p>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                          У разі неподання документів, що підтверджують наявність обставин, передбачених цією частиною,
                          їх наявність вважається непідтвердженою.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex items-center space-x-3 text-sm text-slate-400">
                    <FileText className="h-4 w-4" />
                    <span>Джерело: Закон України "Про споживче кредитування", Стаття 25</span>
                  </div>
                </div>
              </div>
            ) : (
              // Company Disclosure content (existing content)
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-orange-500" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white">Розкриття інформації про компанію</h2>
                </div>

                {/* Existing company disclosure content - keeping all the existing sections */}
                <div className="space-y-8">
                  {/* Company Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Building className="h-5 w-5 text-orange-500" />
                        <h3 className="text-lg font-semibold text-white">Найменування компанії</h3>
                      </div>
                      <div className="space-y-2 text-sm text-slate-300">
                        <p>
                          <strong>Повне найменування:</strong>
                        </p>
                        <p>ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «КОМПАНІЯ АКСІЛІУМ»</p>
                        <p>
                          <strong>Скорочене найменування:</strong>
                        </p>
                        <p>ТОВ "КОМПАНІЯ АКСІЛІУМ"</p>
                      </div>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <FileText className="h-5 w-5 text-orange-500" />
                        <h3 className="text-lg font-semibold text-white">Реєстраційні дані</h3>
                      </div>
                      <div className="space-y-2 text-sm text-slate-300">
                        <p>
                          <strong>Код за ЄДРПОУ:</strong> 43227197
                        </p>
                        <p>
                          <strong>Реєстраційний номер:</strong> 1
                        </p>
                        <p>
                          <strong>Дата включення до реєстру:</strong> 03.09.2021
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location and Management */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <h3 className="text-lg font-semibold text-white">Місцезнаходження</h3>
                      </div>
                      <p className="text-sm text-slate-300">
                        01054, Україна, місто Київ, вулиця Хмельницького Богдана (Шевченківський р-н), будинок 58а,
                        квартира 78, ОФІС 2
                      </p>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <User className="h-5 w-5 text-orange-500" />
                        <h3 className="text-lg font-semibold text-white">Органи управління</h3>
                      </div>
                      <p className="text-sm text-slate-300">
                        <strong>Директор:</strong> МУЖИК НАЗАР ТАРАСОВИЧ
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Phone className="h-5 w-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">Контактна інформація</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-300">
                      <div>
                        <p>
                          <strong>Телефон для споживачів:</strong>
                        </p>
                        <p>+38 (068) 076-40-96</p>
                      </div>
                      <div>
                        <p>
                          <strong>Електронна пошта:</strong>
                        </p>
                        <p>auxilium.company@gmail.com</p>
                      </div>
                      <div>
                        <p>
                          <strong>Поштова адреса:</strong>
                        </p>
                        <p>01054, м. Київ, вул. Б. Хмельницького, 58А</p>
                      </div>
                    </div>
                  </div>

                  {/* Registry Information */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="h-5 w-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">
                        Відомості про включення до реєстру колекторських компаній
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                      <p>
                        <strong>Реєстраційний номер:</strong> 1
                      </p>
                      <p>
                        <strong>Дата включення до реєстру:</strong> 03.09.2021
                      </p>
                    </div>
                  </div>

                  {/* Data Protection */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Shield className="h-5 w-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">Захист персональних даних</h3>
                    </div>
                    <p className="text-sm text-slate-300 mb-3">
                      <strong>Порядок та процедури захисту персональних даних:</strong>
                    </p>
                    <p className="text-sm text-slate-300">Положення про обробку персональних даних</p>
                  </div>

                  {/* Involved Persons */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Users className="h-5 w-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">Залучені особи</h3>
                    </div>
                    <p className="text-sm text-slate-300">
                      ТОВ "КОМПАНІЯ АКСІЛІУМ" не залучала осіб до здійснення колекторської діяльності.
                    </p>
                  </div>

                  {/* Debt Settlement Procedures */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <FileText className="h-5 w-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">Порядок погашення заборгованості</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Погашення простроченої заборгованості за кредитними договорами, по яких ТОВ "КОМПАНІЯ АКСІЛІУМ"
                      здійснює врегулювання заборгованості, на підставі укладених з Кредитодавцем, новим кредитором
                      договорів на врегулювання заборгованості, споживачем повинно здійснюватися на рахунки
                      Кредитодавця, нового кредитора.
                    </p>
                    <p className="text-sm text-slate-300 mt-3">
                      Порядок і спосіб погашення простроченої заборгованості у кожного Кредитодавця, нового кредитора з
                      якими ТОВ "КОМПАНІЯ АКСІЛІУМ" укладені договори на врегулювання заборгованості, різні, тому
                      споживачам для отримання інформації щодо порядку та строку погашення заборгованості по конкретному
                      кредитному договору слід звертатися до ТОВ "КОМПАНІЯ АКСІЛІУМ" будь-яким із способів взаємодії за
                      контактними даними.
                    </p>
                  </div>

                  {/* Training and Qualification */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <BookOpen className="h-5 w-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">Навчання та підвищення кваліфікації</h3>
                    </div>
                    <p className="text-sm text-slate-300">
                      Положення про порядок організації та проведення навчання і підвищення кваліфікації
                    </p>
                  </div>

                  {/* Additional Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">Відокремлені підрозділи</h4>
                      <p className="text-sm text-slate-300">Відокремлені підрозділи відсутні.</p>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">Банкрутство та санація</h4>
                      <p className="text-sm text-slate-300">
                        Провадження у справі про банкрутство не порушувалося. Процедура санації не відкривалася.
                      </p>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">Ліквідація</h4>
                      <p className="text-sm text-slate-300">Не перебуває в процесі ліквідації.</p>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3">Структура власності</h4>
                      <p className="text-sm text-slate-300">
                        Схематичне зображення структури власності ТОВ "КОМПАНІЯ АКСІЛІУМ"
                      </p>
                    </div>
                  </div>

                  {/* Documents Links */}
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-400 mb-4">Документи та процедури</h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <Link
                            href="https://www.auxilium.company/_files/ugd/472e37_ef38bcd23fcd42f3bc477589ef9a92ff.doc?dn=%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D1%8F%20%D0%BF%D1%80%D0%BE%20%D0%BE%D0%B1%D1%80%D0%BE%D0%B1%D0%BA%D1%83%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D1%85%20%D0%B4%D0%B0%D0%BD%D0%B8%D1%85.doc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-slate-300 hover:text-orange-400 transition-colors"
                          >
                            <FileText className="h-4 w-4" />
                            <span>Положення про обробку персональних даних</span>
                          </Link>

                          <Link
                            href="https://www.auxilium.company/_files/ugd/472e37_151b73c1a5814b2c989855f7dce4b308.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-slate-300 hover:text-orange-400 transition-colors"
                          >
                            <FileText className="h-4 w-4" />
                            <span>Порядок взаємодії із споживачем</span>
                          </Link>

                          <Link
                            href="http://www.cc.eadr.com.ua/data/images/resume/resume_2024-05-07.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-slate-300 hover:text-orange-400 transition-colors"
                          >
                            <FileText className="h-4 w-4" />
                            <span>Перелік кредитодавців та нових кредиторів</span>
                          </Link>
                        </div>

                        <div className="space-y-3">
                          <Link
                            href="https://www.auxilium.company/_files/ugd/472e37_72ec25b07ec24169a27c800a7154e317.docx?dn=%D0%9F%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA_%D1%80%D0%BE%D0%B7%D0%B3%D0%BB%D1%8F%D0%B4%D1%83_%D0%B7%D0%B2%D0%B5%D1%80%D0%BD%D0%B5%D0%BD%D1%8C_%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D1%96%D1%97_%D0%90%D0%BA%D1%81%D1%96%D0%BB%D1%96%D1%83%D0%BC.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-slate-300 hover:text-orange-400 transition-colors"
                          >
                            <FileText className="h-4 w-4" />
                            <span>Порядок розгляду звернень</span>
                          </Link>

                          <Link
                            href="https://www.auxilium.company/_files/ugd/472e37_5e30fcca2a844b2fa8d64ec1522d155b.docx?dn=polozhennja.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-slate-300 hover:text-orange-400 transition-colors"
                          >
                            <FileText className="h-4 w-4" />
                            <span>Положення про навчання та підвищення кваліфікації</span>
                          </Link>

                          <Link
                            href="https://www.auxilium.company/_files/ugd/472e37_b7f0588fff2141ea90800d60487c5b7f.docx?dn=%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm text-slate-300 hover:text-orange-400 transition-colors"
                          >
                            <FileText className="h-4 w-4" />
                            <span>Схематичне зображення структури власності</span>
                          </Link>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-600">
                        <p className="text-xs text-slate-400">
                          Всі документи відкриваються в новому вікні. Для перегляду деяких документів може знадобитися
                          відповідне програмне забезпечення.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Documents Links */}
                </div>
              </div>
            )}

            <div className="mt-8 bg-slate-800/30 rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Дотримання законодавства</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Компанія Auxilium суворо дотримується всіх вимог українського законодавства у сфері споживчого
                кредитування та врегулювання заборгованості. Наша діяльність здійснюється відповідно до етичних норм та
                правових стандартів, встановлених законом. Ми гарантуємо повне дотримання всіх положень Статті 25 Закону
                України "Про споживче кредитування" у нашій роботі з клієнтами.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
