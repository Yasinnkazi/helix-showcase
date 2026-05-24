import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface AnimatedTextProps {
  text: string
  className?: string
  variant?: 'word' | 'char' | 'fade'
  delay?: number
}

export default function AnimatedText({
  text,
  className,
  variant = 'word',
  delay = 0,
}: AnimatedTextProps) {
  if (variant === 'fade') {
    return (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
      >
        {text}
      </motion.span>
    )
  }

  const items = variant === 'word' ? text.split(' ') : text.split('')

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn('inline', className)}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: delay + i * 0.04,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
        >
          {item}
          {variant === 'word' && i < items.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  )
}
