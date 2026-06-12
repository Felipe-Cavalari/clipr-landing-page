'use client'

import { useReveal } from '@/lib/motion/hooks'

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** vertical offset of the entrance, px */
  y?: number
  delay?: number
  /** ScrollTrigger start, e.g. "top 85%" */
  start?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'li' | 'aside'
  'aria-label'?: string
}

/** Scroll-reveal wrapper. Content is fully rendered for SSR/SEO; the entrance
 *  animation only runs client-side when motion is allowed. */
export default function Reveal({
  children,
  className,
  y,
  delay,
  start,
  as = 'div',
  'aria-label': ariaLabel,
}: RevealProps) {
  const ref = useReveal<HTMLElement>({ y, delay, start })
  const Tag = as
  return (
    // @ts-expect-error — polymorphic tag with a shared HTMLElement ref
    <Tag ref={ref} className={className} aria-label={ariaLabel}>
      {children}
    </Tag>
  )
}
