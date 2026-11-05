import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileText, MapPin } from 'lucide-react'
import { profileData } from '../data/portfolio'

export const Hero: React.FC = () => {
  const coreStacks = ['React & Next.js', 'TypeScript', 'Redux Toolkit', 'REST & WebSockets']

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen flex-col items-center justify-between px-4 min-[360px]:px-6 text-center overflow-hidden pt-32 sm:pt-36 pb-12 bg-grid"
    >
      {/* Dynamic ambient neon glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-cyan/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[280px] bg-indigo/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center my-auto w-full"
      >
        {/* Availability & Location Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-cyan/40 bg-[#070a13] mb-6 shadow-lg shadow-cyan/5 max-w-full">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
          </span>
          <span className="font-mono text-[10px] sm:text-xs font-medium text-text-muted">
            Available for Engineering Roles
          </span>
          <span className="text-border-subtle hidden min-[360px]:inline">•</span>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-cyan-bright font-medium">
            <MapPin className="w-3 h-3 text-cyan shrink-0" />
            Cairo &amp; Remote
          </span>
        </div>

        {/* Clean Professional Eyebrow (No 01) */}
        <div className="font-mono text-xs text-text-dim tracking-widest uppercase mb-2">
          Software Engineer &amp; Frontend Architect
        </div>

        {/* Option B: Dual-Stacked Solid Architectural Typography */}
        <div className="flex flex-col items-center justify-center my-2 select-none tracking-tight font-display font-black w-full">
          <span className="text-[2.6rem] min-[360px]:text-5xl min-[420px]:text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] leading-[0.9] text-text-primary uppercase drop-shadow-[0_16px_36px_rgba(0,0,0,0.9)]">
            BAVLY
          </span>
          <span className="text-[2.6rem] min-[360px]:text-5xl min-[420px]:text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 uppercase drop-shadow-[0_16px_36px_rgba(0,0,0,0.9)]">
            ASHRAF<span className="text-cyan drop-shadow-[0_0_24px_rgba(34,211,238,0.8)]">.</span>
          </span>
        </div>

        {/* Professional Tagline */}
        <p className="mt-3 sm:mt-4 font-mono text-xs min-[360px]:text-sm sm:text-xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-bright via-cyan to-indigo-light">
          React • TypeScript • Next.js Architecture
        </p>

        {/* Refined Bio description without 60fps */}
        <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-xs min-[360px]:text-sm sm:text-base leading-relaxed text-text-muted font-light px-1">
          3+ years building high-performance web applications with React, TypeScript, and Next.js.
          Focused on scalable state architecture, component modularity, and seamless, responsive user experiences.
        </p>

        {/* Core Stack Mini-Chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {coreStacks.map((tech) => (
            <span
              key={tech}
              className="px-2.5 sm:px-3 py-1 rounded-md border border-white/10 bg-bg-surface/80 font-mono text-[11px] sm:text-xs text-text-muted hover:border-cyan/40 hover:text-cyan transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - NO scale transforms */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-bg-card text-text-muted hover:text-cyan hover:border-cyan/50 hover:shadow-[0_0_16px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-bg-card text-text-muted hover:text-cyan hover:border-cyan/50 hover:shadow-[0_0_16px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="./Bavly-Ashraf-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 h-10 sm:h-11 rounded-xl border border-cyan/40 bg-cyan/10 font-mono text-xs font-semibold text-cyan hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_18px_rgba(6,182,212,0.35)] transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Resume (PDF)</span>
          </a>
        </div>
      </motion.div>

      {/* Bottom Status Bar */}
      <div className="w-full max-w-5xl mx-auto mt-10 sm:mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-text-dim">
        <a
          href="#about"
          className="flex items-center gap-2 hover:text-cyan transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-cyan animate-bounce" />
        </a>

        <div className="text-center tracking-wider sm:tracking-widest uppercase text-[10px] sm:text-[11px] text-text-dim flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block animate-pulse shrink-0"></span>
          <span>BASED IN CAIRO, EGYPT • WORKING REMOTELY</span>
        </div>

        <a
          href="#contact"
          className="hover:text-cyan transition-colors flex items-center gap-1 text-cyan font-medium"
        >
          <span>LET'S CONNECT</span>
          <span className="text-xs">↗</span>
        </a>
      </div>
    </section>
  )
}
