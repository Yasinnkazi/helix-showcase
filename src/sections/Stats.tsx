import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Globe, Palette, Code } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Section from '@/components/ui/Section'
import AnimatedText from '@/components/ui/AnimatedText'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
  delay?: number
}

function Counter({ end, suffix = '', duration = 2, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      const startTime = performance.now()
      const animate = (now: number) => {
        const elapsed = (now - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, end, duration, delay])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { icon: Layers, value: 5, suffix: '', label: 'Projects Built', desc: 'Across diverse industries' },
  { icon: Globe, value: 50, suffix: '+', label: 'Sections Designed', desc: 'Meticulously crafted' },
  { icon: Palette, value: 100, suffix: '+', label: 'Components', desc: 'Reusable and scalable' },
  { icon: Code, value: 6, suffix: '', label: 'Industries Served', desc: 'From manufacturing to architecture' },
]

export default function Stats() {
  return (
    <Section id="stats" dark>
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            By the Numbers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-4">
            <AnimatedText text="The Ecosystem in Numbers" variant="word" />
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A growing library of premium digital experiences, built for scale.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative group"
            >
              <div className="rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-500/30 transition-all duration-500 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4 text-brand-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>

                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-cyan-300 mb-2 tabular-nums">
                  <Counter end={stat.value} suffix={stat.suffix} delay={index * 0.15} />
                </div>

                <p className="text-white font-semibold text-sm md:text-base mb-1">{stat.label}</p>
                <p className="text-white/40 text-xs">{stat.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
