---
name: project_motion_system
description: Clipr landing got a GSAP+Lenis "premium performático" motion system layered on top of the existing Framer Motion setup
metadata:
  type: project
---

The Clipr landing page (Next.js 15) has a custom motion system added on 2026-06-09, chosen tier = "premium performático" (no Three.js, no global custom cursor, to protect Lighthouse). Deps added: `gsap` 3.15 (ScrollTrigger + SplitText, both free in 3.13+) and `lenis` 1.3. **Framer Motion was fully removed** (per follow-up request) — everything is GSAP now: Hero entrance uses `useIntro` (on-mount stagger), Install/Usage tab/step switches use a `gsap.fromTo` keyed `useEffect`, and the FAQ accordion is pure CSS (`grid-template-rows: 0fr↔1fr` + `motion-reduce:transition-none`, zero JS lib). Framer's `useReducedMotion` was replaced by `usePrefersReducedMotion` in `lib/motion/hooks.ts`. Removing Framer dropped home First Load JS from ~201 kB to ~164 kB (page-specific 47.9 kB → 10.8 kB).

Architecture:
- `lib/motion/gsap.ts` — single place that registers ScrollTrigger+SplitText once, exports `gsap/ScrollTrigger/SplitText`, `EASE` tokens, `prefersReducedMotion()`.
- `lib/motion/useIsomorphicLayoutEffect.ts` — SSR-safe layout effect (prevents FOUC of the "from" state).
- `lib/motion/hooks.ts` — `useReveal/useParallax/useMagnetic/useScrollScale/useScrollRotate/useScrollFade/useTextReveal/useStagger`. Every hook is a no-op under reduced-motion and cleans up via `gsap.context().revert()`.
- `components/motion/` — `SmoothScrollProvider` (Lenis synced to gsap.ticker + ScrollTrigger, intercepts `a[href^="#"]` for smooth anchor scroll, disabled under reduced-motion), `Reveal`, `Stagger` (polymorphic div/ul, forwards role/aria-label), `Magnetic` (clones single child with a ref, no wrapper DOM), `TextReveal` (SplitText lines), `TiltCard` (3D tilt + cursor-tracking glow via CSS vars), `AuroraBackground` (pure-CSS mesh + noise, keyframes in globals.css).

Key constraint to preserve: content must render in SSR HTML (verified — headline/aurora present without JS), reduced-motion fully respected, touch devices skip magnetic/tilt. Home First Load JS ≈ 201 kB. See [[project_nextjs_migration]].
