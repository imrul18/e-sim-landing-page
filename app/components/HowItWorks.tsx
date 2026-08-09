import React from 'react'
import {
  CreditCard,
  ClipboardList,
  ShieldCheck,
  Smartphone,
  EyeOff,
  UserX,
  Clock,
  Trash2,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: CreditCard,
    title: 'You buy the prepaid card',
    description:
      'Buy a regular MyCall or other Norwegian prepaid card from 7-Eleven, Narvesen, kiosks or post office. Pay with cash. This is your physical sim-card.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'You order registration with us',
    description:
      'Fill in phone number + 3 last digits of the sim-card. Choose package. Pay with Paysafecard or cryptocurrency.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'We register',
    description:
      'Within 60 minutes the sim-card is registered with the name you chose (or anonymously). You get a unique order-ID + encrypted link.',
  },
  {
    number: '04',
    icon: Smartphone,
    title: 'You use it',
    description:
      'Your sim-card works immediately. No IP is stored with us.',
  },
]

const dontDo = [
  { icon: EyeOff, text: 'We store no IP address' },
  {
    icon: UserX,
    text: 'We store no personal information beyond what you yourself provide',
  },
  {
    icon: Clock,
    text: 'The order is visible on the website for 24 hours, after which it is automatically deleted',
  },
  {
    icon: Trash2,
    text: 'You can click "Delete me now" to remove all order data immediately',
  },
]

export default function Process() {
  return (
    <section id="prossessen" className="relative w-full bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div data-aos="fade-up" className="max-w-2xl mx-auto text-center flex flex-col items-center gap-4 mb-16 sm:mb-20">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2b49] tracking-tight leading-tight">
            This is how it works
          </h2>
        </div>

        {/* Steps - alternating vertical timeline */}
        <div className="relative mb-20 max-w-3xl mx-auto lg:max-w-4xl">
          <div className="relative flex flex-col gap-16 sm:gap-20">
            {/* Connecting line - center on desktop, left on mobile */}
            <div className="absolute top-7 bottom-7 left-7 sm:left-1/2 sm:-translate-x-1/2 w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />

            {steps.map((step, index) => {
              const Icon = step.icon
              const isOdd = index % 2 === 0 // step 1,3 = left ; step 2,4 = right

              return (
                <div
                  key={step.number}
                  data-aos={isOdd ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                  className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6"
                >
                  {/* Left column */}
                  <div
                    className={`hidden sm:flex flex-col gap-2 ${
                      isOdd ? 'items-end text-right' : 'invisible'
                    }`}
                  >
                    {isOdd && (
                      <>
                        <span className="text-xs font-semibold text-primary tracking-widest">
                          STEP {step.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-[#1a2b49] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-sm ml-auto">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Center icon node */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-[0_4px_16px_rgba(26,43,73,0.15)] ring-8 ring-white shrink-0 mx-auto sm:mx-0">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  {/* Right column */}
                  <div
                    className={`hidden sm:flex flex-col gap-2 ${
                      !isOdd ? 'items-start text-left' : 'invisible'
                    }`}
                  >
                    {!isOdd && (
                      <>
                        <span className="text-xs font-semibold text-primary tracking-widest">
                          STEP {step.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-[#1a2b49] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Mobile content - always below icon, single column */}
                  <div className="flex sm:hidden flex-col gap-2 -mt-2">
                    <span className="text-xs font-semibold text-primary tracking-widest">
                      STEP {step.number}
                    </span>
                    <h3 className="text-base font-semibold text-[#1a2b49] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* What we do not do */}
        <div data-aos="fade-up" className="relative rounded-[24px] bg-[#1a2b49] p-8 sm:p-10 lg:p-12 overflow-hidden">
          {/* Decorative blur */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              What we do not do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dontDo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={item.text} data-aos="fade-up" data-aos-delay={index * 100} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-primary shrink-0">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
