'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AosProvider() {
  useEffect(() => {
    AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true, offset: 80 })
  }, [])

  return null
}
