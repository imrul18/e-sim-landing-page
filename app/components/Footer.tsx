import React from 'react'
import { Globe, Mail, ShieldCheck } from 'lucide-react'

const links = [
    { label: 'About us', href: '#about-us' },
    { label: 'How it works', href: '#prossessen' },
    { label: 'Contact us', href: '#kontakt' },
]

export default function Footer() {
    return (
        <div className='bg-white'>
            <footer className="relative rounded-t-4xl container mx-auto w-full bg-[#0c1120] pt-16 sm:pt-20 overflow-hidden">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-primary/10 blur-3xl" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 pb-14">
                        {/* Brand */}
                        <div className="flex flex-col gap-4 lg:pr-8">
                            <div className="flex items-center gap-2 text-xl font-bold text-white">
                                <ShieldCheck size={22} className="text-primary" strokeWidth={2} />
                                AnonymtNorskNr
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                                For those who prioritize privacy first.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                                Links
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                                Contact
                            </h4>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-2.5 text-sm text-gray-400">
                                    <Globe size={16} className="text-primary shrink-0" />
                                    anonymtnorsknr.com
                                </li>
                                <li>
                                    <a
                                        href="mailto:support@anonymtnorsknr.com"
                                        className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                    >
                                        <Mail size={16} className="text-primary shrink-0" />
                                        support@anonymtnorsknr.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/[0.06]" />

                    {/* Bottom bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
                        <p className="text-xs text-gray-500 text-center sm:text-left">
                            © 2026 AnonymtNorskNr.com • All rights reserved
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                            <ShieldCheck size={14} className="text-primary" />
                            No IP stored • No cookies • 100% anonymous
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}