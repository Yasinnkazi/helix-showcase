import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedText from '@/components/ui/AnimatedText'

function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  )
}

function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    const el = sectionRef.current?.nextElementSibling
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-950"
    >
      <GridBackground />
      <ParticleField />
      <GlowOrbs />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          Premium Digital Ecosystem
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none mb-6 text-balance">
          <AnimatedText
            text="HELIX Portfolio"
            variant="word"
            className="text-white"
          />
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-300">
            <AnimatedText
              text="Ecosystem"
              variant="word"
              delay={0.4}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          A curated collection of premium digital experiences — spanning industries, united by craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-brand-500 text-white rounded-xl font-medium text-lg hover:bg-brand-600 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
          >
            Explore Projects
          </a>
          <a
            href="#philosophy"
            className="px-8 py-4 border border-white/20 text-white rounded-xl font-medium text-lg hover:bg-white/5 transition-all duration-300"
          >
            Our Philosophy
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  )
}
