import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Sparkles, Cpu, ArrowUpRight, Layers } from 'lucide-react'
import { projectsData } from '../data/portfolio'
import { ProjectModal } from './ProjectModal'

export const Projects: React.FC = () => {
  const facetcherProject = projectsData.find((p) => p.id === 'facetcher') || projectsData[0]
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="projects" className="relative z-10 py-20 sm:py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-4xl px-4 min-[360px]:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5 font-mono text-xs text-cyan mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-bright to-indigo-light">Project</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-mono text-text-dim max-w-md mx-auto">
            Interactive deep-learning system architecture and client engineering.
          </p>
        </motion.div>

        {/* Streamlined Project Card: Clean, high-impact & minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-bg-card p-4 min-[360px]:p-6 sm:p-8 transition-all duration-300 hover:border-cyan/40 hover:shadow-2xl hover:shadow-cyan/10 overflow-hidden"
        >
          {/* Subtle ambient card glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan/15 transition-all duration-500" />

          {/* Top metadata row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-4">
            <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 font-mono text-[11px] sm:text-xs text-cyan-bright font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Graduation Project • AI Deep Learning</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-indigo/30 bg-indigo/10 text-[11px] sm:text-xs font-mono text-indigo-light">
              <span>{facetcherProject.metrics}</span>
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="mb-4">
            <h3
              onClick={() => setShowModal(true)}
              className="text-xl sm:text-3xl font-extrabold text-text-primary group-hover:text-cyan-bright transition-colors cursor-pointer tracking-tight inline-flex items-center gap-2"
            >
              <span>{facetcherProject.title}</span>
              <ArrowUpRight className="w-5 h-5 text-cyan opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-x-0.5" />
            </h3>
            <p className="text-xs sm:text-sm font-medium text-cyan-bright/90 mt-1">
              {facetcherProject.tagline}
            </p>
          </div>

          {/* Concise Summary on the page */}
          <p className="text-xs sm:text-base leading-relaxed text-text-muted font-light mb-5 sm:mb-6">
            Interactive canvas platform translating user-drawn facial sketches into photorealistic human portraits via deep neural networks. Features responsive canvas stroke smoothing, real-time PyTorch inference synchronization, and high-fidelity rendering.
          </p>

          {/* Core Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6 sm:mb-7">
            {facetcherProject.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/5 bg-bg-surface px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[11px] sm:text-xs text-text-muted group-hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
            <span className="rounded-md border border-cyan/20 bg-cyan/5 px-2 py-0.5 sm:py-1 font-mono text-[10px] sm:text-[11px] text-cyan">
              + Architecture Flow
            </span>
          </div>

          {/* Action Footer */}
          <div className="pt-4 sm:pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
            <a
              href={facetcherProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-white/10 bg-bg-surface font-mono text-xs text-text-muted hover:text-cyan hover:border-cyan/40 transition-all"
              aria-label="Facetcher GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-cyan/15 hover:bg-cyan/25 border border-cyan/40 hover:border-cyan text-cyan-bright font-mono text-xs font-semibold hover:shadow-[0_0_16px_rgba(6,182,212,0.3)] transition-all duration-300"
            >
              <Layers className="w-3.5 h-3.5 text-cyan" />
              <span>Explore Architecture &amp; Full Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal renders all details via React Portal over the header */}
      <ProjectModal
        project={showModal ? facetcherProject : null}
        onClose={() => setShowModal(false)}
      />
    </section>
  )
}
