import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Sparkles, Cpu, ArrowUpRight, Layers, ExternalLink } from 'lucide-react'
import { projectsData } from '../data/portfolio'
import { ProjectModal } from './ProjectModal'
import { Project } from '../types/portfolio'

export const Projects: React.FC = () => {
  const featuredProjects = [
    projectsData.find((p) => p.id === 'doit-todolist')!,
    projectsData.find((p) => p.id === 'facetcher')!,
  ].filter(Boolean)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-bright to-indigo-light">Projects</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-mono text-text-dim max-w-md mx-auto">
            Full-stack cloud applications and deep-learning system architectures.
          </p>
        </motion.div>

        {/* Project Cards List */}
        <div className="space-y-8 sm:space-y-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-bg-card p-4 min-[360px]:p-6 sm:p-8 transition-all duration-300 hover:border-cyan/40 hover:shadow-2xl hover:shadow-cyan/10 overflow-hidden"
            >
              {/* Subtle ambient card glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan/15 transition-all duration-500" />

              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-4">
                <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 font-mono text-[11px] sm:text-xs text-cyan-bright font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{project.badgeText || project.category}</span>
                </span>

                {project.metrics && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-indigo/30 bg-indigo/10 text-[11px] sm:text-xs font-mono text-indigo-light">
                    <span>{project.metrics}</span>
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="mb-4">
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-xl sm:text-3xl font-extrabold text-text-primary group-hover:text-cyan-bright transition-colors cursor-pointer tracking-tight inline-flex items-center gap-2"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-cyan opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-x-0.5" />
                </h3>
                <p className="text-xs sm:text-sm font-medium text-cyan-bright/90 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Concise Summary on the page */}
              <p className="text-xs sm:text-base leading-relaxed text-text-muted font-light mb-5 sm:mb-6">
                {project.description}
              </p>

              {/* Core Tech Stack Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mb-6 sm:mb-7">
                {project.technologies.slice(0, 6).map((tech) => (
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
                <div className="flex flex-wrap items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-bg-surface font-mono text-xs text-text-muted hover:text-cyan hover:border-cyan/40 transition-all"
                      aria-label={`${project.title} Frontend GitHub Repository`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{project.githubBackendUrl ? 'Frontend Code' : 'Source Code'}</span>
                    </a>
                  )}

                  {project.githubBackendUrl && (
                    <a
                      href={project.githubBackendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-bg-surface font-mono text-xs text-text-muted hover:text-cyan hover:border-cyan/40 transition-all"
                      aria-label={`${project.title} Backend GitHub Repository`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Backend Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-cyan/30 bg-cyan/10 font-mono text-xs text-cyan-bright hover:bg-cyan/20 transition-all"
                      aria-label={`${project.title} Live Application Preview`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-cyan/15 hover:bg-cyan/25 border border-cyan/40 hover:border-cyan text-cyan-bright font-mono text-xs font-semibold hover:shadow-[0_0_16px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  <Layers className="w-3.5 h-3.5 text-cyan" />
                  <span>Explore Architecture &amp; Full Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal renders all details via React Portal over the header */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
