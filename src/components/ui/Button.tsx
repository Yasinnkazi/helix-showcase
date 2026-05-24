import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  icon,
  iconPosition = 'right',
  type = 'button',
  disabled,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50'

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
  }

  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
    outline: 'border border-white/20 text-white hover:bg-white/5 hover:border-white/40',
  }

  const content = (
    <motion.span
      className={cn(baseStyles, sizes[size], variants[variant], className)}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {icon && iconPosition === 'left' && <span className="w-4 h-4">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="w-4 h-4">{icon}</span>}
    </motion.span>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
