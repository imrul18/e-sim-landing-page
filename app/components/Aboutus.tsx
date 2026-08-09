import React from 'react'
import { EyeOff, Clock, Lock, HatGlassesIcon } from 'lucide-react'

const features = [
  {
    icon: HatGlassesIcon,
    title: '100% anonymous',
    description: 'No IP stored, no cookies beyond necessary.',
  },
  {
    icon: Clock,
    title: '60 minutes',
    description: 'Registration completed within 60 minutes after payment.',
  },
  {
    icon: Lock,
    title: 'Encrypted',
    description:
      'Order details are encrypted with private key – delete button to delete everything.',
  },
]

export default function Aboutus() {
  return (
    <section
      id="about-us"
      className="relative w-full bg-[#faf9fc] py-20 sm:py-32 overflow-hidden"
    >
      {/* Decorative shapes - rounded & blurred */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 sm:w-[20rem] sm:h-[20rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 sm:w-[20rem] sm:h-[20rem] rounded-full bg-primary/20 blur-3xl" />
      {/* <div className="pointer-events-none absolute top-14 right-10 sm:right-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/15 blur-2xl hidden sm:block" />
      <div className="pointer-events-none absolute bottom-20 left-10 sm:left-24 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-primary/15 blur-2xl hidden sm:block" /> */}
 
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + intro text */}
        <div data-aos="fade-up" className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary">
            About us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2b49] tracking-tight leading-tight">
            Privacy first, always
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            We sell anonymous Norwegian sim-cards for those who value privacy
            highly. You buy the physical prepaid card (7-Eleven, Narvesen,
            kiosks), we register it with the name you choose (or anonymously)
            and you get data/voice minutes immediately.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative flex flex-col items-start gap-4 rounded-[24px] bg-white p-8 shadow-[0_4px_24px_rgba(26,43,73,0.06)] border border-black/[0.03] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(26,43,73,0.1)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-[#1a2b49]">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
