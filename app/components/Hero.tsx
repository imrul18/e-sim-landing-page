import React from 'react'
import Image from 'next/image'
import { HatGlassesIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero_banner.png"
        alt="AnonymtNorskNr"
        fill
        priority
        className="object-cover object-center"
      />


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />

      {/* Content */}
      <div data-aos="fade-up" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <span data-aos="fade-down" data-aos-delay="100" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-white">
          <HatGlassesIcon className="text-primary" /> 100% anonymous • No IP • No data stored
        </span>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          Buy your Norwegian
          <br className="hidden sm:block" /> sim-card without traces
        </h1>

        <p data-aos="fade-up" data-aos-delay="300" className="text-base sm:text-lg text-gray-200 max-w-xl">
          Register with your name or unlimited data within 60 minutes
        </p>

        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 mt-2">
          {/* Primary button - animated spinning border */}
          <a
            href="#pakker"
            className="relative inline-flex items-center justify-center rounded-full p-[2px] overflow-hidden group"
          >
            <span className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0%,theme(colors.primary)_25%,transparent_50%)]" />
            <span className="relative z-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white group-hover:opacity-90 transition-opacity duration-200 w-full h-full">
              See packages
            </span>
          </a>

          {/* Secondary button - animated spinning border */}
          <a
            href="#prossessen"
            className="relative inline-flex items-center justify-center rounded-full p-[2px] overflow-hidden group"
          >
            <span className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0%,rgba(255,255,255,0.9)_25%,transparent_50%)]" />
            <span className="relative z-10 inline-flex items-center justify-center rounded-full bg-black border border-[#ffffff3d] backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white group-hover:bg-black/80 transition-colors duration-200 w-full h-full">
              See how it works
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes border-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
      `}</style>
    </section>
  )
}