'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

/**
 * Central GSAP entry point. Plugins are registered exactly once, on the client.
 * Import { gsap, ScrollTrigger, SplitText } from here instead of from 'gsap'
 * directly so registration is guaranteed before any tween is created.
 */
let registered = false

export function registerGsap() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger, SplitText)
  registered = true
}

registerGsap()

/** Shared easing tokens so every animation in the site feels related. */
export const EASE = {
  out: 'power3.out',
  inOut: 'power2.inOut',
  expo: 'expo.out',
  soft: 'power1.out',
} as const

/** True when the user asked the OS to minimise motion. */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export { gsap, ScrollTrigger, SplitText }
