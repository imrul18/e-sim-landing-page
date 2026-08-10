import React from 'react'
import { Mail, Globe, MessageCircleMore, ShieldCheck } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@anonymtnorsknr.com',
    href: 'mailto:support@anonymtnorsknr.com',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'anonymtnorsknr.com',
    href: 'https://anonymtnorsknr.com',
  },
  {
    icon: MessageCircleMore,
    label: 'Order status',
    value: 'Track your order',
    href: 'https://anonymtnorsknr.no/ordrer',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#faf9fc] py-20 sm:py-28 overflow-hidden"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2b49] tracking-tight leading-tight">
            Questions? We&apos;re here to help
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
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
                className="group flex flex-col items-center text-center gap-3 rounded-[20px] bg-[#faf9fc] border border-black/[0.04] px-6 py-8 shadow-[0_4px_24px_rgba(26,43,73,0.06)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(26,43,73,0.1)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {method.label}
                  </span>
                  <span className="text-sm font-semibold text-[#1a2b49] break-all">
                    {method.value}
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* Privacy note */}
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-2 mt-10"
        >
          <ShieldCheck size={16} className="text-primary shrink-0" />
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            All conversations are handled without storing your IP or
            personal identity.
          </p>
        </div>
      </div>
    </section>
  )
}