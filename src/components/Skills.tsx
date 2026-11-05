import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Wrench, CheckCircle } from 'lucide-react'
import { skillCategoriesData } from '../data/portfolio'

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-5 h-5 text-accent" />,
    'state-security': <Cpu className="w-5 h-5 text-emerald-400" />,
    'api-backend': <Database className="w-5 h-5 text-teal-400" />,
    'ui-devops': <Wrench className="w-5 h-5 text-cyan-400" />
  }

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategoriesData
      : skillCategoriesData.filter((cat) => cat.id === selectedCategory)

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
              <span>02</span>
              <span className="w-8 h-[1px] bg-accent/40" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Skills & Architecture
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              A comprehensive toolkit honed across production web applications, microservices, and mobile ecosystems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-bg-card border border-white/5">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent text-bg-primary font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
              }`}
            >
              All Skills
            </button>
            {skillCategoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-accent text-bg-primary font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-bg-secondary/70 border border-white/5 hover:border-emerald-500/25 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-bg-card border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                    {categoryIcons[cat.id] || <Code2 className="w-5 h-5 text-accent" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-100 text-base group-hover:text-accent transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-card/90 border border-white/5 text-zinc-200 hover:border-emerald-500/40 hover:text-accent hover:bg-emerald-500/5 transition-all duration-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>{cat.skills.length} core competencies</span>
                <span className="text-emerald-500/70">Production Grade</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-bg-secondary via-bg-card to-bg-secondary border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-accent">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-100">
                Performance & Maintainability Commitment
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Clean Git commits, atomic PRs, containerized workflows with Docker, and strict schema validation.
              </div>
            </div>
          </div>
          <a
            href="./Bavly-Ashraf-Resume.pdf?v=2"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 text-xs font-medium text-zinc-200 hover:text-white transition-all"
          >
            Download Full Skills Matrix (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
