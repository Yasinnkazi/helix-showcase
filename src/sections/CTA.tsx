import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

function AnimatedGradientBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-[150px]"
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, -50, 50, 0, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-[120px]"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald-400/8 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
    </div>
  )
}

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden">
      <AnimatedGradientBg />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-8 text-brand-400"
            >
              <Sparkles size={32} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-balance">
              Ready to Build
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-cyan-300">
                {' '}Yours?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're launching a brand, reimagining an experience, or building a digital ecosystem from scratch — we bring the same craft, care, and cinematic quality to every partnership.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-500 text-white rounded-xl font-semibold text-lg hover:bg-brand-600 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 group"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/5 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>

            <p className="mt-8 text-sm text-white/30">
              Free consultation • No obligation • 48-hour initial response
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
