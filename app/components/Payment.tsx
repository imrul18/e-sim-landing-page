import React from 'react'
import { Gift, Bitcoin, BadgeCheck } from 'lucide-react'

const paymentMethods = [
    {
        icon: Gift,
        iconBg: 'bg-emerald-500/15',
        iconColor: 'text-emerald-400',
        title: 'Paysafecard',
        description: 'Buy code at the kiosk and pay there',
    },
    {
        icon: Bitcoin,
        iconBg: 'bg-amber-500/15',
        iconColor: 'text-amber-400',
        title: 'Cryptocurrency',
        description: 'BTC, ETH, USDT etc.',
    },
]

export default function Payment() {
    return (
        <section className="relative w-full py-20 sm:py-28">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex items-center justify-center mb-10'>
                    <BadgeCheck className='text-primary' size={50} strokeWidth={2} />
                </div>
                {/* Heading */}
                <h2
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fff] text-center tracking-tight mb-12 sm:mb-16"
                >
                    Payment
                </h2>

                {/* Payment method cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
                    {paymentMethods.map((method, index) => {
                        const Icon = method.icon
                        return (
                            <div
                                key={method.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="group relative rounded-[20px] p-[3px] overflow-hidden"
                            >
                                {/* Animated spinning border - solid bg-primary masked into a rotating arc */}
                                <div
                                    className={`absolute -inset-1/2 animate-spin [animation-duration:6s] ${index === 0 ? 'bg-emerald-400' : 'bg-[#ff8904]'
                                        }`}
                                    style={{
                                        maskImage:
                                            'conic-gradient(from 0deg, transparent 0%, black 15%, transparent 60%)',
                                        WebkitMaskImage:
                                            'conic-gradient(from 0deg, transparent 0%, black 15%, transparent 60%)',
                                    }}
                                />

                                {/* Card content */}
                                <div className="relative z-10 flex flex-col items-center text-center gap-4 rounded-[18px] bg-[#1a2c49] px-6 py-10 h-full transition-all duration-300 group-hover:-translate-y-1">
                                    <div
                                        className={`flex items-center justify-center w-14 h-14 rounded-full ${method.iconBg} ${method.iconColor} transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <Icon size={26} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        {method.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {method.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Disclaimer */}
                <p
                    data-aos="fade-up"
                    className="text-center text-xs sm:text-sm text-gray-500 leading-relaxed"
                >
                    All payments are made without account or email. You never need to
                    log in.
                </p>
            </div>
        </section>
    )
}