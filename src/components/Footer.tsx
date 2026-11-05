import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { profileData } from '../data/portfolio'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border-subtle py-12 bg-bg-primary relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg font-black text-cyan">
              BA
            </span>
            <div className="text-left">
              <span className="font-semibold text-text-primary block text-sm">
                {profileData.name}
              </span>
              <span className="text-xs text-text-muted font-mono block">
                {profileData.title} • Cairo, Egypt
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-text-muted">
            <a href="#about" className="hover:text-cyan transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-cyan transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-cyan transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan transition-colors">
              Contact
            </a>
            <a
              href="./Bavly-Ashraf-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:text-cyan-bright transition-colors"
            >
              Resume (PDF)
            </a>
          </div>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-text-muted hover:text-cyan transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-text-muted hover:text-cyan transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Send email"
              className="text-text-muted hover:text-cyan transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-xl border border-cyan/30 text-cyan hover:text-cyan-bright hover:border-cyan hover:bg-cyan/10 transition-all ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono">
          <div>
            &copy; {new Date().getFullYear()} Bavly Ashraf
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block animate-pulse"></span>
            <span>Crafted with React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
