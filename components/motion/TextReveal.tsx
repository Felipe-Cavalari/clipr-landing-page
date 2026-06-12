'use client'

import { useTextReveal } from '@/lib/motion/hooks'

type TextRevealProps = {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  /** split granularity — 'lines' preserves inline gradient spans */
  type?: 'lines' | 'words' | 'chars'
  stagger?: number
}

/**
 * Heading/paragraph that reveals line-by-line via GSAP SplitText. Defaults to
 * 'lines' so inline gradient <span>s survive the split. Plain text is rendered
 * for SSR/SEO; the split only happens client-side when motion is allowed.
 */
export default function TextReveal({
  children,
  className,
  as: Tag = 'h2',
  type = 'lines',
  stagger,
}: TextRevealProps) {
  const ref = useTextReveal<HTMLElement>(type, { stagger })
  return (
    // @ts-expect-error — polymorphic tag with a shared HTMLElement ref
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
