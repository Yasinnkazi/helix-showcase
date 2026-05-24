import { cn } from '@/utils/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export default function Section({ children, className, id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24',
        dark ? 'bg-ink-950' : 'bg-ink-900',
        className
      )}
    >
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  )
}
