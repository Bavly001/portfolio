import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Info } from 'lucide-react'

interface ToastProps {
  message: string | null
  type?: 'success' | 'info'
  onClose: () => void
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 inset-x-4 sm:inset-x-auto sm:right-6 sm:max-w-md mx-auto sm:mx-0 z-[9999] flex items-center justify-between sm:justify-start gap-3 px-4 py-3 rounded-2xl bg-[#0b101c] border border-cyan/50 text-text-primary shadow-2xl shadow-cyan/20 text-sm font-medium"
        >
          <div className="p-1.5 rounded-full bg-cyan/15 text-cyan-bright">
            {type === 'success' ? <Check className="w-4 h-4" /> : <Info className="w-4 h-4" />}
          </div>
          <span className="font-mono text-xs">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-text-muted hover:text-text-primary text-xs font-mono"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
