import { motion } from 'framer-motion'
import { Shirt, Utensils, Dumbbell, Sparkles, Building2 } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Section from '@/components/ui/Section'
import AnimatedText from '@/components/ui/AnimatedText'

const industries = [
  {
    icon: Shirt,
    name: 'Apparel Manufacturing',
    brand: 'ThreadForge',
    color: 'from-blue-500/20 to-cyan-500/20',
    accent: 'text-blue-400',
    description: 'Enterprise-grade production ecosystem',
  },
  {
    icon: Utensils,
    name: 'Fine Dining',
    brand: 'Aura',
    color: 'from-amber-500/20 to-orange-500/20',
    accent: 'text-amber-400',
    description: 'Immersive gastronomic experiences',
  },
  {
    icon: Dumbbell,
    name: 'Elite Fitness',
    brand: 'APEX',
    color: 'from-red-500/20 to-rose-500/20',
    accent: 'text-red-400',
    description: 'Peak performance technology',
  },
  {
    icon: Sparkles,
    name: 'Creative Agency',
    brand: 'Helix Digital',
    color: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400',
    description: 'Full-spectrum brand innovation',
  },
  {
    icon: Building2,
    name: 'Architecture',
    brand: 'Form + Space',
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400',
    description: 'Spatial design reimagined',
  },
]

function ConnectorLine() {
  return (
    <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-px pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 800 1" preserveAspectRatio="none">
        <line
          x1="0" y1="0" x2="800" y2="0"
          stroke="url(#connector-gradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient id="connector-gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(20,184,166,0)" />
            <stop offset="20%" stopColor="rgba(20,184,166,0.3)" />
            <stop offset="50%" stopColor="rgba(20,184,166,0.5)" />
            <stop offset="80%" stopColor="rgba(20,184,166,0.3)" />
            <stop offset="100%" stopColor="rgba(20,184,166,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function Overview() {
  return (
    <Section id="overview" dark>
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-4">
            <AnimatedText text="Five Industries. One Standard." variant="word" />
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Every vertical reimagined through the lens of premium digital craft. From fabric to fine dining, we set the bar.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        <ConnectorLine />

        {industries.map((industry, index) => {
          const Icon = industry.icon
          return (
            <GlassCard key={industry.name} delay={index * 0.1} className="relative text-center group">
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 ${industry.accent} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{industry.name}</h3>
                <p className={`text-sm font-medium ${industry.accent} mb-2`}>{industry.brand}</p>
                <p className="text-xs text-white/40">{industry.description}</p>
              </div>
              {index < industries.length - 1 && (
                <motion.div
                  className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-brand-400/30">
                    <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </motion.div>
              )}
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
