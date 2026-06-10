'use client'

import { useStagger } from '@/lib/motion/hooks'

type StaggerProps = {
  children: React.ReactNode
  className?: string
  /** CSS selector for the items to stagger, relative to the container */
  selector?: string
  stagger?: number
  y?: number
  role?: string
  'aria-label'?: string
  as?: 'div' | 'ul'
}

/** Reveals its children one after another as the container enters view. */
export default function Stagger({
  children,
  className,
  selector,
  stagger,
  y,
  role,
  'aria-label': ariaLabel,
  as: Tag = 'div',
}: StaggerProps) {
  const ref = useStagger<HTMLElement>(selector, { stagger, y })
  return (
    // @ts-expect-error — polymorphic tag with a shared HTMLElement ref
    <Tag ref={ref} className={className} role={role} aria-label={ariaLabel}>
      {children}
    </Tag>
  )
}
