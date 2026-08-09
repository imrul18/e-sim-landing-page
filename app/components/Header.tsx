'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Packages', href: '#pakker' },
  { label: 'Process', href: '#prossessen' },
  { label: 'About us', href: '#about-us' },
  { label: 'Contact us', href: '#contact' },
]

const HEADER_OFFSET = 100 // px to leave visible above the target section

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const target = document.getElementById(targetId)

    if (target) {
      const top =
        target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
      window.scrollTo({ top, behavior: 'smooth' })
      // keep the URL hash in sync without jumping
      window.history.pushState(null, '', href)
    }

    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed  top-5 rounded-full left-0 right-0 border border-primary/10 container mx-auto z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-black/50 max-w-6xl backdrop-blur-md shadow-md py-4 border-[1px] border-primary/40'
          : ' py-5 bg-black/50 backdrop-blur-sm shadow-sm '
      }`}
    >
      <div className=" mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-bold tracking-tight transition-all duration-300 ${
            scrolled ? 'text-lg' : 'text-xl'
          } text-primary flex items-center gap-2`}
        >
          AnonymtNorskNr
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[15px] font-medium text-white/50 hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://anonymtnorsknr.no/ordrer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
          >
            Order status
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4 px-4 pb-4 bg-black/60 backdrop-blur-md rounded-b-2xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://anonymtnorsknr.no/ordrer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
          >
            Order status
          </a>
        </nav>
      </div>
    </header>
  )
}