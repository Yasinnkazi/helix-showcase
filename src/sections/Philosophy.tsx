import { motion } from 'framer-motion'
import { Film, Gem, Sparkles, ShieldCheck } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Section from '@/components/ui/Section'
import AnimatedText from '@/components/ui/AnimatedText'

const principles = [
  {
    icon: Film,
    title: 'Cinematic UX',
    description:
      'Every interaction is choreographed like a film. We design for narrative flow, using motion, pacing, and visual hierarchy to guide users through seamless, emotionally resonant experiences.',
    color: 'text-blue-400',
    gradient: 'from-blue-500/10 to-transparent',
  },
  {
    icon: Gem,
    title: 'Premium Minimalism',
    description:
      'Restraint is the ultimate sophistication. We strip away the unnecessary until only the essential remains — then polish it until it gleams. Every pixel earns its place.',
    color: 'text-amber-400',
    gradient: 'from-amber-500/10 to-transparent',
  },
  {
    icon: Sparkles,
    title: 'Motion-First',
    description:
      'Animation is not decoration — it is communication. We use motion to convey meaning, establish spatial relationships, and create interfaces that feel alive and intuitive.',
    color: 'text-purple-400',
    gradient: 'from-purple-500/10 to-transparent',
  },
  {
    icon: ShieldCheck,
    title: 'Production-Grade',
    description:
      'Beauty without reliability is art, not product. Every component is battle-tested, performant, and accessible. We ship code that scales from startup sprint to enterprise load.',
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/10 to-transparent',
  },
]

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-4">
            <AnimatedText text="Built Different" variant="word" />
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Our approach is simple: treat every project like our own. This is how we build.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {principles.map((principle, index) => {
          const Icon = principle.icon
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative rounded-2xl p-8 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-5 ${principle.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>

                <h3 className={`text-xl md:text-2xl font-display font-bold text-white mb-3 ${principle.color}`}>
                  {principle.title}
                </h3>

                <p className="text-white/50 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-16 p-8 md:p-12 rounded-2xl border border-brand-500/20 bg-brand-500/[0.03] text-center">
          <p className="text-xl md:text-2xl text-white/70 font-display italic leading-relaxed max-w-3xl mx-auto">
            "We don't just build websites. We build digital ecosystems that elevate brands into experiences. Every project is a partnership — your vision, our craft, one standard."
          </p>
          <div className="mt-6 text-brand-400 font-semibold text-sm uppercase tracking-widest">
            — The HELIX Team
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
