import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  brandName: string
  tagline: string
  columns: FooterColumn[]
  socialLinks?: { icon: React.ReactNode; href: string; label: string }[]
}

export default function Footer({ brandName, tagline, columns, socialLinks }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink-950 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">{brandName}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{tagline}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} {brandName}. All rights reserved. Built by <a href="https://helix.build" class="text-white/50 hover:text-white transition-colors">HELIX</a>.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks?.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
