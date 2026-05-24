import { motion } from 'framer-motion'
import { ArrowRight, Shirt, Utensils, Dumbbell, Sparkles, Building2 } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Section from '@/components/ui/Section'
import AnimatedText from '@/components/ui/AnimatedText'

const projects = [
  {
    id: 'threadforge',
    name: 'ThreadForge',
    industry: 'Apparel Manufacturing',
    slug: '/printing-brand',
    icon: Shirt,
    gradient: 'from-blue-600/40 via-cyan-600/20 to-ink-950',
    accent: 'text-blue-400',
    accentBorder: 'border-blue-400/30',
    description:
      'Enterprise-grade digital ecosystem for on-demand apparel manufacturing. ThreadForge orchestrates the entire production lifecycle with real-time tracking, AI-powered quality control, and seamless supply chain integration — turning designs into delivered goods at unprecedented speed.',
    features: ['AI Quality Control', 'Real-Time Production Tracking', 'Supply Chain Orchestration'],
    tech: ['React', 'Node.js', 'IoT', 'Computer Vision'],
  },
  {
    id: 'aura',
    name: 'Aura',
    industry: 'Fine Dining',
    slug: '/restaurant-brand',
    icon: Utensils,
    gradient: 'from-amber-600/40 via-orange-600/20 to-ink-950',
    accent: 'text-amber-400',
    accentBorder: 'border-amber-400/30',
    description:
      'A digital sanctuary for an exclusive fine dining experience. Aura combines molecular gastronomy with immersive ambiance, offering a meticulously crafted tasting journey through seven courses, each paired with rare vintages and live art performances.',
    features: ['Seven-Course Tasting Menu', 'Rare Wine Pairings', 'Live Art Performances'],
    tech: ['Next.js', 'Three.js', 'WebSockets', 'CMS'],
  },
  {
    id: 'apex',
    name: 'APEX',
    industry: 'Elite Fitness',
    slug: '/fitness-brand',
    icon: Dumbbell,
    gradient: 'from-red-600/40 via-rose-600/20 to-ink-950',
    accent: 'text-red-400',
    accentBorder: 'border-red-400/30',
    description:
      'Where peak performance meets precision science. APEX delivers AI-driven training regimens, real-time biometric monitoring, and recovery optimization for elite athletes and fitness professionals seeking the competitive edge.',
    features: ['AI-Driven Training', 'Biometric Monitoring', 'Recovery Optimization'],
    tech: ['React Native', 'Python', 'TensorFlow', 'GraphQL'],
  },
  {
    id: 'helix-digital',
    name: 'Helix Digital',
    industry: 'Creative Agency',
    slug: '/creative-agency',
    icon: Sparkles,
    gradient: 'from-purple-600/40 via-pink-600/20 to-ink-950',
    accent: 'text-purple-400',
    accentBorder: 'border-purple-400/30',
    description:
      'A full-spectrum creative agency crafting digital identities for visionary brands. We blend strategic thinking with cinematic design to create experiences that resonate, convert, and endure across every touchpoint.',
    features: ['Brand Identity', 'UI/UX Design', 'Motion Design', 'Web Development'],
    tech: ['Figma', 'Framer', 'GSAP', 'WebGL'],
  },
  {
    id: 'form-space',
    name: 'Form + Space',
    industry: 'Architecture Studio',
    slug: '/architecture-studio',
    icon: Building2,
    gradient: 'from-emerald-600/40 via-teal-600/20 to-ink-950',
    accent: 'text-emerald-400',
    accentBorder: 'border-emerald-400/30',
    description:
      'An architecture studio that redefines the relationship between form and environment. Each project is a dialogue between materiality and light, creating spaces that inspire and endure through thoughtful, sustainable design.',
    features: ['Sustainable Design', 'Material Innovation', 'Spatial Harmony'],
    tech: ['AutoCAD', 'Revit', 'Rhino', 'Unreal Engine'],
  },
]

export default function Projects() {
  return (
    <Section id="projects">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-4">
            <AnimatedText text="Featured Projects" variant="word" />
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Five distinct brands. Five unique challenges. One uncompromising standard of craft.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-8 md:space-y-12">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
              <div className="absolute inset-0 bg-ink-950/60" />

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div>
                    <div className={`flex items-center gap-3 mb-4 ${project.accent}`}>
                      <Icon size={20} />
                      <span className="text-sm font-semibold uppercase tracking-widest">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                      {project.name}
                    </h3>

                    <p className="text-white/60 leading-relaxed mb-6 text-base md:text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${project.accentBorder} ${project.accent} bg-white/5`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.slug}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ink-950 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-300 group/btn"
                    >
                      View Project
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>

                  <div className="hidden lg:block">
                    <div className="flex flex-wrap gap-2 justify-end">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-2 text-sm text-white/40 border border-white/10 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
