import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Check, Sparkles, Layers, ArrowRight, Cpu } from 'lucide-react'
import { Project } from '../types/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (typeof document === 'undefined') return null

  const defaultArchitectureFlow = [
    { step: '01', title: 'Input Sketch', desc: 'Hand-drawn / digital strokes on HTML5 canvas' },
    { step: '02', title: 'Generator GAN', desc: 'Deep feature synthesis & latent encoding' },
    { step: '03', title: 'Discriminator', desc: 'Photorealistic adversarial loss feedback' },
    { step: '04', title: 'Real Portrait', desc: 'High-res realistic render with feature controls' },
  ]
  const currentFlow = project?.architectureFlow || defaultArchitectureFlow

  const modalContent = (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
          {/* Backdrop - renders above fixed header (z-50) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85"
            aria-hidden="true"
          />

          {/* Modal Dialog Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="relative w-full max-w-3xl bg-bg-secondary border border-cyan/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-cyan/20 p-4 sm:p-8 z-10 my-auto max-h-[92vh] overflow-y-auto"
          >
            {/* Close button with Esc hint */}
            <div className="absolute top-4 sm:top-5 right-4 sm:right-5 flex items-center gap-2">
              <span className="hidden sm:inline font-mono text-[10px] text-text-dim px-2 py-0.5 rounded border border-white/10 bg-white/5">
                ESC
              </span>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-xl text-text-muted hover:text-text-primary bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Header info */}
            <div className="pr-12 sm:pr-16">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-cyan/10 text-cyan-bright border border-cyan/30 mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>{project.category} • Architecture Spec</span>
              </div>
              <h3 id="modal-project-title" className="text-xl sm:text-3xl font-extrabold text-text-primary tracking-tight font-display break-words">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-bright/90 mt-1 sm:mt-1.5 font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Metrics & Honors Pill */}
            {project.metrics && (
              <div className="mt-4 p-3 sm:p-3.5 rounded-xl bg-bg-surface/90 border border-cyan/30 flex items-center gap-2.5 text-[11px] sm:text-xs font-mono text-cyan-bright">
                <Sparkles className="w-4 h-4 shrink-0 text-cyan" />
                <span>{project.metrics}</span>
              </div>
            )}

            {/* Architecture & System Flow */}
            <div className="mt-5 sm:mt-6 space-y-2">
              <h4 className="text-xs font-mono uppercase text-cyan font-bold tracking-wider flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>System Architecture &amp; Client-Inference Pipeline</span>
              </h4>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-light">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Reconstruction / Architecture Schematic */}
            <div className="mt-5 sm:mt-6 p-3.5 sm:p-5 rounded-2xl border border-white/10 bg-bg-surface/80">
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-text-dim mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block"></span>
                  <span className="text-cyan-bright font-medium">{project.pipelineTitle || 'Architecture Flow'}</span>
                </div>
                <span className="text-[10px] text-text-dim">{project.pipelineSubtitle || 'End-to-End Pipeline'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {currentFlow.map((item, idx) => (
                  <div
                    key={item.step}
                    className="p-2.5 sm:p-3 rounded-xl border border-white/5 bg-bg-card/90 flex flex-col justify-between relative group hover:border-cyan/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-cyan font-bold">{item.step}</span>
                      {idx < currentFlow.length - 1 && <ArrowRight className="w-3 h-3 text-text-dim sm:inline hidden" />}
                    </div>
                    <div className="text-xs font-semibold text-text-primary">{item.title}</div>
                    <div className="text-[10px] sm:text-[11px] text-text-dim font-light mt-0.5 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Highlights & Deliverables */}
            <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
              <h4 className="text-xs font-mono uppercase text-cyan font-bold tracking-wider">
                Key Engineering Highlights &amp; Deliverables
              </h4>
              <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-text-muted p-2 rounded-lg bg-bg-surface/50 border border-white/5">
                    <div className="p-0.5 rounded-full bg-cyan/15 text-cyan shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Frameworks */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase text-cyan font-bold tracking-wider mb-2 sm:mb-2.5">
                Technologies &amp; Frameworks
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-bg-surface border border-white/10 text-text-muted hover:border-cyan/40 hover:text-cyan transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-text-primary hover:text-cyan transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>{project.githubBackendUrl ? 'Frontend Code' : 'View Repository'}</span>
                  </a>
                )}
                {project.githubBackendUrl && (
                  <a
                    href={project.githubBackendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-text-primary hover:text-cyan transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Backend Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-cyan text-bg-primary text-xs font-mono font-semibold hover:bg-cyan-bright transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-3 py-1.5 text-xs font-mono text-text-muted hover:text-text-primary transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
