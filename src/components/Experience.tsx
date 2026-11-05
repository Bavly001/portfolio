import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experiencesData } from '../data/portfolio'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5 font-mono text-xs text-cyan mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-bright to-indigo-light">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 border-l border-cyan/30 space-y-10 ml-2 sm:ml-4">
          {experiencesData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-bg-primary border-2 border-cyan group-hover:scale-125 group-hover:border-cyan-bright group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-white/5 bg-bg-card p-6 sm:p-7 transition-all duration-300 hover:border-cyan/40 hover:shadow-xl hover:shadow-cyan/5">
                {/* Header: Company & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="text-lg font-bold text-text-primary flex flex-wrap items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-xs text-text-dim font-normal hidden sm:inline">•</span>
                    <span className="text-sm font-semibold text-cyan font-mono hidden sm:inline">{exp.role}</span>
                  </h3>
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-bright font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyan" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Subtitle: Role on mobile + Location & Type */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-text-dim mb-4">
                  <span className="sm:hidden font-semibold text-cyan block">{exp.role} •</span>
                  {exp.companyTagline && (
                    <>
                      <span>{exp.companyTagline}</span>
                      <span>•</span>
                    </>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan" />
                    {exp.location}
                  </span>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="relative pl-4 text-xs sm:text-sm leading-relaxed text-text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan"
                    >
                      <strong className="text-text-primary font-medium">{highlight.title}: </strong>
                      {highlight.description}
                    </li>
                  ))}
                </ul>

                {/* Stack Tags */}
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {exp.skills.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-bg-surface px-2.5 py-1 font-mono text-[11px] text-text-muted hover:border-cyan/40 hover:text-cyan transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
