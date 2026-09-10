"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const VISITED_KEY = "mjr-portfolio-intro-seen"

export default function IntroSplash() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hasSeenIntro = window.localStorage.getItem(VISITED_KEY)
    if (hasSeenIntro) return

    window.localStorage.setItem(VISITED_KEY, "true")
    setVisible(true)

    const timeout = window.setTimeout(() => setVisible(false), 2600)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.15, duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#172B3D] text-white"
      aria-label="Mohammad Jose Rizal portfolio"
    >
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#5F86AE]"
        >
          Portfolio / 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28, letterSpacing: "0.08em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-5xl font-bold leading-[0.95] sm:text-7xl md:text-8xl"
        >
          Mohammad Jose Rizal
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="mx-auto mt-8 h-px w-24 origin-center bg-[#5F86AE]"
        />
      </div>
    </motion.div>
  )
}
