import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Toast } from './components/Toast'

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 6000)
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col font-sans selection:bg-cyan/30 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact onNotify={showToast} />
      </main>
      <Footer />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  )
}
