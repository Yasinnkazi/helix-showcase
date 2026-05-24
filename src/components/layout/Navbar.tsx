import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  links: NavLink[]
  brandName: string
  cta?: { label: string; href: string }
  className?: string
}

export default function Navbar({ links, brandName, cta, className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass-dark' : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            {brandName}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            {cta && (
              <a
                href={cta.href}
                className="px-5 py-2.5 text-sm font-medium text-white bg-brand-500 rounded-xl hover:bg-brand-600 transition-all duration-300 shadow-lg shadow-brand-500/25"
              >
                {cta.label}
              </a>
            )}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {cta && (
                <a
                  href={cta.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-medium text-white bg-brand-500 rounded-xl"
                >
                  {cta.label}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
