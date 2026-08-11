import React from 'react'
import { Mail, Globe, MessageCircleMore, ShieldCheck } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@anonymtnorsknr.com',
    href: 'mailto:support@anonymtnorsknr.com',
    borderColor: 'bg-emerald-400',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'anonymtnorsknr.com',
    href: '#contact',
    borderColor: 'bg-[#ff8904]',
  },
  {
    icon: MessageCircleMore,
    label: 'Order status',
    value: 'Track your order',
    href: '#contact',
    borderColor: 'bg-sky-400',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#090b0f] py-20 sm:py-28 overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-center text-center gap-4 mb-14"
        >
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary">
            Contact us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Questions? We&apos;re here to help
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl leading-relaxed">
            No account, no login, no personal data required. Reach out
            through any of the channels below — we usually reply within a
            few hours.
          </p>
        </div>

        {/* Contact method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  method.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative rounded-[20px] p-[3px] overflow-hidden block"
              >
                {/* Animated spinning border - solid color masked into a rotating arc */}
                <div
                  className={`absolute -inset-1/2 animate-spin [animation-duration:6s] ${method.borderColor}`}
                  style={{
                    maskImage:
                      'conic-gradient(from 0deg, transparent 0%, black 15%, transparent 60%)',
                    WebkitMaskImage:
                      'conic-gradient(from 0deg, transparent 0%, black 15%, transparent 60%)',
                  }}
                />

                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center text-center gap-3 rounded-[18px] bg-background border border-border px-6 py-8 h-full shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] group-hover:-translate-y-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-muted uppercase tracking-wide">
                      {method.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground break-all">
                      {method.value}
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Privacy note */}
        <div
          data-aos="fade-up"
          className="flex items-start justify-center gap-2 mt-10"
        >
          <ShieldCheck size={16} className="text-primary shrink-0" />
          <p className="text-xs sm:text-sm text-muted text-center">
            All conversations are handled without storing your IP or
            personal identity.
          </p>
        </div>
      </div>
    </section>
  )
}