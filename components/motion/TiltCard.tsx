'use client'

import { useRef, type CSSProperties } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/motion/gsap'
import { useIsomorphicLayoutEffect } from '@/lib/motion/useIsomorphicLayoutEffect'

type TiltCardProps = {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
  /** rgba/hex tint of the cursor-tracking glow */
  glow?: string
  /** max tilt in degrees */
  max?: number
}

/**
 * Card with a subtle 3D tilt toward the cursor plus a radial glow that tracks
 * the pointer (Stripe-style). The glow position is driven by CSS custom
 * properties (--mx/--my); rotation is eased with GSAP quickTo. Falls back to a
 * plain static card on touch devices and under reduced-motion.
 */
export default function TiltCard({
  children,
  className = '',
  style,
  glow = 'rgba(124,58,237,0.25)',
  max = 6,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || window.matchMedia('(pointer: coarse)').matches)
      return

    gsap.set(el, { transformPerspective: 900, transformStyle: 'preserve-3d' })
    const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' })
    const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      rotY((px - 0.5) * max * 2)
      rotX((0.5 - py) * max * 2)
      el.style.setProperty('--mx', `${px * 100}%`)
      el.style.setProperty('--my', `${py * 100}%`)
    }
    const onEnter = () => gsap.to(el, { '--glow-opacity': 1, duration: 0.3 })
    const onLeave = () => {
      rotX(0)
      rotY(0)
      gsap.to(el, { '--glow-opacity': 0, duration: 0.4 })
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max])

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ ...style, ['--glow-opacity' as string]: 0, ['--mx' as string]: '50%', ['--my' as string]: '50%' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity"
        style={{
          opacity: 'var(--glow-opacity)',
          background: `radial-gradient(420px circle at var(--mx) var(--my), ${glow}, transparent 65%)`,
        }}
      />
      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  )
}
