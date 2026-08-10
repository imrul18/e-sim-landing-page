'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Packages', href: '#pakker' },
  { label: 'Process', href: '#prossessen' },
  { label: 'About us', href: '#about-us' },
  { label: 'Contact us', href: '#contact' },
]

const HEADER_OFFSET = 100 // px to leave visible above the target section

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-spy: watch each section and mark the active one
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

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
      window.history.pushState(null, '', href)
      setActiveSection(targetId)
    }

    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-5 rounded-full left-0 right-0 container mx-auto z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[#1a2c49e8] max-w-6xl backdrop-blur-md shadow-md py-2'
          : ' py-3 bg-[#1a2c49e8] backdrop-blur-sm shadow-sm '
      }`}
    >
      <div className="mx-auto px-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className={`font-bold tracking-tight transition-all duration-300 ${
            scrolled ? 'text-lg' : 'text-xl'
          } text-primary flex items-center gap-2`}
        >
          <Image
            src="/header_logo-removebg-preview.png"
            alt="AnonymtNorskNr"
            width={150}
            height={100}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems
            .filter((item) => item.label)
            .map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-white/80 hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
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
          className="md:hidden text-white z-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full mt-3 transition-all duration-300 ease-in-out origin-top ${
            mobileOpen
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-4 px-5 py-6 bg-[#1a2c49] backdrop-blur-md rounded-2xl shadow-lg">
            {navItems
              .filter((item) => item.label)
              .map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-white/70 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
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
      </div>
    </header>
  )
}