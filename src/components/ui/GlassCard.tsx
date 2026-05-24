import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'light' | 'dark'
  delay?: number
}

export default function GlassCard({
  children,
  className,
  hover = true,
  variant = 'dark',
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
      className={cn(
        'rounded-2xl p-6 md:p-8',
        variant === 'dark'
          ? 'bg-white/5 backdrop-blur-md border border-white/10'
          : 'bg-black/5 backdrop-blur-md border border-black/10',
        'transition-colors duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
