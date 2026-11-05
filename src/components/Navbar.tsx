import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react'
import { profileData } from '../data/portfolio'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  const activeLabel = navLinks.find((link) => link.id === activeSection)?.label || 'Home'

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 1. Page Header (NOT FIXED - scrolls away with the page content) */}
      <header className="absolute top-0 left-0 right-0 z-20 py-5 px-6 max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: BA Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#070a13]/40 backdrop-blur-xl hover:border-cyan/40 transition-all duration-300 group shadow-lg shadow-black/50"
          aria-label="Bavly Ashraf Homepage"
        >
          <span className="font-display text-base sm:text-lg font-black tracking-wider text-cyan transition-colors group-hover:text-cyan-bright">
            BA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
        </a>

        {/* Right: GitHub, LinkedIn & Resume (scrolls away with page) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/[0.08] bg-[#070a13]/40 backdrop-blur-xl shadow-lg shadow-black/80">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-full text-slate-400 hover:text-cyan hover:bg-white/[0.04] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-full text-slate-400 hover:text-cyan hover:bg-white/[0.04] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <a
            href="./Bavly-Ashraf-Resume.pdf?v=2"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-[400px]:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-cyan/40 bg-cyan/[0.08] backdrop-blur-xl font-mono text-xs font-semibold text-cyan hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_18px_rgba(6,182,212,0.35)] transition-all duration-300 shadow-lg shadow-black/80"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>
      </header>

      {/* 2. FIXED FLOATING PILL NAVIGATION (STAYS FIXED WITH YOU AS YOU SCROLL) */}
      <div className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
        {/* Desktop floating pill with enhanced glassmorphism (activates at >=860px to prevent collision with social icons) */}
        <nav className="hidden min-[860px]:flex items-center gap-0.5 sm:gap-1 p-1.5 rounded-full border border-white/[0.12] bg-[#070a13]/40 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 min-[960px]:px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-cyan-bright font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-cyan/20 border border-cyan/40 shadow-[0_0_16px_rgba(6,182,212,0.35)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Mobile & Tablet floating pill menu trigger (<860px keeps full clearance for GitHub & LinkedIn) */}
        <div className="min-[860px]:hidden flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-[#070a13]/45 backdrop-blur-2xl shadow-2xl shadow-black/90">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan"></span>
          </span>
          <span className="font-mono text-xs text-cyan-bright font-bold tracking-wider">
            {activeLabel}
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 rounded-full bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (from fixed floating trigger) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-16 z-50 bg-[#070a13]/70 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-2xl shadow-black/95 min-[860px]:hidden max-w-sm mx-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-mono text-sm py-2.5 px-3.5 rounded-2xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan/15 text-cyan-bright font-semibold border border-cyan/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_#22d3ee]"></span>
                    )}
                  </a>
                )
              })}
              <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="./Bavly-Ashraf-Resume.pdf?v=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-cyan/40 font-mono text-xs font-medium text-cyan hover:bg-cyan/10 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume (PDF)</span>
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan transition-colors p-1.5 rounded-full hover:bg-white/[0.05]"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan transition-colors p-1.5 rounded-full hover:bg-white/[0.05]"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
