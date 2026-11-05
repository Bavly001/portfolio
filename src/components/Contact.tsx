import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send } from 'lucide-react'
import { profileData } from '../data/portfolio'

interface ContactProps {
  onNotify: (msg: string) => void
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const handleCopy = async (text: string, label: string) => {
    let copied = false
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await Promise.race([
          navigator.clipboard.writeText(text),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 200)),
        ])
        copied = true
      } catch {
        copied = false
      }
    }

    if (!copied) {
      try {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.left = '-9999px'
        textarea.style.top = '-9999px'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      } catch {
        // Fallback complete
      }
    }

    setCopiedItem(label)
    onNotify(`Copied ${label} to clipboard!`)
    setTimeout(() => setCopiedItem(null), 2500)
  }

  return (
    <section id="contact" className="relative z-10 py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5 font-mono text-xs text-cyan mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-bright to-indigo-light">Touch</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-xl text-sm sm:text-base text-text-muted font-light mb-12"
        >
          Currently available for Engineering Roles in Cairo, Egypt and Remote opportunities worldwide. Reach out directly through any of the channels below.
        </motion.p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-2xl border border-white/5 bg-bg-card flex items-center justify-between group hover:border-cyan/50 hover:shadow-lg hover:shadow-cyan/5 transition-all"
          >
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-3 overflow-hidden"
            >
              <div className="p-2.5 rounded-xl border border-cyan/30 bg-bg-surface text-cyan shrink-0 group-hover:border-cyan group-hover:text-cyan-bright group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[11px] font-mono text-cyan uppercase tracking-wider">Email</div>
                <div className="text-sm font-semibold text-text-primary group-hover:text-cyan-bright transition-colors truncate">
                  {profileData.email}
                </div>
              </div>
            </a>
            <button
              onClick={() => handleCopy(profileData.email, 'email')}
              className="p-2 rounded-lg text-text-muted hover:text-cyan hover:bg-white/5 transition-colors ml-2"
              title="Copy email"
              aria-label="Copy email address"
            >
              {copiedItem === 'email' ? (
                <Check className="w-4 h-4 text-cyan-bright" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-2xl border border-white/5 bg-bg-card flex items-center justify-between group hover:border-cyan/50 hover:shadow-lg hover:shadow-cyan/5 transition-all"
          >
            <a
              href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 overflow-hidden"
            >
              <div className="p-2.5 rounded-xl border border-cyan/30 bg-bg-surface text-cyan shrink-0 group-hover:border-cyan group-hover:text-cyan-bright group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-colors duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[11px] font-mono text-cyan uppercase tracking-wider">Phone &amp; WhatsApp</div>
                <div className="text-sm font-semibold text-text-primary group-hover:text-cyan-bright transition-colors truncate">
                  {profileData.phone}
                </div>
              </div>
            </a>
            <button
              onClick={() => handleCopy(profileData.phone, 'phone number')}
              className="p-2 rounded-lg text-text-muted hover:text-cyan hover:bg-white/5 transition-colors ml-2"
              title="Copy phone"
              aria-label="Copy phone number"
            >
              {copiedItem === 'phone number' ? (
                <Check className="w-4 h-4 text-cyan-bright" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-5 rounded-2xl border border-white/5 bg-bg-card flex items-center gap-3"
          >
            <div className="p-2.5 rounded-xl border border-cyan/30 bg-bg-surface text-cyan shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-cyan uppercase tracking-wider">Location &amp; Work Model</div>
              <div className="text-sm font-semibold text-text-primary">
                Cairo, Egypt • Open to Remote
              </div>
            </div>
          </motion.div>

          {/* Social Profiles Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-5 rounded-2xl border border-white/5 bg-bg-card flex items-center justify-around"
          >
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-text-muted hover:text-cyan transition-colors"
            >
              <Linkedin className="w-4 h-4 text-cyan" />
              <span>LinkedIn</span>
            </a>
            <span className="text-border-subtle">|</span>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-text-muted hover:text-cyan transition-colors"
            >
              <Github className="w-4 h-4 text-cyan" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
