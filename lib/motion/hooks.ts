'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, SplitText, EASE, prefersReducedMotion } from './gsap'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

/** Reactive `prefers-reduced-motion` boolean (false during SSR / first paint). */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

/** On-mount staggered entrance for above-the-fold content (no ScrollTrigger). */
export function useIntro<T extends HTMLElement = HTMLDivElement>(
  selector = '[data-intro]',
  options: { y?: number; stagger?: number; blur?: number } = {}
) {
  const ref = useRef<T>(null)
  const { y = 28, stagger = 0.12, blur = 6 } = options

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(selector), {
        autoAlpha: 0,
        y,
        filter: `blur(${blur}px)`,
        duration: 0.85,
        ease: EASE.out,
        stagger,
      })
    }, el)

    return () => ctx.revert()
  }, [selector, y, stagger, blur])

  return ref
}

/**
 * Reusable GSAP motion hooks. Every hook:
 *  - returns a typed ref you attach to the target element,
 *  - is a no-op under `prefers-reduced-motion` (content stays visible),
 *  - scopes its tweens with `gsap.context` so they revert cleanly on unmount.
 */

type RevealOptions = {
  y?: number
  duration?: number
  delay?: number
  blur?: number
  start?: string
  once?: boolean
}

/** Fade + slide-up + de-blur as the element scrolls into view. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null)
  const { y = 32, duration = 0.9, delay = 0, blur = 8, start = 'top 85%', once = true } =
    options

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y, filter: `blur(${blur}px)` },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          delay,
          ease: EASE.out,
          scrollTrigger: { trigger: el, start, toggleActions: once ? 'play none none none' : 'play none none reverse' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [y, duration, delay, blur, start, once])

  return ref
}

/** Vertical parallax: element drifts as the page scrolls past it. */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.3) {
  const ref = useRef<T>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, el)

    return () => ctx.revert()
  }, [speed])

  return ref
}

/** Magnetic pull toward the cursor on hover (buttons, logos, icons). */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(strength = 0.35) {
  const ref = useRef<T>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || window.matchMedia('(pointer: coarse)').matches)
      return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: EASE.out })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: EASE.out })

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      xTo(relX * strength)
      yTo(relY * strength)
    }
    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      gsap.set(el, { x: 0, y: 0 })
    }
  }, [strength])

  return ref
}

/** Scale across the scroll range (e.g. media zoom-out reveal). */
export function useScrollScale<T extends HTMLElement = HTMLDivElement>(
  from = 1.12,
  to = 1
) {
  const ref = useRef<T>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: from },
        {
          scale: to,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 40%', scrub: true },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [from, to])

  return ref
}

/** Rotate across the scroll range (decorative elements). */
export function useScrollRotate<T extends HTMLElement = HTMLDivElement>(degrees = 12) {
  const ref = useRef<T>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { rotation: -degrees },
        {
          rotation: degrees,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [degrees])

  return ref
}

/** Opacity tied to scroll progress through the element. */
export function useScrollFade<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 50%', scrub: true },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}

type TextRevealType = 'lines' | 'words' | 'chars'

/** SplitText reveal — animates lines/words/chars up into place, once. */
export function useTextReveal<T extends HTMLElement = HTMLHeadingElement>(
  type: TextRevealType = 'lines',
  options: { stagger?: number; duration?: number; start?: string } = {}
) {
  const ref = useRef<T>(null)
  const { stagger = 0.12, duration = 0.9, start = 'top 88%' } = options

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let split: SplitText | null = null
    const ctx = gsap.context(() => {
      split = new SplitText(el, {
        type,
        linesClass: 'overflow-hidden',
      })
      const targets =
        type === 'lines' ? split.lines : type === 'words' ? split.words : split.chars

      gsap.from(targets, {
        yPercent: 110,
        autoAlpha: 0,
        duration,
        ease: EASE.expo,
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      })
    }, el)

    return () => {
      ctx.revert()
      split?.revert()
    }
  }, [type, stagger, duration, start])

  return ref
}

/** Staggered reveal of direct children matching `selector`. */
export function useStagger<T extends HTMLElement = HTMLDivElement>(
  selector = ':scope > *',
  options: { y?: number; stagger?: number; start?: string } = {}
) {
  const ref = useRef<T>(null)
  const { y = 28, stagger = 0.1, start = 'top 82%' } = options

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(selector)
      if (!items.length) return
      gsap.fromTo(
        items,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: EASE.out,
          stagger,
          scrollTrigger: { trigger: el, start, once: true },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [selector, y, stagger, start])

  return ref
}
