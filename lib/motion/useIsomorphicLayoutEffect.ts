import { useEffect, useLayoutEffect } from 'react'

/**
 * useLayoutEffect logs a warning when run on the server. GSAP setup must happen
 * before paint (to avoid a flash of the "from" state), so we use layout effect
 * on the client and fall back to a regular effect during SSR.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
