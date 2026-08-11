import React from 'react'
import { Check, Crown, Sparkles } from 'lucide-react'

const packages = [
  {
    accent: 'text-orange-400',
    accentBg: 'bg-orange-400',
    name: 'Only register sim-card',
    price: '299',
    features: [
      'Registered registration with optional name/company',
      'Address visible on 1881/yp (optional)',
      'Unlimited plan (call/surf as you want)',
    ],
  },
  {
    accent: 'text-primary',
    accentBg: 'bg-primary',
    name: 'Registration + Unlimited plan',
    price: '499',
    features: [
      'Everything in Package 1 + unlimited data/calling',
      '100 GB fast speed (3 Mbit after)',
    ],
  },
]

// Reusable wavy divider that caps the colored "Buy now" section
function WaveCap({ colorClass }: { colorClass: string }) {
  return (
    <svg
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      className={`w-full h-5 ${colorClass}`}
    >
      <path
        d="M0,10 C10,0 30,0 40,10 C50,20 70,20 80,10 C90,0 110,0 120,10 C130,20 150,20 160,10 C170,0 190,0 200,10 C210,20 230,20 240,10 C250,0 270,0 280,10 C290,20 310,20 320,10 C330,0 350,0 360,10 C370,20 390,20 400,10 L400,20 L0,20 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Packages() {
  return (
    <section id="pakker" className="relative w-full py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex items-center justify-center mb-5'>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary">
            Pricing
          </span>
        </div>
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-2xl mx-auto text-center flex flex-col items-center gap-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Our packages
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Choose the one that suits you best
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="h-full"
            >
              <div className="relative flex flex-col h-full rounded-3xl bg-card border border-border shadow-[0_5px_50px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out transform-gpu will-change-transform hover:scale-105">
                {/* Dark top content */}
                <div className="flex flex-col items-center text-center px-8 pt-10 pb-8 flex-1">

                  <span className="absolute -top-4 inline-flex items-center gap-2 rounded-full bg-primary backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-white">
                    {!pkg.name.includes('Unlimited') ? (
                      <span className="flex items-center gap-2">
                        <Sparkles size={16} /> Populer
                      </span>
                    ) : (
                      <Crown />
                    )}
                  </span>

                  <h3 className={`text-2xl my-10 font-bold ${pkg.accent}`}>
                    {pkg.name}
                  </h3>

                  <div className="flex items-start justify-center gap-1 mb-8">
                    <span className={`text-4xl sm:text-6xl font-extrabold mt-1 ${pkg.accent}`}>
                      {pkg.price}
                    </span>
                    <span className="text-base font-medium text-muted self-end mb-1">
                      kr
                    </span>
                  </div>

                  <ul className="flex flex-col gap-4 w-full text-left">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          size={16}
                          strokeWidth={3}
                          className="text-emerald-400 shrink-0 mt-0.5"
                        />
                        <span className="text-sm font-medium text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative rounded-b-3xl overflow-hidden mt-auto">
                  <WaveCap colorClass={pkg.accent} />
                  <a
                    href="#contact"
                    className={`-mt-px flex items-center justify-center py-5 text-sm font-bold uppercase tracking-wide text-white ${pkg.accentBg} transition-opacity duration-200`}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}
