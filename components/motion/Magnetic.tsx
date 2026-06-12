'use client'

import { cloneElement, isValidElement, type ReactElement, type Ref } from 'react'
import { useMagnetic } from '@/lib/motion/hooks'

type MagneticProps = {
  children: ReactElement<{ ref?: Ref<HTMLElement> }>
  strength?: number
}

/**
 * Attaches a magnetic cursor pull to a single child element (typically an
 * <a> or <button>) by cloning it with a ref — no extra wrapper DOM node, so it
 * stays layout-neutral. No-op on touch / reduced-motion.
 */
export default function Magnetic({ children, strength }: MagneticProps) {
  const ref = useMagnetic<HTMLElement>(strength)
  if (!isValidElement(children)) return children
  return cloneElement(children, { ref })
}
