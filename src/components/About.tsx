import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GraduationCap, Award, Code2, Layers } from 'lucide-react'
import { educationData, certificationsData, skillCategoriesData } from '../data/portfolio'

export const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-20 sm:py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 min-[360px]:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5 font-mono text-xs text-cyan mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Profile &amp; Architecture</span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-bright to-indigo-light">Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 items-start">
          {/* Left Column: Bio, Education, Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 sm:space-y-6"
          >
            <div className="rounded-2xl border border-white/5 bg-bg-card p-4 min-[360px]:p-6 sm:p-7 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan inline-block"></span>
                <span>Bio</span>
              </h3>
              <p className="leading-relaxed text-text-muted text-sm sm:text-base font-light">
                I am a Software Engineer with 3+ years of professional experience crafting high-performance, responsive web and mobile interfaces using <strong className="text-text-primary font-medium">React, TypeScript, Next.js</strong>, and <strong className="text-text-primary font-medium">React Native</strong>.
              </p>
              <p className="leading-relaxed text-text-muted text-sm sm:text-base font-light">
                My work spans automated clinical workflow platforms (Dexi), high-concurrency esports tournament platforms (PREEZY / GamerG), and enterprise healthcare portals (Exabyte LLC). I bridge pixel-perfection with robust frontend systems—enforcing strict TypeScript schemas, predictable Redux state lifecycles, and fast, responsive rendering across heterogeneous client devices.
              </p>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl border border-white/5 bg-bg-card p-4 min-[360px]:p-6 transition-all duration-300 hover:border-cyan/30">
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1.5 mb-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-cyan font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan" />
                  <span>Education</span>
                </h3>
                <span className="self-start min-[380px]:self-auto px-2.5 py-0.5 rounded-full border border-cyan/40 bg-cyan/10 font-mono text-[11px] text-cyan-bright font-medium">
                  GPA {educationData.gpa} ({educationData.honors})
                </span>
              </div>
              <p className="font-semibold text-text-primary text-base">
                {educationData.degree}
              </p>
              <p className="text-sm text-text-muted mt-0.5">
                {educationData.institution} • {educationData.period}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5">
                <span className="text-xs font-mono text-cyan-bright font-medium">Graduation Project: </span>
                <span className="text-xs text-text-muted">
                  {educationData.graduationProject.name} — {educationData.graduationProject.description}
                </span>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="rounded-2xl border border-white/5 bg-bg-card p-4 min-[360px]:p-6 transition-all duration-300 hover:border-indigo/30">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-light font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-light" />
                <span>Certifications</span>
              </h3>
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="space-y-1">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-primary hover:text-cyan transition-colors group"
                  >
                    <span>{cert.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                  <p className="text-xs text-text-muted">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Categorized Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 px-1 mb-1">
              <Layers className="w-4 h-4 text-cyan" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                Categorized Core Competencies
              </h3>
            </div>

            {skillCategoriesData.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-white/5 bg-bg-card p-4 min-[360px]:p-5 transition-all duration-300 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/5"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-cyan">
                    {category.title}
                  </h4>
                  <span className="text-[11px] font-mono text-text-dim">
                    {category.skills.length} tools
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-lg border border-white/5 bg-bg-surface px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[11px] sm:text-xs text-text-muted hover:border-cyan/50 hover:bg-cyan/10 hover:text-cyan-bright hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
