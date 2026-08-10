import React from 'react'
import { EyeOff, Clock, Lock, HatGlassesIcon } from 'lucide-react'

const features = [
  {
    icon: HatGlassesIcon,
    title: '100% anonymous',
    description: 'No IP stored, no cookies beyond necessary.',
    borderColor: 'bg-emerald-400',
  },
  {
    icon: Clock,
    title: '60 minutes',
    description: 'Registration completed within 60 minutes after payment.',
    borderColor: 'bg-[#ff8904]',
  },
  {
    icon: Lock,
    title: 'Encrypted',
    description:
      'Order details are encrypted with private key – delete button to delete everything.',
    borderColor: 'bg-sky-400',
  },
]

export default function Aboutus() {
  return (
    <section
      id="about-us"
      className="relative w-full bg-[#090b0f] py-20 sm:py-32 overflow-hidden"
    >
      {/* Decorative shapes - rounded & blurred */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 sm:w-[20rem] sm:h-[20rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 sm:w-[20rem] sm:h-[20rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + intro text */}
        <div data-aos="fade-up" className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary">
            About us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Privacy first, always
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
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
                className="group relative rounded-[24px] p-[3px] overflow-hidden"
              >
                {/* Animated spinning border - solid color masked into a rotating arc */}
                <div
                  className={`absolute -inset-1/2 animate-spin [animation-duration:6s] ${feature.borderColor}`}
                  style={{
                    maskImage:
                      'conic-gradient(from 0deg, transparent 0%, black 15%, transparent 60%)',
                    WebkitMaskImage:
                      'conic-gradient(from 0deg, transparent 0%, black 15%, transparent 60%)',
                  }}
                />

                {/* Card content */}
                <div className="relative z-10 flex flex-col items-start gap-4 rounded-[22px] bg-card p-8 h-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] border border-border transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] group-hover:-translate-y-1">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}